-- Create blog posts table
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  slug TEXT UNIQUE NOT NULL,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Enable RLS for blog posts
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- RLS Policies for blog posts
-- Allow public to view published posts
CREATE POLICY "blog_posts_select_published" ON public.blog_posts 
  FOR SELECT USING (published = true);

-- Allow authenticated users to view their own posts (including drafts)
CREATE POLICY "blog_posts_select_own" ON public.blog_posts 
  FOR SELECT USING (auth.uid() = user_id);

-- Allow authenticated users to insert their own posts
CREATE POLICY "blog_posts_insert_own" ON public.blog_posts 
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Allow authenticated users to update their own posts
CREATE POLICY "blog_posts_update_own" ON public.blog_posts 
  FOR UPDATE USING (auth.uid() = user_id);

-- Allow authenticated users to delete their own posts
CREATE POLICY "blog_posts_delete_own" ON public.blog_posts 
  FOR DELETE USING (auth.uid() = user_id);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blog_posts_updated_at 
  BEFORE UPDATE ON public.blog_posts 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
