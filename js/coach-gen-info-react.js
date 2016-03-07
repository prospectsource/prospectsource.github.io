var CoachGenInfo = React.createClass({
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

  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.text && this.state.text.trim().length !== 0) {
      this.firebaseRefs['prospects'].push({
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

  handleButtonClick: function(event) {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(collegeCoachesPlansFeatures).offset().top - 60
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
    					<h5 className="timeline-heading1">CREATE ACCOUNT</h5>
    				</div>
    				<div className="col-sm-4">
    					<div className="timeline-image2 background-blue">
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
    				<div className="col-md-offset-2 col-md-4 input-box">
    					<div className="input-container program-info">
    						<h4>Coach Information</h4>
    						<div>Name<input onChange={this.handleUserInput} value={ this.state.ccNumber } /></div>
          					<div>Position<input onChange={this.handleUserInput} value={ this.state.ccCode } /></div>
          					<div>Email<input onChange={this.handleUserInput} value={ this.state.ccExpiration } /></div>
          					<div>Phone Number<input onChange={this.handleUserInput} value={ this.state.ccName } /></div>
          					<div>Head Coach Email<input onChange={this.handleUserInput} value={ this.state.ccName } /></div>
          					<div>Head Coach Phone<input onChange={this.handleUserInput} value={ this.state.ccName } /></div>
    					</div>
    				</div>
    				<div className="col-md-4 input-box">
    					<div id="gender-info" className="input-container">
    						<h4>Coach Verification</h4>
    						<div>IN ORDER TO VERIFY YOUR EMAIL ADDRESS AS A
								COLLEGE COACH, PLEASE MAKE SURE THE EMAIL
								ADDRESS SEEN BELOW IS CORRECT SO WE CAN
								SEND AN EMAIL TO VERIFY IT IS A UNIVERSITY
								EMAIL.</div>
							<h4>Email just entered</h4>
          				</div>
    				</div>
    			</div>
    	  	</div>
          	<button onClick={this.handleButtonClick} className="btn btn-default btn-large center-button">Next</button>
    	</form>
    </section>
    );
  }
});

ReactDOM.render(<CoachGenInfo />, document.getElementById('coachGenInfo'));