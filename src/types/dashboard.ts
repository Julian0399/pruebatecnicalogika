
export type Category = {
  id: string;
  name: string;
  icon: string;
  status: number;
  description: string;
  createdAt: string;
};

export type DashboardState = {
  data: Category[];
  loading: boolean;
  error: string | null;
};
