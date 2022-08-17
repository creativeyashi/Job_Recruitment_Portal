/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line eslint-comments/no-duplicate-disable
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-undef */

import { Box, Grid, Typography } from '@mui/material'
import logo from '../../../assets/icons/logo2.svg'
import Icon from '../../atoms/Icon'
import StepperComponent from '../../molecules/stepper'
import SingleAutoComplete from '../../molecules/SingleInputAutoField'
import Button from '../../atoms/Button'
import theme from '../../../theme/theme'
import stayIcon from '../../../assets/image/Stay.png'
import AirQualityIndex from '../../molecules/AQI'
import { makeStyles } from '@mui/styles'
import { url } from "../../../dbServer";
import axios from "axios";
import AutoComplete from '../../molecules/MultipleInputAutoField'
import jobLocationIcon from '../../../assets/image/Work.png'
import React, { ReactElement, useEffect } from "react";
import skillIcon from '../../../assets/image/Skills.png'
import { useNavigate } from "react-router-dom";
import { getLocations } from '../../../services/services'


const steps = [
  <Typography variant="subtitle1">Your Location</Typography>,
  <Typography variant="subtitle2">Job Location</Typography>,
  <Typography variant="subtitle2">Your Skills</Typography>,
]
const currentLocation = ['E Marredpally, Secunderabad,Hyderabad']

const useStyles = makeStyles({
  text: {
    wordSpacing: '2px',
    letterSpacing: '.4px',
    color: '#373C38',
    font: 'Montserrat',
    width: '56rem',
  },
  icon: {
    marginTop: '10px',
  },
  title: {
    marginTop: '80px',
    marginRight: '20px',
  },
  activebutton: {
    borderRadius: '8px',
    border: '1px solid #30A193',
    width: '140px',
    height: '46px',
    marginRight: '12px',
  },
  unablebutton: {
    borderRadius: '8px',
    backgroundColor: '#30A193',
    width: '140px',
    height: '46px',
  },
  roottitle: {
    marginTop: '64px',
    width: '120%',
  },
  svg: {
    background: 'linear-gradient(155.94deg, #EFFEFF 6.2%, #E9FFF4 52.61%)',
    height: '102vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttoncontainer: {
    marginTop: '36px',
    display: 'flex',
    flexDirection: 'row',
  },
  autoSuggestion:{
    marginTop: '64px'
  },
  aqititle: {
    marginTop: '30px',
  },
  root: {
    padding: '8vh 36vh 4vh 20vh',
  },
  skipbutton: {
    marginTop: '80px',
  },
  userlocation: {
    marginTop: '40px',
  },
  aqipos:{
    display: "flex", alignItems: "center"
  },
  aqivalue:{
    marginLeft: "32px" ,color:"#FF725E"
  },
  buttoncolor:{
    color:"#4ABAAD"
  },
  singleaqi:{
    marginTop: "30px"
  },
  hovercolor:{
    borderBottom: `2px solid #4ABAAD`
  }
})

