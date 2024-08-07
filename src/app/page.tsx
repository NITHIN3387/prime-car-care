import Home from "@/pages/home"
import About from "@/pages/about";
import Services from "@/pages/services";
import ContactUs from "@/pages/contact-us";
import Footer from "@/components/footer";

export default function Page(): JSX.Element {
  return (
    <>
      <Home />
      <About />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
}
