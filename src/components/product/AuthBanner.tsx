import Seal from "@/components/Seal";

type AuthBannerProps =
  | { status: "valid"; productId: string }
  | { status: "invalid"; productId: string };

export default function AuthBanner({ status, productId }: AuthBannerProps) {
  if (status === "valid") {
    return (
      <div className="flex flex-col items-center justify-center gap-2 bg-signature px-6 py-4 text-center text-carbon sm:flex-row sm:gap-4">
        <Seal className="h-7 w-7 shrink-0" label="OK" />
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] sm:text-base">
          Verified authentic product
        </p>
        <span className="font-mono text-xs tracking-widest opacity-80">{productId}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-crimson px-6 py-4 text-center text-light sm:flex-row sm:gap-6">
      <p className="font-display text-sm font-bold uppercase tracking-[0.2em] sm:text-base">
        ⚠ Invalid or counterfeit product
      </p>
      <a
        href="mailto:tarsius.ph@gmail.com?subject=Suspected%20counterfeit%20product"
        className="rounded-full border border-light/40 px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors hover:border-light hover:bg-light/10"
      >
        Contact Support
      </a>
    </div>
  );
}
