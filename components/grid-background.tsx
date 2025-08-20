"use client";

interface GridBackgroundProps {
  showFade?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function GridBackground({ showFade = true, className = "", children }: GridBackgroundProps) {
  return (
    <div
      className={`relative flex items-center justify-center bg-black/80 ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(255,255,255,0.08)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`
      }}
    >
      {/* Radial gradient for the container to give a faded look */}
      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"
        />
      )}
      {children}
    </div>
  );
}
