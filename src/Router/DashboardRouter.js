import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutScreen } from '../components/about/AboutScreen'
import { ContactScreen } from '../components/contact/ContactScreen'
import { SkillsScreen } from '../components/skills/SkillsScreen'
import { Navbar } from '../components/ui/Navbar'
import { WorkScreen } from '../components/work/WorkScreen'

export const DashboardRouter = () => {
    return (
        <>
          <Navbar/>
          <div className="container">
            <Routes>
              <Route path="about" element={<AboutScreen />} />
              <Route path="myskills" element={<SkillsScreen />} />
              <Route path="work" element={<WorkScreen />} />
              {/* <Route path="Blog" element={</>} /> */}
              <Route path="contact" element={<ContactScreen />} />
              <Route path="/" element={<AboutScreen />} />
            </Routes>
          </div>
        </>
    )
}
