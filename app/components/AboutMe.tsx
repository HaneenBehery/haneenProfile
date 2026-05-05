// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function AboutMe() {
//   const sectionRef = useRef(null);

//   const expRef = useRef(null);
//   const webRef = useRef(null);
//   const iosRef = useRef(null);
//   const creativeRef = useRef(null);
//   const studyRef = useRef(null);
//   const finalRef = useRef(null);

//   const blob1 = useRef(null);
//   const blob2 = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=5000",
//           scrub: true,
//           pin: true,
//         },
//       });

//       // 🎈 background animation
//       gsap.to(blob1.current, {
//         x: 200,
//         y: -100,
//         repeat: -1,
//         yoyo: true,
//         duration: 6,
//         ease: "sine.inOut",
//       });

//       gsap.to(blob2.current, {
//         x: -200,
//         y: 100,
//         repeat: -1,
//         yoyo: true,
//         duration: 7,
//         ease: "sine.inOut",
//       });

//       // 1️⃣ Experience
//       tl.fromTo(expRef.current,
//         { opacity: 0, scale: 0.3, rotate: -20 },
//         { opacity: 1, scale: 1.3, rotate: 0 }
//       ).to(expRef.current, {
//         scale: 0.5,
//         opacity: 0.2,
//       });

//       // 2️⃣ Web
//       tl.fromTo(webRef.current,
//         { x: -400, opacity: 0 },
//         { x: 0, opacity: 1 }
//       );

//       // 3️⃣ iOS
//       tl.fromTo(iosRef.current,
//         { x: 400, opacity: 0 },
//         { x: 0, opacity: 1 }
//       );

//       // 4️⃣ Creative
//       tl.fromTo(creativeRef.current,
//         { y: 200, scale: 0.5, opacity: 0 },
//         { y: 0, scale: 1.2, opacity: 1 }
//       );

//       // 5️⃣ Study
//       tl.fromTo(studyRef.current,
//         { opacity: 0, scale: 0 },
//         { opacity: 1, scale: 1 }
//       );

//       // Merge all
//       tl.to(
//         [webRef.current, iosRef.current, creativeRef.current, studyRef.current],
//         {
//           opacity: 0,
//           scale: 0.3,
//           y: -100,
//         }
//       );

//       // 🖥️ Final Screen
//       tl.fromTo(finalRef.current,
//         { opacity: 0, scale: 0.7, y: 100 },
//         { opacity: 1, scale: 1.1, y: 0 }
//       );

//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="h-screen relative overflow-hidden bg-pink-100 text-white flex items-center justify-center"
//     >
//       {/* 🔥 Background blobs */}
//       <div
//         ref={blob1}
//         className="absolute w-72 h-72 bg-orange-400 opacity-20 rounded-full blur-3xl"
//       />
//       <div
//         ref={blob2}
//         className="absolute w-72 h-72 bg-rose-800 opacity-20 rounded-full blur-3xl"
//       />

//       {/* 1 */}
//       <h1 ref={expRef} className="absolute text-5xl font-bold">
//         4 Years of Experience
//       </h1>

//       {/* 2 */}
//       <h2 ref={webRef} className="absolute left-10 text-4xl font-semibold">
//         Web Development
//       </h2>

//       {/* 3 */}
//       <h2 ref={iosRef} className="absolute right-10 text-4xl font-semibold">
//         iOS Development
//       </h2>

//       {/* 4 */}
//       <h2 ref={creativeRef} className="absolute bottom-20 text-4xl font-semibold">
//         Creative Developer
//       </h2>

//       {/* 5 */}
//       <h2 ref={studyRef} className="absolute text-2xl text-center max-w-md">
//         Studied in Apple Academy & AOU University
//       </h2>

//       {/* FINAL 🔥 */}
//       <div
//         ref={finalRef}
//         className="absolute opacity-0 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-10 text-center shadow-2xl"
//       >
//         <h1 className="text-4xl font-bold mb-4">
//           Haneen
//         </h1>
//         <p className="text-lg text-gray-900">
//           Full Stack Developer
//         </p>
//       </div>
//     </section>
//   );
// }

//ariaplan color 1

