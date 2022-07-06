import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import DirectionsIcon from "@mui/icons-material/Directions";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PaymentIcon from "@mui/icons-material/Payment";
import WOW from 'wowjs';
import { useEffect } from 'react';

const DownloadRoadMap = () => {

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <Box className="road-map-main">
      <Box>
        <Typography className="global-large-heading global-font-family road-center wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s">
          Get everything you need
        </Typography>
      </Box>
      <Box>
        <Typography className="global-text global-font-family road-center">
          Four easy steps:
        </Typography>
      </Box>
      <Box className="step-main">
        <Box className="main-road-map-flex">
          <Box className="box-same box-same-1">
            <Typography className="global-font-family road-map-num">
              01
            </Typography>
            <Box className="icon-text-box">
              <Box className="road-icon-size">
                <DownloadForOfflineIcon className="step-icon" />
              </Box>
              <Typography className="road-text-down global-font-family global-text">
                Download app
              </Typography>
            </Box>
          </Box>
          <Box className="box-same box-same-2">
            <Typography className="global-font-family road-map-num">
              02
            </Typography>
            <Box className="icon-text-box">
              <Box className="road-icon-size">
                <DirectionsIcon className="step-icon" />
              </Box>
              <Typography className="road-text-down global-font-family global-text">
                Select destination
              </Typography>
            </Box>
          </Box>
          <Box className="box-same box-same-3">
            <Typography className="global-font-family road-map-num">
              03
            </Typography>
            <Box className="icon-text-box">
              <Box className="road-icon-size">
                <DirectionsCarIcon className="step-icon" />
              </Box>
              <Typography className="road-text-down global-font-family global-text">
                Choose ride type
              </Typography>
            </Box>
          </Box>
          <Box className="box-same box-same-4">
            <Typography className="global-font-family road-map-num">
              04
            </Typography>
            <Box className="icon-text-box">
              <Box className="road-icon-size">
                <PaymentIcon className="step-icon" />
              </Box>
              <Typography className="road-text-down global-font-family global-text">
                Submit payment
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DownloadRoadMap;
