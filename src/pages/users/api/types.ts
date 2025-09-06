import type { Role } from "@/shared/types/role";

export interface IUserItem {
    Active: boolean;
    CreatedAt: string;
    DeletedAt: string | null;
    Email: string;
    ID: number;
    Name: string;
    Patronymic: string;
    Phone: string;
    Role: {
        Code: Role
    };
    Surname: string
    UpdatedAt: string
    Username: string
    inn: string
    role_id: number
}