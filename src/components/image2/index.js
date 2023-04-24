import {Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

import {
  BannerContainer,
} from "../../styles/banner";




export default function Image2() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer sx={{background:'#E8E2E2'}}>
        <Typography   variant="subtitle"  sx={{color:'#A4BC92'}}><hr/>Our Collection</Typography><br/>
      
      
      

      < Card sx={{margin:'100px',background:'#E8E2E2'}} >


      <CardActionArea>
        <CardMedia sx={{borderTopRightRadius:"50%",borderTopLeftRadius:"50%"}}
        
          component="img"
          height="600"
          width="200"
          
          image="https://tse3.mm.bing.net/th?id=OIP.z_6r1LYdz1Qf411bPZZS1wHaJQ&pid=Api&P=0"
          borderRadius="100%"
          
        />
                <CardContent sx={{textAlign:"right"}}>Memory foam Pillow<br/>
        <Typography variant="subtitle" sx={{color:'#A4BC92'}}>Discover More<EastIcon/></Typography>

            
        </CardContent>
        

        
      </CardActionArea>
    </Card>
    < Card sx={{margin:'100px',background:'#E8E2E2'}} >


      <CardActionArea>
        <CardMedia sx={{borderTopRightRadius:"50%",borderTopLeftRadius:"50%"}}
        
          component="img"
          height="450"
          width="200"
          
          image="https://i5.walmartimages.com/asr/8ad7b25a-cab8-4708-b645-6b5fc068853b.dd18b7e91e89d3719d88249200e046ba.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
          borderRadius="100%"
          
        />
        <CardContent sx={{textAlign:"right"}}>Maternity foam Pillow<br/>
        <Typography variant="subtitle" sx={{color:'#A4BC92'}}>Discover More<EastIcon/></Typography>

            
        </CardContent>
        
        
      </CardActionArea>
    </Card>
   
 

    </BannerContainer>
  );
}