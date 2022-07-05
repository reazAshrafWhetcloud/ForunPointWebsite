import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "../../index.css";
import { Fragment } from "react";
const PictureOne = () => {
  return (
    <Fragment>
      {/*<Box className="margin-vertical">
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
  </Box>*/}
      <div className="main">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="image">
                <img
                  src="./images/top-home-image.jpg"
                  alt="home"
                  
                />
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="content">
                <h2>We are here to pick you up anytime!</h2>
                <div className="anchor d-flex">
                  <a
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
                  <a
                    href="https://play.google.com/store/apps/details?id=com.whetcloud.forunpoint.user"
                    target="_blank"
                    rel="noreferrer"
                  >
                    
                    <img
                      width="150"
                      src="images/badge/app-store.png"
                      alt="app store icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PictureOne;
