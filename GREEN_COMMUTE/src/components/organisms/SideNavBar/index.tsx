import { Grid } from '@mui/material'
import React from 'react'

import { EXTRA_COLORS } from '../../../theme/theme'
import DashboardIcon from '@mui/icons-material/DashboardOutlined'
import FindJobsIcon from '@mui/icons-material/WorkOutlineOutlined'
import SavedJobsIcon from '@mui/icons-material/FavoriteBorderOutlined'
import PractiseTestIcon from '@mui/icons-material/DescriptionOutlined'
import NewsIcon from '@mui/icons-material/NewspaperOutlined'
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined'
import ContactIcon from '@mui/icons-material/LocalPhoneOutlined'
import SettingsIcon from '@mui/icons-material/Settings'

import {
  DASHBOARD,
  SETTINGS,
  CONTACT_US,
  NEED_HELP,
  FIND_JOBS,
  SAVED_JOBS,
  PRACTICE_TEST,
  NEWS_EVENTS,
} from '../../utils/constant'

import { makeStyles } from '@mui/styles'
import MenuButton from '../../molecules/MenuButton/index'
const classes = makeStyles(() => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: EXTRA_COLORS.neutralShade['700'],
    boxShadow: '0px2px8pxrgba(125,125,125,0.12)',
    border: 'none',
  },
  item: {
    width: '100%',
    height: '100%',
    marginTop: 40,
  },
}))

const SideNav: React.FC = () => {
  const styles = classes()
  const buttons = [
    {
      icon: <DashboardIcon className="hoveredIcon" />,
      label: DASHBOARD,
      path: 'dashboard',
    },
    {
      icon: <FindJobsIcon className="hoveredIcon" />,
      label: FIND_JOBS,
      path: 'findJobs',
    },
    {
      icon: <SavedJobsIcon className="hoveredIcon" />,
      label: SAVED_JOBS,
      path: 'savedJobCard',
    },
    {
      icon: <PractiseTestIcon className="hoveredIcon" />,
      label: PRACTICE_TEST,
      path: 'practiceTest',
    },
    {
      icon: <NewsIcon className="hoveredIcon" />,
      label: NEWS_EVENTS,
      path: 'newsEvents',
    },
    {
      icon: <HelpIcon className="hoveredIcon" />,
      label: NEED_HELP,
      path: 'needHelp',
    },
    {
      icon: <ContactIcon className="hoveredIcon" />,
      label: CONTACT_US,
      path: 'contactUs',
    },
    {
      icon: <SettingsIcon className="hoveredIcon" />,
      label: SETTINGS,
      path: 'settings',
    },
  ]

  return (
    <>
      <Grid container className={styles.root}>
        <Grid item className={styles.item} pl={5.25} mb={2}>
          {buttons.map((button) => {
            return (
              <MenuButton
                key={button.label}
                icon={button.icon}
                label={button.label}
                path={`/${button.path}`}
              />
            )
          })}
        </Grid>
      </Grid>
    </>
  )
}

export default SideNav
