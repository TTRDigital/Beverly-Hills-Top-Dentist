"use client";

import { useEffect, useRef } from "react";
import type { Video } from "@/lib/types";

/**
 * A short clip shown in place of a photo: muted, looped and inline, with no controls. It autoplays only because it is
 * muted (there is no audio track either). The poster fills the box until the first frame. It fills its parent, which
 * must have a fixed height or aspect ratio, so nothing moves when it loads. With reduced motion it stays on the poster.
 */
export function LoopVideo({ video, position, className = "absolute inset-0 h-full w-full object-cover" }: { video: Video; position?: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // React sets `muted` as a property, not an attribute, so set it again before playing.
    el.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.pause();
      el.removeAttribute("autoplay");
      return;
    }
    el.play().catch(() => {
      // Autoplay refused (for example, data saver): the poster stays.
    });
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      style={position ? { objectPosition: position } : undefined}
      width={video.width}
      height={video.height}
      poster={video.poster}
      aria-label={video.label}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      disablePictureInPicture
    >
      <source src={video.src} type="video/mp4" />
    </video>
  );
}
