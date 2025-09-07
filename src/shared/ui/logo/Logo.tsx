import logo from "../../../../public/logo.png";

const Logo = ({ onLogoClick }: { onLogoClick: () => void }) => {
    return <div style={{cursor: "pointer"}} role="button" onClick={onLogoClick}>
        <img src={logo} style={{
            width: "80px"
        }} alt="logo" />
    </div>;
}

export default Logo;