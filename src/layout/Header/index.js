import { ReactComponent as Notification } from '../../images/layout/notification.svg';
import { ReactComponent as Search } from '../../images/layout/search.svg';
import userImg from '../../images/layout/user.png';
import logoImg from '../../images/layout/logo.png';

function Header() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white">
      <div className="w-[248px]">
        <img src={logoImg} alt="logo" className="w-[109px] h-8" />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex md:w-[358px] w-[220px] h-[46px] md:ml-[30px] ml-0 rounded-lg bg-light-gray py-3 px-[14px]">
          <Search className="mr-[22px]" />
          <input
            type="text"
            placeholder="Search by name"
            className="bg-light-gray w-36 md:w-auto outline-none placeholder:text-base placeholder:font-medium placeholder:text-dark-gray"
          />
        </div>
        <div className="flex justify-evenly items-center">
          <Notification className="md:mr-10 mr-5" />
          <img src={userImg} alt="user" className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
}

export default Header;
