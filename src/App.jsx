import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './routes';
import ResponsiveAppBar from './components/navigation/AppBar';
import Home from './pages/Home/Home';
import Locations from './pages/Locations/Locations';
import Enterprise from './pages/Enterprise/Enterprise';
import Solutions from './pages/Solutions/Solutions';
import Yaba from './pages/Locations/components/Yaba';
import VictoriaIsland from './pages/Locations/components/VictoriaIsland';

function App() {
  return (
    <Routes>
      <Route element={<ResponsiveAppBar />}>
        <Route index element={<Home />} />
        <Route path={AppRoutes.locations.path}>
          <Route index element={<Locations />} />
          <Route
            path={AppRoutes.locations.children.yaba.path}
            element={<Yaba />}
          />
          <Route
            path={AppRoutes.locations.children.victoriaIsland.path}
            element={<VictoriaIsland />}
          />
        </Route>
        <Route
          exact
          path={AppRoutes.enterprise.path}
          element={<Enterprise />}
        />
        <Route exact path={AppRoutes.solutions.path} element={<Solutions />} />
      </Route>
    </Routes>
  );
}

export default App;
