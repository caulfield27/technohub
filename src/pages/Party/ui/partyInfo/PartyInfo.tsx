import { useEffect, type Dispatch, type SetStateAction } from "react";
import { mergeStyles } from "@fluentui/react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerHeaderTitle,
} from "@fluentui/react-components";
import { drawer_background, drawer_footer } from "@/shared/const/styles";
import { Dismiss24Regular } from "@fluentui/react-icons";
import Table from "@/shared/ui/table/Table";
import TableHeader from "@/shared/ui/table/TableHeader";
import TableHeaderCell from "@/shared/ui/table/TableHeaderCell";
import TableBody from "@/shared/ui/table/TableBody";
import TableRow from "@/shared/ui/table/TableRow";
import TableCell from "@/shared/ui/table/TableCell";
import useSWR from "swr";
import { apiUrl } from "@/shared/api/api.config";
import { getProducts } from "@/pages/products/api";
import { usePartyInfostyles } from "./styles";

interface IAddRequest {
  showDrawer: boolean;
  setShowDrawer: Dispatch<SetStateAction<boolean>>;
  partyId: number | null;
}

const PartyInfo = ({ showDrawer, setShowDrawer, partyId }: IAddRequest) => {
  const styles = usePartyInfostyles();

    const { data: productAll, isLoading, mutate } = useSWR(`${apiUrl.products}`, getProducts);

    useEffect(() => {
        mutate()
    }, [])

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
                <DrawerHeader  className={mergeStyles(drawer_background)}>
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
                                <TableHeaderCell>Бренд</TableHeaderCell>
                                <TableHeaderCell>Себес-ть</TableHeaderCell>
                                <TableHeaderCell>Цена</TableHeaderCell>
                                <TableHeaderCell>Количество</TableHeaderCell>
                                <TableHeaderCell>Остаток</TableHeaderCell>
                                <TableHeaderCell>Ед-изм</TableHeaderCell>
                                <TableHeaderCell>Категория</TableHeaderCell>
                                <TableHeaderCell>Номер партии</TableHeaderCell>
                                <TableHeaderCell>Склад</TableHeaderCell>
                            </TableHeader>
                            <TableBody loading={isLoading}>
                                {productAll?.filter((item) => item.BatchId == partyId)?.map((product) => (
                                    <TableRow
                                        key={product.ID}
                                        style={{ padding: '10px' }}
                                    >
                                        <TableCell>{product.Name}</TableCell>
                                        <TableCell>{product.Desc}</TableCell>
                                        <TableCell>{product.BuyPrice}</TableCell>
                                        <TableCell>{product.SellPrice}</TableCell>
                                        <TableCell>{product.Quantity}</TableCell>
                                        <TableCell>{(product.Quantity - (product?.Ordered ?? 0))}</TableCell>
                                        <TableCell>{product.Unit}</TableCell>
                                        <TableCell>{product.CategoryId}</TableCell>
                                        <TableCell>{product.BatchId}</TableCell>
                                        <TableCell>{product.WarehouseId}</TableCell>
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

export default PartyInfo;
