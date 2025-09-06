import { Button, Input, Label, TableCell, TableHeaderCell, TableSelectionCell, Title2 } from "@fluentui/react-components";
import { useProductstyles } from "./styles";
import { Add12Regular, Search16Regular } from "@fluentui/react-icons";
import TableNewComponent from "../../../shared/ui/tableNewComponent/TableNewComponent";
import TableHeaderNewComponent from "../../../shared/ui/tableNewComponent/TableHeaderNewComponent";
import TableHeaderCellComponent from "../../../shared/ui/tableNewComponent/TableHeaderCellComponent";
import TableBodyNewComponent from "../../../shared/ui/tableNewComponent/TableBodyNewComponent";
import TableRowNewComponent from "../../../shared/ui/tableNewComponent/TableRowNewComponent";
import { products } from "../api/data";
import FilterDropdown from "../../../shared/ui/filterDropdown/FilterDropdown";
import { useProductsStore } from "../store/products.store";
import type { IProduct } from "../../../shared/types/products";
import { useEffect, useState } from "react";

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
    role: 'client',
    // role: 'supervizor',
}

const Products = () => {
    const styles = useProductstyles();
    const filtredProducts = products.map((item) => ({ ...item, choosed: false }))
    const [productsItem, setProductsItem] = useState<IProduct[] | null>(filtredProducts)
    const isDisable = !productsItem?.some((item) => item.choosed)
    const [isDis, setIsDis] = useState(isDisable)

    // const { choosedproducts, setChoosedProducs } = useProductsStore()

    const handleProduct = (product: IProduct) => {
        const choosedProducts = productsItem?.map((item) => {
            if (product?.id == item?.id) {
                return ({ ...item, choosed: !item.choosed })
            } else {
                return item
            }
        })
        setProductsItem(choosedProducts ?? [])
        setIsDis(!choosedProducts?.some((item) => item.choosed))
    }


    return (
        <>
            <div className={styles.page_title}>
                <Title2>Продукты</Title2>
            </div>
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
                {user.role != 'client' && <Button
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
                </Button>}
                {user.role == 'client' && <Button
                    className={styles.add_btn}
                    appearance="primary"
                    // onClick={toggleDrawer}
                    style={{
                        background: 'var(--primery-green-color)',
                        color: '#fff',
                        opacity: isDis ? '.5' : '1'
                    }}
                    disabled={isDis}
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
                            // value={searchMenuInput}
                            // onChange={handleMenuSearch}
                            className={styles.input_price}
                        />
                    </div>
                    <p style={{
                        fontWeight: 'bolder',
                        color: '#888'
                    }}>-</p>
                    <div className="">
                        <Input
                            type="text"
                            placeholder="до"
                            id="search"
                            name="search"
                            // value={searchMenuInput}
                            // onChange={handleMenuSearch}
                            className={styles.input_price}
                        />
                    </div>
                </div>
                <div className={styles.dropdowns}>
                    <FilterDropdown
                        options={categories}
                        placeholder="Категории"
                    />
                    {user.role != 'client' && <FilterDropdown
                        options={party}
                        placeholder="Партия"
                    />}
                </div>
            </div>
            <TableNewComponent >
                <TableHeaderNewComponent>
                    {user.role == 'client' && <TableSelectionCell
                        // checked={
                        //     allRowsSelected ? true : someRowsSelected ? "mixed" : false
                        // }
                        // onClick={toggleAllRows}
                        // onKeyDown={toggleAllKeydown}
                        checkboxIndicator={{ "aria-label": "Select all rows " }}
                    />}
                    <TableHeaderCellComponent>Название</TableHeaderCellComponent>
                    <TableHeaderCell>Бренд</TableHeaderCell>
                    {user.role != 'client' && <TableHeaderCell>Себес-ть</TableHeaderCell>}
                    <TableHeaderCell>Цена</TableHeaderCell>
                    <TableHeaderCell>Количество</TableHeaderCell>
                    <TableHeaderCell>Ед-изм</TableHeaderCell>
                    <TableHeaderCell>Категория</TableHeaderCell>
                    {user.role != 'client' && <TableHeaderCell>Номер партии</TableHeaderCell>}
                    {user.role != 'client' && <TableHeaderCell>Склад</TableHeaderCell>}
                </TableHeaderNewComponent>
                <TableBodyNewComponent>
                    {productsItem?.map((product) => (
                        <TableRowNewComponent
                            key={product.id}
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
                        </TableRowNewComponent>
                    ))}
                </TableBodyNewComponent>
            </TableNewComponent>

        </>
    )
}

export default Products;