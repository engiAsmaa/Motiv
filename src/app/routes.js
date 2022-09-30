import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import DotLoaderComponent from '../components/Loader';

const Cars = lazy(() => import('../pages/Cars'));
const Dashboard = lazy(() => import('../pages/Dashboard'));

function Routes() {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Suspense fallback={<DotLoaderComponent />}>
        <Switch location={location} key={location.pathname}>
          <Route path="/cars" component={Cars} />
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
}

export default Routes;
