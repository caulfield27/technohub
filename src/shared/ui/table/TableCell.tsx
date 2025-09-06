import { TableCell as FluentTableCell } from "@fluentui/react-components";
import { type CSSProperties, type ReactNode } from "react";

interface ITableData {
  children: ReactNode;
  style?: CSSProperties;
  colSpan?: number;
}

const TableCell = ({ children, style, colSpan }: ITableData) => {
  return (
    <FluentTableCell
      style={style != undefined ? style : {}}
      colSpan={colSpan}
      aria-colspan={colSpan}
    >
      {children}
    </FluentTableCell>
  );
};

export default TableCell;
