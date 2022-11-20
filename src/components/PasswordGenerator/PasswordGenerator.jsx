import React from "react";
import { Box, Typography, Slider, Checkbox, Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const PasswordGenerator = () => {
  return (
    <Box
      sx={{ width: "400px", margin: "0 auto" }}
      className="password-generator"
    >
      <Typography variant="h1" fontSize={30} color="#778380" m={2}>
        Password Generator
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#24232B",
        }}
        className="password"
        mb={2}
        p={2}
      >
        <Typography fontSize={24} color="#778380" variant="h3">
          Password
        </Typography>
        <ContentCopyIcon sx={{ color: "#A4FFAF", cursor: "pointer" }} />
      </Box>
      <Box
        sx={{
          backgroundColor: "#24232B",
          color: "#fff",
        }}
        className="password-settings"
        p={2}
      >
        <Box className="password-length">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="password-length-label"
          >
            <Typography variant="body1" fontSize={18}>
              Password Length
            </Typography>
            <Typography variant="body1" fontSize={16}>
              8
            </Typography>
          </Box>

          <Slider
            // defaultValue={0}
            aria-label="Default"
            valueLabelDisplay="auto"
            sx={{
              color: "#A4FFAF",
            }}
            max={20}
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              style={{ paddingLeft: 0, color: "#A4FFAF" }}
              sx={{
                color: "#A4FFAF",
              }}
            />
            <Typography variant="body1" fontSize={16}>
              Include Uppercase
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              style={{ paddingLeft: 0, color: "#A4FFAF" }}
              sx={{
                color: "#A4FFAF",
              }}
            />
            <Typography variant="body1" fontSize={16}>
              Include Lowercase
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              style={{ paddingLeft: 0, color: "#A4FFAF" }}
              sx={{
                color: "#A4FFAF",
              }}
            />
            <Typography variant="body1" fontSize={16}>
              Include Numbers
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              style={{ paddingLeft: 0, color: "#A4FFAF" }}
              sx={{
                color: "#A4FFAF",
              }}
            />
            <Typography variant="body1" fontSize={16}>
              Include Symbols
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#18171F",
          }}
          className="password-strength"
          p={2}
          mt={2}
          mb={3}
        >
          <Typography variant="body1" fontSize={16} color="#778380">
            STRENGTH
          </Typography>
          <Typography variant="body1" fontSize={16}>
            Weak
          </Typography>
        </Box>
        <Box mt={2} className="buttons">
          <Button
            variant="contained"
            style={{ width: "100%" }}
            sx={{
              backgroundColor: "#A4FFAF",
              color: "#24232B",
              "&:hover": {
                backgroundColor: "#A4FFAF",
                color: "#24232B",
              },
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            Generate
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PasswordGenerator;