// "use client";
// import { useRef } from "react";
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const SkillsSection = () => {
//   const containerRef = useRef(null);
//   const skills = ['React', 'Tailwind', 'GSAP', 'Angular', 'UI/UX'];

//   useGSAP(() => {
//     // 1. Create the timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=2000", // Distance to scroll
//         scrub: 1,
//         pin: true,
//         // markers: true, // Turn this on to see if 'start' hits the top
//       }
//     });

//     // 2. Clouds Animation
//     tl.from(".cloud-left", { xPercent: -150, stagger: 0.2, duration: 1 })
//       .from(".cloud-right", { xPercent: 150, stagger: 0.2, duration: 1 }, "<");

//     // 3. Tickets Animation
//     tl.from(".skill-ticket", {
//       y: 300,        // Reduced from 500 to ensure they stay in view
//       opacity: 0,
//       scale: 0.8,    // Added a little scale for effect
//       rotation: 10,
//       stagger: 0.5,  // Increased stagger so they don't all pop at once
//       duration: 2,
//       ease: "power2.out"
//     });

//     // Clean up on unmount
//     return () => {
//       ScrollTrigger.getAll().forEach(t => t.kill());
//     };
//   }, { scope: containerRef });

//   return (
//     <section 
//       ref={containerRef} 
//       className="relative min-h-screen w-full bg-gradient-to-b from-blue-400 to-blue-200 overflow-hidden"
//     >
//       {/* Clouds - Positioned absolutely relative to the section */}
//       <div className="cloud-left absolute top-10 left-10 text-6xl z-0">☁️</div>
//       <div className="cloud-left absolute top-40 left-20 text-6xl z-0">☁️</div>
//       <div className="cloud-right absolute top-20 right-10 text-8xl z-0">☁️</div>
//       <div className="cloud-right absolute top-60 right-20 text-8xl z-0">☁️</div>

//       {/* Tickets Container - Centered using flex */}
//       <div className="flex flex-wrap justify-center items-center gap-6 z-10 px-10 h-screen">
//         {skills.map((skill, index) => (
//           <div 
//             key={index} 
//             className="skill-ticket bg-white text-blue-900 p-6 rounded-lg shadow-2xl border-l-8 border-dashed border-blue-500 min-w-[220px]"
//           >
//             <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Boarding Pass</p>
//             <h3 className="text-2xl font-black italic">{skill}</h3>
//             <div className="mt-4 flex justify-between items-center border-t pt-2">
//               <span className="text-xs font-mono">GATE: B-0{index + 1}</span>
//               <span className="text-xl">✈️</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;


"use client";
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutMe = () => {
  const containerRef = useRef(null);
  
  useGSAP(() => {
    // 1. Horizontal Cloud Sway
    gsap.to(".floating-cloud", {
      x: 50,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: { each: 0.8, from: "random" }
    });

    // 2. Vertical Cloud Bob
    gsap.to(".floating-cloud", {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // 3. Airplane "Engine" Vibration
    gsap.to(".airplane-svg", {
      y: -8,
      rotation: 1,
      duration: 0.15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=5000", // Increased slightly for smoother pacing
        scrub: 1,
        pin: true,
      }
    });

    // Initial Cloud reveal
    tl.from(".cloud-left", { xPercent: -150, stagger: 0.2, duration: 1.5 }, 0)
      .from(".cloud-right", { xPercent: 150, stagger: 0.2, duration: 1.5 }, 0);

    // TEXT & AIRPLANE SYNCED PATH
    
    // Step A: Plane enters and moves to "Observation" point on the right
    tl.fromTo(".airplane-wrapper", 
      { x: "-100vw", y: "40vh", scale: 0.6, rotation: 10 }, 
      { x: "70vw", y: "25vh", scale: 1, rotation: 0, duration: 4, ease: "power1.out" },
      0
    );

    // Text 1 appears/disappears
    tl.fromTo(".text-1", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5 }
    ).to(".text-1", { opacity: 0, y: -50, duration: 1, delay: 1 });

    // Text 2 appears/disappears
    tl.fromTo(".text-2", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5 }
    ).to(".text-2", { opacity: 0, y: -50, duration: 1, delay: 1 });

    // Text 3 appears (Wait for user to read)
    tl.fromTo(".text-3", 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 1.5 }
    );

    // Step B: FINAL MOVE - After reading, the plane dives to bottom
    // We add a delay (label) to ensure it stays visible for a moment
    tl.to(".airplane-wrapper", {
      x: "80vw",         // Slight drift further right
      y: "120vh",        // Move off the bottom of the screen
      rotation: 45,      // Nose-down angle
      duration: 3,
      ease: "power2.in"
    }, "+=1"); 

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen w-full bg-gradient-to-b from-blue-200 to-blue-400 overflow-hidden"
    >
      {/* Floating Clouds */}
      <div className="floating-cloud cloud-left absolute top-10 left-[5%] text-8xl select-none">☁️</div>
      <div className="floating-cloud cloud-left absolute bottom-20 left-[12%] text-9xl select-none">☁️</div>
      <div className="floating-cloud cloud-right absolute top-24 right-[8%] text-9xl select-none">☁️</div>
      <div className="floating-cloud cloud-right absolute bottom-32 right-[18%] text-7xl select-none">☁️</div>
      <div className="floating-cloud absolute top-1/2 left-[20%] text-6xl select-none opacity-40">☁️</div>

      {/* THE AIRPLANE */}
      <div className="airplane-wrapper absolute z-10 w-48 md:w-64 pointer-events-none">
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
      </div>

      {/* Cinematic Text Layers */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 pointer-events-none">
        <div className="text-1 absolute">
          <p className="text-white text-xl md:text-2xl font-light tracking-[0.3em] uppercase drop-shadow-lg">
            I started as a developer…
          </p>
        </div>

        <div className="text-2 absolute flex flex-col items-center">
          <p className="text-white text-xl md:text-2xl font-light tracking-[0.3em] uppercase mb-4 drop-shadow-lg">
            but I was never just writing code.
          </p>
          <p className="text-white text-xl md:text-2xl font-light tracking-[0.3em] uppercase drop-shadow-lg">
            I was obsessed with one thing:
          </p>
        </div>

        <div className="text-3 absolute">
          <h2 className="text-white text-4xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-2xl">
            Why do some products <br/> 
            feel right… <span className="text-yellow-200 italic font-serif">and others don’t?</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;