import {
  Button,
  Input,
  Tab,
  TableCell,
  TableHeaderCell,
  TabList,
} from "@fluentui/react-components";
import TableHeaderNewComponent from "@/shared/ui/table/TableHeader";
import TableNewComponent from "@/shared/ui/table/Table";
import TableHeaderCellComponent from "@/shared/ui/table/TableHeaderCell";
import TableBodyNewComponent from "@/shared/ui/table/TableBody";
import TableRowNewComponent from "@/shared/ui/table/TableRow";
import { useUserstyles } from "./styles";
import { Add12Regular, Search16Regular } from "@fluentui/react-icons";
import AddUser from "./addUser/AddUser";
import { useState, type CSSProperties } from "react";
import { getUsers } from "../api";
import { apiUrl } from "@/shared/api/api.config";
import useSwr from "swr";
import DataLoader from "@/shared/ui/dataLoader/DataLoader";
import useDebounce from "@/shared/hooks/useDebounce";

export default function Users() {
  const styles = useUserstyles();
  const [showAddDrawer, setShowAddDrawer] = useState(false);
  const toggleDrawer = () => {
    setShowAddDrawer((prev) => !prev);
  };
  const [roleId, setRoleId] = useState("2");
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 1000);
  const { data: users, isLoading } = useSwr(`${apiUrl.users}?role_id=${roleId}&search=${debouncedValue}`, getUsers, { revalidateOnFocus: false });

  return (
    <>
      <div className={styles.filter_container}>
        <div>
          <Input
            type="text"
            placeholder="Поиск..."
            id="search"
            name="search"
            contentBefore={<Search16Regular />}
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
            className={styles.input_filed}
            autoComplete="off"
            autoFocus={true}
            style={
              {
                ["--colorStrokeFocus2"]: "green",
                ["--colorStrokeAccessible"]: "rgba(0,0,0,0.35)",
              } as CSSProperties
            }
          />
        </div>
        <Button
          className={styles.add_btn}
          icon={<Add12Regular />}
          appearance="primary"
          onClick={toggleDrawer}
          style={{
            background: "var(--primery-green-color)",
            color: "#fff",
          }}
        >
          Добавить
        </Button>
      </div>
      {isLoading ? <DataLoader /> : <>
        <div className={styles.tablist_container}>
          <TabList onTabSelect={(_, data) => {
            setRoleId(data.value as string)
          }} defaultSelectedValue={roleId} className={styles.tablist}>
            <Tab value="2">
              Операторы
            </Tab>
            <Tab value="4">Клиенты</Tab>
          </TabList>
        </div>
        <TableNewComponent>
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
            {users?.map((user) => (
              <TableRowNewComponent key={user.ID} style={{ padding: "10px" }}>
                <TableCell>{user.ID}</TableCell>
                <TableCell>{user.Username}</TableCell>
                <TableCell>{user.Email}</TableCell>
                <TableCell>{user.Phone}</TableCell>
                <TableCell>{user.Role.Code}</TableCell>
                <TableCell>{user.CreatedAt}</TableCell>
                <TableCell>{user.UpdatedAt}</TableCell>
              </TableRowNewComponent>
            ))}
          </TableBodyNewComponent>
        </TableNewComponent>
        {showAddDrawer && <AddUser showDrawer={showAddDrawer} setShowDrawer={setShowAddDrawer} />}
      </>}

    </>
  );
}
