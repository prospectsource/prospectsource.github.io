/** @jsx React.DOM */
var TodoList1 = React.createClass({
  render: function() {
    var createItem = function(item, index) {
      return <li key={ index }>{item.text}</li>;
    };
    return <ul>{ this.props.items.map(createItem) }</ul>;
  }
});

var TodoApp1 = React.createClass({
  getInitialState: function() {
    return {items: [], text: ""};
  },

  onChange: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.text) {
      var nextItems = this.state.items.concat([{
        text: this.state.text
      }]);
      this.setState({
        items: nextItems,
        text: ""
      });
    }
  },

  render: function() {
    return (
      <div>
        <TodoList1 items={ this.state.items } />
      </div>
    );
  }
});

React.render(<TodoApp1 />, document.getElementById("todoApp1"));