import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "@fluentui/react-components";
import { userData } from "../api/data";


export default function Users() {
  return (
    <Table>
      <TableHeader>
        <TableHeaderCell>ID</TableHeaderCell>
        <TableHeaderCell>Username</TableHeaderCell>
        <TableHeaderCell>Email</TableHeaderCell>
        <TableHeaderCell>Phone</TableHeaderCell>
        <TableHeaderCell>Role</TableHeaderCell>
        <TableHeaderCell>CreatedAt</TableHeaderCell>
        <TableHeaderCell>UpdatedAt</TableHeaderCell>
      </TableHeader>
      <TableBody>
        {userData?.map((user) => (
          <TableRow key={user.ID}>
            <TableCell>{user.ID}</TableCell>
            <TableCell>{user.Username}</TableCell>
            <TableCell>{user.Email}</TableCell>
            <TableCell>{user.Phone}</TableCell>
            <TableCell>{user.Role}</TableCell>
            <TableCell>{user.CreatedAt}</TableCell>
            <TableCell>{user.UpdatedAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
