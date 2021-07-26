import React from "react"

import { TextField } from "@material-ui/core";

const Haqiqi = () => {
    return (
      <div className="content">
        <TextField
          id="outlined-basic"
          label="استان"
          variant="outlined"
          className="text-field"
        />
        <TextField
          id="outlined-basic"
          label="شهر"
          variant="outlined"
          className="text-field"
        />
        <TextField
          id="outlined-basic"
          label="کد ملی"
          variant="outlined"
          className="text-field"
        />
        <TextField
          id="outlined-basic"
          label="کد پستی"
          variant="outlined"
          className="text-field"
        />
        <TextField
          id="outlined-basic"
          label="تلفن"
          variant="outlined"
          className="text-field"
        />
        <TextField
          id="outlined-basic"
          label="آدرس"
          variant="outlined"
          className="text-field"
        />
      </div>
    );
}

export default Haqiqi