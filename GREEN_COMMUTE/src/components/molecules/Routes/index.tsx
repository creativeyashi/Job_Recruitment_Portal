import React from 'react'
import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  Divider,
  Stack,
  Box,
  Button,
} from '@mui/material'
import theme from '../../../theme/theme'
import mapImage from '../../../assets/image/Map.png'
import Ola from '../../../assets/icons/OlaLogo.png'
import Uber from '../../../assets/icons/UberLogo.png'
import Rapido from '../../../assets/icons/RapidoLogo.png'
import scooty from '../../../assets/icons/bike.svg'
import {
  Train,
  DirectionsBus,
  TwoWheeler,
  DirectionsCar,
} from '@mui/icons-material'

const Routes: React.FC = () => {
  const [active, setActive] = React.useState('car')
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setActive(e.currentTarget.id)
    console.log(e.currentTarget.id)
  }

  const cabTime = {
    fontSize: '14px',
    color: theme.palette.text.secondary,
  }
  const cabDetailCard = {
    borderRadius: '0',
    height: '60px',
    width: '359px',
    justifyContent: 'space-between',
  }
  const adjustedLogoStyles = {
    width: '20px',
    height: '20px',
    margin: '10px',
  }

  const logoStyles = {
    width: '40px',
    height: '40px',
    paddingRight: '4px',
  }
  const bookNowButtonStyles = {
    fontSize: '12px',
    lineHeight: '16px',
    marginLeft: '90px',
    paddingY: '22px',
    marginRight: '8px',
    height: '16px',
  }

  const logoBoxStyles = {
    paddingRight: '3px',
    margin: '0',
  }

  const ETAStyles = {
    paddingRight: '0',
    paddingLeft: '0',
  }

  const cabDetailBoxStyles = {
    paddingTop: '8px',
    paddingBottom: '12px',
  }
  return (
    <div data-testid="vehicleTab">
      <Stack direction={'row'}>
        <Box>
          <IconButton
            onClick={handleClick}
            id={'bike'}
            data-testid="bikeIcon"
            disabled
          >
            <img src={scooty} alt="" color={active === 'bike' ? 'primary' : undefined} />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={handleClick} id={'bus'} data-testid="busIcon">
            <DirectionsBus color={active === 'bus' ? 'primary' : undefined} />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={handleClick} id={'car'} data-testid="carIcon">
            <DirectionsCar color={active === 'car' ? 'primary' : undefined} />
          </IconButton>
        </Box>
        <Box>
          <IconButton
            onClick={handleClick}
            id={'train'}
            data-testid="trainIcon"
            disabled
          >
            <Train color={active === 'train' ? 'primary' : undefined}></Train>
          </IconButton>
        </Box>
      </Stack>
      <Divider />
      <Typography paddingTop={'2%'} variant="body2" color="#373c38">
        {' '}
        Catch the blue line towards Raidurg
      </Typography>
      <List component={Stack} direction={'row'} style={{ paddingTop: '9px' }}>
        <ListItem style={ETAStyles}>
          <Typography style={cabTime}> ₹{'100'}</Typography>
        </ListItem>
        <ListItem style={{ ...ETAStyles, ...cabTime }}>
          <Typography style={cabTime}> {'25kms'}</Typography>
        </ListItem>
        <ListItem style={{ ...ETAStyles }}>
          <ListItemIcon>
            <Typography style={cabTime}>{'1hr 20mins'}</Typography>
          </ListItemIcon>
        </ListItem>
      </List>

      {active === 'bus' && (
        <Box data-testid="busTab" style={{ display: 'block' }}>
          <img src={mapImage} style={{ maxWidth: '100%' }} alt="Google-map" />
          <br />
          <Button variant="text">
            <Typography
              variant="caption"
              color="#30A193"
              style={{ float: 'left' }}
            >
              {' '}
              View in Google Maps
            </Typography>
          </Button>
        </Box>
      )}

      {active === 'car' && (
        <Box style={{ backgroundColor: 'white' }} data-testid="carTab">
          <Card style={{ marginBottom: '10px', ...cabDetailCard }}>
            <ListItem style={{ padding: '0' }}>
              <Box style={logoBoxStyles}>
                <img src={Ola} alt="Ola-logo" style={logoStyles} />
              </Box>
              <Box sx={cabDetailBoxStyles}>
                <Typography>Ola</Typography>
                <Typography variant="subtitle2" style={cabTime}>
                  {'Approximately ₹45 '}
                </Typography>
              </Box>
              <Box>
                <Button sx={bookNowButtonStyles}>Book Now</Button>
              </Box>
            </ListItem>
          </Card>

          <Card style={{ marginBottom: '10px', ...cabDetailCard }}>
            <ListItem style={{ padding: '0' }}>
              <Box style={logoBoxStyles}>
                <img
                  src={Uber}
                  alt="Uber-logo"
                  style={{
                    ...logoStyles,
                    ...adjustedLogoStyles,
                  }}
                />
              </Box>
              <Box style={cabDetailBoxStyles}>
                <Typography>Ola</Typography>
                <Typography variant="subtitle2" sx={cabTime}>
                  {'Approximately ₹45 '}
                </Typography>
              </Box>
              <Box>
                <Button sx={bookNowButtonStyles}>Book Now</Button>
              </Box>
            </ListItem>
          </Card>
          <Card sx={cabDetailCard}>
            <ListItem style={{ padding: '0px' }}>
              <Box style={logoBoxStyles}>
                <img
                  src={Rapido}
                  alt="Rapido-logo"
                  style={{
                    ...logoStyles,
                    ...adjustedLogoStyles,
                  }}
                />
              </Box>
              <Box sx={cabDetailBoxStyles}>
                <Typography>Ola</Typography>
                <Typography variant="subtitle2" sx={cabTime}>
                  {'Approximately ₹45 '}
                </Typography>
              </Box>
              <Box>
                <Button sx={bookNowButtonStyles}>Book Now</Button>
              </Box>
            </ListItem>
          </Card>
        </Box>
      )}
    </div>
  )
}

export default Routes
