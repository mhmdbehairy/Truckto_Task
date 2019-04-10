import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from './Components/Form';
import Receipt from './Components/Receipt';
import { Provider } from "react-redux";
import store from './store';


function App() {
  return (
    <Provider store={store}>
      {/* <Form />
      <Receipt /> */}
      <Router>
        <div>
          <Route path="/" exact component={Form} />
          <Route path="/form" exact component={Form} />
          <Route path="/receipt" component={Receipt} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
