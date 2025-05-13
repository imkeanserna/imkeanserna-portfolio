"use client";

import { useTheme } from "@/context/ThemeProvider";

export const Background = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base background image with grayscale */}
        {isDark && (
          <div className="absolute inset-0 h-full grayscale">
            <div
              className="absolute inset-0 h-full bg-[url('/home/background-image.avif')] bg-top bg-no-repeat will-change-transform"
              style={{
                transform: 'translateY(0px)',
                opacity: 0.3,
                filter: 'brightness(1.8) contrast(1.1)'
              }}
            ></div>
          </div>
        )}

        {/* Colored boxes */}
        <div className="absolute inset-0 h-[700px] w-full">
          {/* Left side box */}
          <div className="absolute left-[212px] top-[210px] w-[200px] h-[200px] bg-gradient-to-br from-indigo-500/20 to-transparent opacity-30"></div>
          <div className="absolute left-[632px] bottom-[80px] w-[200px] h-[200px] bg-gradient-to-br from-indigo-500/20 to-transparent opacity-30"></div>

          {/* Right side boxes */}
          <div className="absolute right-[14px] top-[10px] w-[200px] h-[200px] bg-gradient-to-br from-sky-500/20 to-transparent opacity-30"></div>
          <div className="absolute right-[433px] top-[210px] w-[200px] h-[200px] bg-gradient-to-br from-sky-500/20 to-transparent opacity-30"></div>
          <div className="absolute right-[223px] bottom-[80px] w-[200px] h-[200px] bg-gradient-to-br from-violet-500/20 to-transparent opacity-30"></div>
        </div>

        {/* Dot grid overlay */}
        <div className={`absolute h-[1200px] w-full  [mask-image:radial-gradient(100%_100%_at_top,white,transparent)] 
          ${isDark
            ? "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10"
            : "bg-[radial-gradient(#fdba74_1px,transparent_1px)] [background-size:16px_16px] opacity-60"
          }
          `}></div>

        {/* Dot grid right center overlay */}
        <div className={`absolute top-1/2 right-0 transform -translate-y-1/2 h-[800px] w-[700px] [mask-image:radial-gradient(100%_100%_at_right,white,transparent)] 
          ${isDark
            ? "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10"
            : "bg-[radial-gradient(#fdba74_1px,transparent_1px)] [background-size:16px_16px] opacity-100"
          }
        `}></div>

        {/* Dot grid left overlay */}
        <div className={`absolute bottom-0 h-[700px] w-[700px] [mask-image:radial-gradient(100%_100%_at_bottom,white,transparent)] 
          ${isDark
            ? "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10"
            : "bg-[radial-gradient(#fdba74_1px,transparent_1px)] [background-size:16px_16px] opacity-100"
          }
        `}></div>

        {/*Horizontal glow to the bottom left corner*/}
        <div
          className={`absolute -bottom-52 h-[700px] -left-52 w-[700px] max-w-screen-xl 
          ${isDark
              ? "bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.3)_0%,transparent_70%)] opacity-20"
              : "bg-[radial-gradient(ellipse_at_center,rgba(253,186,116,0.4)_0%,transparent_70%)] opacity-100"
            }`}
        ></div>

        {/* Dot grid right overlay */}
        <div className={`absolute bottom-0 h-[700px] right-0 w-[700px] [mask-image:radial-gradient(100%_100%_at_bottom,white,transparent)] 
          ${isDark
            ? "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10"
            : "bg-[radial-gradient(#fdba74_1px,transparent_1px)] [background-size:16px_16px] opacity-100"
          }
        `}></div>

        {/*Horizontal glow to the bottom right corner*/}
        <div
          className={`absolute -bottom-52 h-[700px] -right-52 w-[700px] max-w-screen-xl 
          ${isDark
              ? "bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.3)_0%,transparent_70%)] opacity-20"
              : "bg-[radial-gradient(ellipse_at_center,rgba(253,186,116,0.4)_0%,transparent_70%)] opacity-100"
            }`}
        ></div>

        {/* Dot grid center overlay */}
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[300px] w-[500px] [mask-image:radial-gradient(100%_100%_at_bottom,white,transparent)] 
          ${isDark
            ? "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10"
            : "bg-[radial-gradient(#fdba74_1px,transparent_1px)] [background-size:16px_16px] opacity-100"
          }
        `}></div>


        {/* Line grid overlay */}
        <div className={`absolute inset-0 h-[700px] w-full 
          ${isDark
            ? "bg-[linear-gradient(to_right,#e5e7eb_1.5px,transparent_1.5px),linear-gradient(to_bottom,#e5e7eb_1.5px,transparent_1.5px)] opacity-6"
            : "bg-[linear-gradient(to_right,#fdba74_1px,transparent_1px),linear-gradient(to_bottom,#fdba74_1px,transparent_1px)] bg-[size:210px_210px] opacity-25"
          }
          bg-[size:210px_210px]`}></div>

        {/* {/* Additional horizontal white glow */}
        {!isDark && (
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-xl h-[600px] 
              bg-[radial-gradient(ellipse_at_center,rgba(253,186,116,0.4)_0%,transparent_70%)] opacity-100
              }`}
          ></div>
        )}
      </div>
    </div>
  );
}

