export interface IProduct {
    id: number;
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
}
