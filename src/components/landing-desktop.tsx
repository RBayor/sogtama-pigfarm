import Image from "next/image";
import Link from "next/link";

export const LandingDesktop = () => {
  return (
    <div className="hidden lg:visible  ">
      <div className="absolute mt-10 right-0 top-0 text-center space-y-3 mr-28 text-3xl text-slate-50 reletive font-bold uppercase">
        <Image
          className="relative"
          src="/img/logo.png"
          layout="fixed"
          height={150}
          width={200}
          alt="logo"
          priority
        />
        <h1>Songtama</h1>
        <h2>Pig Farm</h2>
        <p className="text-2xl">high quality organically feed pigs</p>
        <Link href="/gallery">
          <a className="text-xl ring-2 p-4 ring-emerald-500 hover:bg-emerald-700 rounded">
            Gallery
          </a>
        </Link>
      </div>
    </div>
  );
};
