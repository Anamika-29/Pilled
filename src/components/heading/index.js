import {useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";


import {
  BannerContainer,
  
  BannerContent,
  
  BannerTitle,
} from "../../styles/banner";

export default function Heading() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerContent>
        <BannerTitle justifyContent="center" textAlign="center">We Bring The Good
         
          Pillows To Life.
        </BannerTitle>

      </BannerContent>
    </BannerContainer>
  );
}
