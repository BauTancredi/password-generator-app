import React, { Fragment } from "react";
import { Box, Typography, Slider, Checkbox } from "@mui/material";

import { PASSWORD_OPTIONS } from "../constants";
import { FlexClass, AlignCenterClass } from "../classes";

const PasswordSettings = ({
  passwordOptions,
  handleCheckboxChange,
  handleSliderChange,
}) => {
  return (
    <Fragment>
      <Box className="password-length">
        <Box sx={FlexClass} className="password-length-label">
          <Typography variant="body1">Character Length</Typography>
          <Typography variant="body1" sx={{ color: "#A4FFAF", fontSize: 20 }}>
            {passwordOptions.length}
          </Typography>
        </Box>
        <Slider
          aria-label="Default"
          valueLabelDisplay="auto"
          max={20}
          onChange={handleSliderChange}
          value={passwordOptions.length}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
        className="password-settings-checkboxes"
      >
        {PASSWORD_OPTIONS.map((option, index) => (
          <Box
            key={index}
            sx={AlignCenterClass}
            className="password-settings-checkbox"
          >
            <Checkbox
              onChange={handleCheckboxChange}
              value={option}
              name={option.toLowerCase()}
            />
            <Typography variant="body1">Include {option}</Typography>
          </Box>
        ))}
      </Box>
    </Fragment>
  );
};

export default PasswordSettings;
