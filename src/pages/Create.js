import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue'
    }
  },
  title: {
    textDecoration: 'underline',
   
  }
})

export default function Create() {
  const classes = useStyles()

  return (
    <Container>
     <Typography
        className={classes.title}
         variant="h6"
         color="textSecondary"
         component="h2"
         marginBottom= '20px' 
         gutterBottom
     >
      Create a New Note
     </Typography>

     <Button
     className={classes.btn}
     onClick={() => console.log("You clicked me!")}
      type="submit"
      color="secondary"
      variant="contained"
      endIcon={<KeyboardArrowRightIcon />}
     >Submit</Button>

    {/* icons */}
    {/* <br />
    <AddReactionIcon />
    <AddReactionIcon color="secondary" fontSize="large"/>
    <AddReactionIcon color="secondary" fontSize="small"/>
    <AddReactionIcon color="action" fontSize="small"/>
    <AddReactionIcon color="error" fontSize="small"/>
    <AddReactionIcon color="disabled" fontSize="small"/> */}

    </Container>
  )
}
