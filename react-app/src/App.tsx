import './App.css'
import { Button, TextField } from '@mui/material'

function App() {

  return (
    <>
      <div>
        <TextField  id="outlined-basic" label="Outlined" variant="outlined" margin="normal" />
      </div>
      <div>
        <Button variant="contained">Hello world</Button>
      </div>
    </>
  )
}

export default App
