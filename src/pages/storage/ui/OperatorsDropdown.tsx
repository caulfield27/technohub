import {
  Dropdown,
  Option,
  useId,
  Persona,
  Label,
} from "@fluentui/react-components";
import { useDropdownStyles } from "./styles";

export const ComplexOptions = () => {
  const dropdownId = useId("dropdown");
  const styles = useDropdownStyles();

  return (
    <div className={styles.root}>
      <Label htmlFor={dropdownId}>Оператор склада</Label>
      <Dropdown id={dropdownId} className={styles.dropdown} placeholder="Выберите оператора">
        <Option text="Katri Athokas">
          <Persona
            avatar={{ color: "colorful", "aria-hidden": true }}
            name="Katri Athokas"
            presence={{
              status: "available",
            }}
            secondaryText="Available"
          />
        </Option>
      </Dropdown>
    </div>
  );
};
