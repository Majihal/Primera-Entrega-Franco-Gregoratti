import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';


export default function ItemListContainer() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {['Buzo', 'Zapatillas', 'Remera'].map((value) => (
        <ListItem key={value} disableGutters >   
          <ListItemButton>
            <ListItemText primary={value} />
            <ListItemIcon>
                <AddShoppingCartIcon />
              </ListItemIcon>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
