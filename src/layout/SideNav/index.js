import { Link, useLocation } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import { links1, links2 } from '../../components/fakeData';

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
