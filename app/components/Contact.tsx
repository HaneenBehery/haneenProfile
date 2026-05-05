'use client';
import { useState } from 'react';

export default function Contact() {
  const [hovered, setHovered] = useState<'phone' | 'laptop' | 'cv' | null>(null);

  // Bounding boxes inside the 711×558 SVG viewBox, derived from the
  // actual paths in /public/images/contact-suitcases.svg:
  //   • phone  → blue screen at (205-246, 215-274) → cx≈225, cy≈245
  //   • laptop → grey body   at (222-306, 222-306) → cx≈265, cy≈265
  // Both live inside the LEFT suitcase. We give each a slightly padded
  // rectangle that doesn't overlap the other.
  const VB_W = 711;
  const VB_H = 558;

  // The phone is the small blue graphic on the LEFT of the suitcase.
  // We make the laptop hit-area cover the whole LEFT half of the scene
  // (the "great" range from the earlier iteration), and place the phone
  // hit-area on top of it. Phone has higher z-index → phone wins where
  // they overlap, laptop catches everything else.
  const phone = { x: 120, y: 180, w: 60, h: 85 }; // x: 198-258, y: 205-290
  const laptop = { x: 100, y: 300, w: 200, h: 120 }; // x: 143-355, y: 98-460

const cv = { x: 200, y: 185, w: 80, h: 50 }; // عدّلي الأرقام حسب مكان الكارد في الصورة

  const pct = (n: number, total: number) => `${(n / total) * 100}%`;

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-24 px-4 bg-gradient-to-b from-blue-200 to-blue-400 overflow-hidden"
  
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.4em] uppercase text-gray-500 mb-3">
          Get in touch
        </p>
        <h3 className="text-4xl md:text-5xl font-bold text-white">
   If you’re building something meaningful…

        </h3>
                <h3 className="text-4xl md:text-5xl font-bold text-white">

I’d love to be part of it.
        </h3>
        <p className="text-base text-gray-500 mt-4">
          Hover over the laptop or the phone inside the suitcase
        </p>
      </div>

      {/* Suitcase scene */}
      <div
        className="relative"
        style={{
          width: '811px',
          maxWidth: '95vw',
          aspectRatio: `${VB_W} / ${VB_H}`,
        }}
      >
        {/* Background illustration */}
        <img
          src="/images/contact-suitcases.svg"
          alt="Suitcase with phone and laptop inside"
          className="absolute inset-0 w-full h-full select-none drop-shadow-2xl"
          draggable={false}
        />

        {/* PHONE hit-area — centered on the blue phone graphic */}
        <button
          type="button"
          aria-label="Phone — +966 55 020 0305"
          onMouseEnter={() => setHovered('phone')}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered('phone')}
          onBlur={() => setHovered(null)}
          onClick={() => (window.location.href = 'tel:+966550200305')}
          className="absolute cursor-pointer transition-transform duration-300 ease-out"
          style={{
            left: pct(phone.x, VB_W),
            top: pct(phone.y, VB_H),
            width: pct(phone.w, VB_W),
            height: pct(phone.h, VB_H),
            background: 'transparent',
border: 'none',
            // Phone always sits ABOVE the laptop hit-area so hovering the
            // small blue phone graphic always triggers phone, even where
            // the regions overlap.
            zIndex: 30,
            transform:
              hovered === 'phone'
                ? 'scale(1.18) translateY(-6px)'
                : 'scale(1)',
            transformOrigin: 'center center',
          }}
        />

{/* CV hit-area */}
<button
  type="button"
  aria-label="Open CV"
  onMouseEnter={() => setHovered('cv')}
  onMouseLeave={() => setHovered(null)}
  onFocus={() => setHovered('cv')}
  onBlur={() => setHovered(null)}
  onClick={() => window.open('/Haneen behery cv 2.pdf', '_blank')}
  className="absolute cursor-pointer transition-transform duration-300 ease-out"
  style={{
    left: pct(cv.x, VB_W),
    top: pct(cv.y, VB_H),
    width: pct(cv.w, VB_W),
    height: pct(cv.h, VB_H),
    background: 'transparent',
border: 'none',
    zIndex: 25,
    transform:
      hovered === 'cv'
        ? 'scale(1.1) translateY(-5px)'
        : 'scale(1)',
    transformOrigin: 'center center',
  }}
