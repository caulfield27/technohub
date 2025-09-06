import React from 'react'
import { usePartyStyles } from './styles'
import { Button, Input, TableCell, TableHeaderCell, Title2 } from '@fluentui/react-components';
import { Add12Regular, Search16Regular } from '@fluentui/react-icons';
import FilterDropdown from '../../../shared/ui/filterDropdown/FilterDropdown';
import TableNewComponent from '../../../shared/ui/tableNewComponent/TableNewComponent';
import TableHeaderNewComponent from '../../../shared/ui/tableNewComponent/TableHeaderNewComponent';
import TableHeaderCellComponent from '../../../shared/ui/tableNewComponent/TableHeaderCellComponent';
import TableBodyNewComponent from '../../../shared/ui/tableNewComponent/TableBodyNewComponent';
import TableRowNewComponent from '../../../shared/ui/tableNewComponent/TableRowNewComponent';
import { party } from '../api/data';

const categories = [
    { id: 1, value: "Бытовая техника" },
    { id: 2, value: "Компютеры" },
    { id: 3, value: "Игрушки" },
    { id: 4, value: "Мебелб" },
]

const partyFil = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
]

const Party = () => {
    const styles = usePartyStyles();

    return (
        <>
            <div className={styles.page_title}>
                <Title2>Партии</Title2>
            </div>
            <div className={styles.filter_container}>
                <div>
                    <Input
                        type="text"
                        placeholder="Поиск"
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
                <Button
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
                </Button>
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
                    <FilterDropdown
                        options={partyFil}
                        placeholder="Партия"
                    />
                </div>
            </div>
            <TableNewComponent>
                <TableHeaderNewComponent>
                    <TableHeaderCellComponent>Номер</TableHeaderCellComponent>
                    <TableHeaderCell>Поставщик</TableHeaderCell>
                    <TableHeaderCell>Оператор</TableHeaderCell>
                    <TableHeaderCell>Себестоимость</TableHeaderCell>
                    <TableHeaderCell>Дата</TableHeaderCell>
                </TableHeaderNewComponent>
                <TableBodyNewComponent>
                    {party?.map((user) => (
                        <TableRowNewComponent key={user.id} style={{ padding: '10px' }}>
                            <TableCell>{user.Num}</TableCell>
                            <TableCell>{user.provider}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.cost}</TableCell>
                            <TableCell>{user.date}</TableCell>
                        </TableRowNewComponent>
                    ))}
                </TableBodyNewComponent>
            </TableNewComponent>

        </>
    )
}

export default Party