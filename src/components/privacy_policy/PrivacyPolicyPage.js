import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import BreadCrumb from "../muic/BreadCrumb";

const PrivacyPolicyPage = () => {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Privacy Policy",
      url: "/privacy-policy",
    },
  ];
  return (
    <Box className="global-main-margin">
      <Box>
        <Typography className="global-font-family global-main-heading center-contact-us">
          Privacy policy
        </Typography>
        <Box className="bread-crumb-center">
          <BreadCrumb breadCrumb={breadCrumb} />
        </Box>
        <br />
        <Typography className="global-font-family global-text about-text-set">
          Your privacy is important to us, and it is best policy to respect your
          privacy regarding any information we may collect while operating our
          websites. Accordingly, we have developed this Policy in order for you
          to understand how we collect, use, communicate and disclose and make
          use of personal information. To make an informed decision please read
          the privacy policy very carefully.
        </Typography>
        <br />
        <Typography className="global-font-family global-text about-text-set">
          1. The website foruntpoint.com is powered by Whetcloud LLC, company
          registered in Frisco USA with registered number (802452789),
          registered office. By using the Website you agree to be bound by this
          privacy policy accessible on the website. This Privacy Policy affects
          your legal rights and obligations so please read this carefully. If
          you do not agree to be bound by this Privacy Policy do not use the
          website. If you have any questions, you can contact us on
          info@forunpoint.com.
        </Typography>
        <br />
        <Typography className="global-font-family global-text about-text-set">
          2. We reserve the right to update this Privacy Policy from time to
          time at our discretion. If we do so, the updated version will be
          effective as soon as it is accessible. You are responsible for
          regularly reviewing this Privacy Policy so that you are aware of any
          changes to it.
        </Typography>
      </Box>
    </Box>
  );
};

export default PrivacyPolicyPage;
