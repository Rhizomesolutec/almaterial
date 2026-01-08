import { FaHelmetSafety } from "react-icons/fa6";
import { MdConstruction } from "react-icons/md";
import { TbSubmarine } from "react-icons/tb";
import img1 from "../assets/images/service1.jpg";
import img2 from "../assets/images/service3.jpg";
import img3 from "../assets/images/tyres.png";
import img4 from "../assets/images/lube.png";

export const SERVICES = [
  {
    id: "construction",
    title: "Construction Materials",
    slug: "construction-materials",
    description:
      "Essential materials for reliable building and infrastructure projects.",
    image: img1,
    icon: <MdConstruction className="text-white text-3xl" />,

    children: [
      {
        id: "cement-aggregates",
        title: "Cement & Aggregates",
        slug: "cement-aggregates",
        image:
          "https://plus.unsplash.com/premium_photo-1723637949955-40e1c5339a15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        items: [
          {
            title: "Ordinary Portland Cement (OPC)",
            image: "/images/products/construction/cement/opc.jpg",
          },
          {
            title: "Sulphate Resistant Cement",
            image: "/images/products/construction/cement/sulphate.jpg",
          },
          {
            title: "Ready Mix Concrete",
            image: "/images/products/construction/cement/rmc.jpg",
          },
          {
            title: "Sand (River, Desert)",
            image: "/images/products/construction/cement/sand.jpg",
          },
          {
            title: "Crushed Stone & Gravel",
            image: "/images/products/construction/cement/gravel.jpg",
          },
          {
            title: "Aggregates",
            image: "/images/products/construction/cement/aggregates.jpg",
          },
        ],
      },

      {
        id: "steel-metal",
        title: "Steel & Metal Products",
        slug: "steel-metal",
        image:
          "https://images.unsplash.com/photo-1763950865873-41f63536825b?q=80&w=2467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        items: [
          {
            title: "Rebar (TMT, Mild Steel)",
            image: "/images/products/construction/steel/rebar.jpg",
          },
          {
            title: "Structural Steel (I-Beams, Channels, Angles)",
            image: "/images/products/construction/steel/structural.jpg",
          },
          {
            title: "Steel Sheets & Plates",
            image: "/images/products/construction/steel/sheets.jpg",
          },
          {
            title: "Aluminium Sheets & Profiles",
            image: "/images/products/construction/steel/aluminium.jpg",
          },
          {
            title: "Stainless Steel Pipes & Fittings",
            image: "/images/products/construction/steel/sspipes.jpg",
          },
        ],
      },

      {
        id: "wood-plywood",
        title: "Wood & Plywood",
        slug: "wood-plywood",
        image:
          "https://static.wixstatic.com/media/ae7c1a_b7bf768ba9204a7d9c2807c8e669912e~mv2.jpg",
        items: [
          {
            title: "Marine Plywood",
            image: "/images/products/construction/wood/marine.jpg",
          },
          {
            title: "Blockboard",
            image: "/images/products/construction/wood/blockboard.jpg",
          },
          {
            title: "MDF / Particle Board",
            image: "/images/products/construction/wood/mdf.jpg",
          },
          {
            title: "Timber Logs & Planks",
            image: "/images/products/construction/wood/timber.jpg",
          },
          {
            title: "Laminates",
            image: "/images/products/construction/wood/laminates.jpg",
          },
        ],
      },

      {
        id: "electrical-materials",
        title: "Electrical Materials",
        slug: "electrical-materials",
        image:
          "https://www.hondapowerproducts.co.id/cfind/source/images/article/jenis%20alat%20kelistrikan%20dan%20fungsinya.jpg",
        items: [
          {
            title: "Cables (BV, Armored, Flexible)",
            image: "/images/products/construction/electrical/cables.jpg",
          },
          {
            title: "LED Lighting",
            image: "/images/products/construction/electrical/lighting.jpg",
          },
          {
            title: "Switches & Sockets",
            image: "/images/products/construction/electrical/switches.jpg",
          },
          {
            title: "Circuit Breakers & DB Boxes",
            image: "/images/products/construction/electrical/db.jpg",
          },
          {
            title: "Electrical Conduits & Fittings",
            image: "/images/products/construction/electrical/conduits.jpg",
          },
          {
            title: "Transformers & Generators",
            image: "/images/products/construction/electrical/transformer.jpg",
          },
        ],
      },

      {
        id: "plumbing-sanitary",
        title: "Plumbing & Sanitary",
        slug: "plumbing-sanitary",
        image:
          "https://5.imimg.com/data5/SELLER/Default/2024/9/452288857/TF/GR/DU/228991454/sanitary-plumbing-services.jpeg",
        items: [
          {
            title: "PVC / HDPE Pipes",
            image: "/images/products/construction/plumbing/pipes.jpg",
          },
          {
            title: "Brass & SS Fittings",
            image: "/images/products/construction/plumbing/fittings.jpg",
          },
          {
            title: "Valves (Gate, Ball, Butterfly)",
            image: "/images/products/construction/plumbing/valves.jpg",
          },
          {
            title: "Water Tanks",
            image: "/images/products/construction/plumbing/tanks.jpg",
          },
          {
            title: "Sanitary Ware",
            image: "/images/products/construction/plumbing/sanitary.jpg",
          },
          {
            title: "PPR Items",
            image: "/images/products/construction/plumbing/ppr.jpg",
          },
        ],
      },

      {
        id: "hardware-tools",
        title: "Hardware & Tools",
        slug: "hardware-tools",
        image:
          "https://img.freepik.com/free-photo/top-view-mechanical-tools-arrangement_23-2149552411.jpg?semt=ais_hybrid&w=740&q=80",
        items: [
          {
            title: "Hand Tools",
            image: "/images/products/construction/tools/hand.jpg",
          },
          {
            title: "Power Tools",
            image: "/images/products/construction/tools/power.jpg",
          },
          {
            title: "Fasteners",
            image: "/images/products/construction/tools/fasteners.jpg",
          },
          {
            title: "Hinges & Locks",
            image: "/images/products/construction/tools/hinges.jpg",
          },
          {
            title: "Formwork & Scaffolding",
            image: "/images/products/construction/tools/scaffolding.jpg",
          },
        ],
      },

      {
        id: "paints-coatings",
        title: "Paints & Coatings",
        slug: "paints-coatings",
        image:
          "https://www.manufacturingtodayindia.com/cloud/2023/07/26/paint-coating.jpg",
        items: [
          {
            title: "Industrial Coatings",
            image: "/images/products/construction/paints/industrial.jpg",
          },
          {
            title: "Marine Paints",
            image: "/images/products/construction/paints/marine.jpg",
          },
          {
            title: "Primers & Sealants",
            image: "/images/products/construction/paints/primers.jpg",
          },
          {
            title: "Protective Coatings",
            image: "/images/products/construction/paints/protective.jpg",
          },
        ],
      },

      {
        id: "safety-ppe",
        title: "Safety & PPE",
        slug: "safety-ppe",
        image:
          "https://www.aveling.com.au/wp-content/uploads/2023/08/Course_PPE_Safety_Essentials-scaled.jpg",
        items: [
          {
            title: "Helmets & Gloves",
            image: "/images/products/construction/ppe/helmets.jpg",
          },
          {
            title: "Safety Shoes",
            image: "/images/products/construction/ppe/shoes.jpg",
          },
          {
            title: "High Visibility Jackets",
            image: "/images/products/construction/ppe/jackets.jpg",
          },
          {
            title: "Harnesses & Nets",
            image: "/images/products/construction/ppe/harness.jpg",
          },
        ],
      },
    ],
  },

  {
    id: "marine",
    title: "Marine Equipment & Supplies",
    slug: "marine-equipment",
    description:
      "High-quality, durable solutions for efficient maritime operations.",
    icon: <TbSubmarine className="text-white text-3xl" />,
    image: img2,

    children: [
      {
        id: "marine-hardware",
        title: "Marine Hardware",
        slug: "marine-hardware",
        image:
          "https://indushardware.com/cdn/shop/collections/s-l1600_13.jpg?v=1722891162",
        items: [
          {
            title: "Anchor Chains & Ropes",
            image: "/images/products/marine/hardware/chains.jpg",
          },
          {
            title: "Mooring Equipment",
            image: "/images/products/marine/hardware/mooring.jpg",
          },
          {
            title: "Cleats & Bollards",
            image: "/images/products/marine/hardware/cleats.jpg",
          },
          {
            title: "Marine Fenders",
            image: "/images/products/marine/hardware/fenders.jpg",
          },
          {
            title: "Hatch Covers & Ladders",
            image: "/images/products/marine/hardware/hatch.jpg",
          },
        ],
      },

      {
        id: "marine-pipes",
        title: "Marine Pipes & Fittings",
        slug: "marine-pipes-fittings",
        image:
          "https://mb.cision.com/Public/20131/Cnct_FtrdImg_Dj_3769297/aa2eb7f9b931f8b5_featured.jpg",
        items: [
          {
            title: "PVC, HDPE Pipes",
            image: "/images/products/marine/pipes/pvc.jpg",
          },
          {
            title: "Marine Valves & Flanges",
            image: "/images/products/marine/pipes/valves.jpg",
          },
          {
            title: "Tank Fittings & Pumps",
            image: "/images/products/marine/pipes/tank.jpg",
          },
        ],
      },

      {
        id: "navigation-safety",
        title: "Navigation & Safety",
        slug: "navigation-safety",
        image:
          "https://gms.com.sg/wp-content/uploads/2017/01/Navigation-and-Safety-product-3.jpg",
        items: [
          {
            title: "Buoys & Markers",
            image: "/images/products/marine/safety/buoys.jpg",
          },
          {
            title: "Life Jackets & Lifebuoys",
            image: "/images/products/marine/safety/jackets.jpg",
          },
          {
            title: "Fire Extinguishers",
            image: "/images/products/marine/safety/fire.jpg",
          },
          {
            title: "Navigation Lights",
            image: "/images/products/marine/safety/lights.jpg",
          },
        ],
      },

      {
        id: "deck-hull",
        title: "Deck & Hull Materials",
        slug: "deck-hull-materials",
        image: "https://www.eurosailyacht.com/uploads/atc/files/574_small.jpeg",
        items: [
          {
            title: "Anti-fouling Coatings",
            image: "/images/products/marine/deck/coating.jpg",
          },
          {
            title: "Fiberglass & Resins",
            image: "/images/products/marine/deck/fiberglass.jpg",
          },
          {
            title: "Teak Decking",
            image: "/images/products/marine/deck/teak.jpg",
          },
          {
            title: "Corrosion Protection",
            image: "/images/products/marine/deck/corrosion.jpg",
          },
        ],
      },

      {
        id: "marine-maintenance",
        title: "Industrial & Maintenance",
        slug: "marine-maintenance",
        image:
          "https://pipemasters.pt/blog/wp-content/uploads/2019/03/manuten%C3%A7%C3%A3o-industrial-1024x685.jpg",
        items: [
          {
            title: "Hydraulic Hoses",
            image: "/images/products/marine/maintenance/hydraulic.jpg",
          },
          {
            title: "Lubricants & Oils",
            image: "/images/products/marine/maintenance/lubricants.jpg",
          },
          {
            title: "Welding Equipment",
            image: "/images/products/marine/maintenance/welding.jpg",
          },
          {
            title: "Power & Hand Tools",
            image: "/images/products/marine/maintenance/tools.jpg",
          },
        ],
      },
    ],
  },

  {
    id: "others",
    title: "Other Industrial Supplies",
    slug: "other-industrial-supplies",
    description:
      "Premium tyres built for performance, safety, and long-lasting durability.",
    icon: <FaHelmetSafety className="text-white text-3xl" />,
    image: img3,

    children: [
      {
        id: "packaging",
        title: "Packaging Materials",
        slug: "packaging-materials",
        image:
          "https://www.thepackersmovers.com/blog/wp-content/uploads/2018/02/different-packing-materials-important-for-your-move.jpg",
        items: [
          {
            title: "Drums",
            image: "/images/products/misc/packaging/drums.jpg",
          },
          {
            title: "Boxes",
            image: "/images/products/misc/packaging/boxes.jpg",
          },
          {
            title: "Pallets",
            image: "/images/products/misc/packaging/pallets.jpg",
          },
        ],
      },

      {
        id: "industrial-chemicals",
        title: "Industrial Chemicals",
        slug: "industrial-chemicals",
        image:
          "https://images.jdmagicbox.com/quickquotes/images_main/-1knimlmi.png",
        items: [
          {
            title: "General Industrial Chemicals",
            image: "/images/products/misc/chemicals/general.jpg",
          },
        ],
      },

      {
        id: "adhesives-sealants",
        title: "Adhesives & Sealants",
        slug: "adhesives-sealants",
        image:
          "https://www.tech-masters.com/files/5c/a5bfd1b5dc0e27a81e726fbef1ce4d/Adhesives%20%26%20Sealants%20Kopie_2000x900_10.jpg",
        items: [
          {
            title: "Adhesives",
            image: "/images/products/misc/adhesives/adhesive.jpg",
          },
          {
            title: "Sealant Solutions",
            image: "/images/products/misc/adhesives/sealant.jpg",
          },
        ],
      },

      {
        id: "rubber-products",
        title: "Rubber Products",
        slug: "rubber-products",
        image:
          "https://images.jdmagicbox.com/quickquotes/images_main/rubber-product-384485276-9ydoy.jpg",
        items: [
          {
            title: "Gaskets",
            image: "/images/products/misc/rubber/gaskets.jpg",
          },
          { title: "Hoses", image: "/images/products/misc/rubber/hoses.jpg" },
          {
            title: "Rubber Mats",
            image: "/images/products/misc/rubber/mats.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "lubricants",
    title: "Lubricants & Oils",
    slug: "lubricants",
    description:
      "Premium lubricants and oils built for performance, safety, and long-lasting durability.",
    icon: <FaHelmetSafety className="text-white text-3xl" />,
    image: img4,

    children: [
      {
        id: "engine-lubricants",
        title: "Engine Lubricants",
        slug: "engine-lubricants",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/68/SIGAUS_aceite.jpg",
        items: [
          {
            title: "Marine Engine Oils",
            image: "/images/products/lubricants/engine-oil.jpg",
          },
          {
            title: "Diesel Engine Oils",
            image: "/images/products/lubricants/diesel-oil.jpg",
          },
        ],
      },

      {
        id: "industrial-oils",
        title: "Industrial Oils",
        slug: "industrial-oils",
        image:
          "https://interstatesupply.co.in/wp-content/uploads/2024/08/b2b-MARCH-2016-may-pg-38-.jpg",
        items: [
          {
            title: "Hydraulic Oils",
            image: "/images/products/lubricants/hydraulic-oil.jpg",
          },
          {
            title: "Gear Oils & Greases",
            image: "/images/products/lubricants/gear-grease.jpg",
          },
        ],
      },
    ],
  },
];
