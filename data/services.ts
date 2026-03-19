export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  bullets: string[];
}

export interface Service {
  slug: string;
  title: string;
  hero: HeroSlide[];
  intro: {
    title: string;
    subtitle: string;
    text: string[];
    image: string;
    badges: boolean;
  };
  features: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; text: string }[];
  };
  process?: {
    title: string;
    subtitle: string;
    steps: { icon: string; title: string; text: string }[];
  };
}

export const services: Service[] = [
  {
    slug: "tarmac",
    title: "Tarmac Driveways",
    hero: [
      {
        image: "/images/tarmac1.webp",
        title: "Tarmac Driveway Experts Haywards Heath",
        subtitle: "Expert Installation & Guaranteed Quality",
        bullets: ["Free Surveys & No Obligation Quotes", "Plain / Custom Designs", "Hard-wearing Top Quality Materials", "Fully Insured & Guaranteed"]
      },
      {
        image: "/images/tarmac2.webp",
        title: "Quality Tarmac Driveways Haywards Heath",
        subtitle: "Residential & Commercial Surfacing",
        bullets: ["All Work Guaranteed", "Wide range of Colours & Patterns", "Top Quality Materials", "Fully Insured & Guaranteed"]
      }
    ],
    intro: {
      title: "Premium Quality Tarmac Driveways",
      subtitle: "Local & Trusted Tarmac Surfacing Specialists",
      text: [
        "At Fullers Paving, we specialize in laying high-quality tarmac driveways that combine durability with a sleek, professional finish. Whether you need a new driveway installation or resurfacing, our experienced team provides top-tier service tailored to your specific requirements.",
        "Tarmac is a highly popular choice for driveways due to its cost-effectiveness, quick installation time, and long-lasting properties. We ensure every project is completed to the highest standards."
      ],
      image: "/images/tarmac1.webp",
      badges: true
    },
    features: {
      title: "Why Choose a Tarmac Driveway?",
      subtitle: "Tarmac remains one of the most popular and cost-effective solutions for driveways and pathways. Here's why:",
      items: [
        { icon: "Clock", title: "Durability", text: "A properly laid tarmac driveway can withstand heavy use and extreme weather conditions for years." },
        { icon: "CheckCircle2", title: "Cost-Effective", text: "Tarmac offers a highly economical solution compared to block paving or resin." },
        { icon: "Wrench", title: "Low Maintenance", text: "Requires minimal upkeep. Simple sweeping and occasional washing keep it looking great." },
        { icon: "ShieldCheck", title: "Quick Installation", text: "Our efficient team can often lay a new tarmac surface much faster than other materials." }
      ]
    },
    process: {
      title: "Expert Installation & Guaranteed Quality",
      subtitle: "Fullers Paving prides itself on delivering comprehensive tarmac solutions.",
      steps: [
        { icon: "MapPin", title: "Free Site Assessment", text: "We visit your property to assess the area and provide an accurate quote." },
        { icon: "Wrench", title: "Preparation", text: "Proper groundwork is essential. We ensure a solid foundation before laying." },
        { icon: "Check", title: "Professional Laying", text: "Our skilled team lays the tarmac to a flawless, smooth finish." }
      ]
    },
  },
  {
    slug: "block-paving",
    title: "Block Paving",
    hero: [
      {
        image: "/images/block-paving1.webp",
        title: "Block Paved Driveways & Paths in Haywards Heath",
        subtitle: "Elegant, Durable & Bespoke Designs",
        bullets: ["Residential & Commercial Paving", "Wide range of Colours, Shapes & Textures", "Top Quality Materials", "Fully Insured & Guaranteed"]
      },
      {
        image: "/images/block-paving2.webp",
        title: "Block Paving Drives & Pathways",
        subtitle: "Expert Craftsmanship & Quality Materials",
        bullets: ["Free Surveys & No Obligation Quotes", "Plain / Custom Design Block Paving", "Hard-wearing Top Quality Materials", "Fully Insured & Guaranteed"]
      }
    ],
    intro: {
      title: "Bespoke Block Paving Specialists",
      subtitle: "Transform your home's exterior with stunning block paving.",
      text: [
        "Block paving is a versatile and attractive option for driveways and patios. It allows for highly customized designs, patterns, and color combinations.",
        "Our expert installers ensure a perfect finish that is not only beautiful but structurally sound and built to last."
      ],
      image: "/images/block-paving1.webp",
      badges: true
    },
    features: {
      title: "Why Choose Block Paving?",
      subtitle: "Discover the benefits of choosing block paving for your property.",
      items: [
        { icon: "CheckCircle2", title: "Aesthetic Appeal", text: "Creates a premium look that enhances kerb appeal." },
        { icon: "Wrench", title: "Easy Repairs", text: "Individual blocks can be replaced if damaged, unlike solid surfaces." },
        { icon: "ShieldCheck", title: "Durability", text: "Extremely hard-wearing and capable of handling heavy loads." }
      ]
    }
  },
  {
    slug: "resin-bound",
    title: "Resin Bound",
    hero: [
      {
        image: "/images/resin-bound1.webp",
        title: "Resin Bound Driveways & Paths in Haywards Heath",
        subtitle: "Seamless, Permeable & Stylish",
        bullets: ["Residential & Commercial Surfaces", "Wide range of Colours & Patterns", "Top Quality Materials", "Fully Insured & Guaranteed"]
      },
      {
        image: "/images/resin-bound2.webp",
        title: "Resin-Bound Drives & Pathways",
        subtitle: "The ultimate choice for a contemporary driveway",
        bullets: ["Free Surveys & No Obligation Quotes", "Plain / Custom Designs", "Hard-wearing Top Quality Materials", "Fully Insured & Guaranteed"]
      }
    ],
    intro: {
      title: "Modern Resin Bound Solutions",
      subtitle: "The ultimate choice for a contemporary, hard-wearing driveway.",
      text: [
        "Resin bound surfacing is becoming increasingly popular for its aesthetic flexibility and practical benefits. It is permeable, meaning water drains through it, reducing puddles and flood risk.",
        "Our high-quality resins are UV-stable, ensuring your driveway maintains its color and finish for many years."
      ],
      image: "/images/resin-bound1.webp",
      badges: true
    },
    features: {
      title: "Benefits of Resin Bound",
      subtitle: "Why resin bound is the modern choice for homeowners.",
      items: [
        { icon: "CheckCircle2", title: "Permeable", text: "Naturally drains water, making it environmentally friendly and compliant with drainage regulations." },
        { icon: "Star", title: "Low Maintenance", text: "Requires only an occasional power wash to keep it looking brand new." },
        { icon: "ShieldCheck", title: "Vibrant Colors", text: "Available in a wide range of natural stone colors to match any home style." }
      ]
    }
  },
  {
    slug: "tar-chip",
    title: "Tar & Chip",
    hero: [
      {
        image: "/images/local-tar1.webp",
        title: "Quality Tar & Chip Driveways in Haywards Heath",
        subtitle: "Traditional Look with Modern Durability",
        bullets: ["All Work Guaranteed", "Wide range of Colours & Patterns", "Top Quality Materials", "Fully Insured & Guaranteed"]
      },
      {
        image: "/images/local-tar2.webp",
        title: "Quality Tar & Chip Driveways East Anglia",
        subtitle: "Durable and Attractive Alternative",
        bullets: ["All Work Guaranteed", "Wide range of Colours & Patterns", "Top Quality Materials", "Fully Insured & Guaranteed"]
      }
    ],
    intro: {
      title: "Classic Tar & Chip Driveways",
      subtitle: "A durable and attractive alternative to traditional tarmac.",
      text: [
        "Tar and chip (also known as surface dressing) provides a textured, natural stone look that is both attractive and skid-resistant.",
        "It is an excellent choice for larger driveways and rural properties where a more traditional aesthetic is desired without the expense of full paving."
      ],
      image: "/images/local-tar1.webp",
      badges: true
    },
    features: {
      title: "Why Choose Tar & Chip?",
      subtitle: "The perfect balance of cost and character.",
      items: [
        { icon: "Clock", title: "Natural Look", text: "Provides the appearance of a gravel drive but with the stability of a solid surface." },
        { icon: "ThumbsUp", title: "Cost-Effective", text: "Significantly cheaper than most other solid driveway options." },
        { icon: "ShieldCheck", title: "Great Traction", text: "The textured surface provides excellent grip for vehicles and pedestrians." }
      ]
    }
  },
  {
    slug: "gravel",
    title: "Gravel & Shingle",
    hero: [
      {
        image: "/images/gravel.webp",
        title: "Gravel & Shingle Driveways Haywards Heath",
        subtitle: "Classic & Affordable Surfacing Solutions",
        bullets: ["Residential & Commercial Surfaces", "Wide range of Colours & Patterns", "Top Quality Materials", "Fully Insured & Guaranteed"]
      },
      {
        image: "/images/gravel.webp",
        title: "Haywards Heath Gravel Driveway Experts",
        subtitle: "Choice of Aggregates & Colours",
        bullets: ["Free Surveys & No Obligation Quotes", "Choice of Aggregates & Colours", "Hard-wearing Top Quality Materials", "Fully Insured & Guaranteed"]
      }
    ],
    intro: {
      title: "Professional Gravel & Shingle Installation",
      subtitle: "An attractive and cost-effective solution for any property.",
      text: [
        "Gravel and shingle driveways offer a timeless appeal and are one of the most cost-effective ways to transform your property's entrance.",
        "We offer a wide variety of aggregates in different colours and sizes to perfectly complement your home's aesthetic."
      ],
      image: "/images/gravel.webp",
      badges: true
    },
    features: {
      title: "Why Choose Gravel?",
      subtitle: "Discover the unique advantages of a gravel driveway.",
      items: [
        { icon: "Clock", title: "Instant Kerb Appeal", text: "Provides a classic, tidy look that instantly enhances your property." },
        { icon: "CheckCircle2", title: "Permeable", text: "Excellent drainage properties, making it an eco-friendly choice." },
        { icon: "ShieldCheck", title: "Security Benefit", text: "The sound of crunching gravel provides an audible warning of visitors." }
      ]
    }
  },
  {
    slug: "natural-stone",
    title: "Natural Stone",
    hero: [
      {
        image: "/images/natural-stone1.webp",
        title: "Natural Stone Driveway Experts Haywards Heath",
        subtitle: "Premium Paving for a Luxurious Finish",
        bullets: ["Free Surveys & No Obligation Quotes", "Plain / Custom Designs", "Hard-wearing Top Quality Materials", "Fully Insured & Guaranteed"]
      },
      {
        image: "/images/natural-stone2.webp",
        title: "Natural Stone Driveway Specialists Haywards Heath",
        subtitle: "Bespoke Designs Tailored to Your Home",
        bullets: ["Residential & Commercial Surfaces", "Wide range of Colours & Patterns", "Top Quality Materials", "Fully Insured & Guaranteed"]
      }
    ],
    intro: {
      title: "Exquisite Natural Stone Paving",
      subtitle: "Unmatched beauty and lifelong durability.",
      text: [
        "Natural stone is the pinnacle of driveway and patio materials, offering unique textures and colors that only Mother Nature can provide.",
        "From sandstone to granite, we source the finest materials to create a truly bespoke and luxurious finish for your property."
      ],
      image: "/images/natural-stone1.webp",
      badges: true
    },
    features: {
      title: "Benefits of Natural Stone",
      subtitle: "Why natural stone is worth the investment.",
      items: [
        { icon: "Star", title: "Unique Beauty", text: "No two stones are identical, ensuring your driveway is one-of-a-kind." },
        { icon: "ShieldCheck", title: "Incredibly Durable", text: "Natural stone handles heavy wear and tear with ease and ages gracefully." },
        { icon: "Wrench", title: "Low Maintenance", text: "Resistant to weather and easy to clean, keeping its premium look for decades." }
      ]
    }
  }
];;
