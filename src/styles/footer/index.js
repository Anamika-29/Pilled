import styled from "@emotion/styled";
import {
  TextField,
  Typography,
} from "@mui/material";
import { Colors } from "../theme";

export const FooterTitle = styled(Typography)(() => ({
    padding: "4px",
    flexGrow: 1,
    // fontSize: "3em",
    // fontFamily: '"Montez", "cursive"',
    color: "black",
    
  marginBottom: "1em",
}));

export const SubscribeTf = styled(TextField)(() => ({
  ".MuiInputLabel-root": {
    color: Colors.light_gray,
  },

  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.light_gray}`,
  },
}));
