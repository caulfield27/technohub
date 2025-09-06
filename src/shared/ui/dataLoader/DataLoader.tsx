import { Spinner } from "@fluentui/react-components";

const DataLoadr = () => {
    return <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
    }}>
        <Spinner size="large" />
    </div>;
}

export default DataLoadr;