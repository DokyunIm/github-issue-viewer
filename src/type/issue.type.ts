export interface IssueResponse {
  id: number;
  number: number;
  title: string;
  user: {
    id: number;
    login: string;
    avatar_url: string;
  };
  comments: number;
  created_at: string;
  body: string;
}

export interface Issue {
  id: string;
  number: string;
  title: string;
  issuer: string;
  totalComments: number;
  createdAt: string;
  avatarUrl?: string;
  content?: string;
}
