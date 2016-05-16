import React from 'react';
import Parent from './components/Parent.jsx';
import {Map,List} from 'immutable';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  render() {
    const products = List([
      Map({text:"A", price: 120}),
      Map({text:"D", price: 130}),
      Map({text:"B", price: 150}),
      Map({text:"C", price: 360})
    ]);
    //var products = [{text:"A", price: 120},{text:"B", price: 150}, {text:"C", price: 360}, {text:"D", price: 130}];
    return <div><Parent data={products}/></div>;
    }
  }
  
  
  export default App;
