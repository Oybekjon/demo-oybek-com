import { UserModel } from './user.model';

export interface UserExtendedModel extends UserModel {
    Password: string;
}