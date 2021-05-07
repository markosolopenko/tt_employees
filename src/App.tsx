import { Route, Switch, Redirect } from 'react-router';
import { Routes } from './constants/routes';
import { Employees } from './pages/Employees/Employees';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={Routes.EMPLOYEES} component={Employees} />

        <Redirect to={Routes.EMPLOYEES} />
      </Switch>
    </div>
  );
}

export default App;
