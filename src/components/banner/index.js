import {useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";


import {
  BannerContainer,
  BannerContent
} from "../../styles/banner";
import { ImageList,ImageListItem } from "@material-ui/core";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <ImageList sx={{ width: 450, height: 1000}} cols={matches ? 2 : 4} rowHeight={300}>
    <ImageListItem>
      <img
        src={`/images/banner/banner1.jpg?w=164&h=164&fit=crop&auto=format`}
        srcSet={`/images/banner/banner1.jpg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem>
      <img
        src={`/images/banner/banner2.jpg?w=164&h=164&fit=crop&auto=format`}
        srcSet={`/images/banner/banner2.jpg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem>
      <img
        src={`/images/banner/banner3.jpg?w=164&h=164&fit=crop&auto=format`}
        srcSet={`/images/banner/banner3.jpg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        
        loading="lazy"
      />
    </ImageListItem><ImageListItem>
      <img
        src={`/images/banner/banner4.jpg?w=164&h=164&fit=crop&auto=format`}
        srcSet={`/images/banner/banner4.jpg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        
        loading="lazy"
      />
    </ImageListItem>
</ImageList>
      
      <BannerContent>
      
      </BannerContent>
    </BannerContainer>
  );
}
