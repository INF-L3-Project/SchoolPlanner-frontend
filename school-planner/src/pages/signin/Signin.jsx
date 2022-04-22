import React from 'react'
import Container from './container/ContainerSignin'
import Seo from '../../components/utils/seo/Seo'
import Base from "../Base"


const Signin = () => {
	return(
		<div>
			<Seo
				title="Connexion - SchoolPlanner"
				description="Connexion à School Planner"
			/>
			<Base>
				<Container />
			</Base>
		</div>
	)
}

export default Signin