"use client";

export function FigmaCursor({ name, color, position, animationClass = "animate-hovering" }: {
  name: string;
  color: string;
  position: string;
  animationClass?: string;
}) {
  return (
    <div className={`absolute ${position} ${animationClass} z-50 hidden md:block`}>
      <svg width="23" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#a)">
          <path d="m7.5 17.5-2-12 10 6L10 13l-2.5 4.5Z" fill={color}></path>
          <path d="m5.757 5.071-.928-.557.178 1.068 2 12 .235 1.412.695-1.251 2.398-4.316 5.297-1.445 1.13-.308-1.005-.603-10-6Z" stroke="#fff"></path>
        </g>
        <defs>
          <filter id="a" x=".158" y=".528" width="21.866" height="24.959" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
            <feOffset dy="1"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix>
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_4"></feBlend>
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_4" result="shape"></feBlend>
          </filter>
        </defs>
      </svg>
      <span
        className="absolute top-6 left-5 px-2 py-1.5 text-[0.65rem] text-white rounded"
        style={{ backgroundColor: color }}
      >
        {name}
      </span>
    </div>
  );
}
