import {
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerHeaderNavigation,
  DrawerHeaderTitle,
  Input,
  Label,
  OverlayDrawer,
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  useRestoreFocusSource,
} from "@fluentui/react-components";
import {
  Dismiss24Regular,
  Location20Regular,
  Table20Regular,
} from "@fluentui/react-icons";
import { useDrawerStyles } from "./styles";
import { ComplexOptions } from "./OperatorsDropdown";
import { useState } from "react";
import { createWarehouse } from "../api";
import { mutate } from "swr";

const initialForm = {
  name: "",
  address: "",
  userId: null as number | null,
  touchedName: false,
  touchedAddress: false,
  touchedUser: false,
};

interface IDrawerProps {
  open: boolean;
  toggle: (open?: boolean) => void;
}

const Drawer = ({ open, toggle }: IDrawerProps) => {
  const styles = useDrawerStyles();
  const restoreFocusSourceAttributes = useRestoreFocusSource();
  const [form, setForm] = useState(initialForm);

  const resetForm = () => setForm(initialForm);

  const handleSubmit = async () => {
    if (!form.name || !form.address || !form.userId) {
      setForm((s) => ({
        ...s,
        touchedName: true,
        touchedAddress: true,
        touchedUser: true,
      }));
      return;
    }
    try {
      await createWarehouse({
        name: form.name,
        address: form.address,
        user_id: form.userId,
      });
      mutate("storages");
      toggle(false);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const isNameValid = form.name.trim() !== "";
  const isAddressValid = form.address.trim() !== "";
  const isUserValid = form.userId !== null;
  const isFormValid = isNameValid && isAddressValid && isUserValid;

  return (
    <OverlayDrawer
      className={styles.root}
      position="end"
      {...restoreFocusSourceAttributes}
      open={open}
      onOpenChange={(_, { open }) => toggle(!open)}
    >
      <DrawerHeader className={styles.drawerHeader}>
        <DrawerHeaderNavigation>
          <Toolbar className={styles.toolbar}>
            <ToolbarGroup>
              <ToolbarButton
                aria-label="Close panel"
                appearance="subtle"
                icon={<Dismiss24Regular />}
                onClick={() => {
                  resetForm();
                  toggle(false);
                }}
              />
            </ToolbarGroup>
          </Toolbar>
        </DrawerHeaderNavigation>
        <DrawerHeaderTitle>Добавление склада</DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody className={styles.drawerBody}>
        <div className={styles.inputContainer}>
          <Label htmlFor={"warehouseName"}>Название склада</Label>
          <Input
            contentBefore={<Table20Regular />}
            id={"warehouseName"}
            value={form.name}
            onChange={(e) =>
              setForm((s) => ({
                ...s,
                name: (e.target as HTMLInputElement).value,
              }))
            }
            onBlur={() => setForm((s) => ({ ...s, touchedName: true }))}
            type="text"
            placeholder="Название склада"
          />
        </div>

        <div className={styles.inputContainer}>
          <Label htmlFor={"warehouseAddress"}>Адрес склада</Label>
          <Input
            contentBefore={<Location20Regular />}
            id={"warehouseAddress"}
            value={form.address}
            onChange={(e) =>
              setForm((s) => ({
                ...s,
                address: (e.target as HTMLInputElement).value,
              }))
            }
            onBlur={() => setForm((s) => ({ ...s, touchedAddress: true }))}
            type="text"
            placeholder="Адрес склада"
          />
        </div>

        <div className={styles.inputContainer}>
          <ComplexOptions
            onSelectUser={(id: number) => {
              setForm((s) => ({ ...s, userId: id, touchedUser: true }));
            }}
          />
        </div>
      </DrawerBody>
      <DrawerFooter>
        <Button
          appearance="secondary"
          style={
            (isFormValid && {
              background: "var(--primery-green-color)",
              color: "#fff",
            }) ||
            undefined
          }
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          Добавить
        </Button>
      </DrawerFooter>
    </OverlayDrawer>
  );
};

export default Drawer;
