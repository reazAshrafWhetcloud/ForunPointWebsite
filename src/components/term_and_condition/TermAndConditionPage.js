import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import BreadCrumb from "../muic/BreadCrumb";

const TermAndConditionPage = () => {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Term and condition",
      url: "/term-and-condition",
    },
  ];
  return (
    <Box className="global-main-margin">
      <Box>
        <Typography className="global-font-family global-large-heading center-contact-us">
          Term and condition
        </Typography>
        <Box className="bread-crumb-center">
          <BreadCrumb breadCrumb={breadCrumb} />
        </Box>
        <br />
        <Typography className="global-font-family global-text about-text-set">
          Through the Forunpoint Platform, people who wish to go to certain
          destinations are linked with transportation solutions. Passengers may
          request a ride from one of the many rideshare drivers in the area. If
          you accept this agreement, Forunpoint will match you with drivers and
          passengers based on your geographic location, the pickup destination
          you want, and the time you expect they will arrive, among other
          factors. When generating matching selections for users, Forunpoint may
          take into consideration elements such as driving conditions, platform
          efficiency, and other user preferences, among other things. As a
          result of the same set of conditions, Forunpoint may decide to replay
          a current match. The decision to accept or reject Rideshare Services
          is totally up to the discretion of the User. It is necessary for
          Drivers and Riders to enter into written agreements for each Rideshare
          Service they provide.
        </Typography>
        <br />
        <Typography className="global-font-family global-text about-text-set">
          Providing the world's most significant transportation and a platform
          to aid you in travelling from one place to another as fast and
          effectively as possible is our goal at Forunpoint, and we strive to
          achieve it. This will necessitate the disclosure of a small quantity
          of personal information about you. The objective of this Privacy
          Statement is to clarify how Forunpoint collects, uses, and secures
          your personal information, as well as to show you how to exercise your
          choices and rights as outlined in this Statement. Forunpoint is
          committed to preserving your personal information while also making it
          simple to access and delete your data.
        </Typography>
      </Box>
    </Box>
  );
};

export default TermAndConditionPage;
