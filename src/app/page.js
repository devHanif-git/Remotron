import OurStory from "@/components/OurStory";
import Hero from "@/components/Hero";
import BehindTheLogo from "@/components/BehindTheLogo";
import Products from "@/components/Products";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurStory />
      <BehindTheLogo />
      <Products />
      <ContactUs />
    </main>
  );
}
