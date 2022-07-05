import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Vision = () => {
  return (
    <Box className="vision-bg">
      <Box className="vision-sub-flex vision-border-top">
        <Box className="vision-sub-flex vision-box-margin">
          <Box className="vision-img-box">
            <img
              width="250px"
              height="450"
              src="./images/picture1.png"
              alt="vision pic-1"
            />
          </Box>
          <Box className="vision-img-box">
            <img
              width="250px"
              height="450"
              src="./images/picture2.png"
              alt="vision pic-2"
            />
          </Box>
        </Box>
        <Box className="vision-box-margin">
          <Typography className="typo-vision global-large-heading global-font-family">
            Our vision with easy-to-use technology
          </Typography>
        </Box>
      </Box>
      <Box className="vision-sub-flex vision-border-top">
        <Box className="vision-box-margin">
          <Typography className="typo-vision global-large-heading global-font-family">
            Safety is our top priority for riders and drivers
          </Typography>
        </Box>
        <Box className="vision-box-margin">
          <Box className="vision-pic4-box">
            <img src="./images/picture3.jpg" alt="vision pic-3" />
          </Box>
        </Box>
      </Box>
      <Box className="vision-sub-flex vision-border-top">
        <Box className="vision-sub-flex vision-box-margin">
          <Box className="vision-img-box">
            <img
              width="250px"
              height="450"
              src="./images/app_screen/driver-screen1.png"
              alt="driver mob screen-1"
            />
          </Box>
          <Box className="vision-img-box">
            <img
              width="250px"
              height="450"
              src="./images/app_screen/driver-screen2.png"
              alt="driver mob screen-2"
            />
          </Box>
        </Box>
        <Box className="vision-box-margin">
          <Typography className="typo-vision global-large-heading global-font-family">
            Drivers, download your app here
          </Typography>
          <Box className="footer-app-sec">
            <Box className="footer-download-box">
              <a
                className="li-c"
                href="https://play.google.com/store/apps/details?id=com.whetcloud.forunpoint.driver"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="150"
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
                  width="150"
                  src="images/badge/app-store.png"
                  alt="app store icon"
                />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="vision-sub-flex vision-border-top">
        <Box className="vision-box-margin">
          <Typography className="typo-vision global-large-heading global-font-family">
            Clients, download your app here
          </Typography>
          <Box className="footer-app-sec">
            <Box className="footer-download-box">
              <a
                className="li-c"
                href="https://play.google.com/store/apps/details?id=com.whetcloud.forunpoint.user"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="150"
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
                  width="150"
                  src="images/badge/app-store.png"
                  alt="app store icon"
                />
              </a>
            </Box>
          </Box>
        </Box>
        <Box className="vision-sub-flex vision-box-margin">
          <Box className="vision-img-box">
            <img
              width="250px"
              height="450"
              src="./images/app_screen/user-screen1.png"
              alt="client mob screen-1"
            />
          </Box>
          <Box className="vision-img-box">
            <img
              width="250px"
              height="450"
              src="./images/app_screen/user-screen2.png"
              alt="client mob screen-2"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Vision;
