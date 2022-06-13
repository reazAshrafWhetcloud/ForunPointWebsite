import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import BreadCrumb from "../muic/BreadCrumb";

const BlogPage = () => {
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Blog",
      url: "/blog",
    },
  ];

  const iconState = [
    {
      icon: "./images/blog/blog-passenger.jpg",
      text: "Enjoy your ride",
    },
    {
      icon: "./images/blog/blog-luxery.jpg",
      text: "We offer luxury vehicle",
    },
    {
      icon: "./images/blog/blog-grocery.jpg",
      text: "Grocery at your door",
    },
    {
      icon: "./images/blog/blog-flower.jpg",
      text: "Send flower to your loved ones",
    },
    {
      icon: "./images/blog/blog-pic5.jpg",
      text: "Variety of delicious food at your door",
    },
  ];
  return (
    <Box className="global-main-margin">
      <Box>
        <Typography className="global-font-family global-main-heading center-contact-us">
          Blog
        </Typography>
        <Box className="bread-crumb-center">
          <BreadCrumb breadCrumb={breadCrumb} />
        </Box>
      </Box>
      <Box className="blog-img-box">
        <img src="./images/blog/blog-main-pic.png" alt="blog main pic" />
      </Box>
      <Box className="icons-main-box">
        {iconState.map((val, ind) => {
          return (
            <Box className="icons-box" key={ind}>
              <Box className="icons-img-box-service">
                <img src={val.icon} alt={`blog icons${ind}`} />
              </Box>
              <Box>
                <Typography className="typo-icons typo-icons-s global-font-family">
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

export default BlogPage;
