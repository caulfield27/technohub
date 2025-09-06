interface IStorageRole {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  Code: string;
  Desc: string;
}

interface IStorageUser {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  Username: string;
  Name: string;
  Surname: string;
  Patronymic: string;
  inn: string;
  role_id: number;
  Role: IStorageRole;
  Active: boolean;
  Email: string;
  Phone: string;
}

interface Storage {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  Name: string;
  Address: string;
  Active: boolean;
  user_id: number;
  User: IStorageUser;
}

interface IStoragesState {
  storages: Storage[];
  setStorages: (storages: Storage[]) => void;
}

export type { Storage, IStoragesState, IStorageUser, IStorageRole };
