import { BookOpen, ClockIcon, HeartIcon, MessageSquare, UserIcon, Users } from "lucide-react";
import React from "react";

function Services() {
  const list: { title: string; description: string; icon: React.ReactNode }[] =
  [
    {
      icon: <Users className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Study Groups",
      description: "Create or join study groups with your peers"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Shared Resources",
      description: "Share and access study materials"
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Real-time Discussions",
      description: "Communicate with your peers through chat"
    }
  ];

  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center py-10 text-center md:py-20"
    >
      <h1 className="text-5xl font-black">Our Services</h1>
      <div className="mt-20 flex max-w-[1300px] flex-wrap items-center justify-around gap-5">
        {list.map((e, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2.5"
            >
              {e.icon}
              <span className="text-xl font-bold">{e.title}</span>
              <span className="max-w-[400px] px-5 opacity-75">
                {e.description}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
