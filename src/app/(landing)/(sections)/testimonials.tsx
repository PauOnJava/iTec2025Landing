"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function Testimonials() {
  const testimonials: { text: string; author: string }[] = [
    {
      text: "StudentHub has completely transformed how I study. Finding the right study group was so easy, and the results have been remarkable.",
      author: "Emma Rodriguez",
    },
    {
      text: "Thanks to StudentHub, I found study partners who share the same academic goals. Collaboration is much more effective now.",
      author: "Michael Chen",
    },
    {
      text: "The StudentHub app helped me organize my study time better and find people to learn with. Highly recommend!",
      author: "Sarah Johnson",
    },
    {
      text: "StudentHub made all the difference in my exam preparation. Study groups are well-organized and everyone is engaged.",
      author: "David Thompson",
    },
    {
      text: "I've discovered that I learn much more effectively in groups. StudentHub helped me find people with similar academic interests.",
      author: "Emma Walker",
    },
    {
      text: "The StudentHub platform is intuitive and easy to use. I've significantly improved my grades since using the app.",
      author: "James Liu",
    },
    {
      text: "StudentHub has been essential to my academic success. Collaborating with other students has made the learning process much more enjoyable.",
      author: "Maria Garcia",
    },
    {
      text: "I recommend StudentHub to all students who want to improve their academic performance. It's an excellent platform for collaborative learning.",
      author: "Robert Miller",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-10 text-center md:py-20">
      <h1 className="text-5xl font-black">Testimonials</h1>
      <Carousel
        opts={{ align: "center", loop: true }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: true,
          }),
        ]}
        className="mt-10 flex w-full max-w-[1800px] md:hidden"
      >
        <CarouselContent>
          {testimonials.map((e, i) => {
            return (
              <CarouselItem
                key={i}
                className="basis-1/4 select-none pl-5 text-left md:basis-1/4"
              >
                <div className="flex w-full flex-col items-start justify-center gap-5 rounded-xl bg-white p-5">
                  <span className="opacity-85">{e.text}</span>
                  <span className="font-bold">- {e.author}</span>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <Carousel
        opts={{ align: "end", loop: true }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: true,
          }),
        ]}
        className="mt-10 hidden w-full max-w-[1800px] md:flex"
      >
        <CarouselContent>
          {testimonials.map((e, i) => {
            return (
              <CarouselItem
                key={i}
                className="basis-1/4 select-none pl-5 text-left md:basis-1/4"
              >
                <div className="flex w-full flex-col items-start justify-center gap-5 rounded-xl bg-white p-5">
                  <span className="opacity-85">{e.text}</span>
                  <span className="font-bold">- {e.author}</span>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default Testimonials;
