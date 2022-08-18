import { Card, Typography, Grid } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import theme, { EXTRA_COLORS } from '../../../theme/theme'
import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import Metro from '../../../assets/icons/metro.svg'
import Bike from '../../../assets/icons/bike.svg'
import Car from '../../../assets/icons/cab.svg'
import Bus from '../../..//assets/icons/bus.svg'
import { JobContext } from '../../utils/context'
import { ROUTES } from '../../utils/constant'
export type CardProps = {
  id: number
  companyName: string
  location: string
  fullAddress: string
  time: string
  companyIcon: string
  title: string
  onClick: () => void
}

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    borderRadius: '12px',
    height: '280px',
    width: '360px',
    padding: '16px 16px 16px 16px',
    cursor: 'pointer',
    backgroundColor: `${EXTRA_COLORS.shade['700']} !important`,
  },
  iconBox: {
    width: '20%',
    height: '100%',
  },
  icon: {
    position: 'static',
    width: '45px',
    height: '45px',
    marginLeft: '8px',
    marginTop: '8px',
  },
  contentBox: {
    width: '60%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  threeDot: {
    float: 'right',
  },
  innerBox: {
    marginTop: '25px',
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '24px',
  },
  companyName: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    color: EXTRA_COLORS.accent[200],
  },
  location: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    color: theme.palette.text.secondary,
  },
  time: {
    marginLeft: '100px',
  },
  vehicleTab: {
    marginTop: '12px',
  },
  route: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '500',
    color: theme.palette.text.secondary,
  },
  routeGrid: {
    marginTop: '45px',
  },
  typo: {
    float: 'right',
    paddingTop: '205px',
    color: theme.palette.text.secondary,
  },
})

const FindJobsCard: React.FC<CardProps> = (props) => {
  const {
    id,
    companyName,
    location,
    time,
    fullAddress,
    title,
    companyIcon,
    onClick,
  } = props
  const cardContext = useContext(JobContext)
  const styles = useStyles()
  const routes = [Bike, Bus, Car, Metro]
  return (
    <>
      <Card
        className={styles.root}
        onClick={() => {
          cardContext.setCardId(id)
          onClick()
        }}
      >
        <Grid container>
          <Grid item container direction="column" xs={8}>
            <Grid item>
              <Grid item className={styles.iconBox} xs={10}>
                <img className={styles.icon} src={companyIcon} alt={'logo'} />
              </Grid>
            </Grid>
            <Grid item className={styles.innerBox}>
              <Grid container direction="column" rowGap="4px">
                <Grid item>
                  <Typography
                    data-testid="title"
                    variant="subtitle1"
                    className={styles.title}
                  >
                    {title}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    data-testid="company"
                    variant="caption2"
                    className={styles.companyName}
                  >
                    {companyName}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    data-testid="address"
                    variant="caption2"
                    className={styles.location}
                  >
                    {fullAddress}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    data-testid="address"
                    variant="caption2"
                    className={styles.location}
                  >
                    {location}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={styles.routeGrid}>
              <Typography variant="caption2" className={styles.route}>
                {ROUTES}
              </Typography>
            </Grid>

            <Grid item className={styles.vehicleTab}>
              <Grid container columnGap="20px" spacing={2}>
                {routes.map((route, id) => {
                  return (
                    <Grid item xs={1} key={id}>
                      <img src={route} alt="rote-icon" />
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" xs={4}>
            <Grid item>
              <MoreHorizIcon className={styles.threeDot} />
            </Grid>
            <Grid item>
              <Typography variant="caption2" className={styles.typo}>
                {time}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default FindJobsCard
