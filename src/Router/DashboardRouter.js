import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { AboutScreen } from '../components/about/AboutScreen'
import { ContactScreen } from '../components/contact/ContactScreen'
import { SkillsScreen } from '../components/skills/SkillsScreen'
import { WorkScreen } from '../components/work/WorkScreen'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { changeIndexByScroll } from '../actions/scrollIndex'
import { Sidebar } from '../components/ui/Sidebar'
import { FavSideBar } from '../components/ui/FavSideBar'
import { setReloadingScreen } from '../actions/letter'
import { HomeScreen } from '../components/home/HomeScreen'


export const DashboardRouter = () => {
		const loc = useLocation();
		const { scroll, sideB } = useSelector(state => state)
		const route = scroll.route;
		const dispatch = useDispatch();
		const handleScrollEvent = (e) => {

			dispatch(changeIndexByScroll(e, loc.pathname));
		}
		
		const show = useRef(sideB.show);
		const nav = useRef(useNavigate());
		useEffect(() => {
			!show.current&&nav.current(`${route}`,{replace:true}&&dispatch(setReloadingScreen(true)))
		}, [route, dispatch])

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
						<Sidebar />
						<div className="container">
							<Routes>
								<Route path="home" element={<HomeScreen  />} />
								<Route path="about" element={<AboutScreen  />} />
								<Route path="myskills" element={<SkillsScreen />} />
								<Route path="work" element={<WorkScreen />} />
								<Route path="contact" element={<ContactScreen />} />
								<Route path="/" element={<HomeScreen />} />
							</Routes>
						</div>
						<FavSideBar />
					</ReactScrollWheelHandler>
				</> 
		)
}
