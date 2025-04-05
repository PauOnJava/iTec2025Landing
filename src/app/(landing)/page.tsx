import About from "./(sections)/about";
import Landing from "./(sections)/landing";
import Pricing from "./(sections)/pricing";
import Services from "./(sections)/services";
import Testimonials from "./(sections)/testimonials";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-screen flex-col items-center justify-center overflow-x-hidden">
      <Landing />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
    </div>
  );
}
