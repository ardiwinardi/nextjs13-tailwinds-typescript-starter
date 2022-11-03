import { Role } from '../../../role/domain/entities/role.entity';

export interface User {
  name: string;
  email: string;
  role: Role;
}
