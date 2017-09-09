// make a stateless component into a class component
class GroceryListItem extends React.Component {
  
  constructor(props) {
    super(props); 
    
    this.state = {
      done: false
    }; 
    this.onListItemHover = this.onListItemHover.bind(this);
  }  
  
  onListItemHover() {
    this.setState({
      done: !this.state.done
    }, function () {console.log('On list item hover invoked!')});
  }
  
  render() {
    
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
      //textDecoration: this.state.done ? 'line-through' : 'none'
    };  
    
    return (
      <li style={style} onMouseEnter={this.onListItemHover}>{this.props.item}</li>  
    )
  } 
}


//create a second component to be rendered by component App
var GroceryList = (props) => (
  <ul>
    {props.list.map(item => 
      <GroceryListItem item={item}/>   
    )}
  </ul>  
)

// creat a component
var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList list={['avocado', 'cheese', 'milk']}/>  
  </div>
);

// render it to the DOM
ReactDOM.render(<App />, document.getElementById("app"));







