import {
  Dropdown,
  Option,
  type OptionOnSelectData,
} from "@fluentui/react-components";
import { useState } from "react";
import { mutate } from "swr";
import { apiUrl } from "@/shared/api/api.config";
import { updateOrderStatus } from "../api";
import type { OrderItem } from "./Orsers";
import { useGlobalStore } from "@/shared/store/global.store";

type Props = {
  group: OrderItem;
  onUpdated?: () => void;
};

const STATE_LABELS: Record<string, string> = {
  in_process: "В процессе",
  complete: "Подтвержден",
  rejected: "Отклонён",
  cancelled: "Отменён",
};

const StatusDropdown = ({ group, onUpdated }: Props) => {
  const user = useGlobalStore((s) => s.user);
  const [loading, setLoading] = useState(false);

  const options: { id: string; value: string }[] = [
    { id: group.state, value: STATE_LABELS[group.state] ?? group.state },
  ];

  if (group.state === "in_process") {
    if (user?.role_id === 1) {
      options.push({ id: "complete", value: STATE_LABELS.complete });
      options.push({ id: "rejected", value: STATE_LABELS.rejected });
    } else {
      options.push({ id: "cancelled", value: STATE_LABELS.cancelled });
    }
  }

  const handleSelect = async (_: unknown, data: OptionOnSelectData) => {
    const newState = data.optionValue as string;
    if (!newState || newState === group.state) return;
    setLoading(true);
    try {
      await updateOrderStatus(group.group_id, newState);
      mutate(apiUrl.orders);
      if (onUpdated) onUpdated();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dropdown
      style={{ minWidth: "50px" }}
      placeholder={STATE_LABELS[group.state] ?? group.state}
      value={STATE_LABELS[group.state] ?? group.state}
      onOptionSelect={handleSelect}
      disabled={loading || options.length <= 1}
    >
      {options.map((opt) => (
        <Option key={opt.id} value={opt.id}>
          {opt.value}
        </Option>
      ))}
    </Dropdown>
  );
};

export default StatusDropdown;
