import Table from "@/shared/ui/table/Table";
import TableCell from "@/shared/ui/table/TableCell";
import TableHeader from "@/shared/ui/table/TableHeader";
import TableHeaderCell from "@/shared/ui/table/TableHeaderCell";
import TableRow from "@/shared/ui/table/TableRow";
import {
  Button,
  TableBody,
  useRestoreFocusTarget,
} from "@fluentui/react-components";
import { getStorages } from "../api";
import useSWR from "swr";
import {
  Add20Regular,
  Delete20Regular,
  Edit20Regular,
} from "@fluentui/react-icons";
import { useStyles } from "./styles";
import { useState } from "react";
import Drawer from "./Drawer";

const Storage = () => {
  const styles = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const { data } = useSWR("storages", getStorages);
  const restoreFocusTargetAttributes = useRestoreFocusTarget();

  const toggleDrawer = (arg?: boolean) => {
    if (arg !== undefined) {
      setOpenDrawer(arg);
    } else {
      setOpenDrawer((prev) => !prev);
    }
  };

  const handleAdd = () => {
    toggleDrawer(true);
  };

  return (
    <>
      <div className={styles.filterContainer} {...restoreFocusTargetAttributes}>
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
          {/* <TableHeaderCell>Действия</TableHeaderCell> */}
        </TableHeader>
        <TableBody>
          {data?.map((storage) => (
            <TableRow key={storage.ID} style={{ padding: "10px" }}>
              <TableCell>{storage.ID}</TableCell>
              <TableCell>{storage.Name}</TableCell>
              <TableCell>{storage.Address}</TableCell>
              <TableCell>{storage.User.Phone}</TableCell>
              <TableCell>{storage.CreatedAt}</TableCell>
              <TableCell>{storage.UpdatedAt}</TableCell>
              {/* <TableCell>
                <Button
                  icon={<Edit20Regular />}
                  onClick={() => handleEdit(storage.ID)}
                />
                <Button
                  icon={<Delete20Regular />}
                  onClick={() => handleDelete(storage.ID)}
                />
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Drawer open={openDrawer} toggle={toggleDrawer} />
    </>
  );
};

export default Storage;
