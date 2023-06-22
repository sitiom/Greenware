create table "public"."cart_products" (
    "id" bigint not null,
    "created_at" timestamp with time zone default now(),
    "product_id" bigint,
    "quantity" integer,
    "profile_id" uuid,
    "total" double precision
);


alter table "public"."cart_products" enable row level security;

create table "public"."favorites" (
    "id" bigint not null,
    "product_id" bigint,
    "profile_id" uuid
);


alter table "public"."favorites" enable row level security;

create table "public"."line_items" (
    "id" bigint not null,
    "created_at" timestamp with time zone default now(),
    "cart_prod_id" bigint,
    "order_id" bigint
);


alter table "public"."line_items" enable row level security;

create table "public"."orders" (
    "id" bigint not null,
    "created_at" timestamp with time zone default now(),
    "shipping_address_id" bigint,
    "status" text
);


alter table "public"."orders" enable row level security;

create table "public"."products" (
    "id" bigint not null,
    "name" character varying,
    "price" double precision,
    "discount" double precision,
    "discount_price" double precision,
    "created_at" timestamp with time zone default now(),
    "average_rating" double precision,
    "url" text
);


alter table "public"."products" enable row level security;

create table "public"."profiles" (
    "id" uuid not null,
    "updated_at" timestamp with time zone,
    "username" text,
    "full_name" text,
    "avatar_url" text
);


alter table "public"."profiles" enable row level security;

create table "public"."reviews" (
    "id" bigint not null,
    "title" character varying,
    "description" character varying,
    "rating" smallint,
    "created_at" timestamp with time zone default now(),
    "profile_id" uuid,
    "product_id" bigint
);


alter table "public"."reviews" enable row level security;

create table "public"."salvaged_devices" (
    "id" bigint not null,
    "created_at" timestamp with time zone default now(),
    "name" text,
    "brand" text,
    "is_working" boolean,
    "storage" text,
    "memory" text,
    "status" text,
    "profiles_id" uuid,
    "url" text
);


alter table "public"."salvaged_devices" enable row level security;

create table "public"."salvaged_parts" (
    "id" bigint not null,
    "created_at" timestamp with time zone default now()
);


create table "public"."shipping_addresses" (
    "id" bigint not null,
    "created_at" timestamp with time zone default now(),
    "address_line_one" text,
    "address_line_two" text,
    "full_name" text,
    "region" text,
    "province" text,
    "barangay" text,
    "postal_code" integer,
    "profile_id" uuid
);


alter table "public"."shipping_addresses" enable row level security;

CREATE UNIQUE INDEX cart_products_pkey ON public.cart_products USING btree (id);

CREATE UNIQUE INDEX favorites_pkey ON public.favorites USING btree (id);

CREATE UNIQUE INDEX line_items_pkey ON public.line_items USING btree (id);

CREATE UNIQUE INDEX orders_pkey ON public.orders USING btree (id);

CREATE UNIQUE INDEX products_pkey ON public.products USING btree (id);

CREATE UNIQUE INDEX profiles_pkey ON public.profiles USING btree (id);

CREATE UNIQUE INDEX profiles_username_key ON public.profiles USING btree (username);

CREATE UNIQUE INDEX reviews_pkey ON public.reviews USING btree (id);

CREATE UNIQUE INDEX salvaged_devices_pkey ON public.salvaged_devices USING btree (id);

CREATE UNIQUE INDEX salvaged_parts_pkey ON public.salvaged_parts USING btree (id);

CREATE UNIQUE INDEX shipping_addresses_pkey ON public.shipping_addresses USING btree (id);

alter table "public"."cart_products" add constraint "cart_products_pkey" PRIMARY KEY using index "cart_products_pkey";

alter table "public"."favorites" add constraint "favorites_pkey" PRIMARY KEY using index "favorites_pkey";

alter table "public"."line_items" add constraint "line_items_pkey" PRIMARY KEY using index "line_items_pkey";

alter table "public"."orders" add constraint "orders_pkey" PRIMARY KEY using index "orders_pkey";

alter table "public"."products" add constraint "products_pkey" PRIMARY KEY using index "products_pkey";

alter table "public"."profiles" add constraint "profiles_pkey" PRIMARY KEY using index "profiles_pkey";

alter table "public"."reviews" add constraint "reviews_pkey" PRIMARY KEY using index "reviews_pkey";

alter table "public"."salvaged_devices" add constraint "salvaged_devices_pkey" PRIMARY KEY using index "salvaged_devices_pkey";

alter table "public"."salvaged_parts" add constraint "salvaged_parts_pkey" PRIMARY KEY using index "salvaged_parts_pkey";

alter table "public"."shipping_addresses" add constraint "shipping_addresses_pkey" PRIMARY KEY using index "shipping_addresses_pkey";

alter table "public"."cart_products" add constraint "cart_products_product_id_fkey" FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE not valid;

alter table "public"."cart_products" validate constraint "cart_products_product_id_fkey";

alter table "public"."cart_products" add constraint "cart_products_profile_id_fkey" FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE not valid;

alter table "public"."cart_products" validate constraint "cart_products_profile_id_fkey";

alter table "public"."favorites" add constraint "favorites_product_id_fkey" FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE not valid;

alter table "public"."favorites" validate constraint "favorites_product_id_fkey";

alter table "public"."favorites" add constraint "favorites_profile_id_fkey" FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE not valid;

alter table "public"."favorites" validate constraint "favorites_profile_id_fkey";

alter table "public"."line_items" add constraint "line_items_cart_prod_id_fkey" FOREIGN KEY (cart_prod_id) REFERENCES cart_products(id) not valid;

alter table "public"."line_items" validate constraint "line_items_cart_prod_id_fkey";

alter table "public"."line_items" add constraint "line_items_order_id_fkey" FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE not valid;

alter table "public"."line_items" validate constraint "line_items_order_id_fkey";

alter table "public"."profiles" add constraint "profiles_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."profiles" validate constraint "profiles_id_fkey";

alter table "public"."profiles" add constraint "profiles_username_key" UNIQUE using index "profiles_username_key";

alter table "public"."profiles" add constraint "username_length" CHECK ((char_length(username) >= 3)) not valid;

alter table "public"."profiles" validate constraint "username_length";

alter table "public"."reviews" add constraint "reviews_product_id_fkey" FOREIGN KEY (product_id) REFERENCES products(id) not valid;

alter table "public"."reviews" validate constraint "reviews_product_id_fkey";

alter table "public"."reviews" add constraint "reviews_profile_id_fkey" FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE not valid;

alter table "public"."reviews" validate constraint "reviews_profile_id_fkey";

alter table "public"."salvaged_devices" add constraint "salvaged_devices_profiles_id_fkey" FOREIGN KEY (profiles_id) REFERENCES profiles(id) ON DELETE CASCADE not valid;

alter table "public"."salvaged_devices" validate constraint "salvaged_devices_profiles_id_fkey";

alter table "public"."shipping_addresses" add constraint "shipping_addresses_profile_id_fkey" FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE not valid;

alter table "public"."shipping_addresses" validate constraint "shipping_addresses_profile_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$function$
;

create policy "Public profiles are viewable by everyone."
on "public"."profiles"
as permissive
for select
to public
using (true);


create policy "Users can insert their own profile."
on "public"."profiles"
as permissive
for insert
to public
with check ((auth.uid() = id));


create policy "Users can update own profile."
on "public"."profiles"
as permissive
for update
to public
using ((auth.uid() = id));
