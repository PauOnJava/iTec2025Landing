import { Button } from "@/components/ui/button";
import { Pacifico } from "next/font/google";
import Link from "next/link";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

function Landing() {
  return (
    <section className="relative flex min-h-screen w-screen flex-col items-center justify-center">
      <div className="absolute right-[4rem] top-[4rem] -z-50 h-[200px] w-[200px] animate-random-path rounded-2xl bg-blue-500/20 blur-[100px] md:h-[250px] md:w-[250px] lg:h-[500px] lg:w-[500px]" />
      <div className="absolute bottom-[4rem] left-[4rem] -z-50 h-[200px] w-[200px] animate-random-path rounded-2xl bg-blue-500/20 blur-[100px] delay-200 md:h-[250px] md:w-[250px] lg:h-[500px] lg:w-[500px]" />
      <div className="flex flex-col items-center justify-center gap-5 text-center">
        <h1 className={`text-5xl font-bold md:text-9xl`}>Your study sessions</h1>
        <span
          className={`${pacifico.className} text-4xl text-blue-500 md:text-8xl`}
        >
          our Priority
        </span>
        <Link href="https://studenthub.andreipau.me">
          <Button variant={"default"} className="mt-10" size={"lg"}>
            Sign Up
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Landing;
