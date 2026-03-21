import { siteConfig } from "@/data/site";
import { Service } from "@/data/services";

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": siteConfig.companyName,
    "image": `${siteConfig.domain}${siteConfig.logo}`,
    "@id": siteConfig.domain,
    "url": siteConfig.domain,
    "telephone": siteConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14 Sergison Rd",
      "addressLocality": "Parish",
      "postalCode": "RH16 1HS",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.002, // Approximate for Parish
      "longitude": -0.101
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": []
  };
};

export const generateServiceSchema = (service: Service) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.companyName
    },
    "areaServed": {
      "@type": "State",
      "name": "Parish"
    },
    "description": service.intro.text[0]
  };
};
