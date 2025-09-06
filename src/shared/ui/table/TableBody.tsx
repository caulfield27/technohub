import {
  Spinner,
  TableBody as FluentTableBody,
  TableCell,
} from "@fluentui/react-components";
import TableRow from "./TableRow";
import EmptyState from "./EmptyState";
import { useTableStyles } from "./styles";
import type { ReactNode } from "react";

interface ITableBodyNewComponent {
  children: React.ReactNode[] | React.ReactNode;
  loading?: boolean;
  moreLoading?: boolean;
  notFound?: boolean;
}

const TableBody = ({
  children,
  loading,
  moreLoading,
  notFound,
}: ITableBodyNewComponent) => {
  const styles = useTableStyles();
  const condition = (children: ReactNode[] | ReactNode) => {
    if (Array.isArray(children)) {
      if (Array.isArray(children[0])) {
        return children[0]?.length > 0;
      } else {
        return children.length > 0;
      }
    }

    return false;
  };

  return (
    <FluentTableBody
      as="tbody"
      style={{ position: "relative" }}
      className={styles.tbody}
    >
      {condition(children) ? (
        children
      ) : (
        <EmptyState loading={loading} notFound={notFound} />
      )}
      {moreLoading && (
        <TableRow>
          <TableCell colSpan={12}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Spinner size="small" />
            </div>
          </TableCell>
        </TableRow>
      )}
    </FluentTableBody>
  );
};

export default TableBody;
