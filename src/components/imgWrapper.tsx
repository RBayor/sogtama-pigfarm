import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

export const ImageWrapper: FC<{
  src: string;
  alt: string;
  enterLeft: boolean;
}> = ({ src, alt, enterLeft }) => {
  return (
    <motion.div
      initial={{ x: enterLeft ? -1000 : 1000 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", damping: 20, duration: 2000 }}
      exit={{ y: -9999 }}
    >
      <Image src={src} layout="fixed" width={700} height={400} alt={alt} />
    </motion.div>
  );
};
