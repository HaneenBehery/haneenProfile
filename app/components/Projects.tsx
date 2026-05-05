// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function Projects() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.from(sectionRef.current, {
//       opacity: 0,
//       y: 100,
//       duration: 1,
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 80%",
//       },
//     });
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="min-h-screen bg-white text-black flex items-center justify-center"
//     >
//       <h2 className="text-4xl font-bold">My Projects</h2>
//     </section>
//   );
// }



//good one
// "use client";

// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Projects() {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const experienceRefs = useRef<HTMLDivElement[]>([]);

//   experienceRefs.current = [];

//   const addExperienceRef = (el: HTMLDivElement | null) => {
//     if (el && !experienceRefs.current.includes(el)) {
//       experienceRefs.current.push(el);
//     }
//   };

//   useEffect(() => {
//     experienceRefs.current.forEach((el, i) => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: () => `top+=${i * 200} center`, // كل عنصر يبدأ بعد العنصر السابق
//           end: "+=400",
//           scrub: true,
//         },
//       });

//       // يظهر ويكبر
//       tl.fromTo(
//         el,
//         { scale: 0.5, opacity: 0 },
//         { scale: 1.2, opacity: 1, duration: 1 }
//       );

//       // يصغر ويبقى في الخلفية
//       tl.to(el, { scale: 0.6, opacity: 0.3, duration: 1, delay: 0.5 });
//     });
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full min-h-screen flex flex-col items-center justify-center gap-20 bg-gradient-to-b from-rose-50 to-orange-50 overflow-hidden"
//     >
//       {/* Experience Cards */}
//       <div
//         ref={addExperienceRef}
//         className="w-64 h-40 bg-blue-300 rounded-lg flex flex-col items-center justify-center text-white font-bold text-xl shadow-lg"
//       >
//         4️⃣ Years Experience
//       </div>
//       <div
//         ref={addExperienceRef}
//         className="w-64 h-40 bg-green-400 rounded-lg flex flex-col items-center justify-center text-white font-bold text-xl shadow-lg"
//       >
//         📱 iOS Development
//       </div>
//       <div
//         ref={addExperienceRef}
//         className="w-64 h-40 bg-purple-500 rounded-lg flex flex-col items-center justify-center text-white font-bold text-xl shadow-lg"
//       >
//         💻 Web Development
//       </div>
//     </section>
//   );
// }





"use client";
import { useRef, useState, useEffect } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
  const sectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

