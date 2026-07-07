"use client";
/* YouTube-embed die 1080p afdwingt: YouTube kiest de kwaliteit op basis van
   de spelergrootte, dus renderen we het iframe intern op 1920x1080 en schalen
   het met CSS terug naar de containerbreedte. Visueel past het gewoon, maar
   YouTube serveert de 1080p-stream. */
import { useEffect, useRef, useState } from "react";

const BASE_W = 1920;
const BASE_H = 1080;

/* Bepaal de embed-URL. Een Loom-deellink (loom.com/share/...) wordt
   herkend en omgezet naar de Loom-embed. Anders gaan we uit van een
   YouTube video-ID. */
function embedSrc(videoId: string): string {
  const loom = videoId.match(/loom\.com\/(?:share|embed)\/([a-zA-Z0-9]+)/);
  if (loom) {
    return `https://www.loom.com/embed/${loom[1]}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`;
  }
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&vq=hd1080`;
}

export default function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / BASE_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9",
        borderRadius: 12,
        overflow: "hidden",
        background: "#000",
      }}
    >
      {scale > 0 && (
        <iframe
          src={embedSrc(videoId)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          width={BASE_W}
          height={BASE_H}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: BASE_W,
            height: BASE_H,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            border: 0,
          }}
        />
      )}
    </div>
  );
}
