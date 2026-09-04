create table if not exists public.user_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  item_id text not null,
  mastered boolean not null default false,
  followed boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, item_id),
  constraint user_progress_has_status check (mastered or followed)
);

alter table public.user_progress enable row level security;

revoke all on table public.user_progress from anon;
grant select, insert, update, delete on table public.user_progress to authenticated;

drop policy if exists "Users can read own progress" on public.user_progress;
create policy "Users can read own progress"
  on public.user_progress for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can insert own progress" on public.user_progress;
create policy "Users can insert own progress"
  on public.user_progress for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update own progress" on public.user_progress;
create policy "Users can update own progress"
  on public.user_progress for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can delete own progress" on public.user_progress;
create policy "Users can delete own progress"
  on public.user_progress for delete
  to authenticated
  using ((select auth.uid()) = user_id);

create index if not exists user_progress_updated_at_idx
  on public.user_progress (user_id, updated_at desc);
