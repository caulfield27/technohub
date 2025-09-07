import {
  Body2,
  Spinner,
  Subtitle2,
  TableCell,
  TableRow,
} from "@fluentui/react-components";
import { useTableStyles } from "./styles";
import { Search32Regular } from "@fluentui/react-icons";

interface IEmptyStateProps {
  loading?: boolean;
  notFound?: boolean;
}

const EmptyState = ({ loading, notFound }: IEmptyStateProps) => {
  const styles = useTableStyles();

  return (
    <TableRow as="tr" className={styles.empty_state_row}>
      {loading ? (
        <TableCell as="td" colSpan={9} style={{ padding: "24px 0" }}>
          <Spinner size="small" />
        </TableCell>
      ) : notFound ? (
        <TableCell as="td" colSpan={9}>
          <div className={styles.no_data_icon_container}>
            <Search32Regular />
          </div>
          <div className={styles.no_data_text}>
            <Body2>
              Ничего не найдено.
            </Body2>
          </div>
        </TableCell>
      ) : (
        <TableCell as="td" colSpan={9}>
          <div className={styles.empty_state}>
            <div>
              <Subtitle2>Нет данных </Subtitle2>
            </div>
            <div className={styles.secondary_text}>
              <Body2>
                Отсутствуют данные в таблице.
              </Body2>
            </div>
          </div>
        </TableCell>
      )}
    </TableRow>
  );
};

export default EmptyState;
