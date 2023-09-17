import React from 'react'
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@material-ui/core/Button';
import { Container, TextField } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
    fontFamily: 'Quicksand',
    fontWeight: 600,
  }
})

export default function Create() {
  const classes = useStyles()

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if(title == ''){
      setTitleError(true)
    }
    if(details == ''){
      setDetailsError(true)
    }
    
    
    if(title && details) {
      console.log(title, details)
    }
  }

  return (
    <Container>
     <Typography
         variant="h6"
         color="textSecondary"
         component="h2" 
         gutterBottom
     >
      Create a New Note
     </Typography>

     <form noValidate autoComplete='off' onSubmit={handleSubmit}>
      <TextField 
      onChange={(e) => setTitle(e.target.value)}
      className={classes.field}
        label="Note Title"
        variant='outlined'
        color="secondary"
        fullWidth
        required
        error={titleError}
      />

<TextField 
      onChange={(e) => setDetails(e.target.value)}
      className={classes.field}
        label="Details"
        variant='outlined'
        color="secondary"
        multiline
        minRows={4}
        fullWidth
        required
        error={detailsError}
      />

<Button
     onClick={() => console.log("You clicked me!")}
      type="submit"
      color="secondary"
      variant="contained"
      endIcon={<KeyboardArrowRightIcon />}
     >Submit</Button>
     </form>
   
      
    

    

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
