import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import BreadCrumb from "../muic/BreadCrumb";
import BasicCollapse from "../muic/BasicCollapse";

const FaqPage = () => {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "FAQ",
      url: "/faq",
    },
  ];
  return (
    <Box className="global-main-margin">
      <Typography className="global-font-family global-main-heading center-contact-us">
        FAQ
      </Typography>
      <Box className="bread-crumb-center">
        <BreadCrumb breadCrumb={breadCrumb} />
      </Box>
      <Box className="faq-main-img-box">
        <img src="./images/faq/FAQ.jpg" alt="FAQ home pic" />
      </Box>
      <BasicCollapse />
    </Box>
  );
};

export default FaqPage;
