var CoachBilling = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      items: [],
      text: ''
    };
  },

  componentWillMount: function() {
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com');
    this.bindAsArray(firebaseRef.limitToLast(25), 'prospects');
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
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com');
    firebaseRef.child(key).remove();
  },

  handleButtonClick: function(event) {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(coachConfirm).offset().top - 100
    }, 800);
  },

  render: function() {
    return (
      
      <section className="page">
       	<form onSubmit={ this.handleSubmit }>
    		<div className="container">
    			<div className="row">
    				<div className="col-sm-4">
    					<div className="timeline-image1 background-gray">
    						<h2>1</h2>
    					</div>
    					<h5 className="timeline-heading1">Create Account</h5>
    				</div>
    				<div className="col-sm-4">
    					<div className="timeline-image2 background-gray">
    						<h2>2</h2>
    					</div>
    					<h5 className="timeline-heading2">GENERAL INFORMATION</h5>
    				</div>
    				<div className="col-sm-4">
    					<div className="timeline-image3 background-blue">
    						<h2>3</h2>
    					</div>
	    				<h5 className="timeline-heading3">BILLING</h5>
    				</div>
    			</div>
    			<div className="row">
    				<div className="col-md-offset-1 col-sm-5 input-box">
    					<div className="input-container cc-info">
    						<h3>CC Information</h3>
    						<div>CC Number<input onChange={this.handleUserInput} value={ this.state.ccNumber } /></div>
          					<div>Security Code<input onChange={this.handleUserInput} value={ this.state.ccCode } /></div>
          					<div>Expiration <input onChange={this.handleUserInput} value={ this.state.ccExpiration } /></div>
          					<div>Name On Card<input onChange={this.handleUserInput} value={ this.state.ccName } /></div>
    					</div>
    				</div>
    				<div className="col-sm-5 input-box">
    					<div className="input-container cc-info">
    						<h3>Billing Address</h3>
    						<div>Street<input onChange={this.handleUserInput} value={ this.state.billingStreet } /></div>
          					<div>City<input onChange={this.handleUserInput} value={ this.state.billingCity } /></div>
          					<div>State <input onChange={this.handleUserInput} value={ this.state.billingState } /></div>
          					<div>Zip<input onChange={this.handleUserInput} value={ this.state.billingZip } /></div>
    					</div>
    				</div>
    			</div>
    	  	</div>
          	<a onClick={this.handleButtonClick} className="btn btn-default btn-large center-button">Finish</a>
    	</form>
    </section>
    );
  }
});

ReactDOM.render(<CoachBilling />, document.getElementById('coachBilling'));