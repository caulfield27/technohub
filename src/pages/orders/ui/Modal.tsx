import Table from "@/shared/ui/table/Table";
import TableBody from "@/shared/ui/table/TableBody";
import TableCell from "@/shared/ui/table/TableCell";
import TableHeader from "@/shared/ui/table/TableHeader";
import TableHeaderCell from "@/shared/ui/table/TableHeaderCell";
import TableRow from "@/shared/ui/table/TableRow";
import { formatDate } from "@/shared/utils/formatDate";
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
} from "@fluentui/react-components";
import type { Order } from "./Orsers";

const Modal = ({
  showOrdersDialog,
  setShowOrdersDialog,
  selectedOrders,
}: {
  showOrdersDialog: boolean;
  setShowOrdersDialog: (open: boolean) => void;
  selectedOrders: Order[];
}) => {
  return (
    <Dialog
      open={showOrdersDialog}
      onOpenChange={(_, { open }) => setShowOrdersDialog(open)}
    >
      <DialogSurface
        style={{ minWidth: "800px" }}
        aria-describedby={undefined}
        aria-modal={false}
      >
        <DialogBody>
          <DialogTitle>Заказы группы</DialogTitle>
          <DialogContent>
            <Table>
              <TableHeader>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Товар</TableHeaderCell>
                <TableHeaderCell>К-во</TableHeaderCell>
                <TableHeaderCell>Пользователь</TableHeaderCell>
                <TableHeaderCell>Состояние</TableHeaderCell>
                <TableHeaderCell>Создано</TableHeaderCell>
              </TableHeader>
              <TableBody>
                {selectedOrders?.map((o: Order) => (
                  <TableRow key={o.ID}>
                    <TableCell>{o.ID}</TableCell>
                    <TableCell>{o?.Product?.Name ?? o.product_id}</TableCell>
                    <TableCell>{o.Quantity}</TableCell>
                    <TableCell>{o?.User?.Username ?? o.user_id}</TableCell>
                    <TableCell>{o.State}</TableCell>
                    <TableCell>{formatDate(o.CreatedAt)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DialogContent>
          <DialogActions>
            <Button
              appearance="secondary"
              onClick={() => setShowOrdersDialog(false)}
            >
              Закрыть
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default Modal;
