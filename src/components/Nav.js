import { Box } from "@mui/system";
import NavBar from "./navbar/NavBar";
import NavbarO from "./navbar/NavbarO";

const Nav = () => {
  return (
    <>
      <Box className="nav1">
        <NavBar />
      </Box>
      <Box className="nav2">
        <NavbarO />
      </Box>
    </>
  );
};

export default Nav;
