"use client";

import Image from "next/image";
import { useState } from "react";

interface SEOEnhancedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  fallbackSrc?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  sizes?: string;
  className?: string;
  [key: string]: any;
}

export default function SEOEnhancedImage({
  src,
  alt,
  width,
  height,
  fallbackSrc = "/images/default-country.jpg",
  priority = false,
  loading = "lazy",
  sizes,
  className = "",
  ...props
}: SEOEnhancedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    if (!imageError && fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setImageError(true);
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={loading}
      sizes={sizes}
      className={className}
      onError={handleError}
      {...props}
    />
  );
} 