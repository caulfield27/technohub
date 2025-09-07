import { type Dispatch, type SetStateAction } from 'react'
import { mergeStyles } from "@fluentui/react";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerHeaderTitle,
} from "@fluentui/react-components";
import { drawer_background, drawer_footer } from "../../../../shared/const/styles";
import { Dismiss24Regular } from '@fluentui/react-icons';
import Table from '@/shared/ui/table/Table';
import TableHeader from '@/shared/ui/table/TableHeader';
import TableHeaderCell from '@/shared/ui/table/TableHeaderCell';
import TableBody from '@/shared/ui/table/TableBody';
import TableRow from '@/shared/ui/table/TableRow';
import TableCell from '@/shared/ui/table/TableCell';
import { useOrderinfostyles } from './styles';

interface IAddRequest {
    showDrawer: boolean;
    setShowDrawer: Dispatch<SetStateAction<boolean>>;
    orders: any
}

const OrderInfo = ({ showDrawer, setShowDrawer, orders }: IAddRequest) => {
    const styles = useOrderinfostyles();

    return (
        <div>
            <Drawer
                type="overlay"
                separator
                open={showDrawer}
                onOpenChange={(_, { open }) => setShowDrawer(open)}
                position="end"
                style={{ width: '1200px' }}
            >
                <DrawerHeader className={mergeStyles(drawer_background)}>
                    <DrawerHeaderTitle
                        action={
                            <Button
                                appearance="subtle"
                                aria-label="Close"
                                icon={<Dismiss24Regular />}
                                onClick={() => setShowDrawer(false)}
                            />
                        }
                    >
                        Инфо о товары парти
                    </DrawerHeaderTitle>
                </DrawerHeader>
                <DrawerBody className={mergeStyles(drawer_background)}>
                    <div>
                        <Table>
                            <TableHeader>
                                <TableHeaderCell>Название</TableHeaderCell>
                                <TableHeaderCell>Цена</TableHeaderCell>
                                <TableHeaderCell>Количество</TableHeaderCell>
                                <TableHeaderCell>Ед-изм</TableHeaderCell>
                            </TableHeader>
                            <TableBody>
                                {orders?.orders.map((product: any) => (
                                    <TableRow
                                        key={product.ID}
                                        style={{ padding: '10px' }}
                                    >
                                        <TableCell>{product.Product.Name}</TableCell>
                                        <TableCell>{product.Product.SellPrice}</TableCell>
                                        <TableCell>{product.Quantity}</TableCell>
                                        <TableCell>{product.Product.Unit}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </DrawerBody>
                <DrawerFooter className={mergeStyles(drawer_footer)}>
                    <div className={styles.button_footer}>
                        <Button
                            form="add_user"
                            type="reset"
                            appearance="secondary"

                            onClick={() => setShowDrawer(prev => !prev)}
                        >
                            Назад
                        </Button>
                    </div>
                </DrawerFooter>
            </Drawer>
        </div>
    )
}

export default OrderInfo