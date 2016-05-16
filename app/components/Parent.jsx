import React from 'react';
import Child from './Child.jsx';
import ParentStyle from './Parent.scss';


class Parent extends React.Component {
  constructor(props) {
    super(props);
    const {data} = props;
    this.displayName = 'Parent';
    this.state= {total: 0, filter: '', items: data};
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
  }
  addTotal(price){
    this.setState({total: this.state.total + price});
  }
  onChange(e, products){
    console.log('*');
    console.log(products);
    console.log('*');
  }
  onValueChange(e){
    var value = e.target.value;
    this.setState({filter: value});
  }

  render() {

    var items = this.state.items;
    var filter = this.state.filter.trim().toLowerCase();
    
    if(filter.length > 0) {
      items = items.filter((e, index)=>{
        return e.text.toLowerCase().match(filter);
      });
    }
    
    items = items.map((e, index) => {
      return <Item key={index} price={e.get('price')} addTotal={e=>this.addTotal(e)}>{e.get('text')}</Item>;
    });

    return (
        <div>
          <h1>Products</h1>          
          <ul>{items}</ul>
          <div className="total"><div className="ib ib--hl">Total</div><div className="ib ib--hr">${this.state.total.toFixed(2)}</div></div>
        </div>);
  }
}

class Item extends React.Component {
  constructor(props) {
      super(props);

      this.displayName = 'Item';
      this.state={active: false};
  }

  handleClick(e) {
    
    var active = !this.state.active;      
    this.setState({active: active});
  
    this.props.addTotal( active? this.props.price : -this.props.price );
  }

  render() {
      return <li className={this.state.active?'active':''} onClick={e=>this.handleClick(e)}><div className="ib">{this.props.children}</div><div className="ib ib--hr">${this.props.price.toFixed(2)}</div></li>;
  }
}

export default Parent;