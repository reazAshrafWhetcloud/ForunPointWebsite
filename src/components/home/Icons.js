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
      <div className="Icons">
        <div className="container">
          <div className="row">
            <h2>One app for all your needs</h2>
          {
             iconState.map((e, index)=>{
              return (
                <div className="col-lg-3 col-md-6 col-sm-12" key={'icons' + index}>
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
