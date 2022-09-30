import Image from "next/image";
import { FC } from "react";

export const ImageWrapper: FC<{
  src: string;
  alt: string;
  enterLeft: boolean;
}> = ({ src, alt, enterLeft }) => {
  return (
    <div>
      <Image src={src} layout="responsive" width={700} height={400} alt={alt} />
    </div>
  );
};
