import React from "react"

import image from '../../../medias/images/not-found.png';

const ContainerError404 = () => {


	return (
		<div className="container-fluid d-drid text-center">
			<div className="d-flex justify-content-center pt-5">
				<img src={image} alt="error" height="400px"/>
			</div>
			<h2>
				Not Found
			</h2>
			<p>
				La page que vous souhaitez consulter n'existe pas
			</p>
		</div>
	);
};

export default ContainerError404