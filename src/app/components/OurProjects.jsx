"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function OurProjects() {
  const cardsRef = useRef([]);

  const projects = [
    {
      title: "Slumtech Foundation Website ",
      link: "https://www.slumtech.org/",
      image: "https://res.cloudinary.com/chiaka/image/upload/v1763025002/slumtech_banner_wdagog.png",
    },
    {
      title: "Motorpedia Ai Website",
      link:"https://www.motorpedia.ai/",
      image: "https://res.cloudinary.com/chiaka/image/upload/v1763024940/motopedia_banner_iewoqt.png",
    },
    {
      title: "1035tech Website",
      link:"https://www.1035gtech.com/",
      image: "https://res.cloudinary.com/chiaka/image/upload/v1763024921/1035_banner_obb4sk.png",
    },
  ];

  const graphicsProject = [
    {
      title: "OMK Brand Design",
      images: [
        "https://res.cloudinary.com/chiaka/image/upload/v1763556501/OMK2024rebrandTAGS_qlxxuo.jpg",
        "https://res.cloudinary.com/chiaka/image/upload/v1763556505/OMK2024rebrandCollage_edoavn.jpg",
        "https://res.cloudinary.com/chiaka/image/upload/v1763556505/OMK2024rebrandWPP_s6eza3.jpg"
      ]
    },
    {
      title: "ARIK Brand Design",
      images: [
        "https://res.cloudinary.com/chiaka/image/upload/v1763556747/Ariklogo1WhtRed_wqsg56.jpg",
        "https://res.cloudinary.com/chiaka/image/upload/v1763556747/Arikflyers_hxknm3.jpg",
        "https://res.cloudinary.com/chiaka/image/upload/v1763556749/ArikTourist_d1tiaq.jpg",
        "https://res.cloudinary.com/chiaka/image/upload/v1763556749/ArikToteBag_rrwvpa.png"
      ]
    },
    {
      title: "Qara Kitchen Brand Design",
      images: [
        "https://res.cloudinary.com/chiaka/image/upload/v1763556559/M_bw1eny.jpg",
        "https://res.cloudinary.com/chiaka/image/upload/v1763556402/QARAAPRON2_oazlc3.jpg",
        "https://res.cloudinary.com/chiaka/image/upload/v1763556402/QARAAPRON2_oazlc3.jpg"
      ]
    }
  ]

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-[#1A1A1A] text-white py-[50px] md:py-[100px] px-[16px] xl:px-0" id="projects">
      <div className="max-w-[1248px] mx-auto text-center">
        <h2 className="text-[45px] md:text-[55px] font-bold mb-4">Our Projects</h2>
        <p className="text-[#fff] mb-12 max-w-[550px] mx-auto">
          Explore some of our latest works that showcase creativity, innovation,
          and measurable results.
        </p>
     

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            ref={(el) => (cardsRef.current[index] = el)}
            key={index}
            className="bg-[#F2F2F2] rounded-2xl shadow-lg overflow-hidden"
          >
            <Link href={project.link} target="_blank"  className="block">
            <div className="w-full h-56">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 bg-center"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2 text-[#000]">
                {project.title}
              </h3>
            </div>
            </Link>
          </div>

        ))}
         {graphicsProject.map((project, index) => (
          <div
            ref={(el) => (cardsRef.current[index] = el)}
            key={index}
            className="bg-[#F2F2F2] rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="w-full h-56">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 bg-center"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2 text-[#000]">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      
       </div>
    </section>
  );
}
