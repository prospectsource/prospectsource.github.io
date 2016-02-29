var CompletedProgramRegistration = React.createClass({
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
    				<div className="col-sm-12">
    					<h2 id="congratulations" className="text-center" >Congratulations!</h2>
    					<h3 className="text-center" >You have successfully created your program profile!</h3>
    					<p>You are now ready to invite your prospects to join our service. At any time, you may
    					 access your prospects recruiting information from your program dashboard. </p>
    				</div>
    			</div>
    	  	</div>
          	<button className="btn btn-default btn-large center-button program-button"><h2>Invite Prospects</h2></button>
          	<button className="btn btn-default btn-large center-button program-button background-light-gray"><h2>Dashboard</h2></button>
    	</form>
    </section>
    );
  }
});

ReactDOM.render(<CompletedProgramRegistration />, document.getElementById('completed-program-registration'));

