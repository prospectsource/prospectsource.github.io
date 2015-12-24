/** @jsx React.DOM */
var TodoList3 = React.createClass({
  render: function() {
    var _this = this;
    var createPlayer = function(player, index) {
      return (
        <li key={ index }>
          { players.name /** change the property after item." " to display the property you want */ } 
          <span onClick={ _this.props.removePlayer.bind(null, item['.key']) }
                style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}>
            X
          </span>
        </li>
      );
    };
    return <ul>{ this.props.players.map(createItem) }</ul>;
  }
});

var TodoApp3 = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      players: [],
      name: '',
      school: ''
    };
  },

  componentWillMount: function() {
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com/players/');
    this.bindAsArray(firebaseRef.limitToLast(25), 'players');
  },

  onChange: function(e) {
    this.setState({name: e.target.value});
  },

  removeItem: function(key) {
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com/players/');
    firebaseRef.child(key).remove();
  },

  handleSubmit: function(e) {
    e.preventDefault();  /** this keeps the button from doing what it usually does */
    if (this.state.player && this.state.player.trim().length !== 0) {
      this.firebaseRefs['players'].push({
        name: this.state.name,
        school: this.state.name
         /** you can change the category name here from "text" to "name" */
      });
      this.setState({
        name: '', 
        school: '' /** you can change the category name here from "text" to "name" */
      });
    }
  },

  render: function() {
    return (
      <div>
        <TodoList3 items={ this.state.players } removeItem={ this.removePlayer } />
        <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.onChange } value={ this.state.name } />
          <button>{ 'Add #' + (this.state.players.length + 1) }</button>
        </form>
      </div>
    );
  }
});

React.render(<TodoApp3 />, document.getElementById('todoApp3'));