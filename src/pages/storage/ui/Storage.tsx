import Table from "@/shared/ui/table/Table";
import TableCell from "@/shared/ui/table/TableCell";
import TableHeader from "@/shared/ui/table/TableHeader";
import TableHeaderCell from "@/shared/ui/table/TableHeaderCell";
import TableRow from "@/shared/ui/table/TableRow";
import {
  Button,
  Input,
  TableBody,
  useRestoreFocusTarget,
} from "@fluentui/react-components";
import { getStorages } from "../api";
import useSWR from "swr";
import { apiUrl } from "@/shared/api/api.config";
import useDebounce from "@/shared/hooks/useDebounce";
import { Add20Regular, Search20Regular } from "@fluentui/react-icons";
import { useStyles } from "./styles";
import { useState } from "react";
import Drawer from "./Drawer";
import { formatDate } from "@/shared/utils/formatDate";
import EmptyState from "@/shared/ui/table/EmptyState";

const Storage = () => {
  const styles = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 500);
  const swrKey = `${apiUrl.warehouse}?search=${encodeURIComponent(
    debouncedSearch
  )}`;
  const { data, isLoading } = useSWR(swrKey, getStorages, {
    revalidateOnFocus: true,
  });
  const restoreFocusTargetAttributes = useRestoreFocusTarget();

  const toggleDrawer = (arg?: boolean) => {
    if (arg !== undefined) {
      setOpenDrawer(arg);
    } else {
      setOpenDrawer((prev) => !prev);
    }
  };

  return (
    <>
      <div className={styles.filterContainer} {...restoreFocusTargetAttributes}>
        <Input
          contentBefore={<Search20Regular />}
          className={styles.searchInput}
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue((e.target as HTMLInputElement).value)}
          placeholder="Поиск по складам"
        />
        <Button icon={<Add20Regular />} onClick={() => toggleDrawer(true)}>
          Добавить склад
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Название</TableHeaderCell>
          <TableHeaderCell>Адрес</TableHeaderCell>
          <TableHeaderCell>Телефон</TableHeaderCell>
          <TableHeaderCell>Создано</TableHeaderCell>
          <TableHeaderCell>Обновлено</TableHeaderCell>
          <TableHeaderCell>Оператор склада</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {!data?.length ? (
            <EmptyState loading={isLoading} />
          ) : (
            data?.map((storage) => (
              <TableRow key={storage?.ID} style={{ padding: "10px" }}>
                <TableCell>{storage?.ID}</TableCell>
                <TableCell>{storage?.Name}</TableCell>
                <TableCell>{storage?.Address}</TableCell>
                <TableCell>{storage?.User?.Phone}</TableCell>
                <TableCell>{formatDate(storage?.CreatedAt)}</TableCell>
                <TableCell>{formatDate(storage?.UpdatedAt)}</TableCell>
                <TableCell>{storage?.User?.Username}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <Drawer open={openDrawer} toggle={toggleDrawer} />
    </>
  );
};

export default Storage;
