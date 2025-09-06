import { TableHeaderCell as FluentTableHeaderCell } from "@fluentui/react-components";
import { useTableStyles } from "./styles";
import { type CSSProperties, type ReactNode } from "react";

interface ITableHeaderCellComponent {
  children: ReactNode;
  leftBorder?: boolean;
  rightBorder?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
}

const TableHeaderCell = ({
  children,
  style,
  onClick,
}: ITableHeaderCellComponent) => {
  const styles = useTableStyles();
  return (
    <FluentTableHeaderCell
      as="th"
      style={style != undefined ? style : { width: "100%" }}
      className={onClick != undefined ? styles.headerCell_hover : ""}
      onClick={onClick}
    >
      <div style={{ width: "100%" }}>{children}</div>
    </FluentTableHeaderCell>
  );
};

export default TableHeaderCell;
