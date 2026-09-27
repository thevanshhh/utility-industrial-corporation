/**
 * Utility Industrial Corporation — Master Data Model
 * Hyderabad, Telangana, India
 */

export const COMPANY = {
  name: "Utility Industrial Corporation",
  tagline: "Industrial packaging supplier & Industrial Manufacturing",
  established: 2004,
  yearsInOperation: "22+",
  proprietor: "Management Team & Works Director",
  gst: "36AAACG1092F1ZK",
  phoneDisplay: "+91 98910 92626",
  phoneRaw: "+919891092626",
  waNumber: "919891092626",
  email: "contact@utilityindustrialc.in",
  address: "D-1, Industrial Estate, Chandulal Baradari, Hyderabad 500064",
  addressShort: "Hyderabad, Telangana",
  coordinates: "17.3850\u00b0 N, 78.4867\u00b0 E",
  businessType: "Manufacturer · Supplier · Industrial Services",
  teamSize: "25+",
  compliance: "ISO 9001:2015 Compliant Industrial Facility",
  heroImage: "assets/img/01.jpg",
  aboutImage: "assets/img/05.jpg"
};

export const CATALOG = [
  {
    "id": "utility-industrial-corporation-heavy-shipping-boxes",
    "code": "PKG-01",
    "name": "Heavy Duty 7-Ply Corrugated Industrial Shipping Boxes",
    "category": "Corrugated Packaging",
    "spec": "High-compression virgin kraft board engineered for heavy automotive components, machinery freight, and international export.",
    "specsList": [
      {
        "label": "Board Construction",
        "val": "5-Ply & 7-Ply Heavy Duty"
      },
      {
        "label": "Bursting Factor",
        "val": "28 to 36 BF"
      },
      {
        "label": "Compression Load",
        "val": "Up to 900 kgf"
      },
      {
        "label": "Printing",
        "val": "Custom Multi-Color Flexo Branding"
      }
    ],
    "price": "\u20b9145",
    "priceUnit": "/ box"
  },
  {
    "id": "utility-industrial-corporation-die-cut-cartons",
    "code": "PKG-02",
    "name": "Precision Die-Cut Carton & Duplex Packaging Boxes",
    "category": "Die-Cut Cartons",
    "spec": "Accurate folding cartons and structural product boxes tailored for electronics, pharma, hardware, and retail shipping.",
    "specsList": [
      {
        "label": "GSM Range",
        "val": "300 GSM to 600 GSM Grey/White Back"
      },
      {
        "label": "Coating Options",
        "val": "Aqueous / UV / Matt & Gloss Lamination"
      },
      {
        "label": "Locking Style",
        "val": "Crash-Lock Bottom / Tuck-In Flaps"
      },
      {
        "label": "Dimensional Tolerance",
        "val": "\u00b1 0.5 mm High Accuracy"
      }
    ],
    "price": "\u20b945",
    "priceUnit": "/ piece"
  },
  {
    "id": "utility-industrial-corporation-export-pallets-wrap",
    "code": "PKG-03",
    "name": "ISPM-15 Export Wooden Pallets & Stretch Film Rolls",
    "category": "Export Logistics Supplies",
    "spec": "Heat-treated industrial four-way entry pinewood pallets paired with high-tensile stretch film rolls for secure transit.",
    "specsList": [
      {
        "label": "Pallet Dimension",
        "val": "1200 \u00d7 1000 \u00d7 150 mm / Custom"
      },
      {
        "label": "Dynamic Load Rating",
        "val": "1,500 kg (Static: 3,500 kg)"
      },
      {
        "label": "Fumigation / HT",
        "val": "ISPM-15 Certified with Stamp"
      },
      {
        "label": "Stretch Film Thickness",
        "val": "23 to 35 Micron High Elongation"
      }
    ],
    "price": "\u20b91,250",
    "priceUnit": "/ pallet"
  }
];

export function getWhatsAppInquiryUrl(machine, customMessage = "") {
  let text = "";
  if (machine) {
    const priceText = machine.price ? ` (listed at ${machine.price})` : "";
    text = `Hello ${COMPANY.name}, I am interested in the ${machine.name}${priceText}. Please share technical catalog and commercial quotation.`;
  } else if (customMessage) {
    text = customMessage;
  } else {
    text = `Hello ${COMPANY.name}, I would like to request an RFQ quotation for your industrial product range.`;
  }
  return `https://wa.me/${COMPANY.waNumber}?text=${encodeURIComponent(text)}`;
}
