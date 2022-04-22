import React from 'react'
import Container from './container/ContainerHome'
import Seo from '../../components/utils/seo/Seo'
import Base from "../Base"


const Home = () => {
	return(
		<div>
			<Seo
				title="Accueil - SchoolPlanner"
				description="Bienvenue dans SchoolPlanner, la plateforme conçu pour gérer facilement vos emplois de temps académique"
			/>
			<Base>
				<Container />
			</Base>
		</div>
	)
}

export default Home