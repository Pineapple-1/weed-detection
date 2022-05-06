import React from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";

export const Email = ({ Message,Subject }) => {
  var templateParams = {
    subject: Subject,
    name: "abdulrehman",
    email: "abdulrehman.ajmal@outlook.com",
    message: Message,
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
      size={Subject==="Crop Report"?"medium":"small"}
      sx={{ mt: 2, textDecoration: "none" }}
      onClick={sendEmail}
    >
      {Subject==="Crop Report"?"Send Report":"Recommend"}
    </Button>
  );
};
