import { User } from './user.model'
export interface UserResponse {
  message: string;
  data: User[];
}
