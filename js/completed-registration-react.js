var CompletedRegistration = React.createClass({
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
    					<h3 className="text-center" >You have successfully created your prospect profile!</h3>
    					<p>Now that you have created your profile, you will be entered into our master 
    					prospect database. This database is searched by coaches of all levels.</p>
						<p>In order to increase your chance of appearing in database searches, please 
						add recruiting interest to your profile. Once you are on the dashboard, you will
						 be able to let everyone know who is currently recruiting you. </p>
						<p>In addition to adding recruiting interest to your profile, you can order 
						premium video and marketing service to get your information in front of more 
						coaches.</p>
    				</div>
    			</div>
    	  	</div>
          	<button className="btn btn-default btn-large center-button">View Profile</button>
    	</form>
    </section>
    );
  }
});

ReactDOM.render(<CompletedRegistration />, document.getElementById('completed-registration'));

