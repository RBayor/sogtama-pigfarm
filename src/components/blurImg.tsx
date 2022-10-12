import { useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";

const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export type ImageT = {
  id: number;
  img: string;
  created_at: string;
};

export const BlurImage = ({ image }: { image: ImageT }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="group hover:scale-105">
      <Link href={image.img}>
        <a>
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image
              alt={image.img}
              src={image.img}
              layout="fill"
              objectFit="cover"
              className={cn(
                "duration-700 ease-in-out group-hover:opacity-75",
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              )}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
          <h3 className="mt-1 text-sm text-gray-700 italic font-semibold">
            Image - {image.id}
          </h3>
          <small className="mt-4 text-xs text-gray-700 italic font-semibold">
            {`${dayjs(image.created_at)}`}
          </small>
        </a>
      </Link>
    </div>
  );
};
