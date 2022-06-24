import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ChatIcon from "@mui/icons-material/Chat";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  const navigate = useNavigate();
  function goto() {
    navigate("/");
  }
  return (
    <Box className="footer-container">
      <Box className="box-footer">
        <Box>
          <Box onClick={goto} className="footer-logo">
            <img src="./images/logo.svg" alt="Forun Point logo" />
          </Box>
          <Box className="address-box mr-bottom">
            <ChatIcon />
            <Typography className="footer-address  text-color global-font-family">
              info@forunpoint.com
            </Typography>
          </Box>
        </Box>
        <Box className="footer-ul-flex">
          <ul className="list global-text global-font-family">
            <li className="ul-head">Useful links</li>
            <li>
              <Link className="li-c" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="li-c" to="/about-us">
                About us
              </Link>
            </li>
            <li>
              <Link className="li-c" to="/driver">
                Driver
              </Link>
            </li>
            <li>
              <Link className="li-c" to="/business">
                Business
              </Link>
            </li>
            <li>
              <Link className="li-c" to="/investor">
                Investors
              </Link>
            </li>
            <li>
              <Link className="li-c" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="li-c" to="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="li-c" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="list global-text global-font-family">
            <li className="ul-head">Our Services</li>
            <li>
              <Link className="li-c" to="/service#1">
                Ride Service
              </Link>
            </li>
            <li>
              <Link className="li-c" to="/service#2">
                Food Delivery
              </Link>
            </li>
            <li>
              <Link className="li-c" to="/service#3">
                Grocery Delivery
              </Link>
            </li>
            <li>
              <Link className="li-c" to="/service#4">
                Gift Delivery
              </Link>
            </li>
            <li>
              <Link className="li-c" to="/service#5">
                Flowers Delivery
              </Link>
            </li>
            <li>
              <Link className="li-c" to="/service#6">
                Packages Delivery
              </Link>
            </li>
            <li>
              <Link className="li-c" to="/service#7">
                Medicine Delivery
              </Link>
            </li>
          </ul>
        </Box>
        <Box className="footer-app">
          <Box>
            <Typography className="text-color global-text global-font-family ms-1">
              Driver App
            </Typography>
            <Box className="footer-download-box mb-2">
              <a
                className="li-c"
                href="https://play.google.com/store/apps/details?id=com.whetcloud.forunpoint.driver"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="110"
                  src="images/badge/play-store.png"
                  alt="play store icon"
                />
              </a>
            </Box>
            <Box className="footer-download-box">
              <a
                className="li-c"
                href="https://apps.apple.com/us/app/forunpoint-driver/id1630196763"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="110"
                  src="images/badge/app-store.png"
                  alt="app store icon"
                />
              </a>
            </Box>
          </Box>
          <Box>
            <Typography className="text-color global-text global-font-family ms-1">
              User App
            </Typography>
            <Box className="footer-download-box mb-2">
              <a
                className="li-c"
                href="https://play.google.com/store/apps/details?id=com.whetcloud.forunpoint.user"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="110"
                  src="images/badge/play-store.png"
                  alt="play store icon"
                />
              </a>
            </Box>
            <Box className="footer-download-box">
              <a
                className="li-c"
                href="https://apps.apple.com/us/app/forunpoint/id1630196197"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="110"
                  src="images/badge/app-store.png"
                  alt="app store icon"
                />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="footer-bottom">
        <Box>
          <Typography className="text-color global-text global-font-family">
            <Link className="li-c" to="/privacy-policy">
              Privacy
            </Link>
          </Typography>
        </Box>
        <Box>
          <Typography className="text-color global-text global-font-family">
            <Link className="li-c" to="/term-and-condition">
              Terms and Condition
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box className="footer-red">
        <Box>
          <Typography className="global-text global-font-family">
            @ 2022 ForunPoint. All Right Reserved
          </Typography>
        </Box>
        <Box>
          <Typography className="global-text global-font-family">
            Powered By Whetcloud
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
