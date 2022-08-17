import axios from 'axios'

export const getJob = async (jobid: number) => {
  const jobs: any = await axios
    .get(`http://3.134.81.172:9006/jobs/${jobid}`)
   return jobs.data;
}
export const getSkills = async () => {
  const jobs: any = await axios
    .get(`http://3.134.81.172:9003/skills`)
  return jobs.data
   
}
export const getLocations = async () => {
  const jobs: any = await axios
    .get(`http://3.134.81.172:9001/location/`)
     return jobs.data
   
}
export const getJobs = async () => {
  const jobs: any = await axios
    .get(`http://3.134.81.172:9006/jobs/`)
   return jobs.data;
}

export const getLocationsById = async (jobid: number) => {
  const jobs: any = await axios
    .get(`http://3.134.81.172:9001/location/${jobid}`)
   return jobs.data;
   
}

export const getSkillsById = async (jobid: number) => {
  const jobs: any = await axios
    .get(`http://3.134.81.172:9003/skills/${jobid}`)
   return jobs.data;
   
}
