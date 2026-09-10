import React, { useEffect, useRef, useState } from 'react';

interface HeroVideoProps {
  scrollY: number;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ scrollY }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftVideoRef = useRef<HTMLVideoElement>(null);
  const rightVideoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeVideo, setActiveVideo] = useState<'left' | 'right'>('right');
  const activeSideRef = useRef<'left' | 'right'>('right');

  const leftVideoSrc = 'https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260625_154433_532a85d3-dabf-4265-b8bd-19ac6af31842.mp4';
  const rightVideoSrc = 'https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260625_154401_a664f076-b971-4557-8728-40ef9ea4c49b.mp4';

  useEffect(() => {
    let loadedCount = 0;
    const checkLoaded = () => {
      loadedCount++;
      if (loadedCount >= 1) {
        setIsLoaded(true);
      }
    };

    const left = leftVideoRef.current;
    const right = rightVideoRef.current;

    if (left) {
      left.addEventListener('loadeddata', checkLoaded);
      left.addEventListener('error', checkLoaded); // Fallback on error
    }
    if (right) {
      right.addEventListener('loadeddata', checkLoaded);
      right.addEventListener('error', checkLoaded);
    }

    // Safety timeout in case of slow or blocked connection
    const timer = setTimeout(() => setIsLoaded(true), 1200);

    return () => {
      clearTimeout(timer);
      if (left) {
        left.removeEventListener('loadeddata', checkLoaded);
        left.removeEventListener('error', checkLoaded);
      }
      if (right) {
        right.removeEventListener('loadeddata', checkLoaded);
        right.removeEventListener('error', checkLoaded);
      }
    };
  }, []);

  // Desktop Mouse Scrubbing Interaction
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion || window.innerWidth < 1024) {
      // Mobile / Touch behavior: alternate playback
      const left = leftVideoRef.current;
      const right = rightVideoRef.current;

      if (!left || !right) return;

      left.play().catch(() => {});

      const handleLeftEnded = () => {
        setActiveVideo('right');
        activeSideRef.current = 'right';
        right.currentTime = 0;
        right.play().catch(() => {});
      };

      const handleRightEnded = () => {
        setActiveVideo('left');
        activeSideRef.current = 'left';
        left.currentTime = 0;
        left.play().catch(() => {});
      };

      left.addEventListener('ended', handleLeftEnded);
      right.addEventListener('ended', handleRightEnded);

      return () => {
        left.removeEventListener('ended', handleLeftEnded);
        right.removeEventListener('ended', handleRightEnded);
      };
    }

    let rafId: number;
    let mouseX = window.innerWidth / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const scrub = () => {
      const width = window.innerWidth;
      const centerX = width / 2;
      const deadZone = Math.max(30, width * 0.05);

      const left = leftVideoRef.current;
      const right = rightVideoRef.current;

      const isLeftOfCenter = mouseX < centerX - deadZone;
      const isRightOfCenter = mouseX > centerX + deadZone;

      if (isLeftOfCenter) {
        if (activeSideRef.current !== 'right') {
          activeSideRef.current = 'right';
          setActiveVideo('right');
        }
        if (right && right.duration && !right.seeking) {
          const availableRange = centerX - deadZone;
          const dist = Math.max(0, centerX - deadZone - mouseX);
          const progress = Math.min(1, Math.max(0, dist / availableRange));
          right.currentTime = progress * right.duration;
        }
      } else if (isRightOfCenter) {
        if (activeSideRef.current !== 'left') {
          activeSideRef.current = 'left';
          setActiveVideo('left');
        }
        if (left && left.duration && !left.seeking) {
          const availableRange = width - (centerX + deadZone);
          const dist = Math.max(0, mouseX - (centerX + deadZone));
          const progress = Math.min(1, Math.max(0, dist / availableRange));
          left.currentTime = progress * left.duration;
        }
      } else {
        // Within dead zone
        if (activeSideRef.current === 'right' && right && !right.seeking) {
          right.currentTime = 0;
        } else if (activeSideRef.current === 'left' && left && !left.seeking) {
          left.currentTime = 0;
        }
      }

      rafId = requestAnimationFrame(scrub);
    };

    rafId = requestAnimationFrame(scrub);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Hide video container when scrolled past viewport
  const isScrolledPast = typeof window !== 'undefined' && scrollY > (window.innerHeight * 1.05);

  return (
    <div
      id="main-canvas"
      ref={containerRef}
      className={`fixed inset-0 w-full h-full pointer-events-none transition-opacity duration-700 overflow-hidden z-0 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${isScrolledPast ? 'invisible' : 'visible'}`}
    >
      {/* Background Ambience / Dark Gradient Glow */}
      <div className="absolute inset-0 bg-radial-at-c from-amber-500/10 via-transparent to-black pointer-events-none z-10" />

      {/* Subtle brand watermark & vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 pointer-events-none z-10" />

      {/* Video Left */}
      <video
        ref={leftVideoRef}
        src={leftVideoSrc}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          activeVideo === 'left' ? 'opacity-90 block' : 'opacity-0 hidden'
        }`}
      />

      {/* Video Right */}
      <video
        ref={rightVideoRef}
        src={rightVideoSrc}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          activeVideo === 'right' ? 'opacity-90 block' : 'opacity-0 hidden'
        }`}
      />

      {/* Fallback styling showcase overlay if video stream fails */}
      <div className="absolute inset-0 bg-[#090909] -z-10 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-amber-500/10 blur-[120px] animate-pulse" />
      </div>
    </div>
  );
};
