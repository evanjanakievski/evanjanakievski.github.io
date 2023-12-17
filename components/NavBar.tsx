import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Collapse, List, ListItemButton, createTheme, Link, Container } from '@mui/material';

interface Pages {
    name: string;
    href: string;
    subMenu?: Array<Pages>; 
}
const pages: Pages[] = [
    {
        name: 'Projects',
        href: '/projects/',
        subMenu: [
            {
                name: 'Robotic Arm',
                href: '/project1/'
            },
            {
                name: 'Prosthetic',
                href: '/project2/'
            },
            {
                name: 'Larva Identifier',
                href: '/project3/'
            },
        ]
    },
    {
        name: 'Contact',
        href: '/contact/',
    }
];

const theme = createTheme({
    palette: {
        background: {
            default: 'transparent',
        },
        text: {
            primary: '#FFFFFF',
        },
        primary: { main: '#393d3a' },
        secondary: { main: '#b5c2c7' },
}});

function NavBarButton ({ name, href, subMenu }: Pages) {
    const [hover, setHover] = React.useState(false);

    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{padding: 5, position: 'relative'}}>
            {hover ? 
            <Link
                variant={'button'}
                style={{ margin: theme.spacing(0, 1.25), cursor: 'pointer', opacity: 0.65, color: 'white', display: 'block', textDecoration: 'none', transition: theme.transitions.create('opacity')}}
                color={theme.palette.text.primary}
                href={`${href}`}
            > 
                {name}
            </Link> : 
            <Link
                variant='button'
                style={{ margin: theme.spacing(0, 1.25), cursor: 'pointer', opacity: 1, color: 'white', display: 'block', textDecoration: 'none', transition: theme.transitions.create('opacity')}}
                color={theme.palette.text.primary}
                href={`${href}`}
            >
                {name}
            </Link>    
            }
            {name == 'Projects' &&
                <Collapse in={(subMenu?.length ?? 0) > 0 && hover} style={{ position: 'absolute', marginTop: theme.spacing(0.5)}}>
                    <List style={{overflow: 'hidden', backgroundColor: theme.palette.secondary.main, borderRadius: 4, minWidth: 150}} dense>
                        {subMenu?.map((project) => (
                            <ListItemButton key={project.name} {...project} href={`${project.href}`}>
                            <Typography textAlign="center">{project.name}</Typography>
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            }
        </div>
    )
}

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="sticky" style={{background: theme.palette.primary.main}}>
        <Container maxWidth={'xl'}>
            <Toolbar disableGutters>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                Evan J
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page) => (
                    <ListItemButton key={page.href} {...page} href={`${page.href}`}>
                        <Typography textAlign="center">{page.name}</Typography>
                    </ListItemButton>
                ))}
                </Menu>
            </Box>
            
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                Evan J
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => <NavBarButton key={page.href} {...page} />)}
            </Box>
            </Toolbar>
        </Container>
    </AppBar>
  );
}
export default NavBar;