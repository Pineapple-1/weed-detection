import * as React from "react";
import Button from "@mui/material/Button";


export default function UploadButtons({ setFile, setData }) {
  const changeHandler = (event) => {
    setFile(event.target.files[0]);
    setData(null);
  };

  return (
    <>
      <label htmlFor="upload-photo">
        <input
          style={{ display: "none" }}
          id="upload-photo"
          name="upload-photo"
          type="file"
          onChange={changeHandler}
        />
        <Button color="primary" variant="contained" component="span">
          Upload Picture
        </Button>
      </label>
      
    </>
  );
}
