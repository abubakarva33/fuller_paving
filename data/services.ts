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
  benefits: {
    title: string;
    text: string[];
    items: { title: string; text: string }[];
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
    benefits: {
      title: "Why Choose a Tarmac Driveway in Haywards Heath?",
      text: [
        "A professionally installed tarmac driveway offers numerous benefits, making it a smart investment for property owners in Haywards Heath. Tarmac is known for its durability and cost-effectiveness."
      ],
      items: [
        { title: "Durability", text: "A strong, weather-resistant surface that withstands heavy use." },
        { title: "Low Maintenance", text: "Requires minimal upkeep compared to other surfacing options." },
        { title: "Smooth Finish", text: "Provides a neat, professional look that enhances your property’s aesthetic appeal." },
        { title: "Cost Effectiveness", text: "A budget friendly solution that offers long-lasting performance." },
        { title: "Quick Installation", text: "Can be laid efficiently, reducing disruption to your home or business." },
        { title: "Weather Resistance", text: "Designed to endure harsh weather conditions without cracking or damage." }
      ]
    }
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
    },
    benefits: {
      title: "Why Block Paving is the Ideal Choice",
      text: [
        "Block paving has become a popular option among homeowners in Haywards Heath and beyond due to its blend of practicality and aesthetics. It provides a highly durable surface while offering limitless design possibilities to suit any style.",
        "Whether you’re looking for the classic appeal of Brindle block paving, the sleek sophistication of Charcoal block paving or the exceptional quality of Marshalls block paving, our team will guide you through the best options to complement your property, ensuring your driveway, patio or pathway blends seamlessly with your home and garden."
      ],
      items: [
        { title: "Versatile design choices", text: "A wide range of colours, shapes and textures to create a unique look" },
        { title: "Durability and strength", text: "Built to withstand heavy use while maintaining its appeal" },
        { title: "Low maintenance", text: "Easy to clean and repair compared to other paving options" },
        { title: "Permeable surface", text: "Helps with water drainage, reducing the risk of puddles and flooding" },
        { title: "Standard paving blocks", text: "Classic, durable and suitable for driveways, patios and pathways" },
        { title: "Decorative patterns", text: "Create eye-catching designs using intricate layouts and contrasting colours" },
        { title: "Circular paving features", text: "Add a stylish focal point to your driveway or garden" },
        { title: "Kerb stones and edging", text: "Frame your paving with decorative borders for a polished finish" }
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
    },
    benefits: {
      title: "Why Choose a Resin Bound Driveway?",
      text: [
        "Choosing a resin bound driveway in Haywards Heath is a smart way to enhance your property’s aesthetic appeal while benefiting from a durable and low-maintenance surface. Unlike traditional paving or concrete, resin bound surfaces offer exceptional versatility, allowing for customised designs that perfectly complement your home or business.",
        "At N Fullers paving and improvements, we specialise in creating bespoke resin driveways, offering a wide range of colours, patterns and finishes to bring your vision to life. With our expertise, we can craft a surface that is both visually striking and highly practical."
      ],
      items: [
        { title: "Seamless & Permeable Surface", text: "Allows for natural drainage, reducing water pooling and flood risks" },
        { title: "Highly Durable & Long-Lasting", text: "Resistant to cracking, UV fading and daily wear and tear" },
        { title: "Low Maintenance", text: "No loose stones, minimal weed growth and easy to clean" },
        { title: "Customisable Design Options", text: "Choose from a variety of colours and patterns to match your property" },
        { title: "Slip-Resistant & Safe", text: "Provides excellent traction for pedestrians and vehicles" },
        { title: "Eco-Friendly Solution", text: "Permeable structure supports sustainable water management" }
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
    },
    benefits: {
      title: "Why Choose Tar and Chip for Your Driveway?",
      text: [
        "For homeowners and businesses looking for a reliable and attractive driveway surface, tar and chip is an excellent choice. It offers a unique combination of durability and traditional aesthetics."
      ],
      items: [
        { title: "Aesthetic appeal", text: "A natural stone finish that resembles resin but with a more traditional look." },
        { title: "Strong durability", text: "A robust surface that withstands heavy use and all weather conditions." },
        { title: "Low Maintenance", text: "Unlike loose gravel, stones remain sealed in place with hot bitumen, reducing the need for regular upkeep." },
        { title: "Improved safety", text: "A textured surface that provides excellent traction for both vehicles and pedestrians." },
        { title: "Affordability", text: "A cost-effective alternative to resin and other premium surfacing options." },
        { title: "Versatile design options", text: "A variety of aggregate colours to customise the appearance of your driveway." }
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
    },
    benefits: {
      title: "Custom Gravel Driveway Designs Haywards Heath",
      text: [
        "Every property is unique and at N Fullers paving and improvements, we provide tailored gravel driveway solutions to suit all styles, sizes and budgets. Whether you prefer a traditional countryside feel or a more structured and modern look, we have a variety of design options to choose from."
      ],
      items: [
        { title: "Classic Gravel Driveway", text: "A traditional loose stone surface that blends effortlessly with period homes, rural properties and gardens." },
        { title: "Permeable Gravel Driveway", text: "Designed to support natural drainage, preventing standing water and reducing flood risks" },
        { title: "Patterned Gravel Driveway", text: "A creative approach using different gravel colours or sizes to create eye-catching patterns and textures." },
        { title: "Gravel and Paver Combination", text: "Incorporating paving slabs or block paving into the design for defined pathways, edging or entrance areas" }
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
    },
    benefits: {
      title: "Why Choose Natural Stone Paving in Haywards Heath?",
      text: [
        "Natural stone paving is an excellent choice for homeowners seeking a durable, elegant and low maintenance outdoor surface. With a variety of textures, colours and finishes available, our expert team can help you create a unique and sophisticated outdoor space that complements your property."
      ],
      items: [
        { title: "Bespoke & Personalised Designs", text: "Every project is fully customised to match your aesthetic and functional needs." },
        { title: "Versatile Size and Layout Options", text: "Available in a range of sizes, shapes and patterns to suit all types of outdoor areas." },
        { title: "Exceptional Durability", text: "Resistant to wear and tear, weather changes and heavy foot and vehicular traffic, ensuring long term performance." },
        { title: "Extensive Colour Choices", text: "A variety of natural stone hues, from warm sandstone to cool greys and whites, allowing for a personalised touch." },
        { title: "Increased Property Value", text: "A professionally installed natural stone driveway, or patio enhances kerb appeal and adds long term value." },
        { title: "Low Maintenance & Easy Upkeep", text: "Unlike other materials, natural stone requires minimal maintenance while retaining its beauty." },
        { title: "Timeless & Classic Appearance", text: "A sophisticated and stylish addition to any home or business setting." },
        { title: "Environmentally Friendly", text: "A sustainable and eco conscious paving solution that blends naturally with outdoor surroundings." }
      ]
    }
  }
];
