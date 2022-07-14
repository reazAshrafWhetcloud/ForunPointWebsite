import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import BreadCrumb from "../muic/BreadCrumb";

const AboutUsPage = () => {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "About us",
      url: "/about-us",
    },
  ];
  return (
    <Box className="about-main">
      <Typography className="global-font-family global-main-heading center-contact-us">
        About us
      </Typography>
      <Box className="bread-crumb-center">
        <BreadCrumb breadCrumb={breadCrumb} />
      </Box>
      <Box className="about-flex">
        <Box className="about-two-box ">
          <Typography
            style={{ fontWeight: "bold", fontSize: "20px" }}
            className="global-font-family about-text-set"
          >
            We're innovating to make your life easier
          </Typography>
          <br />
          <Typography className="global-font-family global-text about-text-set">
            Forunpoint is a delivery business that is making it easier for you
            to get everything you need delivered in one simple mobile app. Based
            in Frisco, Texas, we're building our tool to help you get what you
            need from a ride to meals, medicine and more easily- all from the
            comfort of your home.
          </Typography>
        </Box>
      </Box>
      <Box className="about-flex">
        <Box className="about-two-box ">
          <Typography className="global-font-family global-text about-text-set">
            Forunpoint's use in the transportation and delivery business has
            resulted in increased safety and security for drivers, passengers,
            and goods, among other benefits and advantages. Drivers will now be
            able to communicate with customers using the app, enabling them to
            maintain their efficiency and safety while on the road. A real-time
            update on the vehicle and the driver inside it, as well as
            comprehensive information about the driver who is delivering the
            user's specified cargo or passengers, is provided through the
            application.
          </Typography>
        </Box>
      </Box>
      <Box className="about-two-box driver-images">
        <Box className="about-img-box">
          <img
            src="./images/about_us/driver-smiling.jpg"
            alt="driver smiling pic"
          />
        </Box>
        <Box className="about-img-box">
          <img
            src="./images/about_us/restaurant-owner.jpg"
            alt="restaurant owner pic"
          />
        </Box>
      </Box>
      <br />
      <Box className="about-flex column-reverse" style={{ marginTop: "40px" }}>
        <Box className="about-two-box ">
          <Typography
            style={{ fontWeight: "bold", fontSize: "20px" }}
            className="global-font-family"
          >
            A Message from our CEO
          </Typography>{" "}
          <br />
          <Typography className="global-font-family global-text about-text-set">
            COVID-19 has changed the way we live in so many ways, and in some
            ways permanently. When the pandemic began, local business owners-
            especially restaurants- were hit hard by the sudden loss of
            business. Unfortunately, many closed their doors for good due to
            measures to keep us safe. I realized we need a way that people can
            continue to live life without interruption and that's where our
            mobile app comes in.
          </Typography>
          <Typography
            className="global-font-family"
            style={{ margin: "10px 0", fontWeight: "bold" }}
          >
            - Syed Reaz Ashraf
          </Typography>
        </Box>
        <Box className="about-two-box ">
          <Box className="about-img-box">
            <img src="./images/about_us/CEO-pic.jpg" alt="CEO pic" />
          </Box>
        </Box>
      </Box>
      <Box className="about-flex " id="last-section">
        <Box className="about-two-box ">
          <Typography
            style={{ fontWeight: "bold", fontSize: "20px" }}
            className="global-font-family"
          >
            Mission Statement
          </Typography>
          <br />
          <Typography
            style={{ fontWeight: "bold" }}
            className="global-font-family global-text about-text-set"
          >
            We’re providing communities with reliable and affordable solutions to
            life with ride and delivery services.
          </Typography>

          <Typography className="global-font-family global-text about-text-set">
            The Forunpoint driver and client mobile app have been developed with
            safety, security and communication in mind. Clients get detailed
            updates on the vehicle and driver inside; the driver gets detailed
            information on the passenger or parcels they’re picking up while
            maintaining privacy. Forunpoint has push notifications, alerts and
            photo integrations for the clients to get details as the task is
            underway. We’re constantly innovating to bring you the services you
            need.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUsPage;
