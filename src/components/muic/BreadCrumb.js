import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

function BreadCrumb({ breadCrumb }) {
  return (
    <Box className="bread-crumb-center">
      <Typography className="typo-crumb global-font-family global-text">
        <Link to={breadCrumb[0].url}>{breadCrumb[0].text}</Link>
      </Typography>
      <Box className="dot-crumb"></Box>
      <Typography className="typo-crumb global-font-family global-text">
        <Link className="crumb-color" to={breadCrumb[1].url}>
          {breadCrumb[1].text}
        </Link>
      </Typography>
    </Box>
  );
}

export default BreadCrumb;
