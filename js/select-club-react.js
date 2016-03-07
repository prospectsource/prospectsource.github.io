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
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com/');
    this.bindAsArray(firebaseRef.limitToLast(25), 'items');
  },

  onChange: function(e) {
    this.setState({aauClub: e.target.value});
  },
  
  usernameChange: function(e) {
    this.setState({username: e.target.value});
  },
  
  passwordChange: function(e) {
    this.setState({password: e.target.value});
  },

  
  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.username && this.state.username.trim().length !== 0) {
      this.firebaseRefs['prospects'].push({
        aauClub: this.state.aauClub,
        username: this.state.username, // "name:" changes the input attribute category
        password: this.state.password
      });
      this.setState({
        aauClub: '',
        username: '',
        password: ''
      });
    }
    this.state.aauClub = String.Empty;
    this.state.username = String.Empty;
    this.state.password = String.Empty;
  },
	

  

  render: function() {
    return (
      
      <section className="page">
       <form onSubmit={ this.handleSubmit }>
    	<div className="container">
    		<div className="row">
    			<div className="col-sm-4">
    				<div className="timeline-image1 background-blue">
    					<h2>1</h2>
    				</div>
    				<h5 className="timeline-heading1">SELECT CLUB</h5>
    			</div>
    			<div className="col-sm-4">
    				<div className="timeline-image2 background-gray">
    					<h2>2</h2>
    				</div>
    				<h5 className="timeline-heading2">GENERAL INFORMATION</h5>
    			</div>
    			<div className="col-sm-4">
    				<div className="timeline-image3 background-gray">
    					<h2>3</h2>
    				</div>
	    			<h5 className="timeline-heading3">BILLING</h5>
    			</div>
    		</div>
    		<div className="row">
    			<div className="col-sm-3">
    				<div id="aau-prospect" className="background-blue">
    					<h5>AAU PROSPECT</h5>
    				</div>
    			</div>
    			<div className="col-sm-9">
    				<label htmlFor="aau-club">Select Your AAU Club</label>
    				<select onChange={ this.usernameChange } id="aau-club" name="aau-club" className="form-control standalone" type="select" label="Select" placeholder="select">
      					<option value="Kingdom Hoops">Kingdom Hoops</option>
    					<option value="Rusty's Rascals">Rustys Rascals</option>
    					<option value="McCall MadMen">McCall MadMen</option>
    					<option value="Alex's Angels">Maschoff Monsters</option>
     				</select>
    			</div>
    			<div className="col-sm-offset-3 col-sm-9">
    				<div>CREATE USERNAME <input onChange={ this.usernameChange } value={ this.state.username } /></div>
          			<div>CREATE PASSWORD <input onChange={ this.onChange12 } value={ this.state.password } /></div>
    			</div>
    		</div>
    	</div>
    	
          
          <button onClick={this.handleButtonClick} className="btn btn-default btn-large center-button">NEXT</button>
        </form>
      </section>
    );
  }
});

ReactDOM.render(<TodoApp3 />, document.getElementById('selectClub'));