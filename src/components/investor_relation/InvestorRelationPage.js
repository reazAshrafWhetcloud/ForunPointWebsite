import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import BreadCrumb from "../muic/BreadCrumb";
import { HashLink as Link } from "react-router-hash-link";

const InvestorRelationPage = () => {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Investors",
      url: "/investor",
    },
  ];
  return (
    <Box>
      <Box>
        <Typography className="global-font-family global-main-heading center-contact-us">
          Investors
        </Typography>
        <Box className="bread-crumb-center">
          <BreadCrumb breadCrumb={breadCrumb} />
        </Box>
      </Box>
      <Box className="about-flex">
        <Box className="about-two-box content-box">
          <Typography className="typo-services-h global-font-family under-line">
            Investors
          </Typography>
          <Typography className="global-font-family typo-investor global-text about-text-set">
            Our mission is to provide communities with reliable and affordable
            delivery solutions through ridesharing and delivery services. This
            model and the technology we’ve developed are scalable and can be
            implemented across the United States and worldwide. We’re actively
            seeking investors to help us scale our business to the next level.
            While our innovation was born from necessity during the pandemic,
            our services fit in with the busy lives we all lead today. We free
            up busy individuals to be with their family, accomplish more at
            work, or invest their time in activities that matter to them. We
            eliminate the need to go to the grocery store, bring packages to
            parcel services and do many more mundane tasks for an affordable
            price.
          </Typography>
          <Link to="/contact-us" className="global-font-family about-text-set">
            Contact us to discuss how we can go further together
          </Link>
        </Box>
        <Box className="about-two-box investor-image-center">
          <Box className="investor-img-box">
            <img src="./images/investor/investor.jpg" alt="Investor home pic" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InvestorRelationPage;
