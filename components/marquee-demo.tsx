import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Xylander",
    username: "@shadowKill",
    body: "El aimbot funciona perfecto, no falla un solo disparo. Muy recomendable.",
    img: "https://avatar.vercel.sh/jack"
  },
  {
    name: "Zyphra",
    username: "@aimMaster",
    body: "Este hack me da ventaja total, es imposible que me ganen ahora.",
    img: "https://avatar.vercel.sh/jill"
  },
  {
    name: "Quorin",
    username: "@wallBreaker",
    body: "Con el wallhack veo a todos a través de las paredes, brutal.",
    img: "https://avatar.vercel.sh/john"
  },
  {
    name: "Veltrix",
    username: "@godMode",
    body: "El cheat del aimbot es increíble, precisión automática total.",
    img: "https://avatar.vercel.sh/jane"
  },
  {
    name: "Dravenox",
    username: "@silentAim",
    body: "El silent aim está demasiado roto, nadie sospecha nada.",
    img: "https://avatar.vercel.sh/jenny"
  },
  {
    name: "Klythar",
    username: "@hackLord",
    body: "El combo de ESP y aimbot es lo mejor que probé hasta ahora.",
    img: "https://avatar.vercel.sh/james"
  },
  {
    name: "Nexara",
    username: "@mobileGuru",
    body: "Funciona de maravilla en mi Android 9, ningún lag y súper estable.",
    img: "https://avatar.vercel.sh/nexara"
  },
  {
    name: "Sylith",
    username: "@iPhoneAce",
    body: "Lo probé en mi iPhone y va perfecto, los controles son súper fluidos.",
    img: "https://avatar.vercel.sh/sylith"
  },
  {
    name: "Ravion",
    username: "@lowEndPro",
    body: "Tengo un celular gama baja y el hack corre sin problemas, increíble.",
    img: "https://avatar.vercel.sh/ravion"
  },
  {
    name: "Zentara",
    username: "@futureTech",
    body: "Actualicé a Android 16 y el aimbot sigue funcionando como si nada.",
    img: "https://avatar.vercel.sh/zentara"
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full" width="48" height="48" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption style={{fontFamily: 'SF Regular, sans-serif'}} className="text-lg font-medium dark:text-white">
            {name}
          </figcaption>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.4)',
            fontWeight: 'lighter',
            letterSpacing: '0.05em',
            margin: 0,
            lineHeight: '1.5',
            fontFamily: 'Apple, sans-serif'
          }}>{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-base leading-relaxed">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-8">
      <Marquee className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#070707] to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#070707] to-transparent"></div>
    </div>
  );
}
