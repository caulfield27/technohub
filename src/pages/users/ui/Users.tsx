import { Button, Input, Tab, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, TabList, Title2 } from "@fluentui/react-components";
import { userData } from "../api/data";
import TableHeaderNewComponent from "../../../shared/ui/tableNewComponent/TableHeaderNewComponent";
import TableNewComponent from "../../../shared/ui/tableNewComponent/TableNewComponent";
import TableHeaderCellComponent from "../../../shared/ui/tableNewComponent/TableHeaderCellComponent";
import TableBodyNewComponent from "../../../shared/ui/tableNewComponent/TableBodyNewComponent";
import TableRowNewComponent from "../../../shared/ui/tableNewComponent/TableRowNewComponent";
import TableCellComponent from "../../../shared/ui/tableNewComponent/TableCellComponent";
import { useUserstyles } from "./styles";
import { Add12Regular, Search16Regular } from "@fluentui/react-icons";
import AddUser from "./addUser/AddUser";
import { useState } from "react";


export default function Users() {
  const styles = useUserstyles();
  const [showAddDrawer, setShowAddDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowAddDrawer((prev) => !prev);
  };

  return (
    <>
      <div className={styles.page_title}>
        <Title2>Пользователи</Title2>
      </div>
      <div className={styles.filter_container}>
        <div>
          <Input
            type="text"
            placeholder="Поиск по наименованию"
            id="search"
            name="search"
            contentBefore={<Search16Regular />}
            // value={searchMenuInput}
            // onChange={handleMenuSearch}
            className={styles.input_filed}
            autoComplete="off"
            autoFocus={true}
            style={{ ['--colorStrokeFocus2' as any]: 'green', ['--colorStrokeAccessible' as any]: 'rgba(0,0,0,0.35)' }}
          />
        </div>
        <Button
          className={styles.add_btn}
          icon={<Add12Regular />}
          appearance="primary"
          onClick={toggleDrawer}
          style={{
            background: 'var(--primery-green-color)',
            color: '#fff'
          }}
        >
          Добавить
        </Button>
      </div>
      <div className={styles.tablist_container}>
        <TabList
          defaultSelectedValue={'tab1'}
          className={styles.tablist}
        >
          <Tab defaultChecked value="tab1">Операторы</Tab>
          <Tab value="tab2">Клиенты</Tab>
        </TabList>
      </div>
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
      <AddUser
        showDrawer={showAddDrawer}
        setShowDrawer={setShowAddDrawer}
      />
    </>
  )
}
