import { useState, useEffect } from "react";
import {
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerHeaderTitle,
  Field,
  Input,
  Label,
  OverlayDrawer,
  ToolbarButton,
  useId,
} from "@fluentui/react-components";
import {
  Add20Filled,
  Delete20Regular,
  Dismiss24Regular,
} from "@fluentui/react-icons";
import { createBatch, getCategories, createCategory } from "../api";
import FilterDropdown from "@/shared/ui/filterDropdown/FilterDropdown";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogBody,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@fluentui/react-components";
import { useDrawerStyles } from "./styles";

const initialProduct = {
  code: "",
  name: "",
  buy_price: 0,
  sell_price: 0,
  quantity: 1,
  unit: "Штук",
  warehouse_id: 1,
  category_id: 1,
};

interface ICategory {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: null | string;
  code: string;
  name: string;
  desc: string;
}

interface IDrawerProps {
  open: boolean;
  toggle: (open?: boolean) => void;
  onCreated?: () => void;
}

const Drawer = ({ open, toggle, onCreated }: IDrawerProps) => {
  const styles = useDrawerStyles();
  const idDesc = useId("desc");
  const idSupplier = useId("supplier");

  const [form, setForm] = useState({
    id: 0,
    desc: "",
    supplier: "",
    total_price: 0,
    warehouse_id: 1,
    products: [initialProduct],
  });

  const [categories, setCategories] = useState<ICategory[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [showCategoryDialog, setShowCategoryDialog] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  const addProduct = () =>
    setForm((s) => ({ ...s, products: [...s.products, initialProduct] }));

  const removeProduct = (idx: number) =>
    setForm((s) => ({
      ...s,
      products: s.products.filter((_, i) => i !== idx),
    }));

  const handleChangeProduct = (
    idx: number,
    key: string,
    value: string | number
  ) =>
    setForm((s) => ({
      ...s,
      products: s.products.map((p, i) =>
        i === idx ? { ...p, [key]: value } : p
      ),
    }));

  const loadCategories = async () => {
    try {
      const res = await getCategories();
      const categories: ICategory[] = res?.categories;
      setCategories(categories);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreateCategory = async () => {
    if (!newCategory.trim()) return;
    try {
      await createCategory({ name: newCategory });
      setNewCategory("");
      await loadCategories();
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = async () => {
    setErrors(null);
    if (!form.supplier.trim()) {
      setErrors("Пожалуйста, укажите поставщика");
      return;
    }
    if (!form.products.length) {
      setErrors("Добавьте хотя бы один продукт");
      return;
    }

    for (const p of form.products) {
      if (!p.code || !p.name || p.quantity <= 0) {
        setErrors(
          "У каждого продукта должен быть код, название и количество > 0"
        );
        return;
      }
    }

    setIsSubmitting(true);
    try {
      const payload = {
        ...form,
        total_price: form.products.reduce(
          (s: number, it: any) =>
            s + (Number(it.buy_price) || 0) * (Number(it.quantity) || 0),
          0
        ),
      };
      await createBatch(payload);
      if (onCreated) onCreated();
      toggle(false);
    } catch (e) {
      console.error(e);
      setErrors("Ошибка при создании партии");
    }
  };

  useEffect(() => {
    const total = form.products.reduce(
      (s: number, it: any) =>
        s + (Number(it.buy_price) || 0) * (Number(it.quantity) || 0),
      0
    );
    setForm((s) => ({ ...s, total_price: total }));
  }, [form.products.length]);

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <OverlayDrawer
      className={styles.root}
      position="end"
      open={open}
      onOpenChange={(_, { open }) => toggle(!open)}
    >
      <DrawerHeader className={styles.drawerHeader}>
        <Button
          aria-label="Close panel"
          appearance="subtle"
          icon={<Dismiss24Regular />}
          onClick={() => {
            setErrors(null);
            setForm((s) => ({
              ...s,
              desc: "",
              supplier: "",
              products: [initialProduct],
            }));
            toggle(false);
          }}
        />
        <DrawerHeaderTitle>Добавить партию</DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody className={styles.drawerBody}>
        <Field label="Описание">
          <Input
            id={idDesc}
            value={form.desc}
            onChange={(e) =>
              setForm((s) => ({
                ...s,
                desc: (e.target as HTMLInputElement).value,
              }))
            }
          />
        </Field>

        <Field label="Поставщик">
          <Input
            id={idSupplier}
            value={form.supplier}
            onChange={(e) =>
              setForm((s) => ({
                ...s,
                supplier: (e.target as HTMLInputElement).value,
              }))
            }
          />
        </Field>

        <div className={styles.fieldGroup}>
          <Label className={styles.productsLabel}>Товары</Label>
          {form.products.map((p, idx) => (
            <div key={idx} className={styles.productRow}>
              <Field label="Код товара">
                <Input
                  value={p.code}
                  onChange={(e) =>
                    handleChangeProduct(
                      idx,
                      "code",
                      (e.target as HTMLInputElement).value
                    )
                  }
                />
              </Field>
              <Field label="Имя товара">
                <Input
                  value={p.name}
                  onChange={(e) =>
                    handleChangeProduct(
                      idx,
                      "name",
                      (e.target as HTMLInputElement).value
                    )
                  }
                />
              </Field>
              <Field label="Количество">
                <Input
                  type="number"
                  value={String(p.quantity)}
                  onChange={(e) =>
                    handleChangeProduct(
                      idx,
                      "quantity",
                      Number((e.target as HTMLInputElement).value)
                    )
                  }
                />
              </Field>
              <Field label="Цена покупки">
                <Input
                  type="number"
                  value={String(p.buy_price)}
                  onChange={(e) =>
                    handleChangeProduct(
                      idx,
                      "buy_price",
                      Number((e.target as HTMLInputElement).value)
                    )
                  }
                />
              </Field>
              <Field label="Цена продажи">
                <Input
                  type="number"
                  value={String(p.sell_price)}
                  onChange={(e) =>
                    handleChangeProduct(
                      idx,
                      "sell_price",
                      Number((e.target as HTMLInputElement).value)
                    )
                  }
                />
              </Field>
              <Field label="Категория">
                <FilterDropdown
                  options={
                    categories?.map((c) => ({
                      id: c.ID,
                      value: c.name,
                    })) ?? []
                  }
                  placeholder="Категория"
                  value={`${
                    categories?.find((c) => c.ID === p.category_id)?.name
                  }`}
                  onChange={(val: string) =>
                    handleChangeProduct(idx, "category_id", Number(val))
                  }
                />
              </Field>
              <Button
                style={{ marginTop: "26px" }}
                icon={<Delete20Regular />}
                appearance="subtle"
                onClick={() => removeProduct(idx)}
              >
                Удалить
              </Button>
            </div>
          ))}
          <div className={styles.actions}>
            <Button icon={<Add20Filled />} onClick={addProduct}>
              Добавить товар
            </Button>
            <Dialog
              open={showCategoryDialog}
              onOpenChange={(_, { open }) => setShowCategoryDialog(open)}
            >
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="primary">Добавить категорию</Button>
              </DialogTrigger>
              <DialogSurface aria-describedby={undefined} aria-modal={false}>
                <DialogBody>
                  <DialogTitle>Добавить категорию</DialogTitle>
                  <DialogContent>
                    <Field label="Название категории">
                      <Input
                        value={newCategory}
                        onChange={(e) =>
                          setNewCategory((e.target as HTMLInputElement).value)
                        }
                      />
                    </Field>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setShowCategoryDialog(false)}>
                      Отмена
                    </Button>
                    <Button
                      appearance="primary"
                      onClick={async () => {
                        await handleCreateCategory();
                        setShowCategoryDialog(false);
                      }}
                    >
                      Создать
                    </Button>
                  </DialogActions>
                </DialogBody>
              </DialogSurface>
            </Dialog>
          </div>
        </div>
        {errors && <div className={styles.error}>{errors}</div>}
      </DrawerBody>

      <DrawerFooter>
        <Button
          appearance="secondary"
          style={{
            background: "var(--primery-green-color)",
            color: "#fff",
            marginLeft: 10,
          }}
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Сохраняем..." : "Добавить партию"}
        </Button>
        <ToolbarButton>Итоговая цена: {form.total_price} c</ToolbarButton>
      </DrawerFooter>
    </OverlayDrawer>
  );
};

export default Drawer;
