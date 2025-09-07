import { usePartyStyles } from "./styles";
import { Button, Input, TableCellActions } from "@fluentui/react-components";
import {
  Add12Regular,
  Info16Regular,
  Search16Regular,
} from "@fluentui/react-icons";
import Table from "@/shared/ui/table/Table";
import TableHeader from "@/shared/ui/table/TableHeader";
import TableHeaderCell from "@/shared/ui/table/TableHeaderCell";
import TableRow from "@/shared/ui/table/TableRow";
import TableCell from "@/shared/ui/table/TableCell";
import TableBody from "@/shared/ui/table/TableBody";
import useSWR from "swr";
import { apiUrl } from "@/shared/api/api.config";
import { getParty } from "../api";
import { format } from "date-fns";
import { useState } from "react";
import useDebounce from "@/shared/hooks/useDebounce";
import PartyInfo from "./partyInfo/PartyInfo";
import Drawer from "./Drawer";

const Party = () => {
  const styles = usePartyStyles();
  const [showDrawer, setShowDrawer] = useState(false);
  const [partyId, setPartyId] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const [filters, setFilters] = useState({
    price_from: "",
    price_to: "",
  });
  const debounceFromPrice = useDebounce(filters.price_from, 750);
  const debounceToPrice = useDebounce(filters.price_to, 750);

  const { data: partyAll, isLoading } = useSWR(
    `${apiUrl.party}?price_from=${debounceFromPrice}&price_to=${debounceToPrice}`,
    getParty
    // { revalidateOnFocus: false }
  );
  const handleModal = (partyId: any) => {
    setShowDrawer((prev) => !prev);
    setPartyId(partyId);
  };

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
              value={filters.price_from}
              onChange={(event) =>
                setFilters((prev) => ({
                  ...prev,
                  price_from: event.target.value,
                }))
              }
              className={styles.input_price}
            />
          </div>
          <div className="">
            <Input
              type="text"
              placeholder="до"
              id="search"
              name="search"
              value={filters.price_to}
              onChange={(event) =>
                setFilters((prev) => ({
                  ...prev,
                  price_to: event.target.value,
                }))
              }
              className={styles.input_price}
            />
          </div>
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
        <TableBody loading={isLoading}>
          {partyAll?.map((user) => (
            <TableRow key={user.id} style={{ padding: "10px" }}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.supplier}</TableCell>
              <TableCell>
                <TableCellActions>
                  <Button
                    icon={<Info16Regular />}
                    as="button"
                    appearance="subtle"
                    onClick={() => handleModal(user.id)}
                  ></Button>
                </TableCellActions>
                {user.fio_oper}
              </TableCell>
              <TableCell>{user.buy_price}</TableCell>
              <TableCell>
                {format(new Date(user.created_at), "dd.MM.yyyy HH:mm:ss")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PartyInfo
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        partyId={partyId}
      />
      <Drawer
        open={openDrawer}
        toggle={(v?: boolean) => setOpenDrawer(v ?? false)}
        onCreated={() => {}}
      />
    </>
  );
};

export default Party;
