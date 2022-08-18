import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import { Grid, Typography } from '@mui/material'
import theme from '../../../theme/theme'
import SaveJobCard from '../../molecules/SaveJobCard'
import axios from 'axios'
interface Job {
  id: number
  title: string
  logo: string
  companyName: string
  companyIcon: string
  location: string
  fullAddress: string
  time: string
  description: string
  aboutTheCompany: string
  saved: boolean
}
const useStyles = makeStyles({
  root: {
    paddingLeft: 45,
    paddingTop: 40,
  },
  section: {
    color: theme.palette.text.primary,
    width: '113px',
    height: '30px',
  },
  innerBox: {
    paddingTop: '20px',
  },
})
function SavedJobsMainContent() {
  const classes = useStyles()
  const [jobs, setJobs] = useState<Job[]>([])

  const fetchData = async () => {
    const res = await axios.get(`http://3.134.81.172:9006/jobs/`)
    let data: Job[] = res.data
    data = data.filter((job) => job.saved)
    setJobs(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <Box className={classes.root}>
        <Typography className={classes.section} variant="h3">
          Saved Jobs
        </Typography>
        <Box className={classes.innerBox}>
          <Grid container spacing={6} direction="column">
            {jobs.map((job) => {
              return (
                <Grid item key={job.id}>
                  <SaveJobCard
                    id={job.id}
                    companyName={job.companyName}
                    location={job.location}
                    logo={job.companyIcon}
                    timeElapsed={job.time}
                    title={job.title}
                    onClick={() => console.log(job.id)}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default SavedJobsMainContent
