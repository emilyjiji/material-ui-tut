import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles' 
import { purple } from '@mui/material/colors'

const theme = createTheme ({
  palette: {
    primary: {
      main: '#fefefe'
    }, 
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightRegular: 600,
    fontWeightBold: 700,
    h3: {
      fontFamily: 'Quicksand',
    fontWeightLight: 400,
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
