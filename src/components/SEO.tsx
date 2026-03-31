import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
};

export default function SEO({ title, description, path = "" }: SEOProps) {
  useEffect(() => {
    const baseUrl = "https://hirenestworkforce.com";
    const fullUrl = `${baseUrl}${path}`;

    // ================================
    // ✅ TITLE
    // ================================
    document.title = title;

    // ================================
    // ✅ BASIC META TAGS
    // ================================
    const setMetaTag = (selector: string, attr: string, key: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Description
    setMetaTag("meta[name='description']", "name", "description", description);

    // Robots
    setMetaTag("meta[name='robots']", "name", "robots", "index, follow");

    // Charset (safe check)
    if (!document.querySelector("meta[charset]")) {
      const charset = document.createElement("meta");
      charset.setAttribute("charset", "UTF-8");
      document.head.appendChild(charset);
    }

    // Viewport (mobile optimization)
    if (!document.querySelector("meta[name='viewport']")) {
      const viewport = document.createElement("meta");
      viewport.setAttribute("name", "viewport");
      viewport.setAttribute("content", "width=device-width, initial-scale=1.0");
      document.head.appendChild(viewport);
    }

    // ================================
    // 🔥 OPEN GRAPH (LINKEDIN / WHATSAPP)
    // ================================
    setMetaTag("meta[property='og:title']", "property", "og:title", title);
    setMetaTag("meta[property='og:description']", "property", "og:description", description);
    setMetaTag("meta[property='og:url']", "property", "og:url", fullUrl);
    setMetaTag("meta[property='og:type']", "property", "og:type", "website");
    setMetaTag(
      "meta[property='og:image']",
      "property",
      "og:image",
      "https://hirenestworkforce.com/images/og-image.png"
    );

    // ================================
    // 🔥 TWITTER (PREMIUM PREVIEW)
    // ================================
    setMetaTag("meta[name='twitter:card']", "name", "twitter:card", "summary_large_image");
    setMetaTag("meta[name='twitter:title']", "name", "twitter:title", title);
    setMetaTag("meta[name='twitter:description']", "name", "twitter:description", description);
    setMetaTag(
      "meta[name='twitter:image']",
      "name",
      "twitter:image",
      "https://hirenestworkforce.com/images/og-image.png"
    );

    // ================================
    // 🔥 CANONICAL (CRITICAL FIX)
    // ================================
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

  }, [title, description, path]);

  return null;
}
