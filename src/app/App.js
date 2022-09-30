import { BrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import Routes from './routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
