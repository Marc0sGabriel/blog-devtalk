interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type?: 'paragraph' | 'link' | 'hashtag' | {};
  content: string;
}

export interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date;
}
