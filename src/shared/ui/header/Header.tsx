import { Title2 } from "@fluentui/react-components";
import { useLocation } from "react-router";
import { useStyles } from "./styles";

const pathnames = {
  "/storages": "Склады",
  "/users": "Пользователи",
  "/products": "Список Товаров",
  "/orders": "Заказы",
  "/statistics": "Статистика",
  "/party": "Партии",
  "/ordersStatus": "Мои заказы",
};

const Header = () => {
  const { pathname } = useLocation();
  const styles = useStyles();

  return (
    <header className={styles.header}>
      <Title2 className={styles.title}>
        {pathnames[pathname as keyof typeof pathnames] ?? pathname}
      </Title2>
    </header>
  );
};

export default Header;
