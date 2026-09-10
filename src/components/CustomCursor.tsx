import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch || window.innerWidth < 1024) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('button, a, input, select, textarea, [role="button"], .bp-card');
      setIsHovering(!!interactive);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
      }}
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        <svg
          viewBox="0 0 48 48"
          className={`w-full h-full transition-transform duration-500 ${isHovering ? 'rotate-90 scale-110' : 'rotate-0'}`}
          fill="none"
        >
          <circle
            cx="24"
            cy="24"
            r="21.5"
            stroke="#FFFFFF"
            strokeWidth="1.75"
            strokeDasharray="3 2"
            className="opacity-95"
          />
          <path
            d="M16 18C18 21 21 23 24 24C27 23 30 21 32 18M16 30C19 28 21 25 24 24C27 25 29 28 32 30M24 16V32"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="24" r="2.5" fill="#FFFFFF" />
        </svg>
      </div>
    </div>
  );
};
