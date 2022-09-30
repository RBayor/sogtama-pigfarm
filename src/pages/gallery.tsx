import Link from "next/link";
import React from "react";
import { BlurImage, ImageT } from "../components/blurImg";

const Gallery = ({ images }: { images: ImageT[] }) => {
  // const img: ImageT = {
  //   id: 2,
  //   imageSrc: "/img/logo.png",
  // };
  return (
    <>
      <div className="flex flex-col p-3 items-start max-w-2xl">
        <Link href="/">
          <a className="ring-2 p-3 ring-emerald-500 hover:bg-emerald-700 rounded">
            Home
          </a>
        </Link>
      </div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image) => (
            <BlurImage key={image.id} image={image} />
          ))}
          {/* <BlurImage image={img} /> */}
        </div>
      </div>
    </>
  );
};

export default Gallery;
export async function getStaticProps() {
  // const supabaseAdmin = createClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  //   process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  // )

  // const { data } = await supabaseAdmin.from('images').select('*').order('id')
  const imgs = [
    {
      id: 1,
      imageSrc: "/img/logo.png",
    },
    {
      id: 2,
      imageSrc: "/img/logo.png",
    },
    {
      id: 3,
      imageSrc: "/img/logo.png",
    },
    {
      id: 4,
      imageSrc: "/img/logo.png",
    },
    {
      id: 5,
      imageSrc: "/img/logo.png",
    },
    {
      id: 6,
      imageSrc: "/img/logo.png",
    },
    {
      id: 7,
      imageSrc: "/img/logo.png",
    },
    {
      id: 8,
      imageSrc: "/img/logo.png",
    },
    {
      id: 9,
      imageSrc: "/img/logo.png",
    },
    {
      id: 10,
      imageSrc: "/img/logo.png",
    },
    {
      id: 11,
      imageSrc: "/img/logo.png",
    },
    {
      id: 12,
      imageSrc: "/img/logo.png",
    },
    {
      id: 13,
      imageSrc: "/img/logo.png",
    },
    {
      id: 14,
      imageSrc: "/img/logo.png",
    },
  ];
  return {
    props: {
      images: imgs,
    },
  };
}
