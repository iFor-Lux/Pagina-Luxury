"use client";

import { useEffect } from "react";

export default function Background() {
  useEffect(() => {
    const loadSpline = async () => {
      try {
        const { Application } = await import("@splinetool/runtime");

        const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
        if (!canvas) {
          console.error("Canvas with ID 'canvas3d' not found");
          return;
        }

        const app = new Application(canvas);
        const onLoad = () => {
          console.log("Spline scene loaded");
        };

        // Carga el archivo .splinecode desde la carpeta public
        app
          .load("/scene.splinecode")
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
    <div className="absolute inset-0 w-full h-full">
      <canvas
        id="canvas3d"
        className="w-full h-full object-cover"
        style={{
          position: "absolute",
          top: -8,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          transform: 'rotate(180deg)',
          pointerEvents: 'none'
        }}
      />
      <div className="absolute inset-0 z-[2]" style={{ backgroundColor: 'rgba(7, 7, 8, 0.3)' }} />
    </div>
  );
}
