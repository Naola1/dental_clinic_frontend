export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  username: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  user_id: number;
  email: string;
  role: string;
  access_token: string;
}
export interface SidebarItem {
  title: string;
  href: string;
}
