import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


import {
  
  BannerContent,
  FooterContainer,
  BannerShopButton,
  
} from "../../styles/banner";
import { AppbarHeader } from "../../styles/appbar";

export default function Footer2() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <FooterContainer >
      <BannerContent>
        <AppbarHeader justifyContent="center" textAlign="center" sx={{color:"black",fontFamily: 'serif', fontWeight:'bold'}}>You Deserve A Pillow Today</AppbarHeader>
        

       <BannerShopButton sx={{background:'#A4BC92'}}>Get Started Now<ArrowRightAltIcon sx={{marginLeft:'60px'}}></ArrowRightAltIcon> </BannerShopButton>
      </BannerContent>
      
      

    </FooterContainer>
  );
}