import * as React from 'react';
import { Link } from 'gatsby'; // Gatsby'den Link'i içe aktar
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuIcon from '@mui/icons-material/Menu'; // Menü simgesini içe aktar
import Fab from '@mui/material/Fab'; // Fab bileşenini içe aktar

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const iconMap = {
    0: <HomeIcon />,
    1: <InfoIcon />,
    2: <span style={{ fontSize: '24px' }}>&lt;/&gt;</span>,
    3: <ContactMailIcon />,
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List >
        {['Ana Sayfa', 'Hakkımda', 'Hizmetler', 'İletişim'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={index === 0 ? '/' : index === 1 ? '/hakkimda' : index === 2 ? '/hizmetler' : '/iletisim'}>
              <ListItemIcon>
                {iconMap[index] || <HelpOutlineIcon />} {/* Default icon if index not found */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div sx={{ m: 1, position: 'fixed', gap: 4 }}>
      <Fab
        variant="extended"
        onClick={toggleDrawer(true)} // Drawer açma fonksiyonu
        sx={{
          backgroundColor: 'transparent', // Arka plan rengini kaldır
          boxShadow: 'none', // Gölgeyi kaldır
          '&:hover': {
            backgroundColor: 'transparent', // Hover durumunda arka plan rengini kaldır
          },
        }}
      >
        <MenuIcon size={32} color="#6F42C1" />
      </Fab>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
