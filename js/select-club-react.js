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
    				<label for="sel1">Select Your Club</label>
    				<select id="sel1" className="form-control standalone" type="select" label="Select" placeholder="select">
      					<option value="Kingdom Hoops">Kingdom Hoops</option>
    					<option value="Rusty's Rascals">Rustys Rascals</option>
    					<option value="McCall MadMen">McCall MadMen</option>
    					<option value="Alex's Angels">Maschoff Monsters</option>
     				</select>
    			</div>
    			<div className="col-sm-offset-3 col-sm-9">
    				<div>CREATE USERNAME <input onChange={ this.onChange11 } value={ this.state.text11 } /></div>
          			<div>CREATE PASSWORD <input onChange={ this.onChange12 } value={ this.state.text12 } /></div>
    			</div>
    		</div>
    	</div>
    	
          
          <button className="btn btn-default btn-large center-button">NEXT</button>
        </form>
      </section>
    );
  }
});

React.render(<TodoApp3 />, document.getElementById('selectClub'));