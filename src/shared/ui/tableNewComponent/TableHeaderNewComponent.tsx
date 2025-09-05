import { TableHeader, TableRow } from "@fluentui/react-components";
import { type ReactNode } from "react";
import { useTableStyles } from "./styles";

interface ITableHeaderNewComponent {
    children: ReactNode;
}
const TableHeaderNewComponent = ({ children }: ITableHeaderNewComponent) => {
    const styles = useTableStyles();
    return (
        <TableHeader as="thead" style={{height: '50px'}} className={styles.tableHeader}>
            <TableRow as="tr">{children}</TableRow>
        </TableHeader>
    );
};

export default TableHeaderNewComponent;
