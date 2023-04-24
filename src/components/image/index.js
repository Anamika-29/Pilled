import {Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


    
  




import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  
} from "../../styles/banner";

export default function Image() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer sx={{background:'#E8E2E2'}}>
      
      
      

      < Card sx={{margin:'20px',background:'#E8E2E2'}} >


      <CardActionArea>
        <CardMedia sx={{borderTopRightRadius:"50%",borderTopLeftRadius:"50%"}}
        
          component="img"
          height="600"
          width="200"
          
          image="https://thearchitecturedesigns.com/wp-content/uploads/2019/09/Laxurious-storage-Bed-13.jpg"
          borderRadius="100%"
          
        />
        
      </CardActionArea>
    </Card>
    <BannerContent sx={matches ?{ maxWidth: 345} : {maxWidth:345,marginLeft:30}} ><Typography   variant="subtitle"  sx={{color:'#A4BC92'}}><hr/>Why Should Buy</Typography><br/><br/>

        <Typography   variant="h2" sx={{fontFamily:'sans',color:"black",fontWeight:"bold"}}>Pillows As Sure As The Sun Shines</Typography><br/><br/>
        
        <BannerDescription  variant="subtitle"  sx={{color:'#A4BC92'}}>
          That's where we come in - the folks at Oliya, with our Kickstarter campaign goal of $1000 for a total books and one final book time.
        </BannerDescription>
        <br/>

        <BannerDescription sx={{color:'#A4BC92'}}>
        <CheckBoxOutlinedIcon sx={{color:'#A4BC92'}}/> Our Amazing Benefit 
        <br/><CheckBoxOutlinedIcon sx={{color:'#A4BC92'}}/> One More Benefit
        <br/> <CheckBoxOutlinedIcon sx={{color:'#A4BC92'}}/> Type More Benefit
        <br/> <CheckBoxOutlinedIcon sx={{color:'#A4BC92'}}/> Your Benefit Here
        </BannerDescription>

      </BannerContent>
 

    </BannerContainer>
  );
}