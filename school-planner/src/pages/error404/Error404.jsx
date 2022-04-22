import React from 'react'
import Container from './container/ContainerError404'
import Seo from '../../components/utils/seo/Seo'
import Base from "../Base"


const Error404 = () => {
	return(
		<div>
			<Seo
				title="Not Found - SchoolPlanner"
				description="Oooops erreur lors de la navigation dans SchoolPlanner"
			/>
			<Base>
				<Container />
			</Base>
		</div>
	)
}

export default Error404