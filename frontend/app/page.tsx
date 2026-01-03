import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works"
import { FeaturesSection } from "@/components/features-section"
import { ProductDeepDiveSection } from "@/components/product-deep-dive"
import { UseCasesSection } from "@/components/use-cases"
import { TestimonialsSection } from "@/components/testimonials-section"
import { IntegrationSection } from "@/components/integration-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <HeroSection />      
      <FeaturesSection />
      <HowItWorksSection />
      <ProductDeepDiveSection />
      <UseCasesSection />
      <IntegrationSection />    
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  )
}
