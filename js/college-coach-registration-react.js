/** @jsx React.DOM */

var CollegeCoachRegistration = React.createClass({
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

  handleButtonClick: function(event) {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(coachGenInfo).offset().top - 60
    }, 800);
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
    				<h5 className="timeline-heading1">CREATE ACCOUNT</h5>
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
    					<h5>College Coach</h5>
    				</div>
    			</div>
    			<div className="col-sm-9">
    				<label htmlFor="sel1">Select The College Where You Coach:</label>
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
    	
          
          <a onClick={this.handleButtonClick} className="btn btn-default btn-large center-button">NEXT</a>
        </form>
      </section>
    );
  }
});

ReactDOM.render(<CollegeCoachRegistration />, document.getElementById('collegeCoachRegistration'));