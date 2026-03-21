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
  results?: {
    title: string;
    subtitle: string;
    items?: { title: string; text: string }[];
  };
}

export const homeResults = {
  title: "Our Proven Process for Outstanding Paving Results",
  subtitle: "We take every project seriously, ensuring attention to detail at every stage. Here’s what you can expect when you choose us for your driveway & paving in Parish:",
  items: [
    { title: "In-Depth Consultation & Site Assessment", text: "Before any work begins, we offer a free, no-obligation consultation taking time to understand your needs and assess your property to determine the best paving solution. A thorough site survey is carried out to evaluate ground conditions and drainage requirements." },
    { title: "Expert Planning & Bespoke Design", text: "Our design phase includes tailored designs and advice to suit your property's style and surroundings, with optimal durability, weather resistance and low maintenance in mind. You can then select from our range of premium materials, colours and finishes to match your vision." },
    { title: "Professional Installation & Quality Assurance", text: "Once the plan is finalised, our qualified and experienced team gets to work and we don’t consider the job done until every detail is perfected. A comprehensive quality inspection and a 10 year guarantee ensure peace of mind and confidence in our workmanship." }
  ]
};

export const services: Service[] = [
  {
    slug: "tarmac",
    title: "Tarmac Driveways",
    hero: [
      {
        image: "/images/tarmac1.webp",
        title: "Tarmac Driveway Experts Parish",
        subtitle: "Expert Installation & Guaranteed Quality",
        bullets: ["Free Surveys & No Obligation Quotes", "Plain / Custom Designs", "Hard-wearing Top Quality Materials", "Fully Insured & Guaranteed"]
      },
      {
        image: "/images/tarmac2.webp",
        title: "Quality Tarmac Driveways Parish",
        subtitle: "Residential & Commercial Surfacing",
        bullets: ["All Work Guaranteed", "Wide range of Colours & Patterns", "Top Quality Materials", "Fully Insured & Guaranteed"]
      }
    ],
    intro: {
      title: "Premium Quality Tarmac Driveways Parish",
      subtitle: "Local & Trusted Tarmac Surfacing Specialists in Parish",
      text: [
        "At N Fullers paving and improvements, we specialise in delivering expertly crafted tarmac driveways and surfacing solutions that are built to last. With a reputation for durability, affordability and versatility, tarmac remains one of the most popular choices for both residential and commercial properties.",
        "Whether you’re looking to enhance your home’s kerb appeal or need a robust surface for a commercial space, our professional team is here to provide a tailored solution that meets your needs."
      ],
      image: "/images/tarmac3.webp",
      badges: true
    },
    features: {
      title: "Why Choose a Tarmac Driveway?",
      description: "Tarmac remains one of the most popular choices for driveways in Parish due to its incredible durability and cost-effectiveness. It provides a smooth, level surface that's perfect for both modern and traditional homes. Our expert team ensures proper groundwork and drainage for a finish that lasts for years.",
      stats: [
        { value: "300+", label: "Driveways" },
        { value: "10+", label: "Year Guarantee" },
        { value: "100%", label: "Satisfaction" }
      ],
      features: [
        "Highly durable & weather resistant",
        "Cost-effective surfacing solution",
        "Quick to install",
        "Low maintenance requirement",
        "Classic aesthetic appeal",
        "Excellent water drainage"
      ],
      gallery: [
        "/images/tarmac1.webp",
        "/images/tarmac2.webp",
        "/images/tarmac3.webp",
        "/images/tarmac4.webp",
        "/images/tarmac5.webp"
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
      title: "Why Choose a Tarmac Driveway in Parish?",
      text: [
        "A professionally installed tarmac driveway offers numerous benefits, making it a smart investment for property owners in Parish. Tarmac is known for its durability and cost-effectiveness."
      ],
      items: [
        { title: "Durability", text: "A strong, weather-resistant surface that withstands heavy use." },
        { title: "Low Maintenance", text: "Requires minimal upkeep compared to other surfacing options." },
        { title: "Smooth Finish", text: "Provides a neat, professional look that enhances your property’s aesthetic appeal." },
        { title: "Cost Effectiveness", text: "A budget friendly solution that offers long-lasting performance." },
        { title: "Quick Installation", text: "Can be laid efficiently, reducing disruption to your home or business." },
        { title: "Weather Resistance", text: "Designed to endure harsh weather conditions without cracking or damage." }
      ]
    },
    results: {
      title: "Tailored Tarmac Solutions to Suit Your Needs",
      subtitle: "We believe that every project is unique, which is why we take a bespoke approach to each driveway installation. By working closely with our clients, we ensure that their specific needs, design preferences and budget are fully considered throughout the process.",
      items: [
        { title: "Expert installation & repairs", text: "From brand-new tarmac driveways to seamless resurfacing solutions" },
        { title: "Customised designs", text: "Tailored to complement your property’s style and functionally" },
        { title: "State of the art equipment", text: "Ensuring precision and efficiency in every project" },
        { title: "Durable & long lasting surfaces", text: "Built to withstand everyday wear and harsh weather conditions" },
        { title: "Cost effective solutions", text: "High-quality results at competitive prices" },
        { title: "Minimal disruption", text: "Fast and efficient project completion with minimal inconvenience" }
      ]
    }
  },
  {
    slug: "block-paving",
    title: "Block Paving",
    hero: [
      {
        image: "/images/block-paving1.webp",
        title: "Block Paved Driveways & Paths in Parish",
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
      title: "Block Paving Driveways & Paths in Parish",
      subtitle: "Local Block Paving Specialists",
      text: [
        "At N Fullers paving and improvements, we take pride in delivering expertly crafted block paving driveways that enhance both the beauty and functionality of your outdoor space. With a solid reputation in the paving industry, we are known for our precision, high standards and use of premium materials from trusted industry suppliers.",
        "Choosing our exceptional block paving services means you benefit from expert installation by skilled professionals, high-quality materials sourced from leading brands, and comprehensive guarantees for lasting durability and peace of mind."
      ],
      image: "/images/block-paving3.webp",
      badges: true
    },
    features: {
      title: "The Beauty & Versatility of Block Paving",
      description: "Block paving offers limitless design possibilities, allowing you to create a unique look for your property. Whether you prefer traditional or contemporary styles, our wide range of patterns and colors ensures a bespoke finish. Beyond aesthetics, block paving is renowned for its strength and long-term durability.",
      stats: [
        { value: "500+", label: "Custom Designs" },
        { value: "10+", label: "Year Guarantee" },
        { value: "100%", label: "Skilled Team" }
      ],
      features: [
        "Infinite design possibilities",
        "High-strength installation",
        "Easy to repair individual blocks",
        "Permeable drainage options",
        "Increases property value",
        "Premium curb appeal"
      ],
      gallery: [
        "/images/block-paving1.webp",
        "/images/block-paving2.webp",
        "/images/block-paving3.webp",
        "/images/block-paving4.webp",
        "/images/block-paving5.webp"
      ]
    },
    benefits: {
      title: "Why Block Paving is the Ideal Choice",
      text: [
        "Block paving has become a popular option among homeowners in Parish and beyond due to its blend of practicality and aesthetics. It provides a highly durable surface while offering limitless design possibilities to suit any style.",
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
    },
    results: {
      title: "Our Proven Process for Outstanding Paving Results",
      subtitle: "We take every project seriously, ensuring attention to detail at every stage. Here’s what you can expect when you choose us for your driveway block paving in Parish:",
      items: [
        { title: "In-Depth Consultation & Site Assessment", text: "Before any work begins, we offer a free, no-obligation consultation taking time to understand your needs and assess your property to determine the best paving solution. A thorough site survey is carried out to evaluate ground conditions and drainage requirements." },
        { title: "Expert Planning & Bespoke Design", text: "Our design phase includes tailored designs and advice to suit your property's style and surroundings, with optimal durability, weather resistance and low maintenance in mind. You can then select from our range of premium materials, colours and finishes to match your vision." },
        { title: "Professional Installation & Quality Assurance", text: "Once the plan is finalised, our qualified and experienced team gets to work and we don’t consider the job done until every detail is perfected. A comprehensive quality inspection and a 10 year guarantee ensure peace of mind and confidence in our workmanship." }
      ]
    }
  },
  {
    slug: "resin-bound",
    title: "Resin Bound",
    hero: [
      {
        image: "/images/resin-bound1.webp",
        title: "Resin Bound Driveways & Paths in Parish",
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
      title: "Resin Bound Driveways & Paths in Parish",
      subtitle: "Local Resin Bound Driveway Specialists",
      text: [
        "Resin bound driveways have become a top choice for homeowners and businesses in Parish, offering a perfect blend of durability, functionality and aesthetic appeal.",
        "N Fullers paving and improvements advanced resin-bound driveway surfacing technique combines high-quality aggregate stones with a clear resin, creating a smooth, hard-wearing and visually striking finish. Applied over a suitable base, resin bound surfaces deliver a seamless, permeable and low-maintenance solution that enhances any outdoor space."
      ],
      image: "/images/resin-driveway3.webp",
      badges: true
    },
    features: {
      title: "Modern & Seamless Resin Bound Surfaces",
      description: "Resin bound driveways provide a smooth, flat finish without the loose stones of traditional gravel. It is highly permeable, allowing water to drain through the surface naturally, which complies with SUDS regulations. With a massive choice of stone aggregates, we can create a sophisticated look that complements any property.",
      stats: [
        { value: "40+", label: "Aggregate Colours" },
        { value: "100%", label: "Permeable" },
        { value: "UV", label: "Stable Finish" }
      ],
      features: [
        "No loose stones",
        "Fully SUDS compliant",
        "Weed and frost resistant",
        "Seamless, smooth finish",
        "Massive range of stone options",
        "Durable & long-lasting"
      ],
      gallery: [
        "/images/resin-bound1.webp",
        "/images/resin-bound2.webp",
        "/images/resin-bound3.webp",
        "/images/resin-bound4.webp",
        "/images/resin-driveway3.webp"
      ]
    },
    benefits: {
      title: "Why Choose a Resin Bound Driveway?",
      text: [
        "Choosing a resin bound driveway in Parish is a smart way to enhance your property’s aesthetic appeal while benefiting from a durable and low-maintenance surface. Unlike traditional paving or concrete, resin bound surfaces offer exceptional versatility, allowing for customised designs that perfectly complement your home or business.",
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
    },
    results: {
      title: "Our Proven Process for Outstanding Paving Results",
      subtitle: "We take every project seriously, ensuring attention to detail at every stage. Here’s what you can expect when you choose us for your resin bound driveway or path in Parish:",
      items: [
        { title: "In-Depth Consultation & Site Assessment", text: "Before any work begins, we offer a free, no-obligation consultation taking time to understand your needs and assess your property to determine the best paving solution. A thorough site survey is carried out to evaluate ground conditions and drainage requirements." },
        { title: "Expert Planning & Bespoke Design", text: "Our design phase includes tailored designs and advice to suit your property's style and surroundings, with optimal durability, weather resistance and low maintenance in mind. You can then select from our range of premium materials, colours and finishes to match your vision." },
        { title: "Professional Installation & Quality Assurance", text: "Once the plan is finalised, our qualified and experienced team gets to work and we don’t consider the job done until every detail is perfected. A comprehensive quality inspection and a 10 year guarantee ensure peace of mind and confidence in our workmanship." }
      ]
    }
  },
  {
    slug: "tar-chip",
    title: "Tar & Chip",
    hero: [
      {
        image: "/images/local-tar1.webp",
        title: "Quality Tar & Chip Driveways in Parish",
        subtitle: "Traditional Look with Modern Durability",
        bullets: ["All Work Guaranteed", "Wide range of Colours & Patterns", "Top Quality Materials", "Fully Insured & Guaranteed"]
      },
      {
        image: "/images/local-tar2.webp",
        title: "Quality Tar & Chip Driveways Parish",
        subtitle: "Durable and Attractive Alternative",
        bullets: ["All Work Guaranteed", "Wide range of Colours & Patterns", "Top Quality Materials", "Fully Insured & Guaranteed"]
      }
    ],
    intro: {
      title: "Tar & Chip Driveways Parish",
      subtitle: "Local & Trusted Tar and Chip Driveway Specialists in Parish",
      text: [
        "Tar and chip surfacing is becoming an increasingly popular alternative to resin bound driveways, offering a durable, visually appealing and budget friendly solution. This method provides many of the benefits of resin including a non-slip surface for improved grip in icy conditions, but at a fraction of the cost.",
        "N Fullers paving and improvements are tar and chip surfacing specialists in Parish and we offer free site surveys and no obligation quotes along with free expert advice. Contact us today."
      ],
      image: "/images/local-tar3.webp",
      badges: true
    },
    features: {
      title: "Traditional Aesthetics with Tar & Chip",
      description: "Tar and chip (or hot bitumen and shingle) is a fantastic way to achieve a traditional gravel look with much lower maintenance. The stones are sealed into the surface using hot bitumen, preventing them from scattering. It's an excellent choice for larger driveways and rural properties.",
      stats: [
        { value: "Eco", label: "Friendly" },
        { value: "Budget", label: "Friendly" },
        { value: "Top", label: "Quality" }
      ],
      features: [
        "Traditional country look",
        "Lower cost than resin",
        "Excellent vehicle grip",
        "Durable natural stone finish",
        "Quick installation process",
        "Stones sealed in place"
      ],
      gallery: [
        "/images/local-tar1.webp",
        "/images/local-tar2.webp",
        "/images/local-tar3.webp",
        "/images/local-tar4.webp",
        "/images/local-tar5.webp"
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
    },
    results: {
      title: "Recommended & Approved Tar & Chip Surfacing Experts in Parish",
      subtitle: "For homes with extensive driveways or businesses where first impressions matter, tar and chip provides a high-quality, professional finish without the expense or premium paving options. It is particularly well-suited for:",
      items: [
        { title: "Country homes and estates", text: "A classic look that complements traditional properties" },
        { title: "Hotels and guest houses", text: "A smooth, well-kept entrance that enhances the arrival experience for guests" },
        { title: "Farm and rural properties", text: "Hard-wearing surfaces that blend naturally with the surrounding landscapes" },
        { title: "Commercial premises", text: "A practical and cost-effective solution for access roads and parking areas" }
      ]
    }
  },
  {
    slug: "gravel",
    title: "Gravel & Shingle",
    hero: [
      {
        image: "/images/gravel.webp",
        title: "Gravel & Shingle Driveways Parish",
        subtitle: "Classic & Affordable Surfacing Solutions",
        bullets: ["Residential & Commercial Surfaces", "Wide range of Colours & Patterns", "Top Quality Materials", "Fully Insured & Guaranteed"]
      },
      {
        image: "/images/gravel.webp",
        title: "Parish Gravel Driveway Experts",
        subtitle: "Choice of Aggregates & Colours",
        bullets: ["Free Surveys & No Obligation Quotes", "Choice of Aggregates & Colours", "Hard-wearing Top Quality Materials", "Fully Insured & Guaranteed"]
      }
    ],
    intro: {
      title: "Gravel Driveways Parish",
      subtitle: "Local & Trusted Gravel Driveway Specialists in Parish",
      text: [
        "If you’re looking to enhance the aesthetic appeal of your property while keeping costs manageable, a gravel driveway is an excellent option. At N Fullers paving and improvements, we specialise in designing and installing stunning gravel driveways that not only elevate the look of your home but also provide a durable and low maintenance surface that stands the test of time.",
        "Gravel driveways are a versatile and affordable alternative to tarmac, block paving or resin bound surfaces. They work particularly well for large driveways where full paving can be costly."
      ],
      image: "/images/gravel3.webp",
      badges: true
    },
    features: {
      title: "Classic & Timeless Gravel Driveways",
      description: "Gravel driveways are an affordable and classic surfacing option that works particularly well for large properties. They offer excellent drainage and add a distinct crunch sound that provides added security to your home. We use high-quality aggregates and professional membranes to ensure longevity.",
      stats: [
        { value: "Fast", label: "Installation" },
        { value: "Low", label: "Cost" },
        { value: "100%", label: "Natural" }
      ],
      features: [
        "Very cost-effective",
        "Natural stone aesthetic",
        "Audible security alert",
        "Expert drainage control",
        "Wide choice of aggregates",
        "Quick property transformation"
      ],
      gallery: [
        "/images/gravel.webp",
        "/images/gravel3.webp",
        "/images/driveway-for-home.webp",
        "/images/tarmac4.webp",
        "/images/block-paving7.webp"
      ]
    },
    benefits: {
      title: "Why Choose Fullers Paving?",
      text: [
        "Gravel driveways are a versatile and affordable alternative to tarmac, block paving or resin bound surfaces. They work particularly well for large driveways where full paving can be costly."
      ],
      items: [
        { title: "Classic Gravel Driveway", text: "A traditional loose stone surface that blends effortlessly with period homes, rural properties and gardens." },
        { title: "Permeable Gravel Driveway", text: "Designed to support natural drainage, preventing standing water and reducing flood risks" },
        { title: "Patterned Gravel Driveway", text: "A creative approach using different gravel colours or sizes to create eye-catching patterns and textures." },
        { title: "Gravel and Paver Combination", text: "Incorporating paving slabs or block paving into the design for defined pathways, edging or entrance areas" }
      ]
    },
    results: {
      title: "Enhancing Your Gravel Driveway with Additional Features",
      subtitle: "To create a polished and well-structured gravel driveway, we offer a variety of additional features that improve both aesthetics and functionality:",
      items: [
        { title: "Block Paving or Brick Edging", text: "Frames the driveway for a neat, professional finish." },
        { title: "Granite Set Features", text: "Adds a decorative and durable border to enhance the design." },
        { title: "Entrance Rumble Strips", text: "Provides a stylish and practical transition between road and driveway." },
        { title: "Paving Slabs & Entrance Steps", text: "Creates a seamless flow from driveway to property entrance." },
        { title: "Stabilising Membrane", text: "Prevents weed growth and maintains the integrity of the gravel surface." },
        { title: "Stone Sub-Base Installation", text: "Ensuring a stable, well-draining foundation, preventing sinking or displacement in high traffic areas." }
      ]
    }
  },
  {
    slug: "natural-stone",
    title: "Natural Stone",
    hero: [
      {
        image: "/images/natural-stone1.webp",
        title: "Natural Stone Driveway Experts Parish",
        subtitle: "Premium Paving for a Luxurious Finish",
        bullets: ["Free Surveys & No Obligation Quotes", "Plain / Custom Designs", "Hard-wearing Top Quality Materials", "Fully Insured & Guaranteed"]
      },
      {
        image: "/images/natural-stone2.webp",
        title: "Natural Stone Driveway Specialists Parish",
        subtitle: "Bespoke Designs Tailored to Your Home",
        bullets: ["Residential & Commercial Surfaces", "Wide range of Colours & Patterns", "Top Quality Materials", "Fully Insured & Guaranteed"]
      }
    ],
    intro: {
      title: "Premium Natural Stone Driveway Paving Parish",
      subtitle: "Local & Trusted Natural Stone Design & Paving Specialists in Parish",
      text: [
        "At N Fullers paving and improvements, we specialise in elevating outdoor spaces with expertly designed natural stone driveways, patios and pathways. Whether you’re looking to create a stylish entrance, a charming garden walkway or a luxurious patio area, our bespoke natural stone paving solutions offer timeless beauty, functionality and added value to your property.",
        "With years of expertise, we tailor every project to suit your vision, preferences and property style, ensuring a seamless and high quality finish that enhances your home’s exterior."
      ],
      image: "/images/natural-stone3.webp",
      badges: true
    },
    features: {
      title: "The Luxury of Natural Stone Paving",
      description: "Natural stone paving like Indian Sandstone or Granite adds a touch of luxury and timeless elegance to any home. Each stone is unique in its color and texture, creating a truly one-of-a-kind surface. It is incredibly hard-wearing and looks even better as it ages.",
      stats: [
        { value: "Unique", label: "Individual Stones" },
        { value: "High", label: "Property Value" },
        { value: "Top", label: "Luxury Finish" }
      ],
      features: [
        "Timeless elegant look",
        "Increases house value",
        "Extreme durability",
        "Unique natural patterns",
        "Weather & slip resistant",
        "Low maintenance luxury"
      ],
      gallery: [
        "/images/natural-stone1.webp",
        "/images/natural-stone2.webp",
        "/images/natural-stone3.webp",
        "/images/natural-stone4.webp",
        "/images/natural-stone5.webp"
      ]
    },
    benefits: {
      title: "Why Choose Natural Stone Paving in Parish?",
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
    },
    results: {
      title: "What You can Expect from N Fullers paving and improvements for Your Natural Stone Paving Project in Parish",
      subtitle: "When you trust N Fullers paving and improvements with your natural stone paving, you’re selecting a team of highly skilled professionals dedicated to exceptional craftsmanship and premium quality materials. What Sets Our Natural Stone Paving Services Apart:",
      items: [
        { title: "Bespoke Design & Consultation", text: "Tailored to meet your individual style, budget and outdoor space requirements." },
        { title: "Professional & Precise Installation", text: "Carried out by our skilled and experienced team." },
        { title: "Extensive Selection of High Quality Materials", text: "A wide range of premium stone options to choose from." },
        { title: "Custom Features & Enhancements", text: "To add unique character to your project." },
        { title: "Expert Maintenance Advice & Aftercare", text: "Ensuring your paving looks great for years to come." },
        { title: "Warranties & Guarantees", text: "For peace of mind and confidence in our workmanship." },
        { title: "Meticulous Attention to Detail", text: "Ensuring every aspect of the project is completed to the highest standard." }
      ]
    }
  }
];
