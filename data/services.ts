export interface Service {
  slug: string;
  title: string;
  hero: {
    image: string;
    title: string;
    subtitle: string;
    bullets: string[];
  };
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
    hero: {
      image: "https://images.unsplash.com/photo-1584888288596-f9e42be007d4?auto=format&fit=crop&q=80&w=2070",
      title: "Tarmac Driveways Haywards Heath",
      subtitle: "Expert Installation & Guaranteed Quality",
      bullets: ["Commercial & Domestic Surfacing", "Top Quality Materials", "Local Trusted & Reliable", "Competitive Prices"]
    },
    intro: {
      title: "Premium Quality Tarmac Driveways",
      subtitle: "Local & Trusted Tarmac Surfacing Specialists",
      text: [
        "At Fullers Paving, we specialize in laying high-quality tarmac driveways that combine durability with a sleek, professional finish. Whether you need a new driveway installation or resurfacing, our experienced team provides top-tier service tailored to your specific requirements.",
        "Tarmac is a highly popular choice for driveways due to its cost-effectiveness, quick installation time, and long-lasting properties. We ensure every project is completed to the highest standards."
      ],
      image: "https://images.unsplash.com/photo-1621251921200-c9a405a74d2b?auto=format&fit=crop&q=80&w=800",
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
    hero: {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2070",
      title: "Block Paved Driveways & Paths",
      subtitle: "Elegant, Durable & Bespoke Designs",
      bullets: ["Wide Range of Colors & Styles", "Expert Craftsmanship", "Enhances Property Value", "Fully Guaranteed"]
    },
    intro: {
      title: "Bespoke Block Paving Specialists",
      subtitle: "Transform your home's exterior with stunning block paving.",
      text: [
        "Block paving is a versatile and attractive option for driveways and patios. It allows for highly customized designs, patterns, and color combinations.",
        "Our expert installers ensure a perfect finish that is not only beautiful but structurally sound and built to last."
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
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
    hero: {
      image: "https://images.unsplash.com/photo-1590486803833-2c709d21e3ca?auto=format&fit=crop&q=80&w=2070",
      title: "Resin Bound Driveways",
      subtitle: "Seamless, Permeable & Stylish",
      bullets: ["SUDS Compliant", "No Loose Stones", "Anti-Slip Surface", "Huge Color Selection"]
    },
    intro: {
      title: "Modern Resin Bound Solutions",
      subtitle: "The ultimate choice for a contemporary, hard-wearing driveway.",
      text: [
        "Resin bound surfacing is becoming increasingly popular for its aesthetic flexibility and practical benefits. It is permeable, meaning water drains through it, reducing puddles and flood risk.",
        "Our high-quality resins are UV-stable, ensuring your driveway maintains its color and finish for many years."
      ],
      image: "https://images.unsplash.com/photo-1590486803833-2c709d21e3ca?auto=format&fit=crop&q=80&w=800",
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
    hero: {
      image: "https://images.unsplash.com/photo-1517646287270-a5a069e83693?auto=format&fit=crop&q=80&w=2070",
      title: "Tar & Chip Surfacing",
      subtitle: "Traditional Look with Modern Durability",
      bullets: ["Natural Appearance", "Cost-Effective", "Excellent Grip", "Fast Installation"]
    },
    intro: {
      title: "Classic Tar & Chip Driveways",
      subtitle: "A durable and attractive alternative to traditional tarmac.",
      text: [
        "Tar and chip (also known as surface dressing) provides a textured, natural stone look that is both attractive and skid-resistant.",
        "It is an excellent choice for larger driveways and rural properties where a more traditional aesthetic is desired without the expense of full paving."
      ],
      image: "https://images.unsplash.com/photo-1517646287270-a5a069e83693?auto=format&fit=crop&q=80&w=800",
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
  }
];
