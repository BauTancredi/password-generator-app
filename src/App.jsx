import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import "./App.css";

import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <PasswordGenerator />
      </div>
    </ThemeProvider>
  );
}

export default App;
