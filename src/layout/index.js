import PropTypes from 'prop-types';
import Header from './Header';
import SideNav from './SideNav';

function Layout({ children }) {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Header />
      <div className="flex">
        <SideNav />
        <div className="w-[85%]">{children}</div>
      </div>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
