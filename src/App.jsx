import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";
import PasswordGenerator from "./components/PasswordGenerator";

import "./App.css";

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
