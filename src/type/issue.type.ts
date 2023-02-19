export interface Issue {
  id: string;
  number: string;
  title: string;
  issuer: string;
  totalComments: number;
  createdAt: string;
  avatarUrl?: string;
}
