-- SQL to create the payments table in Supabase
-- Paste this in Supabase Console -> SQL Editor and click Run

create table if not exists payments (
  id bigint generated always as identity primary key,
  product_id bigint not null,
  product_name text not null,
  price numeric not null,
  screenshot text not null, -- Base64 encoded screenshot image
  created_at timestamptz default now()
);

-- Enable RLS (Row Level Security)
alter table payments enable row level security;

-- Create Policies
create policy "Allow public read payments" on payments
  for select using (true);

create policy "Allow public insert payments" on payments
  for insert with check (true);

-- Enable Realtime
alter publication supabase_realtime add table payments;
