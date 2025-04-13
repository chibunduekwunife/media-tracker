
import TopTenSection from "@/components/home/top-ten-section";
import HeroSection from "@/components/home/hero-section";

export default function HomePage () {
  return (
      <main className='mt-10 flex flex-col gap-15'>
          <HeroSection />
          <TopTenSection />
      </main>
  )
}
