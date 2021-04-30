import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import {tileData as images} from '../tileData';

const useStyles = makeStyles(theme=> ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: '300px'
  },
  image: {
    height: '200px',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important'
    },
    '&:hover': {
      zIndex: 1,
      '& $imageBackDrop': { opacity: 0},
      '& $imageTitle': { border: '4px solid currentColor' },
      '& $imageMarked': { opacity: 0}
    }
  },
  imageSrc: {
    position: 'absolute',
    left:0,
    right:0,
    top:0,
    bottom:0,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  imageBackDrop: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageTitle: {
    padding: '12px 20px',
    position: 'relative'
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 6,
    left: 'calc(50% - 9px)'
  }
}))

function ButtonBases() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    {images.map(image=> (
      <ButtonBase
       focusRipple
       focusVisibleClassName={classes.focusVisible}
       className={classes.image}
       key={image.title}
       style={{width: image.width}}>
        <span
         style={{backgroundImage: `url(${image.url})`}}
         className={classes.imageSrc} />
         <span className={classes.imageBackDrop} />
         <span className={classes.imageButton} >
           <Typography variant='subtitle1' color='inherit' component='span' className={classes.imageTitle}>
             {image.title}
             <span className={classes.imageMarked} />
           </Typography>
         </span>
      </ButtonBase>
  ))}
  </div>
  )
}

export default ButtonBases
