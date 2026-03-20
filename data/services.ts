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
    description: string;
    stats: { label: string; value: string }[];
    features: string[];
    gallery: string[];
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
      title: "Premium Quality Tarmac Driveways Haywards Heath",
      subtitle: "Local & Trusted Tarmac Surfacing Specialists in Haywards Heath",
      text: [
        "At N Fullers paving and improvements, we specialise in delivering expertly crafted tarmac driveways and surfacing solutions that are built to last. With a reputation for durability, affordability and versatility, tarmac remains one of the most popular choices for both residential and commercial properties.",
        "Whether you’re looking to enhance your home’s kerb appeal or need a robust surface for a commercial space, our professional team is here to provide a tailored solution that meets your needs."
      ],
      image: "/images/tarmac3.webp",
      badges: true
    },
    features: {
      title: "Why Choose Fullers Paving?",
      description: "As one of the leading driveway and paving companies in Haywards Heath, our expert paving services add character and real value to your home. Our skilled craftsmen and tradesmen offer free advice, planning and design services which helps to ensure your home improvements live up to everything you hoped for. Our work conforms to British Standards and is fully guaranteed for your peace of mind.",
      stats: [
        { value: "200+", label: "Patios" },
        { value: "300+", label: "Driveways" },
        { value: "500+", label: "Happy Customers" }
      ],
      features: [
        "Local Haywards Heath company",
        "Trusted reviews",
        "100% Satisfaction Guarantee",
        "Free No-Obligation Quotes",
        "No up-front fees",
        "Minimum 60 months guarantee"
      ],
      gallery: [
        "/images/tarmac1.webp", "/images/block-paving1.webp", "/images/resin-bound1.webp",
        "/images/local-tar1.webp", "/images/gravel.webp", "/images/natural-stone1.webp",
        "/images/tarmac2.webp", "/images/block-paving2.webp", "/images/resin-bound2.webp",
        "/images/local-tar2.webp"
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
      title: "Block Paving Driveways & Paths in Haywards Heath",
      subtitle: "Local Block Paving Specialists",
      text: [
        "At N Fullers paving and improvements, we take pride in delivering expertly crafted block paving driveways that enhance both the beauty and functionality of your outdoor space. With a solid reputation in the paving industry, we are known for our precision, high standards and use of premium materials from trusted industry suppliers.",
        "Choosing our exceptional block paving services means you benefit from expert installation by skilled professionals, high-quality materials sourced from leading brands, and comprehensive guarantees for lasting durability and peace of mind."
      ],
      image: "/images/block-paving3.webp",
      badges: true
    },
    features: {
      title: "Why Choose Fullers Paving?",
      description: "As one of the leading driveway and paving companies in Haywards Heath, our expert paving services add character and real value to your home. Our skilled craftsmen and tradesmen offer free advice, planning and design services which helps to ensure your home improvements live up to everything you hoped for. Our work conforms to British Standards and is fully guaranteed for your peace of mind.",
      stats: [
        { value: "200+", label: "Patios" },
        { value: "300+", label: "Driveways" },
        { value: "500+", label: "Happy Customers" }
      ],
      features: [
        "Local Haywards Heath company",
        "Trusted reviews",
        "100% Satisfaction Guarantee",
        "Free No-Obligation Quotes",
        "No up-front fees",
        "Minimum 60 months guarantee"
      ],
      gallery: [
        "/images/tarmac1.webp", "/images/block-paving1.webp", "/images/resin-bound1.webp",
        "/images/local-tar1.webp", "/images/gravel.webp", "/images/natural-stone1.webp",
        "/images/tarmac2.webp", "/images/block-paving2.webp", "/images/resin-bound2.webp",
        "/images/local-tar2.webp"
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
      title: "Resin Bound Driveways & Paths in Haywards Heath",
      subtitle: "Local Resin Bound Driveway Specialists",
      text: [
        "Resin bound driveways have become a top choice for homeowners and businesses in Haywards Heath, offering a perfect blend of durability, functionality and aesthetic appeal.",
        "N Fullers paving and improvements advanced resin-bound driveway surfacing technique combines high-quality aggregate stones with a clear resin, creating a smooth, hard-wearing and visually striking finish. Applied over a suitable base, resin bound surfaces deliver a seamless, permeable and low-maintenance solution that enhances any outdoor space."
      ],
      image: "/images/resin-driveway3.webp",
      badges: true
    },
    features: {
      title: "Why Choose Fullers Paving?",
      description: "As one of the leading driveway and paving companies in Haywards Heath, our expert paving services add character and real value to your home. Our skilled craftsmen and tradesmen offer free advice, planning and design services which helps to ensure your home improvements live up to everything you hoped for. Our work conforms to British Standards and is fully guaranteed for your peace of mind.",
      stats: [
        { value: "200+", label: "Patios" },
        { value: "300+", label: "Driveways" },
        { value: "500+", label: "Happy Customers" }
      ],
      features: [
        "Local Haywards Heath company",
        "Trusted reviews",
        "100% Satisfaction Guarantee",
        "Free No-Obligation Quotes",
        "No up-front fees",
        "Minimum 60 months guarantee"
      ],
      gallery: [
        "/images/tarmac1.webp", "/images/block-paving1.webp", "/images/resin-bound1.webp",
        "/images/local-tar1.webp", "/images/gravel.webp", "/images/natural-stone1.webp",
        "/images/tarmac2.webp", "/images/block-paving2.webp", "/images/resin-bound2.webp",
        "/images/local-tar2.webp"
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
      title: "Tar & Chip Driveways Haywards Heath",
      subtitle: "Local & Trusted Tar and Chip Driveway Specialists in Haywards Heath",
      text: [
        "Tar and chip surfacing is becoming an increasingly popular alternative to resin bound driveways, offering a durable, visually appealing and budget friendly solution. This method provides many of the benefits of resin including a non-slip surface for improved grip in icy conditions, but at a fraction of the cost.",
        "N Fullers paving and improvements are tar and chip surfacing specialists in Haywards Heath and we offer free site surveys and no obligation quotes along with free expert advice. Contact us today."
      ],
      image: "/images/local-tar3.webp",
      badges: true
    },
    features: {
      title: "Why Choose Fullers Paving?",
      description: "As one of the leading driveway and paving companies in Haywards Heath, our expert paving services add character and real value to your home. Our skilled craftsmen and tradesmen offer free advice, planning and design services which helps to ensure your home improvements live up to everything you hoped for. Our work conforms to British Standards and is fully guaranteed for your peace of mind.",
      stats: [
        { value: "200+", label: "Patios" },
        { value: "300+", label: "Driveways" },
        { value: "500+", label: "Happy Customers" }
      ],
      features: [
        "Local Haywards Heath company",
        "Trusted reviews",
        "100% Satisfaction Guarantee",
        "Free No-Obligation Quotes",
        "No up-front fees",
        "Minimum 60 months guarantee"
      ],
      gallery: [
        "/images/tarmac1.webp", "/images/block-paving1.webp", "/images/resin-bound1.webp",
        "/images/local-tar1.webp", "/images/gravel.webp", "/images/natural-stone1.webp",
        "/images/tarmac2.webp", "/images/block-paving2.webp", "/images/resin-bound2.webp",
        "/images/local-tar2.webp"
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
      title: "Gravel Driveways Haywards Heath",
      subtitle: "Local & Trusted Gravel Driveway Specialists in Haywards Heath",
      text: [
        "If you’re looking to enhance the aesthetic appeal of your property while keeping costs manageable, a gravel driveway is an excellent option. At N Fullers paving and improvements, we specialise in designing and installing stunning gravel driveways that not only elevate the look of your home but also provide a durable and low maintenance surface that stands the test of time.",
        "Gravel driveways are a versatile and affordable alternative to tarmac, block paving or resin bound surfaces. They work particularly well for large driveways where full paving can be costly."
      ],
      image: "/images/gravel3.webp",
      badges: true
    },
    features: {
      title: "Why Choose Fullers Paving?",
      description: "As one of the leading driveway and paving companies in Haywards Heath, our expert paving services add character and real value to your home. Our skilled craftsmen and tradesmen offer free advice, planning and design services which helps to ensure your home improvements live up to everything you hoped for. Our work conforms to British Standards and is fully guaranteed for your peace of mind.",
      stats: [
        { value: "200+", label: "Patios" },
        { value: "300+", label: "Driveways" },
        { value: "500+", label: "Happy Customers" }
      ],
      features: [
        "Local Haywards Heath company",
        "Trusted reviews",
        "100% Satisfaction Guarantee",
        "Free No-Obligation Quotes",
        "No up-front fees",
        "Minimum 60 months guarantee"
      ],
      gallery: [
        "/images/tarmac1.webp", "/images/block-paving1.webp", "/images/resin-bound1.webp",
        "/images/local-tar1.webp", "/images/gravel.webp", "/images/natural-stone1.webp",
        "/images/tarmac2.webp", "/images/block-paving2.webp", "/images/resin-bound2.webp",
        "/images/local-tar2.webp"
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
      title: "Premium Natural Stone Driveway Paving Haywards Heath",
      subtitle: "Local & Trusted Natural Stone Design & Paving Specialists in Haywards Heath",
      text: [
        "At N Fullers paving and improvements, we specialise in elevating outdoor spaces with expertly designed natural stone driveways, patios and pathways. Whether you’re looking to create a stylish entrance, a charming garden walkway or a luxurious patio area, our bespoke natural stone paving solutions offer timeless beauty, functionality and added value to your property.",
        "With years of expertise, we tailor every project to suit your vision, preferences and property style, ensuring a seamless and high quality finish that enhances your home’s exterior."
      ],
      image: "/images/natural-stone3.webp",
      badges: true
    },
    features: {
      title: "Why Choose Fullers Paving?",
      description: "As one of the leading driveway and paving companies in Haywards Heath, our expert paving services add character and real value to your home. Our skilled craftsmen and tradesmen offer free advice, planning and design services which helps to ensure your home improvements live up to everything you hoped for. Our work conforms to British Standards and is fully guaranteed for your peace of mind.",
      stats: [
        { value: "200+", label: "Patios" },
        { value: "300+", label: "Driveways" },
        { value: "500+", label: "Happy Customers" }
      ],
      features: [
        "Local Haywards Heath company",
        "Trusted reviews",
        "100% Satisfaction Guarantee",
        "Free No-Obligation Quotes",
        "No up-front fees",
        "Minimum 60 months guarantee"
      ],
      gallery: [
        "/images/tarmac1.webp", "/images/block-paving1.webp", "/images/resin-bound1.webp",
        "/images/local-tar1.webp", "/images/gravel.webp", "/images/natural-stone1.webp",
        "/images/tarmac2.webp", "/images/block-paving2.webp", "/images/resin-bound2.webp",
        "/images/local-tar2.webp"
      ]
    }
  }
];;
