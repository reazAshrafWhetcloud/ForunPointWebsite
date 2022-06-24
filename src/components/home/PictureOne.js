import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const PictureOne = () => {
  return (
    <Box className="margin-vertical">
      <Box className="picture-one-flex">
        <Box className="home-img-main-box">
          <Box className="s-img-box-size">
            <img src="./images/top-home-image.jpg" alt="main" />
          </Box>
        </Box>
        <Box>
          <Box className="typo-c-box">
            <Typography className="typo-c global-large-heading global-font-family">
              We are here to pick you up anytime!
            </Typography>
          </Box>
          <Box className="footer-app-sec">
            <Box className="badge-mr-r">
              <a
                className="li-c"
                href="https://play.google.com/store/apps/details?id=com.whetcloud.forunpoint.user"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="115"
                  src="images/badge/play-store.png"
                  alt="play store icon"
                />
              </a>
            </Box>
            <Box className="badge-mr-l">
              <a
                className="li-c"
                href="https://apps.apple.com/us/app/forunpoint/id1630196197"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="115"
                  src="images/badge/app-store.png"
                  alt="app store icon"
                />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PictureOne;
