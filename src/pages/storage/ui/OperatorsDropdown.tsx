import {
  Dropdown,
  Option,
  useId,
  Label,
  Persona,
} from "@fluentui/react-components";
import { useDropdownStyles } from "./styles";
import useSWR from "swr";
import { apiUrl } from "@/shared/api/api.config";
import { getUsers } from "@/pages/users/api";
import type { IUserItem } from "@/pages/users/api/types";

type ComplexOptionsProps = {
  onSelectUser?: (id: number) => void;
};

export const ComplexOptions = ({ onSelectUser }: ComplexOptionsProps) => {
  const dropdownId = useId("dropdown");
  const styles = useDropdownStyles();

  const { data: users } = useSWR(
    `${apiUrl.users}?role_id=${2}&search=`,
    getUsers,
    {
      revalidateOnFocus: false,
    }
  );

  return (
    <div className={styles.root}>
      <Label htmlFor={dropdownId}>Оператор склада</Label>
      <Dropdown
        id={dropdownId}
        className={styles.dropdown}
        onOptionSelect={(_, data) => {
          const val = data?.optionValue;
          if (val && onSelectUser) onSelectUser(Number(val));
        }}
      >
        {users?.map((u: IUserItem) => {
          const display = u?.Username;
          return (
            <Option key={u.ID} text={display} value={String(u.ID)}>
              <Persona
                avatar={{ color: "colorful", "aria-hidden": true }}
                name={display}
              />
            </Option>
          );
        })}
      </Dropdown>
    </div>
  );
};
