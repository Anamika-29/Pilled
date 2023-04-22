import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import BannerImage from "../../styles/banner/banner";


import {
  BannerContainer,
  Home,
  BannerContent,
  BannerDescription,
  
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage />
      <BannerContent>
        <BannerTitle variant="h2" position="center" >We Bring The Good</BannerTitle>
        <BannerTitle variant="h2">
          Pillows To Life.
        </BannerTitle>

        <BannerDescription variant="subtitle">
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
        </BannerDescription>

        <BannerShopButton color="primary">Shop Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
