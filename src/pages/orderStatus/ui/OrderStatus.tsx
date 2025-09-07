import { apiUrl } from "@/shared/api/api.config";
import Table from "@/shared/ui/table/Table";
import TableBody from "@/shared/ui/table/TableBody";
import TableCell from "@/shared/ui/table/TableCell";
import TableHeader from "@/shared/ui/table/TableHeader";
import TableHeaderCell from "@/shared/ui/table/TableHeaderCell";
import TableRow from "@/shared/ui/table/TableRow";
import { Button, TableCellActions, Title2 } from "@fluentui/react-components";
import useSWR from "swr";
import { getOrders } from "../api";
import { useGlobalStore } from "@/shared/store/global.store";
import { format } from "date-fns";
import { Info16Regular } from "@fluentui/react-icons";
import OrderInfo from "./orderInfo/OrderInfo";
import { useState } from "react";

const OrderStatus = () => {
    const { data: ordersAll, isLoading } = useSWR(`${apiUrl.orders}`, getOrders);
    // console.log(ordersAll);
    const [showDrawer, setShowDrawer] = useState(false)
    const [orders, setOrders] = useState()
    const { user } = useGlobalStore()

    const sortedorders = ordersAll?.filter((item) => item.user_id == user?.ID)


    const handleModal = (orders: any) => {
        setShowDrawer(prev => !prev);
        setOrders(orders)
    }



    return <>
        <Table>
            <TableHeader>
                <TableHeaderCell>Cтатус заказа</TableHeaderCell>
                <TableHeaderCell>Сумма заказа</TableHeaderCell>
                <TableHeaderCell>Дата</TableHeaderCell>
            </TableHeader>
            <TableBody loading={isLoading}>
                {sortedorders?.map((order) => (
                    <TableRow
                        // key={order.ID}
                        style={{ padding: '10px' }}
                    >
                        <TableCell>
                            <span
                                style={{
                                    padding: '4px 8px',
                                    borderRadius: '5px',
                                    background: order.state == 'in_process' ? '#FFF5F0'
                                        : order.state == 'complete' ? '#DCFCE7'
                                            : order.state == 'rejected' ? '#FCE4E4' : '',
                                    color: order.state == 'in_process' ? '#FA5300'
                                        : order.state == 'complete' ? '#16A34A'
                                            : order.state == 'rejected' ? '#E03E3E' : '',
                                }}
                            >
                                {order.state == 'in_process' ? "В процессе" :order.state == 'complete' ? "Успешно":"Отменено"}
                            </span>
                            <TableCellActions>
                                <Button
                                    icon={<Info16Regular />}
                                    as="button"
                                    appearance="subtle"
                                    onClick={() => handleModal(order)}
                                ></Button>
                            </TableCellActions>
                        </TableCell>
                        <TableCell>{order.price}</TableCell>
                        <TableCell>{format(
                            new Date(order.last_order_time),
                            "dd.MM.yyyy HH:mm:ss"
                        )}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <OrderInfo
            showDrawer={showDrawer}
            setShowDrawer={setShowDrawer}
            orders={orders}
        />
    </>
}

export default OrderStatus;