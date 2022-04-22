import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import Navbar from "../components/baseComponents/navbar/Navbar"
import Footer from "../components/baseComponents/footer/Footer"
import style from '../css/base.module.css'


const Base = ({ children, backgroundColor }) => {
	const defaultBackgroundColor = backgroundColor ? backgroundColor:"#fff"

	

	return(
		<>
			<Navbar />
		
			<main className={style.content} style={{ backgroundColor: defaultBackgroundColor }}>
				{ children }
			</main>

			<Footer />

		</>
	)
}

export default Base