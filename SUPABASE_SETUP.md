# 🟢 Supabase Setup Guide – Richit Computer

This guide will walk you through creating a **free Supabase PostgreSQL database**
so that all your product and category changes are saved permanently in the cloud
and visible on every device in real-time.

**Estimated time: 10–15 minutes**

---

## Step 1 – Create a Supabase Account

1. Open **https://supabase.com/** in your browser.
2. Click **"Start your project"** (top-right).
3. Sign in with **GitHub** or your **email address** (both are free).

---

## Step 2 – Create a New Project

1. Click **"New project"**.
2. Fill in:
   - **Name:** `richit-computer` (or anything you like)
   - **Database Password:** Choose a strong password and **save it somewhere safe**
   - **Region:** `South Asia (Mumbai)` — closest to India
3. Click **"Create new project"** → wait ~2 minutes for it to be ready.

---

## Step 3 – Create the Database Table

1. In the left sidebar, click **"SQL Editor"**.
2. Click **"New query"**.
3. **Copy and paste** the following SQL exactly, then click **"Run"** (▶️ button):

```sql
-- Create the table that stores products and categories
create table if not exists store_config (
  key        text primary key,
  data       jsonb not null default '[]'::jsonb,
  updated_at timestamptz default now()
);

-- Enable Row Level Security
alter table store_config enable row level security;

-- Allow anyone to read (visitors see products)
create policy "Allow public read" on store_config
  for select using (true);

-- Allow anyone to write (owner password is handled in the website frontend)
create policy "Allow public write" on store_config
  for all using (true) with check (true);

-- Enable realtime updates on this table
alter publication supabase_realtime add table store_config;

-- Insert empty placeholder rows (the site will fill them with real data)
insert into store_config (key, data)
values ('products', '[]'::jsonb), ('categories', '[]'::jsonb)
on conflict (key) do nothing;
```

4. You should see **"Success. No rows returned"** — that means it worked ✅

---

## Step 4 – Get Your API Credentials

1. In the left sidebar, click **⚙️ "Project Settings"** (gear icon at the bottom).
2. Click **"API"** in the submenu.
3. You will see two values you need:

| Field | Where to find it |
|---|---|
| **Project URL** | Under "Project URL" — looks like `https://abcdef.supabase.co` |
| **Anon / Public Key** | Under "Project API keys → anon public" — a long string starting with `eyJ...` |

---

## Step 5 – Paste Credentials into supabase-config.js

1. Open the file **`supabase-config.js`** in this folder (in VS Code or any text editor).
2. Replace the two placeholder values:

**Before:**
```js
const SUPABASE_URL      = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

**After (example):**
```js
const SUPABASE_URL      = 'https://abcdefghij.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

3. **Save the file.**

---

## Step 6 – Test It

1. Open `index.html` in your browser.
2. Press **F12** to open DevTools → go to the **Console** tab.
3. You should see:
   > 🟢 Supabase connected! All product/category changes will sync to the cloud database.
4. A toast message will appear on screen:
   > 🟢 Connected to Supabase — data syncs across all devices!
5. Log in to the **Owner Portal** and **add or edit a product**.
6. Open the **Supabase Console → Table Editor → store_config** table.
   - You should see a row with `key = "products"` containing all your product data!

---

## Step 7 – Verify Real-Time Sync

1. Open the site on **two different browsers** (or different devices on the same network).
2. Log in to the Owner Portal on one browser and **add a new product**.
3. Watch the **other browser** — the product will appear **automatically within 1–2 seconds** without refreshing!

---

## How the Sync Works

```
Owner edits product/category in the portal
              ↓
 ┌────────────────────────────────────────────┐
 │  Saved to localStorage  (instant cache)    │
 │  Saved to Supabase PostgreSQL (permanent)  │
 └────────────────────────────────────────────┘
              ↓ Supabase Realtime (WebSocket)
 ┌────────────────────────────────────────────┐
 │  All other browsers open on this site      │
 │  receive the update automatically          │
 └────────────────────────────────────────────┘
```

---

## Database Structure

Supabase stores your data in a PostgreSQL table called **`store_config`**:

| Column | Type | Example value |
|---|---|---|
| `key` | text (primary key) | `"products"` or `"categories"` |
| `data` | jsonb (array) | `[{"id":1,"name":"ProShield 4K",...}]` |
| `updated_at` | timestamp | `2026-07-11 15:00:00` |

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Console shows "Supabase not configured" | Check you replaced ALL `YOUR_...` placeholders in `supabase-config.js` |
| Console shows "Supabase SDK not loaded" | Check your internet connection; the SDK loads from CDN |
| "permission denied for table store_config" | Make sure you ran the SQL from Step 3 including the policy lines |
| Products don't appear on another device | Make sure you ran `alter publication supabase_realtime add table store_config` |
| Site says data saved but Supabase table is empty | Check the SQL query ran successfully (no red error messages) |

---

## Supabase Free Tier Limits (More than enough for this shop)

| Resource | Free Limit |
|---|---|
| Database storage | 500 MB |
| Realtime connections | 200 concurrent |
| API requests | 2 million / month |
| Bandwidth | 5 GB / month |

---

*Need help? Contact the developer.*
