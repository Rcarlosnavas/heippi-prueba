export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {};
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

export interface UserPosts {
  userId: number;
  id: number;
  title: string;
  complete: boolean;
}
