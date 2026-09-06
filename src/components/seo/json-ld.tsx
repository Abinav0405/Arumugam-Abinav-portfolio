import { siteConfig } from "@/data/site";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: "Student Developer",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Singapore",
      addressCountry: "SG",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: siteConfig.school.name,
      address: siteConfig.school.location,
    },
    sameAs: [siteConfig.social.github],
    knowsAbout: [
      "Software development",
      "Artificial intelligence",
      "Web development",
      "Mobile app development",
      "Entrepreneurship",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} Portfolio`,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    inLanguage: "en-SG",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
