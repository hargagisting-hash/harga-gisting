create table if not exists prices(id bigserial primary key,commodity text not null,market text not null check(market in('atas','bawah')),price numeric not null,photo_url text,created_at timestamptz default now());
create index on prices(commodity,market,created_at desc);
alter table prices enable row level security;
create policy "public read" on prices for select using(true);
insert into storage.buckets(id,name,public) values('harga-foto','harga-foto',true) on conflict do nothing;
create policy "public read foto" on storage.objects for select using(bucket_id='harga-foto');
