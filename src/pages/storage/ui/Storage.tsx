import Table from "@/shared/ui/table/Table";
import TableCell from "@/shared/ui/table/TableCell";
import TableHeader from "@/shared/ui/table/TableHeader";
import TableHeaderCell from "@/shared/ui/table/TableHeaderCell";
import TableRow from "@/shared/ui/table/TableRow";
import { TableBody } from "@fluentui/react-components";
import { storageData } from "../mock";

const Storage = () => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Название</TableHeaderCell>
          <TableHeaderCell>Адрес</TableHeaderCell>
          <TableHeaderCell>Телефон</TableHeaderCell>
          <TableHeaderCell>Создано</TableHeaderCell>
          <TableHeaderCell>Обновлено</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {storageData?.map((storage) => (
            <TableRow key={storage.ID} style={{ padding: "10px" }}>
              <TableCell>{storage.ID}</TableCell>
              <TableCell>{storage.Name}</TableCell>
              <TableCell>{storage.Address}</TableCell>
              <TableCell>{storage.Phone}</TableCell>
              <TableCell>{storage.CreatedAt}</TableCell>
              <TableCell>{storage.UpdatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Storage;
