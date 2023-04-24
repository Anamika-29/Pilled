import {useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import * as React from 'react';
import {Container} from "@mui/material";
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

import LeakAddIcon from '@mui/icons-material/LeakAdd';

import FilterVintageIcon from '@mui/icons-material/FilterVintage'; 
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Diversity2Icon from '@mui/icons-material/Diversity2';
export default function Logo() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container sx= {{background:"black", color:"white",paddingTop:'30px',paddingBottom:'30px'}}>
        logoipsum<SportsBasketballIcon sx={{marginRight:"100px"}} />
        logoipsum<LeakAddIcon sx={{marginRight:"100px"}}/>
        logoipsum<FilterVintageIcon sx={{marginRight:"100px"}}/>
        logoipsum<FastfoodIcon sx={{marginRight:"100px"}}/>
        logoipsum<Diversity2Icon sx={{marginRight:"100px"}}/>
      
 
    </Container>
  );
}