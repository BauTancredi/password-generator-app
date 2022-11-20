import React, { useEffect } from "react";
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

const KEY_STRINGS = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

const PASSWORD_OPTIONS = ["Uppercase", "Lowercase", "Numbers", "Symbols"];

const PasswordGenerator = () => {
  const [password, setPassword] = React.useState("");
  const [passwordStrength, setPasswordStrength] = React.useState(0);
  const [passwordOptions, setPasswordOptions] = React.useState({
    length: 0,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const generatePassword = () => {
    let characters = "";

    if (passwordOptions.lowercase) characters += KEY_STRINGS.lowercase;
    if (passwordOptions.uppercase) characters += KEY_STRINGS.uppercase;
    if (passwordOptions.numbers) characters += KEY_STRINGS.number;
    if (passwordOptions.symbols) characters += KEY_STRINGS.symbol;

    let password = "";

    for (let i = 0; i < passwordOptions.length; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
    }

    setPassword(password);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  const handleSliderChange = (event, newValue) => {
    setPasswordOptions({ ...passwordOptions, length: newValue });
  };

  const handleCheckboxChange = (event) => {
    setPasswordOptions({
      ...passwordOptions,
      [event.target.name]: event.target.checked,
    });
  };

  // https://stackoverflow.com/questions/948172/password-strength-meter
  const checkPasswordStrength = () => {
    let strength = 0;

    if (passwordOptions.lowercase) strength += 1;
    if (passwordOptions.uppercase) strength += 1;
    if (passwordOptions.numbers) strength += 1;
    if (passwordOptions.symbols) strength += 1;

    if (passwordOptions.length >= 8) strength += 1;
    if (passwordOptions.length >= 12) strength += 1;

    setPasswordStrength(strength);
  };

  useEffect(() => {
    checkPasswordStrength();
  }, [password]);

  // disable generate button if no options are selected
  const isGenerateDisabled = () => {
    if (passwordOptions.lowercase && passwordOptions.length > 0) return false;
    if (passwordOptions.uppercase && passwordOptions.length > 0) return false;
    if (passwordOptions.numbers && passwordOptions.length > 0) return false;
    if (passwordOptions.symbols && passwordOptions.length > 0) return false;

    return true;
  };

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
        <Typography variant="h3">{password ? password : ""}</Typography>
        <ContentCopyIcon
          sx={{ color: "#A4FFAF", cursor: "pointer" }}
          onClick={handleCopyPassword}
        />
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
            <Typography variant="body1">{passwordOptions.length}</Typography>
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
              sx={AlignCenter}
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
        <Box mt={2} className="buttons">
          <Button
            variant="contained"
            onClick={generatePassword}
            disabled={isGenerateDisabled()}
          >
            Generate
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PasswordGenerator;
