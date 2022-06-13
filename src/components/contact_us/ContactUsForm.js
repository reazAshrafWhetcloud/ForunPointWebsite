import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useFormik } from "formik";
import { contactUs } from "../../api/apiUtils";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { formSchema } from "../../validation/validationSchema";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactNew = () => {
  const [isCompany, setIsCompany] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [response, setResponse] = useState({
    success: true,
    msg: "Message has been sent",
  });

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const initialValues = {
    service: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    description: "",
    company: false,
    companyName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    employees: "",
  };

  const validationSchema = formSchema;
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, submitProps) => {
      contactUs(values)
        .then(() => {
          setResponse({
            success: true,
            msg: "Message has been sent",
          });
          handleClick();
          submitProps.resetForm();
        })
        .catch((err) => {
          setResponse((prevState) => ({
            ...prevState,
            success: false,
            msg: "Message has not been sent",
          }));
          handleClick();
          console.log(err);
        });
    },
  });

  const servicesOption = [
    {
      val: "Ride Service",
    },
    {
      val: "Food Delivery",
    },
    {
      val: "Grocery Delivery",
    },
    {
      val: "Gift Delivery",
    },
    {
      val: "Flowers Delivery",
    },
    {
      val: "Packages Delivery",
    },
    {
      val: "Medicine Delivery",
    },
    {
      val: "Others",
    },
  ];

  const Country = [
    {
      val: "USA",
    },
    {
      val: "Canada",
    },
  ];

  const employee = [
    {
      val: "1 - 10",
    },
    {
      val: "20 - 50",
    },
    {
      val: "50 - 100",
    },
    {
      val: "100 - 500",
    },
    {
      val: "500 - 5000",
    },
    {
      val: "5000 - 25000",
    },
  ];

  return (
    <Box className="global-main-margin padding-form">
      <Typography className="global-font-family global-large-heading center-contact-us">
        Contact Us
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <select
          name="service"
          id="service"
          className="select-wi"
          onChange={formik.handleChange}
          value={formik.values.service}
        >
          <option>services</option>
          {servicesOption.map((val, ind) => {
            return (
              <option key={ind} value={val.val}>
                {val.val}
              </option>
            );
          })}
        </select>
        {formik.errors.service ? (
          <div className="error-text">{formik.errors.service}</div>
        ) : null}
        <Box className="contact-name-flex">
          <Box className="contact-name-box">
            <input
              name="firstName"
              className="label-inp-border"
              type="text"
              placeholder="First Name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.errors.firstName ? (
              <div className="error-text">{formik.errors.firstName}</div>
            ) : null}
          </Box>

          <Box className="contact-name-box">
            <input
              name="lastName"
              className="label-inp-border"
              type="text"
              placeholder="Last Name"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.errors.lastName ? (
              <div className="error-text">{formik.errors.lastName}</div>
            ) : null}
          </Box>
        </Box>
        <Box className="box-inp-mr">
          <input
            name="email"
            className="label-inp-border"
            type="text"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="error-text">{formik.errors.email}</div>
          ) : null}
        </Box>
        <Box className="box-inp-mr">
          <input
            name="phoneNumber"
            className="label-inp-border"
            type="text"
            placeholder="Phone Number"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
          {formik.errors.phoneNumber ? (
            <div className="error-text">{formik.errors.phoneNumber}</div>
          ) : null}
        </Box>
        <Box className="box-inp-mr">
          <input
            name="company"
            type="checkbox"
            checked={isCompany}
            onClick={(event) => setIsCompany(!isCompany)}
            onChange={formik.handleChange}
          />{" "}
          <span>Company</span>
        </Box>
        <Box>
          <Box className={!isCompany ? "display-none-box" : ""}>
            <Box className="box-inp-mr">
              <input
                name="companyName"
                className="label-inp-border"
                type="text"
                placeholder="Company Name"
                onChange={formik.handleChange}
                value={formik.values.companyName}
              />
              {formik.errors.companyName ? (
                <div className="error-text">{formik.errors.companyName}</div>
              ) : null}
            </Box>
            <Typography className="global-font-family global-text field-box-margin-typo">
              Company Address:
            </Typography>
            <Box className="contact-name-flex">
              <Box className="address-boxs-w">
                <input
                  name="street"
                  className="label-inp-border"
                  type="text"
                  placeholder="Street"
                  onChange={formik.handleChange}
                  value={formik.values.street}
                />
                {formik.errors.street ? (
                  <div className="error-text">{formik.errors.street}</div>
                ) : null}
              </Box>
              <Box className="address-boxs-w">
                <input
                  name="city"
                  className="label-inp-border"
                  type="text"
                  placeholder="City"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />
                {formik.errors.city ? (
                  <div className="error-text">{formik.errors.city}</div>
                ) : null}
              </Box>
              <Box className="address-boxs-w">
                <input
                  name="state"
                  className="label-inp-border"
                  type="text"
                  placeholder="State"
                  onChange={formik.handleChange}
                  value={formik.values.state}
                />
                {formik.errors.state ? (
                  <div className="error-text">{formik.errors.state}</div>
                ) : null}
              </Box>
              <Box className="address-boxs-w">
                <input
                  name="zip"
                  className="label-inp-border"
                  type="text"
                  placeholder="Zip"
                  onChange={formik.handleChange}
                  value={formik.values.zip}
                />
                {formik.errors.zip ? (
                  <div className="error-text">{formik.errors.zip}</div>
                ) : null}
              </Box>
            </Box>
            <Box className="contact-name-flex">
              <Box className="contact-name-box">
                <select
                  name="country"
                  id="services"
                  className="select-wi"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                >
                  <option>Country</option>
                  {Country.map((val, ind) => {
                    return (
                      <option key={ind} value={val.val}>
                        {val.val}
                      </option>
                    );
                  })}
                </select>
                {formik.errors.country ? (
                  <div className="error-text">{formik.errors.country}</div>
                ) : null}
              </Box>
              <Box className="contact-name-box">
                <select
                  name="employee"
                  id="services"
                  className="select-wi"
                  onChange={formik.handleChange}
                  value={formik.values.employee}
                >
                  <option>Employee</option>
                  {employee.map((val, ind) => {
                    return (
                      <option key={ind} value={val.val}>
                        {val.val}
                      </option>
                    );
                  })}
                </select>
                {formik.errors.employee ? (
                  <div className="error-text">{formik.errors.employee}</div>
                ) : null}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="box-inp-mr">
          <textarea
            name="description"
            className="label-inp-border"
            rows="4"
            placeholder="Descrption"
            onChange={formik.handleChange}
            value={formik.values.description}
          ></textarea>
          {formik.errors.description ? (
            <div className="error-text">{formik.errors.description}</div>
          ) : null}
        </Box>
        <Box className="form-btn-box field-box-margin">
          <Button
            type="submit"
            variant="contained"
            className="submit-btn-color"
            disableElevation
          >
            Submit
          </Button>
        </Box>
      </form>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={response.success ? "success" : "error"}
            sx={{ width: "100%" }}
          >
            {response.msg}
          </Alert>
        </Snackbar>
      </Stack>
    </Box>
  );
};

export default ContactNew;
