import { Link } from 'react-router-dom';
import { ReactComponent as DashboardIcon } from '../../images/layout/dashboard.svg';
import { ReactComponent as CarsIcon } from '../../images/layout/car.svg';
import { ReactComponent as SettingsIcon } from '../../images/layout/setting.svg';
import { ReactComponent as LogOutIcon } from '../../images/layout/logOut.svg';

const links1 = [
  {
    icon: <DashboardIcon className="mr-2" />,
    title: 'Dashboard',
    route: '/',
  },
  {
    icon: <CarsIcon className="mr-2" />,
    title: 'Cars',
    route: '/cars',
  },
];
const links2 = [
  {
    icon: <SettingsIcon className="mr-2" />,
    title: 'Settings',
    route: '/',
  },
  {
    icon: <LogOutIcon className="mr-2" />,
    title: 'Log out',
    route: '/',
  },
];
function SideNav() {
  return (
    <div className="flex flex-col bg-white w-[248px] pt-[18px] justify-between h-[calc(100vh-80px)]">
      <div className="pl-6 ">
        {links1.map((item) => (
          <Link
            className="flex items-center max-w-[174px] py-2"
            to={item.route}
            key={item.title}
          >
            {item.icon}
            <p className="text-sm text-[#5F6165] font-medium">{item.title}</p>
          </Link>
        ))}
      </div>
      <div className="pl-6 flex flex-col pb-9">
        {links2.map((item) => (
          <Link
            className="flex items-center max-w-[174px] py-2"
            to={item.route}
            key={item.title}
          >
            {item.icon}
            <p className="text-sm text-[#5F6165] font-medium">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
