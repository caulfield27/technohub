import { Button, Input, Label, TableSelectionCell, Title2 } from "@fluentui/react-components";
import { useProductstyles } from "./styles";
import { Add12Regular, Search16Regular } from "@fluentui/react-icons";
import { products } from "../api/data";
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

const categories = [
    { id: 1, value: "Бытовая техника" },
    { id: 2, value: "Компютеры" },
    { id: 3, value: "Игрушки" },
    { id: 4, value: "Мебелб" },
]

const party = [
    { id: 1, value: 1 },
    { id: 2, value: 1 },
    { id: 3, value: 1 },
    { id: 4, value: 1 },
]

const user = {
    name: 'Said',
    // role: 'client',
    role: 'supervizor',
}

const Products = () => {
    const styles = useProductstyles();
    const [filters, setFilters] = useState({
        batch_id: '',
        category_id: '',
        warehouse_id: '',
        start_price: '',
        finish_price: ''
    })

    // const { data: users, isLoading } = useSwr(${ apiUrl.users } ? role_id = ${ roleId } & search=${ debouncedValue }, getUsers, { revalidateOnFocus: false });
    const { data: productAll, isLoading } = useSWR(`${apiUrl.products}?batch_id=${filters.batch_id}&category_id=${filters.category_id}&warehouse_id=${filters.warehouse_id}&start_price=${filters.start_price}&finish_price=${filters.finish_price}`, getProducts);
    const { products, setChoosedProducs, setUpdateProducs } = useProductsStore()

    const isDisable = !products?.some((item) => item.choosed)


    //add request modal
    const [showDrawer, setShowDrawer] = useState(false)

    const toggleDrawer = () => {
        setShowDrawer(prev => !prev)
    }


    console.log(filters);


    const handleProduct = (product: IProduct) => {
        // setChoosedProducs(product)
        setUpdateProducs(product.ID)
    }



    useEffect(() => {
        if (productAll) {
            const filtredProducts = productAll?.map((item) => ({ ...item, choosed: false, QuantityClient: item.Quantity }))
            setChoosedProducs(filtredProducts ?? [])
        }
    }, [productAll])


    return (
        <>
            {/* <div className={styles.page_title}>
                <Title2>Продукты</Title2>
            </div> */}
            <div className={styles.filter_container}>
                <div>
                    <Input
                        type="text"
                        placeholder="Поиск по название"
                        id="search"
                        name="search"
                        contentBefore={<Search16Regular />}
                        // value={searchMenuInput}
                        // onChange={handleMenuSearch}
                        className={styles.input_filed}
                        autoComplete="off"
                        autoFocus={true}
                        style={{ ['--colorStrokeFocus2' as any]: 'green', ['--colorStrokeAccessible' as any]: 'rgba(0,0,0,0.35)' }}
                    />
                </div>
                {/* {user.role != 'client' && <Button
                    className={styles.add_btn}
                    icon={<Add12Regular />}
                    appearance="primary"
                    // onClick={toggleDrawer}
                    style={{
                        background: 'var(--primery-green-color)',
                        color: '#fff'
                    }}
                >
                    Добавить
                </Button>} */}
                {user.role == 'client' && <Button
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
                        options={categories}
                        placeholder="Категории"
                        value={filters.category_id}
                        // onChange={(_: any, data: any) => setFilters(prev => ({ ...prev, category_id: data.optionValue }))}
                        onChange={(value) =>
                            setFilters(prev => ({ ...prev, category_id: value }))
                        }
                    />
                    {user.role != 'client' && <FilterDropdown
                        options={party}
                        placeholder="Партия"
                        value={filters.batch_id}
                        onChange={(value) =>
                            setFilters(prev => ({ ...prev, batch_id: value }))
                        }
                    />}
                </div>
            </div>
            <Table>
                <TableHeader>
                    {user.role == 'client' && <TableSelectionCell
                        // checked={
                        //     allRowsSelected ? true : someRowsSelected ? "mixed" : false
                        // }
                        // onClick={toggleAllRows}
                        // onKeyDown={toggleAllKeydown}
                        checkboxIndicator={{ "aria-label": "Select all rows " }}
                    />}
                    <TableHeaderCell>Название</TableHeaderCell>
                    <TableHeaderCell>Бренд</TableHeaderCell>
                    {user.role != 'client' && <TableHeaderCell>Себес-ть</TableHeaderCell>}
                    <TableHeaderCell>Цена</TableHeaderCell>
                    <TableHeaderCell>Количество</TableHeaderCell>
                    <TableHeaderCell>Ед-изм</TableHeaderCell>
                    <TableHeaderCell>Категория</TableHeaderCell>
                    {user.role != 'client' && <TableHeaderCell>Номер партии</TableHeaderCell>}
                    {user.role != 'client' && <TableHeaderCell>Склад</TableHeaderCell>}
                </TableHeader>
                <TableBody loading={isLoading}>
                    {products?.map((product) => (
                        <TableRow
                            key={product.ID}
                            style={{ padding: '10px' }}
                            onClick={() => handleProduct(product)}
                        >
                            {user.role == 'client' && <TableSelectionCell
                                checked={product.choosed}
                                checkboxIndicator={{ "aria-label": "Select row" }}
                            />}
                            <TableCell>{product.Name}</TableCell>
                            <TableCell>{product.Desc}</TableCell>
                            {user.role != 'client' && <TableCell>{product.BuyPrice}</TableCell>}
                            <TableCell>{product.SellPrice}</TableCell>
                            <TableCell>{product.Quantity}</TableCell>
                            <TableCell>{product.Unit}</TableCell>
                            <TableCell>{product.CategoryId}</TableCell>
                            {user.role != 'client' && <TableCell>{product.BatchId}</TableCell>}
                            {user.role != 'client' && <TableCell>{product.WarehouseId}</TableCell>}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <AddRequestClient
                showDrawer={showDrawer}
                setShowDrawer={setShowDrawer}
                products={products?.filter((item) => item.choosed)}
            />
        </>
    )
}

export default Products;
