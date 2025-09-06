import { Table as FluentTable } from "@fluentui/react-components";
import { useTableStyles } from "./styles";
import type { CSSProperties, ReactNode } from "react";

interface ITableProps {
  children: ReactNode;
  customStyle?: CSSProperties;
}

const Table = ({ children, customStyle = {} }: ITableProps) => {
  const styles = useTableStyles();
  return (
    <FluentTable as="table" className={styles.table} style={customStyle}>
      {children}
    </FluentTable>
  );
};

export default Table;
