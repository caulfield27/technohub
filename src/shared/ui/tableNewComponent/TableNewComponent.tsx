import { Table } from "@fluentui/react-components";
import { useTableStyles } from "./styles";

const TableNewComponent = ({ children, customStyle = {} }) => {
    const styles = useTableStyles();
    return (
        <Table as="table" className={styles.table} style={customStyle}>
            {children}
        </Table>
    );
};

export default TableNewComponent;
