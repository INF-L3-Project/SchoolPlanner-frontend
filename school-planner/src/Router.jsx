import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './pages/home/Home'
import Signin from './pages/signin/Signin'
import Signup from './pages/signup/Signup'
import Error404 from './pages/error404/Error404'



const Router = () => {

	return(
		<Routes>

			<Route path="/" >
				<Route index element={<Home />} />

				<Route path="sign_in" element={<Signin />} />
				<Route  path="sign_up" element={<Signup />} />

				<Route  path="*" element={<Error404 />} />
			</Route>

		</Routes>
	)
}

export default Router