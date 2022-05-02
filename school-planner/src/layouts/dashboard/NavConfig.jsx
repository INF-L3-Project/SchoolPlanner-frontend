// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'UEs',
    path: '/dashboard/ues',
    icon: getIcon('eva:book-fill'),
  },
  {
    title: 'Filières',
    path: '/dashboard/branchs',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'Enseignants',
    path: '/dashboard/teachers',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Salles',
    path: '/dashboard/classrooms',
    icon: getIcon('eva:home-fill'),
  },
  {
    title: 'Cours',
    path: '/dashboard/courses',
    icon: getIcon('eva:book-open-fill'),
  },
  {
    title: 'Niveaux',
    path: '/dashboard/levels',
    icon: getIcon('eva:layers-fill'),
  },
  {
    title: 'Classes',
    path: '/dashboard/classes',
    icon: getIcon('eva:folder-add-fill'),
  },
  {
    title: 'Emplois de temps',
    path: '/dashboard/timetable',
    icon: getIcon('eva:calendar-fill'),
  },
];

export default navConfig;
