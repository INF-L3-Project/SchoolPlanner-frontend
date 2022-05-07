import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
// components
import logo from '../media/logo.png';

// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
	top: 0,
	left: 0,
	lineHeight: 0,
	width: '100%',
	position: 'absolute',
	padding: theme.spacing(3, 3, 0),
	[theme.breakpoints.up('sm')]: {
		padding: theme.spacing(5, 5, 0),
	},
}));

// ----------------------------------------------------------------------

export default function LogoOnlyLayout() {
	return (
		<>
			<HeaderStyle>
				<img src={logo} width="100px" height="100px" />
			</HeaderStyle>
			<Outlet />
		</>
	);
}
