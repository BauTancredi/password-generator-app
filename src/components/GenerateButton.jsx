import React from "react";
import { Box, Button } from "@mui/material";

const GenerateButton = ({ generatePassword, isGenerateDisabled }) => {
  return (
    <Box mt={2}>
      <Button
        variant="contained"
        onClick={generatePassword}
        disabled={isGenerateDisabled()}
      >
        Generate
      </Button>
    </Box>
  );
};

export default GenerateButton;
