import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { AboutScreen } from '../components/about/AboutScreen'
import { ContactScreen } from '../components/contact/ContactScreen'
import { SkillsScreen } from '../components/skills/SkillsScreen'
import { Navbar } from '../components/ui/Navbar'
import { WorkScreen } from '../components/work/WorkScreen'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { changeIndexByScroll } from '../actions/scrollIndex'

export const DashboardRouter = () => {
		const loc = useLocation();
		const nav = useNavigate()
		const { route } = useSelector(state => state.scroll)
		const dispatch = useDispatch();
		const handleScrollEvent = (e) => {
			dispatch(changeIndexByScroll(e, loc.pathname));
		}

		useEffect(() => {
			nav(`${route}`)
		}, [route])

		return (
				<>
					<ReactScrollWheelHandler
						upHandler={handleScrollEvent}
						downHandler={handleScrollEvent}
						timeout= {400}
						style={{
							width: "100%",
							height: "100vh"
						}}
						> 
						<Navbar hide/>
						<div className="container">
							<Routes>
								<Route path="about" element={<AboutScreen  />} />
								<Route path="myskills" element={<SkillsScreen />} />
								<Route path="work" element={<WorkScreen />} />
								{/* <Route path="Blog" element={</>} /> */}
								<Route path="contact" element={<ContactScreen />} />
								<Route path="/" element={<AboutScreen />} />
							</Routes>
						</div>
        	</ReactScrollWheelHandler>
				</> 
		)
}
