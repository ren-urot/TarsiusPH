export type ProductStatus = "Active" | "Inactive";

export type ProductSpecifications = Record<string, string | number>;

export type Product = {
  id: string;
  product_id: string;
  product_name: string;
  model: string;
  description: string;
  specifications: ProductSpecifications;
  materials: string;
  weight: string;
  grip_size: string;
  manufacture_date: string;
  warranty: string;
  image_url: string;
  gallery_urls: string[] | null;
  status: ProductStatus;
  created_at: string;
};

export type Database = {
  public: {
    Tables: {
      products: {
        Row: Product;
        Insert: Partial<Product> & Pick<Product, "product_id" | "product_name">;
        Update: Partial<Product>;
      };
    };
  };
};
