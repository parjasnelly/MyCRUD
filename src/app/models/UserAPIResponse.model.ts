import { User } from './user.model'
export interface UserAPIResponse {
  message: string;
  data: User[];
}