/>
        {/* LAPTOP hit-area — covers the larger left scene */}
        <button
          type="button"
          aria-label="Email — Haneen.behery2@gmail.com"
          onMouseEnter={() => setHovered('laptop')}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered('laptop')}
          onBlur={() => setHovered(null)}
          onClick={() =>
            (window.location.href = 'mailto:Haneen.behery2@gmail.com')
          }
          className="absolute cursor-pointer transition-transform duration-300 ease-out"
          style={{
            left: pct(laptop.x , VB_W),
            top: pct(laptop.y  , VB_H),
            width: pct(laptop.w , VB_W),
            height: pct(laptop.h , VB_H),
            background: 'transparent',
border: 'none',
            zIndex: 20,
            transform:
              hovered === 'laptop'
                ? 'scale(1.06) translateY(-4px)'
                : 'scale(1)',
            transformOrigin: 'center center',
          }}
        />

        {/* PHONE pill — sits above the phone graphic */}
        <div
          className="absolute pointer-events-none transition-all duration-500 flex justify-center"
          style={{
            left: pct(phone.x - 60, VB_W),
            width: pct(phone.w + 120, VB_W),
            top: pct(phone.y - 60, VB_H),
            opacity: hovered === 'phone' ? 1 : 0,
            transform: `translateY(${hovered === 'phone' ? '0' : '14px'})`,
            zIndex: 40,
          }}
        >
          <a
            href="tel:+966550200305"
            className="pointer-events-auto inline-flex items-center gap-2 bg-white border border-gray-200 shadow-lg rounded-full px-5 py-2.5 text-gray-800 font-medium whitespace-nowrap hover:shadow-xl"
          >
            <span className="text-lg">📱</span>
            +966 55 020 0305
          </a>
        </div>
        
        {/* CV pill */}
<div
  className="absolute pointer-events-none transition-all duration-500 flex justify-center"
  style={{
    left: pct(cv.x - 60, VB_W),
    width: pct(cv.w + 120, VB_W),
    top: pct(cv.y - 60, VB_H),
    opacity: hovered === 'cv' ? 1 : 0,
    transform: `translateY(${hovered === 'cv' ? '0' : '14px'})`,
    zIndex: 40,
  }}
>
  <a
    href="/cv.pdf"
    target="_blank"
    className="pointer-events-auto inline-flex items-center gap-2 bg-white border border-gray-200 shadow-lg rounded-full px-5 py-2.5 text-gray-800 font-medium whitespace-nowrap hover:shadow-xl"
  >
    <span className="text-lg">📄</span>
    View CV
  </a>
</div>
        {/* LAPTOP pill — sits above the laptop graphic */}
        <div
          className="absolute pointer-events-none transition-all duration-500 flex justify-center"
          style={{
            left: pct(laptop.x - 60, VB_W),
            width: pct(laptop.w + 120, VB_W),
            top: pct(laptop.y -60, VB_H),
            opacity: hovered === 'laptop' ? 1 : 0,
            transform: `translateY(${hovered === 'laptop' ? '0' : '14px'})`,
            zIndex: 40,
          }}
        >
          <a
            href="mailto:Haneen.behery2@gmail.com"
            className="pointer-events-auto inline-flex items-center gap-2 bg-white border border-gray-200 shadow-lg rounded-full px-5 py-2.5 text-gray-800 font-medium whitespace-nowrap hover:shadow-xl"
          >
            <span className="text-lg">✉️</span>
            Haneen.behery2@gmail.com
          </a>
        </div>
      </div>

      <p className="text-sm text-white mt-16">
        © {new Date().getFullYear() }Haneen Behery — Let&apos;s build something
        meaningful.
      </p>
    </section>
  );
}

