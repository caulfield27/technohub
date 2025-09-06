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
import { Dismiss24Regular } from "@fluentui/react-icons";
import { useDrawerStyles } from "./styles";
import { ComplexOptions } from "./OperatorsDropdown";

interface IDrawerProps {
  open: boolean;
  toggle: (open?: boolean) => void;
  action?: () => void;
}

const Drawer = ({ open, action, toggle }: IDrawerProps) => {
  const styles = useDrawerStyles();
  const restoreFocusSourceAttributes = useRestoreFocusSource();

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
                onClick={() => toggle(false)}
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
            id={"warehouseName"}
            type="text"
            placeholder="Название склада"
          />
        </div>

        <div className={styles.inputContainer}>
          <Label htmlFor={"warehouseAddress"}>Адрес склада</Label>
          <Input
            id={"warehouseAddress"}
            type="text"
            placeholder="Адрес склада"
          />
        </div>

        <div className={styles.inputContainer}>
          <ComplexOptions />
        </div>
      </DrawerBody>
      <DrawerFooter>
        <Button
          appearance="secondary"
          style={{
            background: "var(--primery-green-color)",
            color: "#fff",
          }}
          onClick={action}
        >
          Добавить
        </Button>
      </DrawerFooter>
    </OverlayDrawer>
  );
};

export default Drawer;
