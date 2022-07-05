import React, { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNewAnimation } from '../actions/letter';
import { ShakeTitle } from '../letters/ShakeTitle';

export const HomeScreen = () => {
	const title = ['Hi,', 'Im ', false,'drián Zúñiga', 'Computer engineer'];
	const nav = useNavigate();
	const dispatch = useDispatch();
	useLayoutEffect(() => {
		dispatch(setNewAnimation('animate__shakeY'));
	}, [dispatch])
	const handleGoContact = () => {
			nav('/contact')
	}
	return (
		<div className='homeContainer animate__animated'>
			<ShakeTitle title={[...title]} />
			<div className='descHm'><span>Full-Stack Developer / Mobile Developer</span></div>
			<button className='contactBtn' onClick={handleGoContact}>Keep in touch?</button>
		</div>
)}


// '#121212'
// '#0b0b0c'
// '#0e0e10'
// '#414344'
// '#272528'
// '#151316'