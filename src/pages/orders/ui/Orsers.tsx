import useSWR from "swr";
import { apiUrl } from "@/shared/api/api.config";
import { getOrders } from "../api";
import Table from "@/shared/ui/table/Table";
import TableHeader from "@/shared/ui/table/TableHeader";
import TableHeaderCell from "@/shared/ui/table/TableHeaderCell";
import TableBody from "@/shared/ui/table/TableBody";
import TableRow from "@/shared/ui/table/TableRow";
import TableCell from "@/shared/ui/table/TableCell";
import { formatDate } from "@/shared/utils/formatDate";
import { Button } from "@fluentui/react-components";
import { Eye20Regular } from "@fluentui/react-icons";
import { useState } from "react";
import StatusDropdown from "./StatusDropdown";
import { mutate } from "swr";
import Modal from "./Modal";

export interface Order {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: null;
  user_id: number;
  User: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: null;
    Username: string;
    Name: string;
    Surname: string;
    Patronymic: string;
    inn: string;
    role_id: number;
    Role: null;
    Active: true;
    Email: string;
    Phone: string;
  };
  product_id: number;
  Product: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: null;
    Code: string;
    Name: string;
    Desc: string;
    BuyPrice: number;
    SellPrice: number;
    Quantity: number;
    Unit: string;
    Ordered: number;
    CategoryId: number;
    ExpirationDate: null;
    BatchId: number;
    WarehouseId: number;
  };
  Quantity: number;
  GroupId: string;
  State: string;
}

export interface OrderItem {
  group_id: string;
  user_id: string;
  quantity: number;
  price: number;
  state: string;
  last_order_time: string;
  orders: Order[];
}

const Orders = () => {
  const swrKey = apiUrl.orders;
  const { data } = useSWR(swrKey, getOrders);

  const [showOrdersDialog, setShowOrdersDialog] = useState(false);
  const [selectedOrders, setSelectedOrders] = useState<Order[] | null>(null);

  return (
    <>
      <Table>
        <TableHeader>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Количество</TableHeaderCell>
          <TableHeaderCell>Цена</TableHeaderCell>
          <TableHeaderCell>Состояние</TableHeaderCell>
          <TableHeaderCell>Последний заказ</TableHeaderCell>
          <TableHeaderCell>Заказы</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {data?.map((group: OrderItem, idx) => (
            <TableRow key={group.group_id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{group.quantity}</TableCell>
              <TableCell>{group.price}</TableCell>
              <TableCell>
                <StatusDropdown
                  group={group}
                  onUpdated={() => mutate(swrKey)}
                />
              </TableCell>
              <TableCell>{formatDate(group.last_order_time)}</TableCell>
              <TableCell>
                <Button
                  icon={<Eye20Regular />}
                  onClick={() => {
                    setSelectedOrders(group.orders ?? []);
                    setShowOrdersDialog(true);
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        showOrdersDialog={showOrdersDialog}
        setShowOrdersDialog={setShowOrdersDialog}
        selectedOrders={selectedOrders || []}
      />
    </>
  );
};

export default Orders;
