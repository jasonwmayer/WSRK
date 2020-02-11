import React from 'react';
import LoadPlanner from './containers/LoadPlanner/LoadPlanner';
// import ApiTest from './components/ApiTest/ApiTest';
import AppView from './containers/AppView/AppView';

import 'typeface-roboto';

const App = () => {
  return (
    <div> 
      {/* <ApiTest /> */}
      <AppView />
      <LoadPlanner />
    </div>
  );
}

export default App;
