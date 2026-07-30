export type Product = {
  productId: string;
  productName: string;
  model: string;
  description: string;
  specifications: Record<string, string>;
  materials: string;
  weight: string;
  gripSize: string;
  manufactureDate: string;
  warranty: string;
  imageUrl: string;
  galleryUrls: string[];
};

// Static product ledger baked into the site at build time - no database,
// no server lookup. Tapping an NFC tag opens /product/[productId]; the
// page renders fully static HTML for every ID listed here, and any ID
// not listed renders the invalid/counterfeit state.
const PRODUCTS: Product[] = [
  {
    productId: "TRS-000123",
    productName: "Tarsius Vantage Pro",
    model: "VNT-PRO-16",
    description:
      "Our flagship competition paddle: a raw carbon-fiber face over a 16mm polymer core, tuned for players who need control without giving up pop.",
    specifications: {
      "Core Technology": "16mm Polymer Honeycomb",
      "Surface Material": "Raw Toray Carbon Fiber",
      "Swing Weight": "118g",
      Balance: "Head-heavy",
    },
    materials: "Carbon fiber face, polymer honeycomb core, foam edge guard",
    weight: "225g",
    gripSize: "4 1/4 in",
    manufactureDate: "2026-03-01",
    warranty: "2-year manufacturer warranty against structural defects",
    imageUrl: "/products/vantage-pro/main.jpg",
    galleryUrls: [
      "/products/vantage-pro/main.jpg",
      "/products/vantage-pro/face.jpg",
      "/products/vantage-pro/edge.jpg",
    ],
  },
];

export function getProductByProductId(productId: string): Product | null {
  return PRODUCTS.find((p) => p.productId === productId) ?? null;
}

export function getAllProductIds(): string[] {
  return PRODUCTS.map((p) => p.productId);
}
