import PropTypes from 'prop-types';
import { ReactComponent as Notification } from '../../images/layout/notification.svg';
import { ReactComponent as Search } from '../../images/layout/search.svg';
import userImg from '../../images/layout/user.png';
import logoImg from '../../images/layout/logo.png';

function Header({ setSearchTxt }) {
  return (
    <div className="flex justify-between items-center sm:px-6 px-3 py-4 bg-white">
      <div className="md:w-[248px] w-32">
        <img
          src={logoImg}
          alt="logo"
          className="sm:w-[109px] w-[88px] sm:h-8 h-6"
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex md:w-[358px] sm:w-[220px] w-[140px] sm:h-[46px] h-9 md:ml-[30px] ml-0 rounded-lg bg-light-gray py-3 sm:px-[14px] px-2">
          <Search className="sm:mr-[22px] mr-3 w-3 h-3 sm:w-auto sm:h-auto" />
          <input
            type="text"
            placeholder="Search by name"
            className="bg-light-gray sm:w-36 w-20 md:w-auto outline-none sm:placeholder:text-base placeholder:text-xs  placeholder:font-medium placeholder:text-dark-gray"
            onChange={(e) => setSearchTxt(e.target.value)}
          />
        </div>
        <div className="flex justify-evenly items-center">
          <Notification className="md:mr-10 mr-3 ml-3 sm:ml-0 sm:w-5 sm:h-6 w-3 h-4" />
          <img src={userImg} alt="user" className="sm:w-12 sm:h-12 h-7 w-7" />
        </div>
      </div>
    </div>
    // </SearchContext.Provider>
  );
}
Header.propTypes = {
  setSearchTxt: PropTypes.func.isRequired,
};
export default Header;
