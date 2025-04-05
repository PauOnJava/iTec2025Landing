import Image from "next/image";

function About() {
  const aboutUsPoints: readonly string[] = [
    "Intuitive platform for finding and joining study groups",
    "Smart matching algorithm to connect students with similar academic goals",
    "Collaborative tools for effective group learning",
    "Track your academic progress and achievements",
  ];
  return (
    <section
      id="about"
      className="flex w-full flex-wrap items-center justify-center gap-10 p-5 py-10 text-center md:py-20"
    >
      <Image
        alt="Students collaborating in a study group"
        width={512}
        height={512}
        src={"/assets/study_group.svg"}
        className="rounded-2xl"
      />
      <div className="flex flex-col items-start justify-center gap-5">
        <h1 className="text-5xl font-black">About Us</h1>
        <span className="max-w-[600px] text-left opacity-80">
          At StudentHub, we're revolutionizing how students learn together. Our platform connects you with the perfect study partners, making collaborative learning more effective and enjoyable than ever before.
        </span>
        <ul className="mt-10 flex flex-col items-start justify-center gap-2.5 text-left">
          {aboutUsPoints.map((e, i) => {
            return (
              <li className="text-sm" key={i}>
                <span className="font-black">-</span> {e}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default About;
