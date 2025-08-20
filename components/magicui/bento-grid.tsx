import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta?: string;
  iconColor?: string;
  image?: ReactNode;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  iconColor,
  image,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl border-[5px] border-[#FF0000] min-h-[25rem]",
      // light styles
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
    {...props}
  >
    <div className="absolute inset-0">{background}</div>
    {image && (
      <div className="absolute inset-0 flex items-center justify-center opacity-80">
        {image}
      </div>
    )}
    <div className="p-8 flex flex-col justify-end h-full">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-4">
        <div className="flex items-center gap-3">
          <h3 style={{fontFamily: 'SF Regular, sans-serif'}} className="text-xl font-normal text-neutral-700 dark:text-neutral-300">
            {name}
          </h3>
          <Icon className="h-6 w-6 origin-left transform-gpu" style={{ color: iconColor || '#6b7280' }} />
        </div>
                    <p style={{
              fontSize: '0.875rem',
              maxWidth: '32rem',
              color: 'rgb(212 212 212)',
              fontWeight: 'lighter',
              letterSpacing: '0.05em',
              lineHeight: '1.5',
              fontFamily: 'Apple, sans-serif'
            }}>{description}</p>
      </div>

      {cta && (
        <div
          className={cn(
            "lg:hidden pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 mt-4",
          )}
        >
          <Button
            variant="link"
            asChild
            size="sm"
            className="pointer-events-auto p-0"
          >
            <a href={href}>
              {cta}
              <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
            </a>
          </Button>
        </div>
      )}
    </div>

    {cta && (
      <div
        className={cn(
          "hidden lg:flex pointer-events-none absolute bottom-0 w-full translate-y-10 transform-gpu flex-row items-center p-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <Button
          variant="link"
          asChild
          size="sm"
          className="pointer-events-auto p-0"
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </a>
        </Button>
      </div>
    )}

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };