"use client";
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from "react-i18next";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SkillsSection = () => {
  const containerRef = useRef(null);
    const { t, i18n } = useTranslation();
  // Updated skills to include their "sub-skills"
  const skillsData = [
    { name: 'Frontend', tools: ['Angular', 'React', 'Tailwind'] },
    { name: 'iOS', tools: ['Swift', 'SwiftUI', 'CoreData'] },
    { name: 'System Thinking', tools: ['DDD', 'Clean Architecture', 'ERP'] },
    { name: 'API & Backend', tools: ['Node.js', 'PostgreSQL', 'REST'] },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3500",
        scrub: 1,
        pin: true,
      }
    });

    tl.from(".cloud-left", { xPercent: -150, stagger: 0.2, duration: 1.5 })
      .from(".cloud-right", { xPercent: 150, stagger: 0.2, duration: 1.5 }, "<")

    tl.fromTo(".cinematic-text", 
        { opacity: 0, scale: 0.8, filter: "blur(10px)" }, 
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 2, ease: "power2.out" }
      )
      .to(".cinematic-text", { 
        opacity: 0, 
        y: -50, 
        duration: 1.5, 
        delay: 1 
      });

    tl.from(".skill-ticket", {
      y: 400,
      opacity: 0,
      scale: 0.5,
      rotationX: 45,
      stagger: 0.4,
      duration: 2,
      ease: "power3.out"
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen w-full bg-gradient-to-b from-blue-400 to-blue-200 overflow-hidden"
    >
      {/* Background Clouds */}
      <div className="cloud-left absolute top-10 left-[5%] text-8xl select-none">☁️</div>
      <div className="cloud-left absolute bottom-20 left-[10%] text-9xl select-none">☁️</div>
      <div className="cloud-right absolute top-20 right-[5%] text-9xl select-none">☁️</div>
      <div className="cloud-right absolute bottom-40 right-[15%] text-7xl select-none">☁️</div>

      {/* Cinematic Text Layer */}
      <div className="cinematic-text absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 pointer-events-none">
        <p className="text-white text-xl md:text-2xl font-light tracking-[0.3em] uppercase mb-4 drop-shadow-lg">
                {t("skilsline1")}
        </p>
        <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter drop-shadow-2xl">
           {t("skilsline2")} <br/> I use to <span className="text-yellow-200">build worlds.</span>
        </h2>
      </div>

      {/* Tickets Container */}
      <div className="relative flex flex-wrap justify-center items-center gap-8 z-10 px-10 h-screen">
        {skillsData.map((skill, index) => (
          <div 
            key={index} 
            className="group skill-ticket bg-white/95 backdrop-blur-sm text-blue-900 p-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-l-[12px] border-dashed border-blue-400 min-w-[300px] max-w-[350] "
          >
            {/* Main Ticket Info */}
            <div className="flex justify-between items-start mb-6 transition-opacity duration-300 group-hover:opacity-20">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">Passenger Service</p>
                <h3 className="text-3xl font-black tracking-tighter">{skill.name}</h3>
              </div>
              <span className="text-3xl">✈️</span>
            </div>
            
            <div className="flex justify-between items-end border-t border-blue-100 pt-4 transition-opacity duration-300 group-hover:opacity-20">
              <div className="font-mono text-xs text-gray-500">
                <p>FLIGHT: HN-{index + 1}00</p>
                <p>GATE: A-24</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-blue-300 uppercase">Status</p>
                <p className="text-xs font-bold text-green-500 uppercase italic">On Time</p>
              </div>
            </div>

            {/* HOVER REVEAL: Sub-skills / Tools */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-yellow-200/90 text-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl px-4 text-center">
              <p className="text-[10px] uppercase tracking-widest mb-2 text-pink-400">Manifest</p>
              <div className="flex flex-wrap justify-center gap-2">
                {skill.tools.map((tool, i) => (
                  <span key={i} className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;