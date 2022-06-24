import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import BreadCrumb from "../muic/BreadCrumb";

const DriverPage = () => {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Driver",
      url: "/driver",
    },
  ];
  return (
    <Box className="driver-main-margin">
      <Typography className="global-font-family global-main-heading center-contact-us">
        Driver
      </Typography>
      <Box className="bread-crumb-center">
        <BreadCrumb breadCrumb={breadCrumb} />
      </Box>
      <Box className="driver-main-img-box">
        <img
          src="./images/driver/driver-home-picture.jpg"
          alt="driver main pic"
        />
      </Box>
      <Box className="about-flex">
        <Box className=" subheading-content-box items-center-col">
          <Typography
            style={{ fontWeight: "bold", fontSize: "20px" }}
            className="global-font-family about-text-set"
          >
            Looking for a job where you're the boss? Setting your own hours?
            Living life your way? Make it a reality by becoming a Forunpoint
            Driver today!
          </Typography>
          <br />
          <Typography className="global-font-family about-text-set">
            Imagine a job that fits your lifestyle- that was there when you
            wanted to work, that offered you freedom and flexibility to travel
            around your area and introduced you to interesting people. That’s
            what driving for Forunpoint is like.
            <br />
            You’ll help people in your local area get what they need done: get
            dinner on the table, essential supplies delivered, and more. You’re
            the gateway to people’s success.
            <br />
            Forunpoint customers call us when they need a ride for their job
            interview, when they need food delivered from local restaurants, and
            packages sent to loved ones. As the driver, you are the key to
            making that happen.
          </Typography>
          <Typography
            style={{ fontWeight: "bold", fontSize: "20px" }}
            className="global-font-family about-text-set"
          >
            Join us today
          </Typography>
          <Box className="footer-app-sec">
            <Box className="footer-download-box">
              <a
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
        </Box>
        <Box className="about-two-box">
          <Box className="vision-img-box-driver">
            <img
              width="250px"
              height="450"
              src="./images/driver/driver-profile-picture.png"
              alt="driver profile pic"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DriverPage;
