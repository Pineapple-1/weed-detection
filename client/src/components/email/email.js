import React from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";

export const Email = ({ per }) => {
  var templateParams = {
    subject: "Crop Report",
    name: "abdulrehman",
    email: "abdulrehman.ajmal@outlook.com",
    message: `WEED PERCENTAGE ${(per * 100).toFixed(0)}%  ${
      (per * 100).toFixed(0) > 40
        ? "TAKE ACTIONS TO CONTROL WEED !!!"
        : "NO ACTIONS NEEDED."
    }`,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_gsxgatf",
        "template_9n6q93g",
        templateParams,
        "user_iIgPvTgUfNziEJcb8k4RW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Button
      variant="contained"
      size="medium"
      sx={{ mt: 2, textDecoration: "none" }}
      onClick={sendEmail}
    >
      Send Report
    </Button>
  );
};
