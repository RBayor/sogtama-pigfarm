import { createClient } from "@supabase/supabase-js";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { BlurImage, ImageT } from "../components/blurImg";

const Gallery = ({ images }: { images: ImageT[] }) => {
  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <div className="flex flex-col p-3 items-start max-w-2xl">
        <Link href="/">
          <a className="ring-2 p-3 ring-emerald-500 hover:bg-emerald-700 rounded hover:text-white">
            Home
          </a>
        </Link>
      </div>
      <div className="">
        <div className="flex flex-col w-full text-center">
          <h1 className="text-5xl">Gallery</h1>
        </div>

        <div className="mx-auto max-w-2xl py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {images.map((image) => (
              <BlurImage key={image.id} image={image} />
            ))}
            {/* <BlurImage image={img} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.SUPABASE_URL ?? "",
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? ""
  );

  let { data: gallery, error } = await supabaseAdmin
    .from("gallery")
    .select("*");

  return {
    props: {
      images: gallery ?? [],
    },
  };
}
