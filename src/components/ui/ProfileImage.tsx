"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { FC } from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: number;
}

export const ProfileImage: FC<ProfileImageProps> = ({
  src,
  alt,
  size = 180,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="relative flex items-center justify-center"
  >
    {/* Glow ring */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] opacity-20 blur-xl" />

    <div
      className="relative rounded-full overflow-hidden border-2 border-[rgba(0,212,255,0.4)] shadow-[0_0_20px_rgba(0,212,255,0.3)]"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover"
        priority
      />
    </div>
  </motion.div>
);
