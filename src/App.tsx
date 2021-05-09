import { Route, Switch, Redirect } from 'react-router';
import { Routes } from './constants/routes';
import { Employees } from './pages/Employees/Employees';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={'/tt_employees'} component={Employees} />

        <Redirect to={'/tt_employees'} />
      </Switch>
    </div>
  );
}

export default App;
