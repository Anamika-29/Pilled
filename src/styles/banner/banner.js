import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ListItem } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 300, /* Set the height of the banner */
    backgroundImage: 'url(your-banner-image-url)', /* Set the banner background image */
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '80%', /* Set the height of the images */
    margin: theme.spacing(1), /* Set the margin between the images */
    objectFit: 'cover',
  },
}));

function BannerImage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={2}>
  <Grid item md={2}>
    <img src="https://tse1.mm.bing.net/th?id=OIP.axTqo3U5VIMqprLC2YHYAQHaE8&pid=Api&P=0" alt="image-1" className={classes.image} />
  </Grid>
  <Grid item md={2}>
    <img src="https://i.pinimg.com/originals/69/e8/1c/69e81c0121696b5eadacd159529541cb.jpg" alt="image-2" className={classes.image} />

  </Grid>
  <Grid item md={2}>
    <img src="https://thumbs.dreamstime.com/z/interior-leather-pillow-1940056.jpg" alt="image-3" className={classes.image} />
  </Grid>
  <Grid item md={2}>
  <img src="https://i.pinimg.com/736x/8c/d3/3e/8cd33ea2de617152dcc0ef414641ec3d--pillow-crafts-diy-pillows.jpg" alt="image-4" className={classes.image} />
  </Grid>
</Grid>
      
    </div>
  );
}

export default BannerImage;