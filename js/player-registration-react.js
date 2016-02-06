/** @jsx React.DOM */


var TodoList3 = React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(item, index) {
      return (
        <li key={ index }>
          <div>Name: { item.name /**this ".name" changes the attribute displayed in the todo list */ }</div>
          <div>Position: { item.position }</div>
          <div>Height: { item.height }</div>
          <div><span onClick={ _this.props.removeItem.bind(null, item['.key']) }
                style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}>
                  Delete Player
          	</span>
          </div>
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
      text: ''
    };
  },

  componentWillMount: function() {
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com/players/');
    this.bindAsArray(firebaseRef.limitToLast(25), 'items');
  },

  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  
  onChange2: function(e) {
    this.setState({text2: e.target.value});
  },
  
  onChange3: function(e) {
    this.setState({text3: e.target.value});
  },

  removeItem: function(key) {
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com/players/');
    firebaseRef.child(key).remove();
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.text && this.state.text.trim().length !== 0) {
      this.firebaseRefs['items'].push({
        name: this.state.text,
        position: this.state.text2, // "name:" changes the input attribute category
        height: this.state.text3
      });
      this.setState({
        name: '',
        position: '',
        height: ''
      });
    }
    this.state.text = String.Empty;
    this.state.text2 = String.Empty;
    this.state.text3 = String.Empty;
  },

  render: function() {
    return (
      
      <section id="data-collection">
    	<div className="container">
    		<div className="row">
    			<div className="col-xs-12">
    				<div className="header text-center">
    					<h2>Prospect Registration</h2>
    				</div>
    			</div>
    		</div>
    		<div className="row">
    			<div className="col-sm-3">
    				<div id="aau-prospect" className="background-blue">
    					<h5>AAU PROSPECT</h5>
    				</div>
    			</div>
    			<div className="col-sm-9 receive">
    				<h5><b>RECEIVE:</b> EVALUATION / RECRUITING MANUAL / ACCESS TO PREMIUM SERVICES<em> - MONTHLY FEE: $5.00 (FIRST 6 MONTHS FREE)</em></h5>
    			</div>
    		</div>
    	</div>
    	
        <form className="text-center" onSubmit={ this.handleSubmit }>
          
          <button className="btn btn-default btn-large">Click Here To Register</button>
        </form>
      </section>
    );
  }
});

React.render(<TodoApp3 />, document.getElementById('playerRegistration'));