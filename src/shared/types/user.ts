import type { Role } from "./role"

export type User = {
    ID: number,
    CreatedAt: string,
    UpdatedAt: string | null,
    DeletedAt: string | null,
    Username: string,
    Name: string,
    Surname: string,
    Patronymic: string,
    inn: string,
    RoleId: number,
    Role: {
        ID: number,
        CreatedAt: string,
        UpdatedAt: string,
        DeletedAt: string | null,
        Code: Role,
        Desc: string
    },
    Active: boolean,
    Email: string,
    Phone: string
}