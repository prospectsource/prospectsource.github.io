var ProgramInfo = React.createClass({
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
	    				<h5 className="timeline-heading3">INVITE PROSPECTS</h5>
    				</div>
    			</div>
    			<div className="row">
    				<div className="col-md-offset-2 col-md-4 input-box">
    					<div className="input-container program-info">
    						<h4>Program Information</h4>
    						<div>Program Name<input onChange={this.handleUserInput} value={ this.state.ccNumber } /></div>
          					<div>Phone (Program Contact)<input onChange={this.handleUserInput} value={ this.state.ccCode } /></div>
          					<div>Email (Program Contact) <input onChange={this.handleUserInput} value={ this.state.ccExpiration } /></div>
          					<div>Address<input onChange={this.handleUserInput} value={ this.state.ccName } /></div>
          					<div>City/State/Zip <input onChange={this.handleUserInput} value={ this.state.ccName } /></div>
          					<div>Coach/Director Name <input onChange={this.handleUserInput} value={ this.state.ccName } /></div>
          					<div>Program Website <input onChange={this.handleUserInput} value={ this.state.ccName } /></div>
							<div>Upload Logo<input className="custom-file-input" type="file" name="pic" accept="image/*" /></div>
    					</div>
    				</div>
    				<div className="col-md-4 input-box">
    					<div id="gender-info" className="input-container">
    						<h4>Prospect Information</h4>
    						<div><input type="checkbox" onChange={this.handleUserInput} value={ this.state.billingStreet } /><span>Mens</span></div>
          					<div><input type="checkbox" onChange={this.handleUserInput} value={ this.state.billingCity } /><span>Womens</span></div>
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

ReactDOM.render(<ProgramInfo />, document.getElementById('program-info'));