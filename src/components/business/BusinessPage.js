import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import BreadCrumb from "../muic/BreadCrumb";
import { HashLink as Link } from "react-router-hash-link";

const BusinessPage = () => {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Business",
      url: "/business",
    },
  ];
  return (
    <Box className="business-main">
      <Box>
        <Typography className="global-font-family global-main-heading center-contact-us">
          Business
        </Typography>
        <Box className="bread-crumb-center">
          <BreadCrumb breadCrumb={breadCrumb} />
        </Box>
      </Box>
      <Box mt={2}>
        <Typography
          style={{ textAlign: "center", fontSize: "20px" }}
          className="global-font-family about-text-set"
        >
          Forunpoint: here for every part of your life.
        </Typography>
      </Box>
      <Box className="about-flex">
        <Box className="about-two-box items-center">
          <Box>
            <Typography className="typo-services-h global-font-family under-line">
              Business Travel Made Simple
            </Typography>
            <Typography className="global-font-family about-text-set">
              With us starting to return to in-person business, you may need a
              ride to get there. Forunpoint is here to give you a lift to your
              next job interview, business meeting, or appointment. Our services
              are great for getting you to the airport or train for a smooth
              journey.
            </Typography>
            <Link to="/service" className="global-font-family about-text-set">
              Explore our services
            </Link>
          </Box>
        </Box>
        <Box className="about-two-box ">
          <Box className="business-img-box">
            <img
              src="./images/business/business-pic-1.jpg"
              alt="business pic1"
            />
          </Box>
        </Box>
      </Box>
      <Box className="about-flex reverse-flex">
        <Box className="about-two-box items-center">
          <Box>
            <Typography className="typo-services-h global-font-family under-line">
              Increasing Product Availability
            </Typography>
            <Typography className="global-font-family about-text-set">
              Forunpoint was created to serve local businesses during the
              COVID-19 pandemic when customers couldn’t visit their favorite
              businesses. We found a way to bring your products to their
              doorstep safely. Now, customers want that convenience for their
              meals, products, groceries, medicine, and more. We’re here to
              connect you with your customers in new ways. Imagine the
              possibilities and reach your business can have by coordinating
              deliveries with your customers and simply ordering from you with
              us delivering it- easy and effective for everyone.
            </Typography>

            <Link
              to="/contact-us"
              className="global-font-family about-text-set"
            >
              Partner with us today
            </Link>
          </Box>
        </Box>
        <Box className="about-two-box ">
          <Box className="business-img-box">
            <img
              src="./images/business/business-pic-2.jpg"
              alt="business pic2"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BusinessPage;
