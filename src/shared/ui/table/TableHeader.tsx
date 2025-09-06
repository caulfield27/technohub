import {
  TableHeader as FluentTableHeader,
  TableRow,
} from "@fluentui/react-components";
import { type ReactNode } from "react";
import { useTableStyles } from "./styles";

interface ITableHeader {
  children: ReactNode;
}
const TableHeader = ({ children }: ITableHeader) => {
  const styles = useTableStyles();
  return (
    <FluentTableHeader
      as="thead"
      style={{ height: "50px" }}
      className={styles.tableHeader}
    >
      <TableRow as="tr">{children}</TableRow>
    </FluentTableHeader>
  );
};

export default TableHeader;
