// src/seo/schema.ts
// Enterprise JSON-LD Schema for HireNest Workforce

export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.hirenestworkforce.com/#organization",
      "name": "HireNest Workforce",
      "url": "https://www.hirenestworkforce.com/",
      "logo": "https://www.hirenestworkforce.com/logo.png",
      "description": "AI-powered workforce solutions company delivering IT staffing, recruitment, software development and HireNest OS.",
      "email": "info@hirenestworkforce.com",
      "sameAs": [
        "https://www.linkedin.com/company/hirenestworkforce"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "info@hirenestworkforce.com"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.hirenestworkforce.com/#website",
      "url": "https://www.hirenestworkforce.com/",
      "name": "HireNest Workforce",
      "publisher": {
        "@id": "https://www.hirenestworkforce.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.hirenestworkforce.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.hirenestworkforce.com/#home",
      "url": "https://www.hirenestworkforce.com/",
      "name": "HireNest Workforce",
      "isPartOf": {
        "@id": "https://www.hirenestworkforce.com/#website"
      },
      "about": {
        "@id": "https://www.hirenestworkforce.com/#organization"
      }
    },
    {
      "@type": "ProfessionalService",
      "name": "HireNest Workforce",
      "provider": {
        "@id": "https://www.hirenestworkforce.com/#organization"
      },
      "areaServed": "India",
      "serviceType": [
  "IT Staffing",
  "Contract Staffing",
  "Permanent Recruitment",
  "IT Consulting",
  "Software Development",
  "AI Solutions",
  "Vendor Collaboration",
  "Hire Developers",
  "Technology Consulting"
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "HireNest Workforce",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"IT Staffing"}},
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"Contract Staffing"}},
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"Permanent Recruitment"}},
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"Software Development"}},
        {"@type":"Offer","itemOffered":{"@type":"Service","name":"AI Solutions"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Vendor Collaboration"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Hire Developers"}}
      ]
    },
    {
      "@type": "SoftwareApplication",
      "name": "HireNest OS",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "creator": {
        "@id": "https://www.hirenestworkforce.com/#organization"
      }
    },
    {
      "@type":"FAQPage",
      "mainEntity":[
        {
          "@type":"Question",
          "name":"What is HireNest Workforce?",
          "acceptedAnswer":{
            "@type":"Answer",
            "text":"HireNest Workforce provides AI-powered IT staffing, contract staffing, permanent recruitment, software development, IT consulting, AI solutions, and workforce automation through its proprietary HireNest OS platform."
          }
        },
        {
          "@type":"Question",
          "name":"What is HireNest OS?",
          "acceptedAnswer":{
            "@type":"Answer",
            "text":"HireNest OS is the company's recruitment and workforce operations platform."
          }
        }
      ]
    },
    {
      "@type":"BreadcrumbList",
      "itemListElement":[
        {
          "@type":"ListItem",
          "position":1,
          "name":"Home",
          "item":"https://www.hirenestworkforce.com/"
        }
      ]
    }
  ]
};

export default schema;
