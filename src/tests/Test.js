import { Box, Tab } from "@mui/material"
import {TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"
export default function Test() {
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
                    <Tab label='Tab One' value='1'/> 
                    <Tab label='Tab Two' value='2'/>
                    <Tab label='Tab Three' value='3'/>
                </TabList>
            </Box>
            <TabPanel value='1'>Panel One</TabPanel>
            <TabPanel value='2'>Panel Two</TabPanel>
            <TabPanel value='3'>Panel Three</TabPanel>
        </TabContext>
    </Box>
  )
}
// icon iconPosition