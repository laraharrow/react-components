// var Apple = () => (
//     	<li>Apple</li>
// );


// var Orange = () => (
//     	<li>Orange</li>
// );


var GroceryListItem = (props) => (
    <li>props.groceryTodo[0]</li>
    <li>props.groceryTodo[1]</li>
);

var App = () => (
  <div>
    <h2>groceryList</h2>
    <ul>
			<GroceryListItem groceryTodo={['Apple', 'Orange']}/>
    </ul>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));