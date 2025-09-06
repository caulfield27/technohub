export interface IProduct {
    ID: number;
    Code: string;
    Name: string;
    Desc: string;
    BuyPrice: number;
    SellPrice: number;
    Quantity: number;
    Unit: string;
    Ordered?: number;
    CategoryId: number;
    BatchId: number;
    WarehouseId: number;
    choosed?: boolean;
    QuantityClient?: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    ExpirationDate: string | null;
}