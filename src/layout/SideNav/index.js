import { Link, useLocation } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
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
  const location = useLocation();
  return (
    <div className="flex  sm:pl-6 pl-2 flex-col bg-white sm:w-[248px] w-16 pt-[18px] justify-between h-[calc(100vh-80px)]">
      <div>
        {links1.map((item) => (
          <Link
            data-tip
            data-for={item.title}
            className={`flex items-center sm:justify-start justify-center sm:max-w-[174px] max-w-[40px] py-2 pl-2 rounded-md ${
              location.pathname === item.route && 'bg-semiLight-gray'
            }`}
            to={item.route}
            key={item.title}
          >
            {item.icon}
            <p className="text-sm sm:flex hidden text-semiDark-gray font-medium">
              {item.title}
            </p>
            <div className="sm:hidden flex">
              <ReactTooltip
                id={item.title}
                place="top"
                effect="solid"
                backgroundColor="#fff"
                textColor="#5F6165"
                border
                borderColor="#5F6165"
              >
                {item.title}
              </ReactTooltip>
            </div>
          </Link>
        ))}
      </div>
      <div className="pb-9">
        {links2.map((item) => (
          <Link
            data-tip
            data-for={item.title}
            className="flex items-center sm:justify-start justify-center py-2"
            to={item.route}
            key={item.title}
          >
            {item.icon}
            <p className="text-sm sm:flex hidden  text-semiDark-gray font-medium">
              {item.title}
            </p>
            <div className="sm:hidden flex">
              <ReactTooltip
                id={item.title}
                place="top"
                effect="solid"
                backgroundColor="#fff"
                textColor="#5F6165"
                border
                borderColor="#5F6165"
              >
                {item.title}
              </ReactTooltip>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
