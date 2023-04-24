import {Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


    
  




import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerShopButton,
} from "../../styles/banner";




export default function Banner2() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerContent>
        

        <BannerDescription variant="subtitle" textAlign="center" justifyContent="center" sx={{color:'#A4BC92'}}>
          That's where we come in - the folks at Oliya, with our Kickstarter campaign goal of $1000 for a total books and one final book time.
        </BannerDescription>
        <BannerDescription sx={{color:'#A4BC92'}}>
        <CheckBoxOutlinedIcon sx={{color:'#A4BC92'}}/> Free Delivery <CheckBoxOutlinedIcon sx={{color:'#A4BC92'}}/> 24/7 Support <CheckBoxOutlinedIcon sx={{color:'#A4BC92'}}/> Free Return

        </BannerDescription>

       <BannerShopButton sx={{background:'#A4BC92'}}>Get Started<ArrowRightAltIcon sx={{marginLeft:'60px'}}></ArrowRightAltIcon> </BannerShopButton>
      </BannerContent>
      
      

      <Card sx={matches ?{ maxWidth: 345} : {maxWidth:345,marginLeft:30}} >
      <CardActionArea sx={{ position: 'relative' }}>
        <CardMedia
        
          component="img"
          height="400"
          image="https://n4.sdlcdn.com/imgs/b/e/8/Bombay-Dyeing-Blue-Plain-Cotton-SDL231690695-1-de003.jpg"
          
        />
        <CardContent>
          
          <Typography sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '75%',
        bgcolor: 'white',
        color: 'black',
        padding: '10px',
      }}
      variant="body2" color="text.secondary">
            "Definitely worth the investment. Really good. Keep up the excellent work. It's really wonderful."
            <br/>
            <b>Jena Redmond</b><br/>
            Designer
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      
     

    </BannerContainer>
  );
}