import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Icons = () => {
  const iconState = [
    {
      icon: "./images/icon/ride-service.svg",
      text: "Ride Service",
    },
    {
      icon: "./images/icon/food-delivery.svg",
      text: "Food Delivery",
    },
    {
      icon: "./images/icon/grocery-delivery.svg",
      text: "Grocery Delivery",
    },
    {
      icon: "./images/icon/gift-delivery.svg",
      text: "Gift Delivery",
    },
    {
      icon: "./images/icon/flowerdelivery.svg",
      text: "Flowers Delivery",
    },
    {
      icon: "./images/icon/packages-delivery.jpg",
      text: "Packages Delivery",
    },
    {
      icon: "./images/icon/medicine-delivery.svg",
      text: "Medicine Delivery",
    },
  ];
  return (
    <Box>
      <br />
      <Typography className="global-font-family global-large-heading icon-head">
        One app for all your needs
      </Typography>
      <br />
      <Box className="icons-main-box">
        {iconState.map((val, ind) => {
          return (
            <Box className="icons-box icon-tile" key={ind}>
              <Box className="icons-box-service">
                <img src={val.icon} alt={`icon-${ind}`} />
              </Box>
              <Box>
                <Typography className="typo-icons global-font-family font-bold">
                  {val.text}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Icons;
