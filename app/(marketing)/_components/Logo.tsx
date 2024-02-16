import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div
      className="
      hidden
      md:flex
        items-center
        gap-x-2
    "
    >
      <Image
        src="/logo.png"
        alt="Veritas Opus"
        width={40}
        height={40}
        className="dark:hidden"
      />
      <Image
        src="/logo.png"
        alt="Veritas Opus"
        width={40}
        height={40}
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}>
        <span
          className="
          font-bold
          text-lg
          "
        >
          Veritas
        </span>
        <span
          className="
          font-light
          text-lg
          "
        >
          Opus
        </span>
      </p>
    </div>
  );
};

export default Logo;
