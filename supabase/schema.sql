-- Tarsius product authentication schema
-- Run against your Supabase project (SQL Editor or `supabase db push`).

create extension if not exists "pgcrypto";

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  product_id text not null unique,
  product_name text not null,
  model text not null default '',
  description text not null default '',
  specifications jsonb not null default '{}'::jsonb,
  materials text not null default '',
  weight text not null default '',
  grip_size text not null default '',
  manufacture_date date,
  warranty text not null default '',
  image_url text not null default '',
  -- Additive beyond the base PRD schema: the product page requires an
  -- image gallery, and a single image_url can't populate one.
  gallery_urls text[] not null default '{}',
  status text not null default 'Active' check (status in ('Active', 'Inactive')),
  created_at timestamptz not null default now()
);

create index if not exists products_product_id_idx on public.products (product_id);

alter table public.products enable row level security;

-- Product lookup is public and read-only: anyone with a product_id (from
-- a tapped NFC tag) can read that one row, nothing else is exposed.
create policy "Public can read active products"
  on public.products
  for select
  to anon
  using (status = 'Active');

-- Seed example matching the PRD's sample URL (tarsius.com/product/TRS-000123).
insert into public.products (
  product_id, product_name, model, description, specifications,
  materials, weight, grip_size, manufacture_date, warranty, image_url, gallery_urls, status
) values (
  'TRS-000123',
  'Tarsius Vantage Pro',
  'VNT-PRO-16',
  'Our flagship competition paddle: a raw carbon-fiber face over a 16mm polymer core, tuned for players who need control without giving up pop.',
  '{"core_technology": "16mm Polymer Honeycomb", "surface_material": "Raw Toray Carbon Fiber", "swing_weight": "118g", "balance": "Head-heavy"}'::jsonb,
  'Carbon fiber face, polymer honeycomb core, foam edge guard',
  '225g',
  '4 1/4 in',
  '2026-03-01',
  '2-year manufacturer warranty against structural defects',
  '/products/vantage-pro/main.jpg',
  array['/products/vantage-pro/main.jpg', '/products/vantage-pro/face.jpg', '/products/vantage-pro/edge.jpg'],
  'Active'
)
on conflict (product_id) do nothing;
