"use client";

import React, { useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type BackgroundRippleEffectProps = {
  rows?: number;
  cols?: number;
  cellSize?: number;
  className?: string;
  interactive?: boolean;
  borderColor?: string;
  fillColor?: string;
  shadowColor?: string;
  glowPattern?: (row: number, col: number) => boolean;
  glowDurationRange?: [number, number];
  stretchToViewport?: boolean;
};

export const BackgroundRippleEffect = ({
  rows = 8,
  cols = 27,
  cellSize = 56,
  className,
  interactive = true,
  borderColor = "var(--color-neutral-300)",
  fillColor = "var(--color-neutral-100)",
  shadowColor = "var(--color-neutral-500)",
  glowPattern,
  glowDurationRange = [4200, 7200],
  stretchToViewport = false,
}: BackgroundRippleEffectProps) => {
  const [clickedCell, setClickedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [rippleKey, setRippleKey] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <style>{`
        @keyframes ripple-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(168, 85, 247, 0);
            opacity: 0.28;
            filter: saturate(95%);
          }
          45% {
            box-shadow: 0 0 60px 18px rgba(168, 85, 247, 0.55);
            opacity: 0.95;
            filter: saturate(130%);
          }
          70% {
            box-shadow: 0 0 42px 14px rgba(129, 140, 248, 0.48);
            opacity: 0.78;
            filter: saturate(115%);
          }
        }
      `}</style>
      <div
        ref={ref}
        className={cn(
          "absolute inset-0 h-full w-full",
          className,
        )}
        style={
          {
            "--cell-border-color": borderColor,
            "--cell-fill-color": fillColor,
            "--cell-shadow-color": shadowColor,
          } as React.CSSProperties
        }
      >
        <div className="relative h-auto w-auto overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-2 h-full w-full overflow-hidden" />
          <DivGrid
            key={`base-${rippleKey}`}
            className="mask-radial-from-20% mask-radial-at-top opacity-60"
            rows={rows}
            cols={cols}
            cellSize={cellSize}
            borderColor="var(--cell-border-color)"
            fillColor="var(--cell-fill-color)"
            clickedCell={interactive ? clickedCell : null}
            onCellClick={
              interactive
                ? (row, col) => {
                    setClickedCell({ row, col });
                    setRippleKey((k) => k + 1);
                  }
                : undefined
            }
            interactive={interactive}
            glowPattern={glowPattern}
            glowDurationRange={glowDurationRange}
            stretchToViewport={stretchToViewport && !interactive}
          />
        </div>
      </div>
    </>
  );
};

type DivGridProps = {
  className?: string;
  rows: number;
  cols: number;
  cellSize: number; // in pixels
  borderColor: string;
  fillColor: string;
  clickedCell: { row: number; col: number } | null;
  onCellClick?: (row: number, col: number) => void;
  interactive?: boolean;
  glowPattern?: (row: number, col: number) => boolean;
  glowDurationRange?: [number, number];
  stretchToViewport?: boolean;
};

type CellStyle = React.CSSProperties & {
  ["--delay"]?: string;
  ["--duration"]?: string;
};

const DivGrid = ({
  className,
  rows = 7,
  cols = 30,
  cellSize = 56,
  borderColor = "#3f3f46",
  fillColor = "rgba(14,165,233,0.3)",
  clickedCell = null,
  onCellClick = () => {},
  interactive = true,
  glowPattern,
  glowDurationRange = [4200, 7200],
  stretchToViewport = false,
}: DivGridProps) => {
  const cells = useMemo(
    () => Array.from({ length: rows * cols }, (_, idx) => idx),
    [rows, cols],
  );

  const stretch = stretchToViewport && !interactive;

  const gridStyle: React.CSSProperties = stretch
    ? {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)` ,
        gridAutoRows: `calc(100vw / ${cols})` ,
        width: "100vw",
        height: `calc((100vw / ${cols}) * ${rows})` ,
        marginInline: "calc((100% - 100vw) / 2)" ,
      }
    : {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)` ,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)` ,
        width: cols * cellSize,
        height: rows * cellSize,
        marginInline: "auto",
      };

  return (
    <div className={cn("relative z-3", className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;
        const rippleDelay = clickedCell ? Math.max(0, distance * 55) : 0; // ms
        const rippleDuration = 200 + distance * 80; // ms

        const style: CellStyle = clickedCell
          ? {
              "--delay": `${rippleDelay}ms`,
              "--duration": `${rippleDuration}ms`,
            }
          : {};

        const baseStyle: React.CSSProperties = {
          backgroundColor: fillColor,
          borderColor: borderColor,
          ...style,
        };

        const glowEnabled = !interactive;
        const shouldGlow = glowPattern
          ? glowPattern(rowIdx, colIdx)
          : glowEnabled && ((rowIdx + colIdx) % 5 === 0);

        if (glowEnabled && shouldGlow) {
          const [minDuration, maxDuration] = glowDurationRange;
          const durationSpread = Math.max(maxDuration - minDuration, 0);
          const hash = rowIdx * cols + colIdx;
          const glowDuration = minDuration + ((hash % 11) / 10) * durationSpread;
          const glowDelay = ((rowIdx * 73 + colIdx * 41) % 1800);
          baseStyle.animation = `ripple-glow ${Math.round(glowDuration)}ms ease-in-out ${glowDelay}ms infinite`;
          baseStyle.opacity = 0.82;
        } else if (!interactive) {
          baseStyle.opacity = 0.36;
        }

        return (
          <div
            key={idx}
            className={cn(
              "cell relative border-[0.5px] opacity-40 transition-opacity duration-150 will-change-transform hover:opacity-80 dark:shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset]",
              clickedCell && "animate-cell-ripple fill-mode-[none]",
              !interactive && "pointer-events-none",
            )}
            style={baseStyle}
            onClick={
              interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined
            }
          />
        );
      })}
    </div>
  );
};
