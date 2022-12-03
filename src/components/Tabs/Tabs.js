import { Box, Tab } from "@mui/material"
import {TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"
export default function Tabs() {
    const [value, setValue] = useState('1')
    const handleChange=(event, newValue)=>{
        setValue(newValue)
    }
  return (
    <Box>
        <TabContext value={value}>
            <Box sx={{borderBottom:1, borderColor: 'divider'}}>
                <TabList aria-label="Tabs example" onChange={handleChange}
                textColor='secondary' indicatorColor="secondary" centered>
                    <Tab label='High School' value='1'/> 
                    <Tab label='University' value='2'/>
                </TabList>
            </Box>
            <TabPanel value='1'>
            <div className='starehe-details'>
              <h4>Starehe Boys' Centre and School</h4>
              <p>Start Date: 2nd Feb 2016</p>
              <p>End Date Date: 16th November 2016</p>
              <p>Certification: KCSE</p>
              <p>Grade: A-</p>
            </div>
            </TabPanel>
            <TabPanel value='2'>
            <div className='strath-details'>
            <h4>Strathmore University</h4>
            <p>Start Date: 4th July 2020</p>
            <p>End Date Date: 16th July 2024</p>
            <p>Certification: Working progress</p>
            <p>Grade: A-</p>
            </div>
            </TabPanel>
        </TabContext>
    </Box>
  )
}
// icon iconPosition