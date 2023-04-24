import logo from "./logo.svg";
import "./App.css";
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Appbar from "./components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Banner from "./components/banner";
import Products from "./components/products";
import { UIProvider } from "./context/ui";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import Heading from "./components/heading";
import Banner2 from "./components/banner2";
import Footer2 from "./components/Footer1";
import { useEffect } from "react";
import Image from "./components/image";
import Image2 from "./components/image2";
import Logo from "./components/Logo";

function App() {
  useEffect(() => {
    document.title = "Pilled - Pillows & Interior Landing Page";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
            <Appbar />
            <Banner />
            <Heading />
            <Banner2 />
            <Logo />
            <Image />
            <Box display="flex" sx={{background:'#E8E2E2', p: 4 }}>
              <Typography variant="h3" sx={{fontFamily:'serif'}}>Everyone Needs One Until They Do.</Typography>
            </Box>
            <Image2 />
            <Box display="flex" justifyContent="center" textAlign="center" sx={{background:'#E8E2E2', p: 4 }}>
              <Typography variant="h3" sx={{fontFamily:'serif'}}>Everyone Needs One Until They Do.</Typography>
            </Box>
            <Products />
            <Footer2 />
            <Footer />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
