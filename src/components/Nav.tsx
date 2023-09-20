import Image from 'next/image'
import Link from 'next/link'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

const Nav = () => {
  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link href='/'>
                <Image src="/svg/Logo.svg" alt="logo" width={200} height={85} />
              </Link>
            </Typography>
            <Button color="inherit" className="font-bold norwester-font">
              Search
            </Button>
            <Button color="inherit" className="font-bold norwester-font">
              Login
            </Button>
            <Button color="inherit" className="font-bold norwester-font">
              En
            </Button>
            <IconButton className="ml-[-30px]" color="inherit">
              <img src="/svg/ArrowDown.svg" alt="Down Arrow" width={24} height={24} />
            </IconButton>
            <IconButton color="inherit">
              <img className="ml-3" src="/svg/Menu.svg" alt="Menu" width={24} height={24} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  )
}

export default Nav
