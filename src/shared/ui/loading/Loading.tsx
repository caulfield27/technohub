import { Spinner } from "@fluentui/react-components";
import useStyles from "./styles";

const Loading = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Spinner size="extra-large" />
    </div>
  );
};

export default Loading;
