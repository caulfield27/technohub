import { Spinner, TableBody, TableCell } from "@fluentui/react-components";
import TableRow from "./TableRow";
import EmptyState from "./EmptyState";
import { Children } from "react";
import { useTableStyles } from "./styles";

interface ITableBodyNewComponent {
    children: React.ReactNode[] | React.ReactNode;
    loading?: boolean;
    moreLoading?: boolean;
    notFound?: boolean;
}

const TableBodyNewComponent = ({
    children,
    loading,
    moreLoading,
    notFound,
}: ITableBodyNewComponent) => {
    const styles = useTableStyles();
    const condition = (children) => {
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
        <TableBody
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
        </TableBody>
    );
};

export default TableBodyNewComponent;
