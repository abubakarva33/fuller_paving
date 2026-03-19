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
