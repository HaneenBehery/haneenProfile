// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import * as THREE from "three";

// gsap.registerPlugin(ScrollTrigger);

// export default function EnterMind() {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     // ------------------------
//     // GSAP Text Reveal
//     // ------------------------
//     const ctx = gsap.context(() => {
//       gsap.from(".mind-line", {
//         opacity: 0,
//         y: 30,
//         stagger: 0.4,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 80%",
//           end: "bottom 20%",
//           toggleActions: "play none none reverse",
//         },
//       });

//       gsap.from(".mind-sub", {
//         opacity: 0,
//         y: 20,
//         delay: 1,
//         duration: 1,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 90%",
//           toggleActions: "play none none reverse",
//         },
//       });
//     }, containerRef);

//     // ------------------------
//     // Three.js Neurons Background
//     // ------------------------
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 5;

//     const renderer = new THREE.WebGLRenderer({ alpha: true, canvas: canvasRef.current });
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // Neurons points
//     const neuronsCount = 200;
//     const positions = new Float32Array(neuronsCount * 3);
//     for (let i = 0; i < neuronsCount * 3; i++) {
//       positions[i] = (Math.random() - 0.5) * 10;
//     }

//     const geometry = new THREE.BufferGeometry();
//     geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

//     const material = new THREE.PointsMaterial({ color: 0xa855f7, size: 0.08, transparent: true, opacity: 0.7 });
//     const points = new THREE.Points(geometry, material);
//     scene.add(points);

//     // Animate neurons
//     const animate = () => {
//       requestAnimationFrame(animate);
//       points.rotation.y += 0.001;
//       points.rotation.x += 0.001;
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Handle resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       ctx.revert();
//       window.removeEventListener("resize", handleResize);
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="h-screen relative text-white overflow-hidden flex flex-col items-center justify-center text-center px-6"
//     >
//       {/* Three.js Canvas */}
//       <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

//       {/* Text Content */}
//       <h2 className="text-3xl md:text-5xl font-semibold mind-line">
//         Thoughts are not random...
//       </h2>
//       <h2 className="text-2xl md:text-4xl font-medium mt-4 mind-line text-pink-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
//         They are designed.
//       </h2>
//       <p className="mt-6 text-sm opacity-70 mind-sub">
//         Every detail you see… started as an idea.
//       </p>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EnterMind() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const blackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: true,
          pin: true,
        },
      });

      // 1) دخول الصورة من اليمين
      tl.from(imageRef.current, {
        x: 300,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 2) دخول النص من الشمال
      tl.from(textRef.current, {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "<"); // يشتغل مع الصورة

      // 3) zoom بسيط للصورة
      tl.to(imageRef.current, {
        scale: 1.5,
        ease: "power2.inOut",
      });

      // 4) تغيير الصورة (لمبة مقفولة)
      tl.to(imageRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          imageRef.current.src = "/images/Gemini_Generated_Image_ee0zkyee0zkyee0z.png"; // 👈 غيريها هنا
        },
      });

      tl.to(imageRef.current, {
        opacity: 1,
        duration: 0.3,
      });

      // 5) fade to black
      tl.to(blackRef.current, {
        opacity: 1,
        duration: 1,
      });

      // 6) ظهور الكلام
      tl.from(".line", {
        opacity: 0,
        y: 40,
        stagger: 0.5,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#F7C7C5]"
    >
      {/* MAIN CONTENT */}
      <div className="flex h-full items-center justify-between px-10">

        <div ref={textRef} className="max-w-xl text-black z-10">
          <p className="text-xl">I started as a developer…</p>
        </div>

        <img
          ref={imageRef}
          src="/images/Gemini_Generated_Image_ee0zkyee0zkyee0z.png" // 👈 الصورة الأولى (لمبة منورة)
          className="w-[700px]"
        />
      </div>

      {/* BLACK SCREEN */}
      <div
        ref={blackRef}
        className="absolute inset-0 bg-yellow-50 opacity-0 flex items-center justify-center"
      >
        <div className="text-black text-center space-y-6 px-6 max-w-2xl">

          <p className="text-2xl line">
            but I was never just writing code.
          </p>

          <p className="text-2xl line">
            I was obsessed with one thing:
          </p>

          <p className="text-3xl font-semibold line">
            Why do some products feel right…<br />
            and others don’t?
          </p>

        </div>
      </div>
    </section>
  );
}