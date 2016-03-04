
var CoachRegistration = React.createClass({
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
      
    <section className="page2">
    	<form className="text-center" onSubmit={ this.handleSubmit }>
    		<div id="registration-sized" className="container">
    			<div className="row">
    				<div className="col-sm-12">
    					<div className="header text-center">
    						<h1>College Coach Registration</h1>
    					</div>
    				</div>
    			</div>
    			<div className="row">
    				<div className="col-sm-12 coach-registration background-light-gray">
    					<div id="" className="col-sm-8 background-light-gray men-women-coach text-left">
    						<h5>MENS COLLEGE COACH (NCAA, NAIA, NJCAA)</h5>
    					</div>
    					<div id="" className="col-sm-4 background-blue register-btn">
    					<h5>Click Here To Register</h5>
    					<p>(Basic Account: Free)</p>
    					</div>
    				</div>
    			</div>
    			<div className="row">
    				<div className="col-sm-12 coach-registration background-light-gray">
    					<div id="" className="col-sm-8 background-light-gray men-women-coach text-left">
    						<h5>WOMENS COLLEGE COACH (NCAA, NAIA, NJCAA)</h5>
    					</div>
    					<div id="" className="col-sm-4 background-blue register-btn">
    					<h5>Click Here To Register</h5>
    					<p>(Basic Account: Free)</p>
    					</div>
    				</div>
    			</div>
    		</div>
        </form>
    </section>
    );
  }
});

ReactDOM.render(<CoachRegistration />, document.getElementById('mens-womens-registration'));