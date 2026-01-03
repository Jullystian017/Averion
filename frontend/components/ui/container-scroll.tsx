'use client'

import * as React from 'react'
import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion'

import { cn } from '@/lib/utils'

type ContainerScrollProps = {
  titleComponent?: React.ReactNode
  children: React.ReactNode
  className?: string
  cardClassName?: string
  innerClassName?: string
}

export function ContainerScroll({
  titleComponent,
  children,
  className,
  cardClassName,
  innerClassName,
}: ContainerScrollProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'center start'],
  })

  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scaleRange = React.useMemo<[number, number]>(() => (isMobile ? [0.8, 0.96] : [0.92, 1]), [isMobile])
  const translateRange = React.useMemo<[number, number]>(() => (isMobile ? [8, -32] : [72, -78]), [isMobile])
  const rotateRange = React.useMemo<[number, number]>(() => (isMobile ? [12, 0] : [20, 0]), [isMobile])

  const smoothProgress = useSpring(scrollYProgress, React.useMemo(() => ({ stiffness: 80, damping: 30, mass: 0.5, restDelta: 0.001 }), []))

  const rotate = useTransform(smoothProgress, [0, 1], rotateRange)
  const scale = useTransform(smoothProgress, [0, 1], scaleRange)
  const translate = useTransform(smoothProgress, [0, 1], translateRange)

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex h-240 items-center justify-center p-2 md:h-320 md:p-20',
        className,
      )}
    >
      <div className="relative w-full py-10 md:py-40" style={{ perspective: '1600px' }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale} className={cardClassName}>
          <div
            className={cn(
              'h-full w-full overflow-hidden rounded-2xl bg-card/60 backdrop-blur sm:rounded-3xl',
              innerClassName,
            )}
          >
            {children}
          </div>
        </Card>
      </div>
    </div>
  )
}

type HeaderProps = {
  translate: MotionValue<number>
  titleComponent?: React.ReactNode
}

function Header({ translate, titleComponent }: HeaderProps) {
  if (!titleComponent) return null

  return (
    <motion.div
      style={{ translateY: translate }}
      className="mx-auto mb-12 max-w-5xl text-center"
    >
      {titleComponent}
    </motion.div>
  )
}

type CardProps = {
  rotate: MotionValue<number>
  translate: MotionValue<number>
  scale: MotionValue<number>
  children: React.ReactNode
  className?: string
}

function Card({ rotate, translate, scale, children, className }: CardProps) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        translateY: translate,
        scale,
        transformPerspective: 1600,
        boxShadow:
          '0 0 #0000004d, 0 12px 24px #0000003d, 0 48px 48px #00000033, 0 96px 72px #0000001f',
        transformStyle: 'preserve-3d',
      }}
      className={cn(
        'mx-auto -mt-12 w-full max-w-5xl rounded-[30px] border border-border/60 bg-background/70 p-3 shadow-2xl backdrop-blur-lg',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
