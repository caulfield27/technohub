import { usePartyStyles } from "./styles";
import { Button, Input, Title2 } from "@fluentui/react-components";
import { Add12Regular, Search16Regular } from "@fluentui/react-icons";
import FilterDropdown from "../../../shared/ui/filterDropdown/FilterDropdown";
import Table from "@/shared/ui/table/Table";
import { party } from "../api/data";
import TableHeader from "@/shared/ui/table/TableHeader";
import TableHeaderCell from "@/shared/ui/table/TableHeaderCell";
import TableRow from "@/shared/ui/table/TableRow";
import TableCell from "@/shared/ui/table/TableCell";
import TableBody from "@/shared/ui/table/TableBody";

const categories = [
  { id: 1, value: "Бытовая техника" },
  { id: 2, value: "Компютеры" },
  { id: 3, value: "Игрушки" },
  { id: 4, value: "Мебелб" },
];

const partyFil = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 4, value: 4 },
];

import { useState } from "react";
import Drawer from "./Drawer";

const Party = () => {
  const styles = usePartyStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      {/* <div className={styles.page_title}>
                <Title2>Партии</Title2>
            </div> */}
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
            style={{
              ["--colorStrokeFocus2" as any]: "green",
              ["--colorStrokeAccessible" as any]: "rgba(0,0,0,0.35)",
            }}
          />
        </div>
        <Button
          className={styles.add_btn}
          icon={<Add12Regular />}
          appearance="primary"
          onClick={() => setOpenDrawer(true)}
          style={{
            background: "var(--primery-green-color)",
            color: "#fff",
          }}
        >
          Добавить
        </Button>
      </div>
      <div className={styles.filters}>
        <div className={styles.filter_price}>
          <p
            style={{
              fontWeight: "bolder",
              color: "#888",
            }}
          >
            Цена
          </p>
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
          <p
            style={{
              fontWeight: "bolder",
              color: "#888",
            }}
          >
            -
          </p>
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
          <FilterDropdown options={categories} placeholder="Категории" />
          <FilterDropdown options={partyFil} placeholder="Партия" />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableHeaderCell>Номер</TableHeaderCell>
          <TableHeaderCell>Поставщик</TableHeaderCell>
          <TableHeaderCell>Оператор</TableHeaderCell>
          <TableHeaderCell>Себестоимость</TableHeaderCell>
          <TableHeaderCell>Дата</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {party?.map((user) => (
            <TableRow key={user.id} style={{ padding: "10px" }}>
              <TableCell>{user.Num}</TableCell>
              <TableCell>{user.provider}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.cost}</TableCell>
              <TableCell>{user.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Drawer
        open={openDrawer}
        toggle={(v?: boolean) => setOpenDrawer(v ?? false)}
        onCreated={() => {
          /* reload list if needed */
        }}
      />
    </>
  );
};

export default Party;
