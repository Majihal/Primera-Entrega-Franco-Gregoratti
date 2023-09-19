import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css'

function NavBar() {
  return (
      <AppBar position="static">
        <Toolbar className='container'>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            White Tower
          </Typography>
          <ul className='containerUl'>
            <li>Home</li>
            <li>Productos</li>
            <li>Contacto</li>
          </ul>
          <CartWidget />
        </Toolbar>       
      </AppBar>
  );
}

export default NavBar

