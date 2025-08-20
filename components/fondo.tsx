"use client";

import { useEffect } from "react";

export default function Fondo() {
  useEffect(() => {
    const loadSpline = async () => {
      try {
        const { Application } = await import("@splinetool/runtime");

        const canvas = document.getElementById("canvas3d-fondo") as HTMLCanvasElement;
        if (!canvas) {
          console.error("Canvas with ID 'canvas3d-fondo' not found");
          return;
        }

        const app = new Application(canvas);
        const onLoad = () => {
          console.log("Spline fondo scene loaded");
        };

        app
          .load("/scenefondo.splinecode")
          .then(onLoad)
          .catch((error) => {
            console.error("Error loading Spline scene:", error);
          });
      } catch (error) {
        console.error("Error loading Spline:", error);
      }
    };

    if (typeof window !== "undefined") {
      loadSpline();
    }
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas
        id="canvas3d-fondo"
        className="w-full h-full object-cover"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      />
      
      {/* Texto LUXURY centrado y grande - siempre en el medio */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none" style={{ transform: 'translateY(10%)' }}>
        <div className="mx-auto pl-6 pr-6 sm:pl-8 sm:pr-8 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white/80 tracking-widest text-center transition-all duration-700 ease-in-out">
            LUXURY
          </h1>
        </div>
      </div>
    </div>
  );
}

