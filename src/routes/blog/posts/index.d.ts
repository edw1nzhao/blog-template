export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[];
