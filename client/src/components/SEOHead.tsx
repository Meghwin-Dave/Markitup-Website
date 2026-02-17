import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  structuredData?: object;
  noindex?: boolean;
}

export default function SEOHead({
  title = "IT Services Company | ERPNext, Django, React, Node, Mobile App Development | MarkitUp Group",
  description = "MarkitUp Group provides expert IT services including ERPNext development, Django, React, Node.js, PHP, mobile app development, and custom software solutions worldwide, including the UK.",
  keywords = "IT services UK, software development company UK, ERPNext developer UK, Django developer UK, React developer UK, Node.js developer UK, mobile app development UK, website development UK, PHP developer UK, IT company UK, global IT services",
  canonical,
  ogTitle = "Professional IT Services Company – ERPNext, Django, React, Node | MarkitUp Group",
  ogDescription = "Expert IT services and software development company serving clients globally and in the UK. Specializing in ERPNext, Django, React, Node.js, and mobile app development.",
  ogImage = "https://markitupgroup.com/og-image.jpg",
  ogUrl,
  twitterTitle = "Top IT Services Company | ERPNext, Django, React Experts | MarkitUp Group",
  twitterDescription = "Hire expert developers for ERPNext, Django, React, Node, and mobile apps. Professional IT services company serving UK and worldwide.",
  structuredData,
  noindex = false,
}: SEOHeadProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Get or create meta tags
    const getOrCreateMeta = (name: string, attribute: string = "name") => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      return meta;
    };

    const getOrCreateLink = (rel: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      return link;
    };

    // Update description
    const descMeta = getOrCreateMeta("description");
    descMeta.content = description;

    // Update keywords
    const keywordsMeta = getOrCreateMeta("keywords");
    keywordsMeta.content = keywords;

    // Update robots
    const robotsMeta = getOrCreateMeta("robots");
    robotsMeta.content = noindex ? "noindex, nofollow" : "index, follow";

    // Update canonical
    if (canonical) {
      const canonicalLink = getOrCreateLink("canonical");
      canonicalLink.setAttribute("href", canonical);
    }

    // OpenGraph tags
    const ogTags = [
      { property: "og:title", content: ogTitle },
      { property: "og:description", content: ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { property: "og:url", content: ogUrl || canonical || "https://markitupgroup.com" },
      { property: "og:site_name", content: "MarkitUp Group" },
      { property: "og:locale", content: "en_GB" },
    ];

    ogTags.forEach(({ property, content }) => {
      const meta = getOrCreateMeta(property, "property");
      meta.content = content;
    });

    // Twitter Card tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: twitterTitle },
      { name: "twitter:description", content: twitterDescription },
      { name: "twitter:image", content: ogImage },
    ];

    twitterTags.forEach(({ name, content }) => {
      const meta = getOrCreateMeta(name);
      meta.content = content;
    });

    // Structured Data (JSON-LD)
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    if (structuredData) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterTitle,
    twitterDescription,
    structuredData,
    noindex,
  ]);

  return null;
}
