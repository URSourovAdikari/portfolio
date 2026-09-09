import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sourov Chandra Adikari",
    short_name: "Sourov Adikari",
    description: "Personal portfolio of Sourov Chandra Adikari — Student, Developer, and Creator.",
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#050816",
    icons: [
        {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
        },
        {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
        },
    ],
  };
}