import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FindJobsCard from '../../molecules/JobCard'
import { makeStyles } from '@mui/styles'
import { EXTRA_COLORS } from '../../../theme/theme'
import Chips from '../../atoms/Chips/index'
import Button from '../../atoms/Button/index'

interface Job {
  id: number
  companyName: string
  location: string
  time: string
  fullAddress: string
  companyIcon: string
  title: string
}
const buttonStyle = {
  display: 'inline-block',
  padding: '0px 0px 10px 0px',
  textTransform: 'none',
  borderBottom: '1px solid #30A193',
  fontFamily: 'Montserrat',
  color: '#30A193',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '2px',
  marginTop: '13px',
  marginLeft: '13px',
}

const useStyles = makeStyles({
  jobsCard: {
    marginRight: '16px',
    marginBottom: '16px',
  },
  heading: {
    color: EXTRA_COLORS.text.primary,
    marginTop: '36px',
  },
  subHeading: {
    color: EXTRA_COLORS.text.secondary,
  },
  chipsGrid: {
    marginTop: '11px',
  },
  chips: {
    marginRight: '8px',
  },
  displayGrid: {
    marginTop: '15px',
  },
})

const heading = 'Recommended for you'
const subHeading = 'Based on your profile, skills and search history'
const chipsData = ['Past 24 hrs', 'Full time', 'Fresher']
const Index = (props: {
  jobs: Job[]
  showFilter: boolean
  setShowFilter: (arg0: boolean) => void
  distanceFilter: string[]
  onClearAll: () => void
  onCardClick: () => void
}) => {
  const classes = useStyles()

  return (
    <Grid>
      <Typography variant="h3" className={classes.heading}>
        {heading}
      </Typography>
      <Typography variant="body2" className={classes.subHeading}>
        {subHeading}
      </Typography>
      {props.showFilter && (
        <>
          <Grid container direction="row" className={classes.chipsGrid}>
            {props.distanceFilter.map((distance, index) => {
              return (
                <Box className={classes.chips} key={index}>
                  <Chips
                    label={distance}
                    variant="outlined"
                    onClick={() => console.log()}
                    onDelete={() => console.log()}
                    size="medium"
                  />
                </Box>
              )
            })}
            {chipsData.map((data, index) => {
              return (
                <Box key={index} className={classes.chips}>
                  <Chips
                    label={data}
                    variant="outlined"
                    onClick={() => console.log()}
                    onDelete={() => console.log()}
                    size="medium"
                  />
                </Box>
              )
            })}
            <Box>
              <Button
                style={buttonStyle}
                onClick={() => {
                  props.setShowFilter(false)
                  props.onClearAll()
                }}
              >
                Clear All
              </Button>
            </Box>
          </Grid>
          <Grid container direction="row" className={classes.chipsGrid}>
            <Box className={classes.chips}>
              <Chips
                label="Green Commute Routes"
                variant="outlined"
                onClick={() => console.log()}
                onDelete={() => console.log()}
                size="medium"
              />
            </Box>
          </Grid>
        </>
      )}
      <Grid
        item
        container
        rowSpacing={1}
        columnSpacing={1}
        className={classes.displayGrid}
        direction="row"
      >
        {props.jobs.map(
          (
            job: {
              id: number
              companyName: string
              fullAddress: string
              location: string
              time: string
              companyIcon: string
              title: string
            },
            index: React.Key | null | undefined
          ) => {
            return (
              <Grid key={index} className={classes.jobsCard}>
                <FindJobsCard
                  id={job.id}
                  companyName={job.companyName}
                  fullAddress={job.fullAddress}
                  location={job.location}
                  time={job.time}
                  companyIcon={job.companyIcon}
                  title={job.title}
                  onClick={props.onCardClick}
                />
              </Grid>
            )
          }
        )}
      </Grid>
    </Grid>
  )
}

export default Index
