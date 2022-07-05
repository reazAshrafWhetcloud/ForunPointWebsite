import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles({
  navbarU: {
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px solid #d8d8de",
    borderBottom: "1px solid #d8d8de",
    padding: "0 25px",
  },
});

const NavBar = () => {
  const { pathname } = useLocation();
  const classes = useStyles();
  const navigate = useNavigate();
  function goto() {
    navigate("/");
  }

  return (
    <>
      <Box className={classes.navbarU}>
        <Box onClick={goto} className="navbar-logo">
          <img width='200' src="./images/webLogo-01.png" alt="Forun Point logo" />
        </Box>
        <Box className="nav-btn-flex">
          <Box className="nav-btn global-text global-font-family font-bold">
            <Link
              className={
                pathname.includes("/about-us") ? "link-color" : "nav-link-color"
              }
              to="/about-us"
            >
              ABOUT US
            </Link>
          </Box>
          <Box className="nav-btn global-text global-font-family font-bold">
            <Link
              className={
                pathname.includes("/service") ? "link-color" : "nav-link-color"
              }
              to="/service"
            >
              SERVICES
            </Link>
          </Box>
          <Box className="nav-btn global-text global-font-family font-bold">
            <Link
              className={
                pathname.includes("/driver") ? "link-color" : "nav-link-color"
              }
              to="/driver"
            >
              DRIVER
            </Link>
          </Box>
          <Box className="nav-btn global-text global-font-family font-bold">
            <Link
              className={
                pathname.includes("/business") ? "link-color" : "nav-link-color"
              }
              to="/business"
            >
              BUSINESS
            </Link>
          </Box>
          <Box className="nav-btn global-text global-font-family font-bold">
            <Link
              className={
                pathname.includes("/investor")
                  ? "link-color"
                  : "nav-link-color"
              }
              to="/investor"
            >
              INVESTOR
            </Link>
          </Box>
          <Box className="nav-btn global-text global-font-family font-bold">
            <Link
              className={
                pathname.includes("/blog") ? "link-color" : "nav-link-color"
              }
              to="/blog"
            >
              BLOG
            </Link>
          </Box>
          <Box className="nav-btn global-text global-font-family font-bold">
            <Link
              className={
                pathname.includes("/faq") ? "link-color" : "nav-link-color"
              }
              to="/faq"
            >
              FAQ
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
