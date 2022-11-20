import React from "react";
import { Box, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { FlexClass } from "../classes";

const PasswordDisplay = ({ password, handleCopyPassword }) => {
  return (
    <Box
      sx={{ ...FlexClass, backgroundColor: "#24232B" }}
      className="password"
      mb={2}
      p={2}
    >
      <Typography variant="h3">{password ? password : ""}</Typography>
      <ContentCopyIcon
        sx={{ color: "#A4FFAF", cursor: "pointer" }}
        onClick={handleCopyPassword}
      />
    </Box>
  );
};

export default PasswordDisplay;
