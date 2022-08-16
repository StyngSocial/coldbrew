export interface User {
  userId: string;
  username: string,
  email: string,
  hashedPassword: string;
  ownerKey: string,
  activeKey: string,
  postingKey: string
}