import { useGlobalStore } from "@/shared/store/global.store";
import { Button } from "@fluentui/react-button";

const Products = () => {
  const { setToast } = useGlobalStore();

  return (
    <>
      <Button
        onClick={() => {
          setToast({
            show: true,
            title: "Product added",
            actionTitle: "ok",
            options: {
              intent: "error",
              position: "top-end",
            },
          });
        }}
      >
        Add toast
      </Button>
    </>
  );
};

export default Products;
