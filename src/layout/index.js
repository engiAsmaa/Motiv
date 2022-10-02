import PropTypes from 'prop-types';
import React, { useState, useContext, createContext } from 'react';
import Header from './Header';
import SideNav from './SideNav';

const SearchContext = createContext('');
export const useSearchContext = () => useContext(SearchContext);
function Layout({ children }) {
  const [searchTxt, setSearchTxt] = useState('');

  return (
    <SearchContext.Provider value={searchTxt}>
      <div className="w-screen h-screen overflow-hidden">
        <Header setSearchTxt={setSearchTxt} />
        <div className="flex">
          <SideNav />
          <div className="sm:w-[85%] w-[90%]">{children}</div>
        </div>
      </div>
    </SearchContext.Provider>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
