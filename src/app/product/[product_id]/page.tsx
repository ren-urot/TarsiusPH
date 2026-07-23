import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProductByProductId } from "@/lib/supabase/products";
import AuthBanner from "@/components/product/AuthBanner";
import ProductGallery from "@/components/product/ProductGallery";
import Footer from "@/components/Footer";
import Seal from "@/components/Seal";

type PageProps = { params: Promise<{ product_id: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { product_id } = await params;
  const product = await getProductByProductId(product_id);

  return {
    title: product ? `${product.product_name} | Tarsius` : `Unrecognized product | Tarsius`,
  };
}

function formatSpecLabel(key: string) {
  return key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default async function ProductPage({ params }: PageProps) {
  const { product_id } = await params;
  const product = await getProductByProductId(product_id);

  if (!product) {
    return (
      <>
        <AuthBanner status="invalid" productId={product_id} />
        <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-crimson">
            Authentication failed
          </p>
          <h1 className="font-display mt-4 max-w-xl text-4xl font-extrabold uppercase leading-tight sm:text-5xl">
            We couldn&apos;t verify this product
          </h1>
          <p className="mt-6 max-w-md text-light/70">
            The code <span className="font-mono text-light">{product_id}</span> doesn&apos;t
            match any paddle in the Tarsius production ledger. If you tapped this from a
            Tarsius product, it may be counterfeit. Please get in touch so we can look into it.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:tarsius.ph@gmail.com?subject=Suspected%20counterfeit%20product"
              className="rounded-full bg-signature px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-carbon"
            >
              Contact Support
            </a>
            <Link
              href="/"
              className="rounded-full border border-graphite px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-light/80 transition-colors hover:border-light/40"
            >
              Visit Tarsius.com
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const specRows: [string, string][] = [
    ["Materials", product.materials],
    ["Weight", product.weight],
    ["Grip Size", product.grip_size],
    ...Object.entries(product.specifications ?? {}).map(
      ([k, v]) => [formatSpecLabel(k), String(v)] as [string, string]
    ),
    [
      "Manufactured",
      product.manufacture_date
        ? new Date(product.manufacture_date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
          })
        : "Not available",
    ],
    ["Warranty", product.warranty],
  ].filter(([, v]): boolean => Boolean(v)) as [string, string][];

  return (
    <>
      <AuthBanner status="valid" productId={product.product_id} />
      <main className="flex-1 bg-carbon px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-6xl">
          <Link href="/" aria-label="Tarsius home">
            <Image src="/hero/tarsius-logo.svg" alt="Tarsius" width={1612} height={1054} className="h-11 w-auto" />
          </Link>

          <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <ProductGallery
              images={product.gallery_urls?.length ? product.gallery_urls : [product.image_url]}
              productName={product.product_name}
            />

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
                {product.model || "Tarsius Paddle"}
              </p>
              <h1 className="font-display mt-3 text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl">
                {product.product_name}
              </h1>
              <p className="mt-6 max-w-lg text-light/75">{product.description}</p>

              <div className="mt-10 flex items-center gap-3 rounded-xl border border-graphite bg-graphite/40 px-5 py-4">
                <Seal className="h-10 w-10 shrink-0" />
                <div className="font-mono text-xs uppercase tracking-widest text-light/60">
                  Certified unit
                  <div className="mt-1 text-sm text-victory">{product.product_id}</div>
                </div>
              </div>

              <dl className="mt-10 divide-y divide-graphite border-y border-graphite">
                {specRows.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[8rem_1fr] items-baseline gap-4 py-4 sm:grid-cols-[10rem_1fr]"
                  >
                    <dt className="font-mono text-xs uppercase tracking-[0.2em] text-victory/80">
                      {label}
                    </dt>
                    <dd className="text-light/85">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
