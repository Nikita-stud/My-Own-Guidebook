//Supabase is like Firewall, basically BaaS platform with build on sweets
//1.Go to supabase.com, create free acc and project

/**
 * SUPABASE
 * - Handles tables manually, no need to create
 * - Provides user reg, login, email confirmation, password reset, session management
 * - User receive conf emails automatically, no n
 *   Each user get a unique UUID id, all info is in table editor
 *   !!! schema auth !!!
 * - We only need table for application data
 */

//2. We only need table for application data
//sheema public, create new table, Enable Row Level Security (RLS)
/* 
id: int8, primary key (auto-created).
created_at: timestamptz, default now() (auto-created).
title: text, not null.
content: text, not null.
user_id: uuid, auth.uid() (select this from the Suggested expressions menu button).
*/
