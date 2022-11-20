import React from "react";
import { Box, Typography } from "@mui/material";
import { FlexClass } from "../classes";

const PasswordStrength = ({ passwordStrength }) => {
  return (
    <Box
      sx={{
        ...FlexClass,
        backgroundColor: "#18171F",
      }}
      className=""
      p={2}
      mt={2}
      mb={3}
    >
      <Typography variant="body1" color="#778380">
        STRENGTH
      </Typography>
      <div className="password-strength-bar-container">
        <div
          className={`password-strength-bar
      ${passwordStrength >= 1 ? "active" : ""}`}
        />
        <div
          className={`password-strength-bar
      ${passwordStrength >= 3 ? "active" : ""}`}
        />
        <div
          className={`password-strength-bar
      ${passwordStrength >= 4 ? "active" : ""}`}
        />
        <div
          className={`password-strength-bar
      ${passwordStrength >= 5 ? "active" : ""}`}
        />
      </div>
    </Box>
  );
};

export default PasswordStrength;
