import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { KEY_STRINGS } from "../constants";

import PasswordDisplay from "./PasswordDisplay";
import PasswordSettings from "./PasswordSettings";
import PasswordStrength from "./PasswordStrength";
import GenerateButton from "./GenerateButton";

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

      <PasswordDisplay
        password={password}
        handleCopyPassword={handleCopyPassword}
      />

      <Box
        sx={{
          backgroundColor: "#24232B",
        }}
        p={2}
      >
        <PasswordSettings
          passwordOptions={passwordOptions}
          handleSliderChange={handleSliderChange}
          handleCheckboxChange={handleCheckboxChange}
        />
        <PasswordStrength passwordStrength={passwordStrength} />
        <GenerateButton
          generatePassword={generatePassword}
          isGenerateDisabled={isGenerateDisabled}
        />
      </Box>
    </Box>
  );
};

export default PasswordGenerator;
