import { ClassNames } from "@emotion/react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
const Icons = () => {
  const iconState = [
    {
      icon: "/images/icon/newIcons/rideService.svg",
      text: "Ride Service",
    },
    {
      icon: "./images/icon/newIcons/foodDelivery.svg",
      text: "Food Delivery",
    },
    {
      icon: "./images/icon/newIcons/groceryDelivery.svg",
      text: "Grocery Delivery",
    },
    {
      icon: "./images/icon/newIcons/giftDelivery.svg",
      text: "Gift Delivery",
    },
    {
      icon: "./images/icon/newIcons/flowersDelivery.svg",
      text: "Flowers Delivery",
    },
    {
      icon: "./images/icon/newIcons/packageDelivery.svg",
      text: "Packages Delivery",
    },
    {
      icon: "./images/icon/newIcons/medicineDelivery.svg",
      text: "Medicine Delivery",
    },
  ];
  return (
    <Fragment>
   {/* <Box>
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
      </Box>*/}

      <div className="Icons">
        <div className="container">
          <div class="row">
            <h2>One app for all your needs</h2>
          {
             iconState.map ((e)=>{
              return (
                <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card" >
                  
                  <img style={{maxWidth:'150px',margin:'0 auto'}} src={e.icon} alt='' />
                  <h6 style={{paddingTop:'20px'}}>{e.text}</h6>
                </div>
                </div>
              )
             })
          }
          </div>
        </div>
      </div>
</Fragment>
  );
};

export default Icons;
