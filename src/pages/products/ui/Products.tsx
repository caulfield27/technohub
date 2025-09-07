import { Button, Input, TableSelectionCell } from "@fluentui/react-components";
import { useProductstyles } from "./styles";
import { Search16Regular } from "@fluentui/react-icons";
import FilterDropdown from "../../../shared/ui/filterDropdown/FilterDropdown";
import { useProductsStore } from "../store/products.store";
import type { IProduct } from "../../../shared/types/products";
import { useEffect, useState } from "react";
import Table from "@/shared/ui/table/Table";
import TableHeader from "@/shared/ui/table/TableHeader";
import TableHeaderCell from "@/shared/ui/table/TableHeaderCell";
import TableBody from "@/shared/ui/table/TableBody";
import TableRow from "@/shared/ui/table/TableRow";
import TableCell from "@/shared/ui/table/TableCell";
import AddRequestClient from "./AddrequestClient/AddRequestClient";
import useSWR from "swr";
import { apiUrl } from "@/shared/api/api.config";
import { getProducts } from "../api";
import useDebounce from "@/shared/hooks/useDebounce";
import { useGlobalStore } from "@/shared/store/global.store";
import { getCategories } from "@/pages/Party/api";
import { getStorages } from "@/pages/storage/api";

const Products = () => {
    const styles = useProductstyles();
    const [filters, setFilters] = useState({
        batch_id: '',
        category_id: '',
        warehouse_id: '',
        start_price: '',
        finish_price: '',
        search: '',
    })

    const debounceFromPrice = useDebounce(filters.start_price, 750)
    const debounceToPrice = useDebounce(filters.finish_price, 750)
    const debounceSearch = useDebounce(filters.search, 750)

    const { data: productAll, isLoading } = useSWR(`${apiUrl.products}?batch_id=${filters.batch_id}&category_id=${filters.category_id}&warehouse_id=${filters.warehouse_id}&start_price=${debounceFromPrice}&finish_price=${debounceToPrice}&search=${debounceSearch}`, getProducts);
    const { data: categoryAll } = useSWR(`${apiUrl.getCategories}`, getCategories);
    const { data: storageAll } = useSWR(`${apiUrl.warehouse}`, getStorages);
    const { products, setChoosedProducs, setUpdateProducs } = useProductsStore()
    const { user } = useGlobalStore();

    const isDisable = !products?.some((item) => item.choosed)

    const [showDrawer, setShowDrawer] = useState(false)

    const toggleDrawer = () => {
        setShowDrawer(prev => !prev)
    }


    const handleProduct = (product: IProduct) => {
        setUpdateProducs(product.ID)
    }


    useEffect(() => {
        if (productAll) {
            const filtredProducts = productAll?.map((item) => ({ ...item, choosed: false, QuantityClient: item.Quantity }))
            setChoosedProducs(filtredProducts ?? [])
        }
    }, [productAll])

    const category = categoryAll?.categories ?? [];

    const getCategoryName = (id: any) => {
        const name = category?.filter((item: any) => item.ID == id)
        if (name) {
            return name[0]?.name ?? ""
        } else {
            return ''
        }
    }

    const storage = storageAll ?? [];

    const getStorageName = (id: any) => {
        const name = storage?.filter((item) => item.ID == id)
        if (name) {
            return name[0]?.Name.slice(0, 7) ?? ""
        } else {
            return ''
        }
    }


    return (
        <>
            <div className={styles.filter_container}>
                <div>
                    <Input
                        type="text"
                        placeholder="Поиск по название"
                        id="search"
                        name="search"
                        contentBefore={<Search16Regular />}
                        value={filters.search}
                        onChange={(event) => setFilters(prev => ({ ...prev, search: event.target.value }))}
                        className={styles.input_filed}
                        autoComplete="off"
                        autoFocus={true}
                        style={{ ['--colorStrokeFocus2' as any]: 'green', ['--colorStrokeAccessible' as any]: 'rgba(0,0,0,0.35)' }}
                    />
                </div>
                {user?.Role.Code == 'client' && <Button
                    className={styles.add_btn}
                    appearance="primary"
                    onClick={toggleDrawer}
                    style={{
                        background: 'var(--primery-green-color)',
                        color: '#fff',
                        opacity: isDisable ? '.5' : '1'
                    }}
                    disabled={isDisable}
                >
                    Создать заявку
                </Button>}
            </div>
            <div className={styles.filters}>
                <div className={styles.filter_price}>
                    <p style={{
                        fontWeight: 'bolder',
                        color: '#888'
                    }}>Цена</p>
                    <div className="">
                        <Input
                            type="text"
                            placeholder="от"
                            id="search"
                            name="search"
                            value={filters.start_price}
                            onChange={(event) => setFilters(prev => ({ ...prev, start_price: event.target.value }))}
                            className={styles.input_price}
                        />
                    </div>
                    <div className="">
                        <Input
                            type="text"
                            placeholder="до"
                            id="search"
                            name="search"
                            value={filters.finish_price}
                            onChange={(event) => setFilters(prev => ({ ...prev, finish_price: event.target.value }))}
                            className={styles.input_price}
                        />
                    </div>
                </div>
                <div className={styles.dropdowns}>
                    <FilterDropdown
                        options={
                            category?.map((c: any) => ({
                                id: c?.ID,
                                value: c?.name,
                            })) ?? []
                        }
                        placeholder="Категории"
                        value={filters.category_id}
                        onChange={(value: any) =>
                            setFilters(prev => ({ ...prev, category_id: value }))
                        }
                    />
                    {/* {user?.Role.Code != 'client' && <FilterDropdown
                        options={party}
                        placeholder="Партия"
                        value={filters.batch_id}
                        onChange={(value) =>
                            setFilters(prev => ({ ...prev, batch_id: value }))
                        }
                    />} */}
                </div>
            </div>
            <Table>
                <TableHeader>
                    {/* {user?.Role.Code == 'client' && <TableSelectionCell
                        // checked={
                        //     allRowsSelected ? true : someRowsSelected ? "mixed" : false
                        // }
                        // onClick={toggleAllRows}
                        // onKeyDown={toggleAllKeydown}
                        checkboxIndicator={{ "aria-label": "Select all rows " }}
                    />} */}
                    {user?.Role.Code == 'client' && <TableHeaderCell><></></TableHeaderCell>}
                    <TableHeaderCell>Название</TableHeaderCell>
                    <TableHeaderCell>Бренд</TableHeaderCell>
                    {user?.Role.Code != 'client' && <TableHeaderCell>Себес-ть</TableHeaderCell>}
                    <TableHeaderCell>Цена</TableHeaderCell>
                    <TableHeaderCell>Количество</TableHeaderCell>
                    <TableHeaderCell>Ед-изм</TableHeaderCell>
                    <TableHeaderCell>Категория</TableHeaderCell>
                    {user?.Role.Code != 'client' && <TableHeaderCell>Номер партии</TableHeaderCell>}
                    {user?.Role.Code != 'client' && <TableHeaderCell>Склад</TableHeaderCell>}
                </TableHeader>
                <TableBody loading={isLoading}>
                    {products?.map((product) => (
                        <TableRow
                            key={product.ID}
                            style={{ padding: '10px' }}
                            onClick={() => handleProduct(product)}
                        >
                            {user?.Role.Code == 'client' && <TableSelectionCell
                                checked={product.choosed}
                                checkboxIndicator={{ "aria-label": "Select row" }}
                            />}
                            <TableCell>{product.Name}</TableCell>
                            <TableCell>{product.Desc}</TableCell>
                            {user?.Role.Code != 'client' && <TableCell>{product.BuyPrice}</TableCell>}
                            <TableCell>{product.SellPrice}</TableCell>
                            <TableCell>{(product.Quantity - (product?.Ordered ?? 0))}</TableCell>
                            <TableCell>{product.Unit}</TableCell>
                            <TableCell>
                                {getCategoryName(product.CategoryId)}
                            </TableCell>
                            {user?.Role.Code != 'client' && <TableCell>{product.BatchId}</TableCell>}
                            {user?.Role.Code != 'client' && <TableCell>
                                {/* {product.WarehouseId} */}
                                {getStorageName(product.WarehouseId)}
                            </TableCell>}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <AddRequestClient
                showDrawer={showDrawer}
                setShowDrawer={setShowDrawer}
            />
        </>
    )
}

export default Products;
