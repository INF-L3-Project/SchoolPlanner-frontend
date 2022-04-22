import React from 'react'
import Container from './container/ContainerSignup'
import Seo from '../../components/utils/seo/Seo'
import Base from "../Base"


const SignupClient = () => {
	return(
		<div>
			<Seo
				title="Inscription - SchoolPlanner"
				description="Créez votre compte sur SchoolPlanner afin de gérer des emplois de temps dans votre établissement"
			/>
			<Base>
				<Container />
			</Base>
		</div>
	)
}

export default SignupClient