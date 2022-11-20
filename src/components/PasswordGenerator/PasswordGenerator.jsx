import React from "react";
import { Box, Typography, Slider, Checkbox, Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const FlexClass = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const AlignCenter = {
  display: "flex",
  alignItems: "center",
};

const PasswordGenerator = () => {
  return (
    <Box
      sx={{ width: "400px", margin: "0 auto" }}
      className="password-generator"
    >
      <Typography variant="h1" mb={2}>
        Password Generator
      </Typography>
      <Box
        sx={{ ...FlexClass, backgroundColor: "#24232B" }}
        className="password"
        mb={2}
        p={2}
      >
        <Typography variant="h3">Password</Typography>
        <ContentCopyIcon sx={{ color: "#A4FFAF", cursor: "pointer" }} />
      </Box>
      <Box
        sx={{
          backgroundColor: "#24232B",
        }}
        className="password-settings"
        p={2}
      >
        <Box className="password-length">
          <Box sx={FlexClass} className="password-length-label">
            <Typography variant="body1">Character Length</Typography>
            <Typography variant="body1">8</Typography>
          </Box>

          <Slider aria-label="Default" valueLabelDisplay="auto" max={20} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          className="password-settings-checkboxes"
        >
          <Box sx={AlignCenter}>
            <Checkbox />
            <Typography variant="body1">Include Uppercase</Typography>
          </Box>

          <Box sx={AlignCenter}>
            <Checkbox />
            <Typography variant="body1">Include Lowercase</Typography>
          </Box>

          <Box sx={AlignCenter}>
            <Checkbox />
            <Typography variant="body1">Include Numbers</Typography>
          </Box>

          <Box sx={AlignCenter}>
            <Checkbox />
            <Typography variant="body1">Include Symbols</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            ...FlexClass,
            backgroundColor: "#18171F",
          }}
          className="password-strength"
          p={2}
          mt={2}
          mb={3}
        >
          <Typography variant="body1" color="#778380">
            STRENGTH
          </Typography>
          <Typography variant="body1">Weak</Typography>
        </Box>
        <Box mt={2} className="buttons">
          <Button variant="contained">Generate</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PasswordGenerator;
