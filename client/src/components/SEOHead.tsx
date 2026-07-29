import { Helmet } from "react-helmet-async";

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
  title = "MarkitUp Group Limited | Marketing That Drives Real Business Growth",
  description = "MarkitUp Group Limited is a UK-based digital marketing and promotion company helping businesses attract customers, increase visibility, and grow through marketing strategy, promotional platforms, and technology solutions.",
  keywords = "MarkitUp Group Limited, digital marketing UK, business promotion, lead generation, technology solutions, restaurant promotion platform, UK marketing company",
  canonical,
  ogTitle = "MarkitUp Group Limited | Marketing That Drives Real Business Growth",
  ogDescription = "UK-based digital marketing, promotion, and technology solutions for businesses focused on visibility, customer acquisition, and growth.",
  ogImage = "https://markitupgroup.com/apple-touch-icon.png",
  ogUrl,
  twitterTitle = "MarkitUp Group Limited | Marketing That Drives Real Business Growth",
  twitterDescription = "Digital marketing, promotion platforms, and technology solutions for modern businesses.",
  structuredData,
  noindex = false,
}: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* OpenGraph */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl || canonical || "https://markitupgroup.com"} />
      <meta property="og:site_name" content="MarkitUp Group" />
      <meta property="og:locale" content="en_GB" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
