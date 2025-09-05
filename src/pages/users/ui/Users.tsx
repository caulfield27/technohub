import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "@fluentui/react-components";
import { userData } from "../api/data";
import TableHeaderNewComponent from "../../../shared/ui/tableNewComponent/TableHeaderNewComponent";
import TableNewComponent from "../../../shared/ui/tableNewComponent/TableNewComponent";
import TableHeaderCellComponent from "../../../shared/ui/tableNewComponent/TableHeaderCellComponent";
import TableBodyNewComponent from "../../../shared/ui/tableNewComponent/TableBodyNewComponent";
import TableRowNewComponent from "../../../shared/ui/tableNewComponent/TableRowNewComponent";
import TableCellComponent from "../../../shared/ui/tableNewComponent/TableCellComponent";


export default function Users() {
  return (
    // <div className="">
      <TableNewComponent >
        <TableHeaderNewComponent>
          <TableHeaderCellComponent>ID</TableHeaderCellComponent>
          <TableHeaderCell>Username</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Phone</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>CreatedAt</TableHeaderCell>
          <TableHeaderCell>UpdatedAt</TableHeaderCell>
        </TableHeaderNewComponent>
        <TableBodyNewComponent>
          {userData?.map((user) => (
            <TableRowNewComponent key={user.ID} style={{ padding: '10px' }}>
              <TableCell>{user.ID}</TableCell>
              <TableCell>{user.Username}</TableCell>
              <TableCell>{user.Email}</TableCell>
              <TableCell>{user.Phone}</TableCell>
              <TableCell>{user.Role}</TableCell>
              <TableCell>{user.CreatedAt}</TableCell>
              <TableCell>{user.UpdatedAt}</TableCell>
            </TableRowNewComponent>
          ))}
        </TableBodyNewComponent>
      </TableNewComponent>
    // </div>
  )
}
