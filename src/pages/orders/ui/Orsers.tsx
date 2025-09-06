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

const Orders = () => {
  const swrKey = apiUrl.orders;
  const { data } = useSWR(swrKey, getOrders);

  return (
    <>
      <Table>
        <TableHeader>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Product ID</TableHeaderCell>
          <TableHeaderCell>Количество</TableHeaderCell>
          <TableHeaderCell>Группа</TableHeaderCell>
          <TableHeaderCell>Состояние</TableHeaderCell>
          <TableHeaderCell>Создано</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {data?.map((order: any) => (
            <TableRow key={order.ID}>
              <TableCell>{order.ID}</TableCell>
              <TableCell>{order.product_id}</TableCell>
              <TableCell>{order.Quantity}</TableCell>
              <TableCell>{order.GroupId}</TableCell>
              <TableCell>{order.State}</TableCell>
              <TableCell>{formatDate(order.CreatedAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Orders;
