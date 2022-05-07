import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Teachers from './pages/Teachers';
import UEs from './pages/UEs';
import Classrooms from './pages/Classrooms';
import Courses from './pages/Courses';
import Levels from './pages/Levels';
import Classes from './pages/Classes';
import TimeTable from './pages/TimeTable';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Branchs from './pages/Branchs';
import DashboardApp from './pages/DashboardApp';
import NewPassword from './pages/NewPassword';
import ResetPassword from './pages/ResetPassword';

// ----------------------------------------------------------------------

export default function Router() {
	return useRoutes([
		{
			path: '/dashboard',
			element: <DashboardLayout />,
			children: [
				{ path: 'app', element: <DashboardApp /> },
				{ path: 'ues', element: <UEs /> },
				{ path: 'branchs', element: <Branchs /> },
				{ path: 'teachers', element: <Teachers /> },
				{ path: 'classrooms', element: <Classrooms /> },
				{ path: 'courses', element: <Courses /> },
				{ path: 'levels', element: <Levels /> },
				{ path: 'classes', element: <Classes /> },
				{ path: 'timetable', element: <TimeTable /> },
			],
		},
		{
			path: '/',
			element: <LogoOnlyLayout />,
			children: [
				{ path: '/', element: <Navigate to="/dashboard/app" /> },
				{ path: 'login', element: <Login /> },
				{ path: 'register', element: <Register /> },
				{ path: '404', element: <NotFound /> },
				{ path: '*', element: <Navigate to="/404" /> },

				{ path: 'password/reset', element: <ResetPassword /> },
				{ path: 'password/new', element: <NewPassword /> },
			],
		},
		{ path: '*', element: <Navigate to="/404" replace /> },
	]);
}
