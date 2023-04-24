import styled from "@emotion/styled";
import CopyrightIcon from '@mui/icons-material/Copyright';
import Input from '@mui/material/Input';
import Actions from "../appbar/actions";

import {
  Grid,
  List,
  ListItemText,
  Typography,
  Button,
  Stack,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SubscribeTf, FooterTitle } from "../../styles/footer";
import SendIcon from "@mui/icons-material/Send";
import { LocalFireDepartment } from "@mui/icons-material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <Box
      sx={{
        background: '#E8E2E2',
        color: 'Colors.black',
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' }
      }}
    >
      <Grid container spacing={2} justifyContent="center" textAlign="center">
        <Grid item sm={6} md={6} lg={3}>
        <FooterTitle textAlign="center" justifyContent="center"  variant="h5" sx={{fontFamily: 'serif', fontWeight:'bold'}}>
        Pilled.
      </FooterTitle>
      <Typography  variant="caption2" sx={{color:'#A4BC92',textAlign:"center"}} >
            In the summer of 2007 a man named Joe Safford decided he wanted to wear his new jeans national.
          
          </Typography><br/><br/><br/>
          <Actions matches={matches} />
          
          
          <Box
            sx={{
              mt: 4,
              color: Colors.light_gray,
            }}
          >
            

          </Box>
        </Grid>
        <Grid item sm={1} md={6} lg={3}>
          <FooterTitle variant="h6" sx={{fontFamily: 'serif', fontWeight:'bold'}}>Get In Touch</FooterTitle>
          <LocationOnIcon sx={{color:'#A4BC92',marginRight:'25px'}}></LocationOnIcon><Typography variant="caption2" sx={{color:'#A4BC92'}}>8819 Ohio St. South Gate</Typography><br/><br/>
          <MailIcon sx={{color:'#A4BC92',marginRight:'25px'}}></MailIcon><Typography variant="caption2" sx={{color:'#A4BC92'}}>email@lavino.com</Typography><br/><br/>
          <PhoneEnabledIcon sx={{color:'#A4BC92',marginRight:'25px'}}></PhoneEnabledIcon><Typography variant="caption2" sx={{color:'#A4BC92'}}>(205)555-0100</Typography>
        </Grid>
        <Grid item md={6} lg={3}>
          <Button sx={{background:'#A4BC92', mr: 1,borderRadius:"100%"}}><FacebookIcon sx={{color:'white'}} /></Button>

          <Button sx={{background:'#A4BC92', mr: 1,borderRadius:"100%"}}><TwitterIcon sx={{color:'white'}} /></Button>

          <Button sx={{background:'#A4BC92', mr: 1,borderRadius:"100%"}}><InstagramIcon sx={{color:'white'}}/></Button>

          <Button sx={{background:'#A4BC92', mr: 1,borderRadius:"100%"}}><LinkedInIcon sx={{color:'white'}}/></Button>
        
            
            
            <br/><br/>
            <Typography variant="caption2" sx={{color:'#A4BC92'}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
          </Typography>
        </Grid>
        <Grid item md={6} lg={3}>
          <FooterTitle variant="h6" sx={{fontFamily: 'serif', fontWeight:'bold'}}>Subscribe Newsletter</FooterTitle>

          <Stack><Typography>Your email</Typography><br/>
          <Button variant="outlined"><Input placeholder="Enter your Email..." disableUnderline></Input></Button>
            <SubscribeTf
              color="primary"
              label="Email address"
              variant="standard"
            />
            
            <Button
              sx={{background:'#A4BC92'}}
              variant="contained"
            >
              Subscribe
            </Button>
            
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
