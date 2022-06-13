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
              <img
                width="115"
                src="images/badge/play-store.png"
                alt="play store icon"
              />
            </Box>
            <Box className="badge-mr-l">
              <img
                width="115"
                src="images/badge/app-store.png"
                alt="app store icon"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PictureOne;
