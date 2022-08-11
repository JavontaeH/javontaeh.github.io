import React, { useContext } from "react";
import { Switch, FormControlLabel } from "@material-ui/core";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import IconBtn from "../IconBtn";
import ThemeContext from "../../contexts/themeContext";

const DarkModeSwitcher = ({ onClose }) => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  return (
    <FormControlLabel
      control={
        <Switch
          checked={isDarkMode}
          name="checkedDarkMode"
          color="primary"
          onChange={() => {
            setIsDarkMode(!isDarkMode);
          }}
        />
      }
      label={<IconBtn icon={DarkModeIcon} fontSize="32" />}
    />
  );
};

export default DarkModeSwitcher;
