"use client";

import { useState } from "react";

interface FallbackImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
}

export function FallbackImage({ className, fallbackText = "Gerçek Görsel Eklenecek", ...props }: FallbackImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-primary/5 ${className}`}>
        <span className="text-primary/40 font-medium tracking-widest uppercase text-sm text-center px-4">
          {fallbackText}
        </span>
      </div>
    );
  }

  return (
    <img
      {...props}
      className={className}
      onError={() => setError(true)}
    />
  );
}
