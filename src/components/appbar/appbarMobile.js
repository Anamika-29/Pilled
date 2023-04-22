import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { Button, IconButton } from "@mui/material";
import { useUIContext } from "../../context/ui";

export default function AppbarMobile({ matches }) {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();
  return (
    <AppbarContainer>
      
      <AppbarHeader  variant="h4">
        Pilled.
      </AppbarHeader>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <Button variant="contained" color="success">
        <MenuIcon  color="secondary"/>
        </Button>
      </IconButton>
    </AppbarContainer>
  );
}
