var Billing = React.createClass({
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
    					<h5 className="timeline-heading1">SELECT CLUB</h5>
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
    				<div className="col-md-4 input-box">
    					<div id="fee-info" className="">
    						<h4><u>PROFILE FEE: $5/MONTH</u></h4>
							<p><b>**FIRST 6MONTHS FREE**</b></p>
							<div>Once registered, you will have
								access to our premium services:
								<ul>
									<li>- Video Service</li>
									<li>- Marketing Service</li>
									<li>- Consulting Service</li>
								</ul>
								When premium services are purchased,
								we will bill the credit card
								on file. You can delete or remove
								your credit card and profile at any
								time.
							</div>
    					</div>
    				</div>
    				<div className="col-md-4 input-box">
    					<div className="input-container cc-info">
    						<h3>CC Information</h3>
    						<div>CC Number<input onChange={this.handleUserInput} value={ this.state.ccNumber } /></div>
          					<div>Security Code<input onChange={this.handleUserInput} value={ this.state.ccCode } /></div>
          					<div>Expiration <input onChange={this.handleUserInput} value={ this.state.ccExpiration } /></div>
          					<div>Name On Card<input onChange={this.handleUserInput} value={ this.state.ccName } /></div>
    					</div>
    				</div>
    				<div className="col-md-4 input-box">
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
          	<button className="btn btn-default btn-large center-button">Finish</button>
    	</form>
    </section>
    );
  }
});

ReactDOM.render(<Billing />, document.getElementById('billing'));