const projectsData = [
    { 
      id: 1, 
      title: "ERP", 
      tech: "Angular / Clean Architecture / API", 
      desc: "Designed scalable systems with reusable components that grow, not break.",
      link: "https://meter.com.sa/login" 
    },
    { 
      id: 2, 
      title: "Darah Web", 
      tech: "Angular / bootstrap", 
      desc: "Delivered a full platform in one month… speed without sacrificing quality.",
      link: "https://darah.gov.sa/" 
    },
    { 
      id: 3, 
      title: "LumeTech", 
      tech: "GSAP", 
      desc: "Portfilo Web",
      link: "https://lumetechsa.com/" 
    },
    { 
      id: 4, 
      title: "Blueberry", 
      tech: "Angular / Tailwnd", 
      desc: "Booking system and video calling patient and doctor",
      link: "https://blueberry.com.sa/#/" 
    },
    { 
      id: 5, 
      title: "Farah Ios App", 
      tech: "SwifitUI / ChatGPT API", 
      desc: "AI app helps use creat a trip",
      link: "" 
    },
    { 
      id: 6, 
      title: "Klaket Ios App", 
      tech: "SwifitUI / Firebase", 
      desc: "Actors social media and casting blatform",
      link: "" 
    },
  ];

  useGSAP(() => {
    if (!isMounted) return;

    // 1. Decorative Animations
    gsap.to(".floating-cloud", {
      x: 50,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: { each: 0.8, from: "random" }
    });

    gsap.to(".floating-cloud", {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".airplane-svg", {
      y: -5,
      duration: 0.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=6000", 
        scrub: 1,
        pin: true,
      }
    });

    // 2. INTRO SEQUENCE
    // Start with the text center and large
    tl.fromTo(".intro-heading", 
      { opacity: 0, y: 50, scale: 1.5 }, 
      { opacity: 1, y: 0, scale: 1.5, duration: 2 }
    )
    .fromTo(".intro-subtext", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1.5 }, "-=0.5"
    )
    // Shrink and move to top (becoming the background title)
    .to(".intro-container", {
      top: "10%",
      scale: 0.5,
      duration: 3,
      ease: "power2.inOut",
      delay: 1
    })
    .to(".intro-subtext", { opacity: 0.4, duration: 2 }, "<");

    // 3. AIRPLANE SEQUENCE
    tl.from(".cloud-left", { xPercent: -150, stagger: 0.2, duration: 1.5 }, ">")
      .from(".cloud-right", { xPercent: 150, stagger: 0.2, duration: 1.5 }, "<");

    tl.fromTo(".airplane-container", 
      { x: "-120vw", y: "0vh", scale: 0.8 }, 
      { 
        x: "10vw", 
        y: "-10vh", 
        scale: 3.5, 
        duration: 4, 
        ease: "power2.out" 
      }
    )
    .to(".airplane-container", {
      x: "150vw", 
      y: "0vh",
      duration: 15,
      ease: "none"
    });

  }, { scope: sectionRef, dependencies: [isMounted] });

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen w-full bg-gradient-to-b from-blue-400 to-blue-200 overflow-hidden"
    >
      {/* Intro Text / Background Title */}
      <div className="intro-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 px-4 pointer-events-none">
        <h3 className="intro-heading text-white text-6xl md:text-8xl font-black uppercase tracking-tighter">
          Destinations I’ve Built
        </h3>
        <p className="intro-subtext text-white text-xl md:text-3xl font-medium italic mt-4 max-w-4xl mx-auto">
          “These aren’t projects. They’re destinations I designed and brought to life.”
        </p>
      </div>

      {/* Floating Clouds */}
      <div className="floating-cloud cloud-left absolute top-10 left-[5%] text-8xl select-none">☁️</div>
      <div className="floating-cloud cloud-left absolute bottom-20 left-[12%] text-9xl select-none">☁️</div>
      <div className="floating-cloud cloud-right absolute top-24 right-[8%] text-9xl select-none">☁️</div>
      <div className="floating-cloud cloud-right absolute bottom-32 right-[18%] text-7xl select-none">☁️</div>
      <div className="floating-cloud absolute top-1/2 left-[20%] text-6xl select-none opacity-40">☁️</div>


      {/* THE AIRPLANE */}
      {/* <div className="airplane-wrapper absolute z-10 w-48 md:w-64 pointer-events-none">
             <svg viewBox="0 0 1024 1024" className="airplane-svg" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_iconCarrier">
            <path d="M200.5 484.7H77.4l-0.9-168h43.8z" fill="#FFEB4D"></path>
            <path d="M897 652.7H245.5c-92.8 0-168-75.2-168-168h725.6c93.4 0 146.4 51.7 146.4 115.4 0 29-23.5 52.6-52.5 52.6z" fill="#DAE5FF"></path>
            <path d="M124.4 600.7c30.6 31.8 73.5 51.6 121.2 51.6H897c28.7 0 52-23 52.5-51.6H124.4z" fill="#FFACC2"></path>
            <path d="M776.5 513.7h32v42h-32z" fill="#FFFFFF"></path>
            <path d="M808.5 562.7h-32c-4.4 0-8-3.1-8-7v-42c0-3.9 3.6-7 8-7h32c4.4 0 8 3.1 8 7v42c0 3.8-3.5 7-8 7z m-24-14h16v-28h-16v28z" fill="#9A2D2F"></path>
            <path d="M214.5 555.7h-20c-3.3 0-6-2.7-6-6v-30c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v30c0 3.3-2.6 6-6 6z" fill="#FFFFFF"></path>
            <path d="M214.5 562.7h-20c-7.7 0-14-5.5-14-12.2V519c0-6.8 6.3-12.2 14-12.2h20c7.7 0 14 5.5 14 12.2v31.5c0 6.7-6.2 12.2-14 12.2z m-18-14h16v-28h-16v28zM731.5 521.7h-4c-3.3 0-6 2.7-6 6v8c0 3.3 2.7 6 6 6h4c3.3 0 6-2.7 6-6v-8c0-3.3-2.6-6-6-6zM700.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM669.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM638.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM607.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM577.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM546.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM515.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM298.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM267.5 521.7h-4c-3.3 0-6 2.7-6 6v8c0 3.3 2.7 6 6 6h4c3.3 0 6-2.7 6-6v-8c0-3.3-2.6-6-6-6z" fill="#9A2D2F"></path>
            <path d="M233 492.7c4 9.7 20 21.4 47.5 19.2 65.5-5.2 131.9-13.6 204-9.2 136.5 8.2 231.1 1.5 272.6-2 15.8-1.3 48.4-3.5 62.9-7.4-5.5-0.4-11.1-0.6-16.9-0.6H233z" fill="#FFFFFF"></path>
            <path d="M656.3 652.2H456.4l-194.1-203h56.3z" fill="#FFACC2"></path>
            <path d="M701.3 684.7h-70c-8.8 0-16-7.2-16-16v-28c0-8.8 7.2-16 16-16h70c8.8 0 16 7.2 16 16v28c0 8.8-7.2 16-16 16z" fill="#CAE8FF"></path>
            <path d="M916.5 512.4c-27.9-23.3-67.1-35.7-113.4-35.7H379.9l-57.1-34.4c-1.2-0.7-2.7-1.1-4.1-1.1h-56.3c-3.2 0-6.1 1.9-7.4 4.9-1.3 2.9-0.6 6.4 1.6 8.7l21 22h-72.2l-78-163.8c-1.4-2.6-4.1-4.2-7-4.2H76.5c-2.1 0-4.2 0.8-5.7 2.4-1.5 1.5-2.3 3.6-2.3 5.7l0.9 168c0 0.4 0 0.8 0.1 1.2 0.7 96.5 79.4 174.8 176 174.8h361.8v8c0 13.2 10.8 24 24 24h70c13.2 0 24-10.8 24-24v-8H897c33.4 0 60.6-27.2 60.6-60.6-0.1-34.6-14.6-65.8-41.1-87.9z m-113.4-19.7c42.5 0 78.2 11 103.1 31.9 20.9 17.5 33.1 41.4 35 68.1H572.8l-85.7-51.5c2-0.8 3.4-2.5 3.4-4.5v-10c0-2.8-2.7-5-6-5h-4c-3.3 0-6 2.2-6 5v6.9l-68-40.9h396.6z m-718.5-168h31l71.6 152H85.4l-0.8-152z m1.1 168H292.8l28.9 30.2c-1.3 0.9-2.1 2.3-2.1 3.8v10c0 2.8 2.7 5 6 5h4c3.1 0 5.6-1.9 5.9-4.4l53 55.4H127.6c-24.4-26.7-40-61.6-41.9-100z m222.6 151.6h-62.8c-37.2 0-72.3-12.5-100.7-35.6h258.8l34.2 35.7-129.5-0.1z m299-3.6v3.5H459.8L281 457.2h35.4l292.2 175.7c-0.8 2.4-1.3 5-1.3 7.8z m102 28c0 4.4-3.6 8-8 8h-70c-4.4 0-8-3.6-8-8v-28c0-4.4 3.6-8 8-8h70c4.4 0 8 3.6 8 8v28zM897 644.3l-171.7 0.4v-4c0-13.2-10.8-24-24-24h-70c-4.6 0-8.9 1.3-12.6 3.6l-19.3-11.6h341.1c-4.1 20.2-22.2 35.6-43.5 35.6z" fill="#9A2D2F"></path>
          </g>
        </svg>
      </div> */}

      {/* THE AIRPLANE UNIT */}
      <div className={`airplane-container absolute ${isMounted ? 'top-1/3' : 'top-1/4'} left-0 z-10 flex items-center`}>
        <div className="relative">
          <svg 
            viewBox="0 0 1024 1024" 
            className={`airplane-svg ${isMounted ? 'w-[800px]' : 'w-[550px]'} h-[600px] pointer-events-auto`} 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M897 652.7H245.5c-92.8 0-168-75.2-168-168h725.6c93.4 0 146.4 51.7 146.4 115.4 0 29-23.5 52.6-52.5 52.6z" fill="#DAE5FF"></path>
            <path d="M124.4 600.7c30.6 31.8 73.5 51.6 121.2 51.6H897c28.7 0 52-23 52.5-51.6H124.4z" fill="#FFACC2"></path>
          </svg>

          {/* PROJECT WINDOWS LAYER */}
          <div className="absolute top-[48%] left-[20%] flex space-x-8 px-10">
            {isMounted && projectsData.map((project) => (
              <div key={project.id} className="group relative flex flex-col items-center">
                <div className="absolute bottom-full mb-4 w-44 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-2xl 
                                opacity-0 translate-y-2 scale-90 pointer-events-none transition-all duration-500 
                                group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto
                                z-50 border border-white/50">
                  <h3 className="text-[11px] font-black text-slate-900 uppercase leading-tight mb-1">{project.title}</h3>
                  <p className="text-[8px] text-pink-400 font-bold uppercase tracking-widest mb-2">{project.tech}</p>
                  <p className="text-[9px] text-slate-600 leading-relaxed">{project.desc}</p>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white/95"></div>
                </div>

<a 
  href={project.link} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-10 h-14 rounded-t-full  bg-slate-900/80 rounded-t-full border border-white/30  cursor-pointer 
             transition-all duration-500 group-hover:scale-110 group-hover:border-yellow-400 
             pointer-events-auto relative z-10 overflow-hidden
             backdrop-blur-xl bg-grya/5"

>
  {/* Project Image */}
  <img 
    src={`/projects/${project.id}.png`} 
    alt={project.title}
    className="absolute inset-0 w-full h-full object-cover scale-110"
  />

  {/* Strong glass shine */}
  <div className="absolute inset-0 bg-gradient-to-br 
                  from-white/70 via-white/20 to-transparent 
                  opacity-60 pointer-events-none"></div>

  {/* top light reflection line */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[30%] 
                  bg-white/40 blur-sm rounded-full opacity-70"></div>

  {/* subtle inner vignette */}
  <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

  {/* Hover Text */}
  <div className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 relative z-10">
    <span className="text-[4px] font-bold text-yellow-500  uppercase drop-shadow-md">Visit</span>
  </div>
</a>
                {/* <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-14 bg-slate-900/80 rounded-t-full border border-white/30 cursor-pointer transition-all duration-500 group-hover:bg-yellow-100 group-hover:scale-110 group-hover:border-yellow-400 pointer-events-auto shadow-inner relative z-10 flex items-center justify-center"
                >
                     <div className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-[4px] font-bold text-blue-900 uppercase">Visit</span>
                  </div>
                </a> */}
                
                
                {/* <div className="w-10 h-14 bg-slate-900/80 rounded-t-full border border-white/30 cursor-pointer 
                                transition-all duration-500 group-hover:bg-yellow-100 group-hover:scale-110 group-hover:border-yellow-400
                                pointer-events-auto shadow-inner relative z-10">
                  <div className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-[4px] font-bold text-blue-900 uppercase">Open</span>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-[10%] text-9xl opacity-10 select-none">☁️</div>
      <div className="absolute top-20 right-[5%] text-8xl opacity-10 select-none">☁️</div>
    </section>
  );
};

export default Projects;