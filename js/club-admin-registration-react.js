var ClubAdminRegistration = React.createClass({
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
    	<div className="container">
    		<div className="row">
    			<div className="col-xs-12">
    				<div className="header text-center">
    					<h2>Program Registration</h2>
    				</div>
    			</div>
    		</div>
    		<div className="row">
    			<div className="col-sm-3">
    				<div id="club-admin" className="background-blue">
    					<h5>AAU PROGRAM</h5>
    				</div>
    			</div>
    			<div className="col-sm-9 receive text-center">
    				<h5>OFFER SERVICE AND RECRUITING RESOURCES TO AAU PROSPECTS</h5>
    			</div>
    		</div>
    	</div>
    	
        <form className="text-center" onSubmit={ this.handleSubmit }>
          
          <button className="btn btn-default btn-large">Register Your Club (FREE)</button>
        </form>
      </section>
    );
  }
});

ReactDOM.render(<ClubAdminRegistration />, document.getElementById('club-admin-registration'));