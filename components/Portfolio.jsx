import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import CameraIcon from '@mui/icons-material/PhotoCamera'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { createTheme, ThemeProvider } from '@mui/material/styles'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const defaultTheme = createTheme()

const AlbumItem = ({ image }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '56.25%'
        }}
        image={image.src}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {image.alt}
        </Typography>
        <Typography>
          This is a media card. You can use this section to describe the
          content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  </Grid>
)

const Portfolio = () => {
  const images = [
    {
      src: '/banner7.jpg',
      alt: 'Wedding',
      link: '/portfolio/wedding'
    },
    {
      src: '/banner8.jpg',
      alt: 'Maternity',
      link: '/portfolio/maternity'
    },
    {
      src: '/banner6.jpg',
      alt: 'Family',
      link: '/portfolio/family'
    },
    {
      src: '/banner2.jpg',
      alt: 'Portrait',
      link: '/portfolio/portrait'
    }
  ]

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Your hero unit code */}
        {/* ... */}
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* Your hero unit */}
          <Grid container spacing={4}>
            {images.map((image, index) => (
              <AlbumItem key={index} image={image} />
            ))}
          </Grid>
        </Container>
      </main>
      {/* Your footer code */}
      {/* ... */}
    </ThemeProvider>
  )
}

export default Portfolio
