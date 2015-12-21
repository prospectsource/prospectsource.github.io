/** @jsx React.DOM */
var TodoList3 = React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(item, index) {
      return (
        <li key={ index }>
          { item.name /** change the property after item." " to display the property you want */ } 
          <span onClick={ _this.props.removeItem.bind(null, item['.key']) }
                style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}>
            X
          </span>
        </li>
      );
    };
    return <ul>{ this.props.items.map(createItem) }</ul>;
  }
});

var TodoApp3 = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      items: [],
      name: ''
    };
  },

  componentWillMount: function() {
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com/test/');
    this.bindAsArray(firebaseRef.limitToLast(25), 'test');
  },

  onChange: function(e) {
    this.setState({text: e.target.value});
  },

  removeItem: function(key) {
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com/test/');
    firebaseRef.child(key).remove();
  },

  handleSubmit: function(e) {
    e.preventDefault();  /** this keeps the button from doing what it usually does */
    if (this.state.text && this.state.text.trim().length !== 0) {
      this.firebaseRefs['test'].push({
        name: this.state.text,
        school: this.state.text
         /** you can change/add the property name here from "text" to "name" */
      });
      this.setState({
        name: '', 
        school: '' /** you can change/add the property name here from "text" to "name" */
      });
    }
  },

  render: function() {
    return (
      <div>
        <TodoList3 items={ this.state.items } removeItem={ this.removeItem } />
        <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.onChange } value={ this.state.name } /><br>
          <input onChange={ this.onChange } value={ this.state.school } />
          <button>{ 'Add #' + (this.state.items.length + 1) }</button>
        </form>
      </div>
    );
  }
});

React.render(<TodoApp3 />, document.getElementById('todoApp3'));