const LandingPage: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0)
  const [userLocation, setUserLocation] = React.useState<string | null>()

  const [jobLocation, setJobLocation] = React.useState<any[]>();
  const [states, setState] = React.useState([]);

  const [skills, setSkills] = React.useState<any[]>();
  const [position, setPosition] = React.useState([]);

  useEffect(() => {
    const getstates = async () => {
     const res = await axios.get(`http://3.134.81.172:9001/location/`);
     // const res = await axios.get(`${url}userLocation`);
     // const res = await getLocations();
      console.log("data res");
      console.log(res);
     
      const location = await res.data;
      setState(location);
      console.log("inside landing page");
      
    
    };
    const getSkills = async () => {
      const res = await axios.get(`http://3.134.81.172:9003/skills`);
      const location = await res.data;
      console.log("Inside skill");
      setPosition(location);
      console.log(location);
    };
    getstates();
    getSkills();
    
  }, []);

  let aqi: JSX.Element | ReactElement<any, any> | JSX.Element[] | null = null,
    autocomplete: JSX.Element | null = null
    const navigate = useNavigate(); 
    let set=0;
    const handleNext = () => {
    if(set=== 1){
    if (activeStep === 2) {
      navigate("/findJobs");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  }
  const handleSkip = () => {
    if (activeStep === 2) {
      navigate("/findJobs");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const classes = useStyles()
  if (activeStep === 0) {
    autocomplete = (
      <>
        <SingleAutoComplete
          onChange={setUserLocation}
          options={currentLocation}
        />
      </>
    )

    if (!userLocation) {
      aqi = (
        <>
          <Typography className={classes.icon}>
            <Icon source={stayIcon} />
          </Typography>

          <Typography className={classes.aqititle} variant="h2">
            &nbsp;&nbsp;&nbsp;Enter Location to know <br />
            Time Air Quality Index (AQI)
          </Typography>
        </>
      )
    } else {
      if (userLocation) {
        set=1;
        aqi = (
          <>
            <AirQualityIndex AQIIndex={894} />
            <Typography className={classes.userlocation} variant="h2">
              Real Time Air Quality Index(AQI)
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; in this location
            </Typography>
          </>
        )
      }
    }
  }
  else if (activeStep === 1) {
    console.log("downnnn")
    console.log(states)
    autocomplete = (
      <>
        <AutoComplete
          title="Where do you want to work?"
          placeholder="Enter your job location"
          option={states}
          setValue={setJobLocation}
        />
      </>
    );

    if (jobLocation?.length === 0) {
      set=0;
      aqi = (
        <>
          <Icon source={jobLocationIcon} />

          <Typography className={classes.userlocation} variant="h2">
          &nbsp; &nbsp;
          Enter Location to know 
            <br/> 
            Time Air Quality Index (AQI)
          </Typography>
        </>
      );
    } else {
      if (jobLocation) {
        set=1;
        aqi = <> {jobLocation.map((value) => {
          return (
            
            <Box className={classes.aqipos}>
              <AirQualityIndex AQIIndex={value.aqi} />
              <Typography variant="h2" className={classes.aqivalue}>
                {value.name}
              </Typography>
            </Box>
            
          );
        })}
       <Typography className={classes.userlocation} variant="h2">
              Real Time Air Quality Index(AQI) 
              <br/>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              in this location
        </Typography>
        </>
        
      }
    }
  }
  else if (activeStep === 2) {
    
    autocomplete = (
      <>
        <AutoComplete
        key={'1'}
          title="What do you want to do?"
          placeholder="Enter your skills"
          option={position}
          setValue={setSkills}
        />
      </>
    );

    if (skills?.length === 0 || skills === undefined) {
      set=0;
      aqi = (
        <>
          <Icon source={skillIcon} />

          <Typography className={classes.userlocation} variant="h2">
            Enter your Skills to know how many 
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;jobs are in this Location
          </Typography>
        </>
      );
    } else {
      if (skills && skills?.length > 0) {
        set=1;
        aqi = (
          <>
            <AirQualityIndex AQIIndex={1500} />
            <Typography variant="h2" className={classes.singleaqi}>
              {"Jobs found in Hyderabad & Mumbai."}
            </Typography>
          </>
        );
      }
    }
  } 
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box className={classes.root}>
              <Icon source={logo} />
              <Box className={classes.roottitle}>
                <StepperComponent active={activeStep} steps={steps} />
              </Box>
              <Box className={classes.title}>
                <Typography variant="h1" className={classes.text}>
                  More than 2000 people are using <br /> Green Commute
                </Typography>
              </Box>
              <Box className={classes.autoSuggestion}>
                {autocomplete ? autocomplete : null}
              </Box>
              <Box className={classes.buttoncontainer}>
                {activeStep !== 0 ? (
                  <Button
                    variant="outlined"
                    className={classes.activebutton}
                    data-testid="handleBackStepper"
                    onClick={handleBack}
                  >
                    <Typography variant="body1">Back</Typography>
                  </Button>
                ) : null}
                <Button
                  variant="contained"
                  className={classes.unablebutton}
                  data-testid="handleNextStepper"
                  onClick={handleNext}
                >
                  <Typography variant="body1">Next</Typography>
                </Button>
              </Box>
              <Box className={classes.skipbutton}>
                <Button className={classes.buttoncolor}
                 onClick={handleSkip}>
                  <Typography
                    variant="subtitle1"
                   className={classes.hovercolor}
                  >
                    Skip
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box data-testid="svgBackground" className={classes.svg}>
              {aqi}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default LandingPage