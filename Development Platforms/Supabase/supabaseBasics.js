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

//3.RLS basically controlling who can access what data
//IF RLS disabled YOU Will beb HACKED!!!
//auth.uid() returns the ID of the currently authenticated user, similar to req.user.id in our JWT middleware. Access is only allowed if the logged-in user is equal to the user_id in this table row.
//Authentication > Policies > New Policy

//Read Policy -allow users to read their own posts
/*
CREATE POLICY "Users can read own posts" ON posts
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
*/

//Insert Policy - allow users to create posts
/*
CREATE POLICY "Users can insert own posts" ON posts
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
*/

//Update Policy - allow users to update their own posts
//cretae poliy in table posts for update operation where
//supabase table posts from 2.
//users are authenticated,
//USING = and only if the auth.uid() matches the user_id of the post being updated
//auth.uid is currently logged in user
//WITH CHECK to ensure that the user can only update posts they own
/*
CREATE POLICY "Users can update own posts" ON posts
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
*/

//Delete Policy - allow users to delete their own posts
/*
CREATE POLICY "Users can delete own posts" ON posts
  FOR DELETE TO authenticated USING (auth.uid() = user_id);
*/

//4. Project settings > API KEYS > Publishabable key (public) copy
//it is a key that will be used to check for all RLS policies for each user using the key
//copy have it saved for later use in frontend

//5.Project setting > Data API > URL
//copy the URL for later use in frontend

//6 Create js/supabase.js file and add your 4.5 points
//Add supabase to project through CDN link in js/supabase.js
//find it in supabase docs and add for js or what ever you are using as main language
//FULL PROJECT: https://github.com/NoroffFEU/supabase-example
//(+esm) in the end allows us to ecport, immport
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = 'https://your-supabase-url.supabase.co'; //process.env.SUPABASE_URL;
const supabaseKey = 'donodnoqwndnoqw';

export const supabase = createClient(supabaseUrl, supabaseKey);

//7 When using supabase, import that supabase object from js/supabase.js
import { supabase } from './supabase.js';
