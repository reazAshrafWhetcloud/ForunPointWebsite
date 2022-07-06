import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import BreadCrumb from "../muic/BreadCrumb";

const ServicePage = () => {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Services",
      url: "/service",
    },
  ];
  return (
    <Box className="services-main">
      <Box>
        <Typography className="global-font-family global-main-heading center-contact-us">
          Our Services
        </Typography>
        <Box className="bread-crumb-center">
          <BreadCrumb breadCrumb={breadCrumb} />
        </Box>
      </Box>
      <Box className="about-flex" id="1">
        <Box className="about-two-box">
          <Typography className="global-font-family typo-services-num">
            01
          </Typography>
          <Typography className="typo-services-h global-font-family under-line">
            Rider
          </Typography>
          <Typography className="global-font-family global-text about-text-set">
            When ordering with Forunpoint, choose from economical to luxurious
            options. We have a solution for your budget. Your choices may vary
            based on factors you select including the number of passengers. No
            matter what, you can expect to be picked up on-time and safely.
          </Typography>
        </Box>
        <Box className="about-two-box ">
          <Box className="services-img-box ">
            <img src="./images/service/rider.jpg" alt="Rider service pic" />
          </Box>
        </Box>
      </Box>
      <Box className="about-flex reverse-flex" id="2">
        <Box className="about-two-box ">
          <Typography className="global-font-family typo-services-num">
            02
          </Typography>
          <Typography className="typo-services-h global-font-family under-line">
            Food Delivery
          </Typography>
          <Typography className="global-font-family global-text about-text-set">
            Hungry? Order a meal from your favorite local restaurant and our
            drivers will deliver it right to your address. All we need is the
            pick-up and drop-off locations.
          </Typography>
        </Box>
        <Box className="about-two-box ">
          <Box className="services-img-box ">
            <img
              src="./images/service/food-delivery.jpg"
              alt="Food delivery pic"
            />
          </Box>
        </Box>
      </Box>
      <Box className="about-flex" id="3">
        <Box className="about-two-box ">
          <Typography className="global-font-family typo-services-num">
            03
          </Typography>
          <Typography className="typo-services-h global-font-family under-line">
            Grocery Delivery
          </Typography>
          <Typography className="global-font-family global-text about-text-set">
            Need groceries, but don't want to go to the grocery store? We'll
            pick up your groceries for you and deliver them to your home or
            office. All you need to do is accept them from the driver or your
            contactless drop-off and enjoy!
          </Typography>
        </Box>
        <Box className="about-two-box ">
          <Box className="services-img-box ">
            <img
              src="./images/service/grocery-delivery.jpg"
              alt="Grocery delivery pic"
            />
          </Box>
        </Box>
      </Box>
      <Box className="about-flex reverse-flex" id="4">
        <Box className="about-two-box ">
          <Typography className="global-font-family typo-services-num">
            04
          </Typography>
          <Typography className="typo-services-h global-font-family under-line">
            Gifts Delivery
          </Typography>
          <Typography className="global-font-family global-text about-text-set">
            Sometimes the best way to show someone you care is with a gift.
            We're here to help make that happen with gift delivery services to
            bring your gifts to the recipient easily and efficiently-
            nationwide. We pride ourselves on caring for your packages, so rest
            assured your delivery will be safe with us.
          </Typography>
        </Box>
        <Box className="about-two-box ">
          <Box className="services-img-box ">
            <img
              src="./images/service/gift-delivery.jpg"
              alt="Gift delivery pic"
            />
          </Box>
        </Box>
      </Box>
      <Box className="about-flex" id="5">
        <Box className="about-two-box ">
          <Typography className="global-font-family typo-services-num">
            05
          </Typography>
          <Typography className="typo-services-h global-font-family under-line">
            Flowers Delivery
          </Typography>
          <Typography className="global-font-family global-text about-text-set">
            Our experienced drivers will use their skill and care to deliver
            flowers to you- or to someone you want to show you care. Our
            background and knowledge of your community will get your flowers to
            their destination in no time!
          </Typography>
        </Box>
        <Box className="about-two-box ">
          <Box className="services-img-box ">
            <img
              src="./images/service/flower-delivery.jpg"
              alt="Flower delivery pic"
            />
          </Box>
        </Box>
      </Box>
      <Box className="about-flex reverse-flex" id="6">
        <Box className="about-two-box ">
          <Typography className="global-font-family typo-services-num">
            06
          </Typography>
          <Typography className="typo-services-h global-font-family under-line">
            Packages Delivery
          </Typography>
          <Typography className="global-font-family global-text about-text-set">
            If you have a package you need delivered, simply box your order and
            open our app to have your package picked up and delivered to your
            destination. Like all our services, we take pride in our work and
            will safely deliver your package to the destination.
          </Typography>
        </Box>
        <Box className="about-two-box ">
          <Box className="services-img-box">
            <img
              src="./images/service/delivery.jpg"
              className="delivery-image"
              alt="Package delivery pic"
            />
          </Box>
        </Box>
      </Box>
      <Box className="about-flex" id="7">
        <Box className="about-two-box ">
          <Typography className="global-font-family typo-services-num">
            07
          </Typography>
          <Typography className="typo-services-h global-font-family under-line">
            Medicine Delivery
          </Typography>
          <Typography className="global-font-family global-text about-text-set">
            Born out of the need for safety during the COVID-19 pandemic,
            Forunpoint understands how important access to critical needs are-
            including medicine. That's why if a client needs medical supplies
            delivered to them, our drivers can support you in the local area.
          </Typography>
        </Box>
        <Box className="about-two-box ">
          <Box className="services-img-box ">
            <img
              src="./images/service/medicine.jpg"
              alt="Medicine delivery pic"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicePage;
