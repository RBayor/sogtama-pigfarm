import Image from "next/image";
import Link from "next/link";

export const LandingPhone = () => {
  return (
    <div className="lg:hidden">
      <div className="h-screen w-full"></div>

      <div className="flex flex-col w-full items-center p-3 absolute mt-10 right-0 top-0 mx-auto text-center space-y-3 text-3xl text-slate-50 reletive font-bold uppercase">
        <Image
          className="relative"
          src="/img/logo.png"
          layout="fixed"
          height={150}
          width={200}
          alt="logo"
          priority
        />
        <h1 className="">Songtama</h1>
        <h2 className="">Pig Farm</h2>
        <p className="text-xl">high quality organically feed pigs</p>
        <Link href="/gallery">
          <a className="text-xl max-w-xs ring-2 p-4 ring-emerald-500 hover:bg-emerald-700 rounded">
            Gallery
          </a>
        </Link>
      </div>
    </div>
  );
};

// <div className="flex flex-col w-full items-center p-3 absolute mt-10 right-0 top-0 mx-auto text-center space-y-3 text-3xl text-slate-50 reletive font-bold uppercase">
//   <Image
//     className="relative"
//     src="/img/logo.png"
//     layout="fixed"
//     height={150}
//     width={200}
//     priority
//   />
//   <h1 className="shadow-lg">Songtama</h1>
//   <h2 className="shadow-lg">Pig Farm</h2>
//   <p className="text-2xl">high quality organically feed pigs</p>
//   <Link href="/gallery">
//     <a className="text-xl max-w-xs ring-2 p-4 ring-emerald-500 hover:bg-emerald-700 rounded">
//       Gallery
//     </a>
//   </Link>
// </div>;
