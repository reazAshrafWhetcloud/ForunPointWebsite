import { Box } from "@mui/system";
import DropDown from "../muic/DropDown";
import { useNavigate } from "react-router-dom";

const NavbarO = () => {
  const navigate = useNavigate();
  function goto() {
    navigate("/");
  }
  return (
    <Box className="navbar-O">
      <Box onClick={goto} className="navbar-logo">
        <img width="250" src="./images/web icon-01.png" alt="Forun Point logo" />
      </Box>
      <Box className="menu-icon">
        <DropDown />
      </Box>
    </Box>
  );
};

export default NavbarO;
