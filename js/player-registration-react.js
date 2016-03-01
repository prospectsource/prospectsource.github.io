/** @jsx React.DOM */

var PlayerRegistration = React.createClass({
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

    // Store hash
    

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(selectClub).offset().top - 100
    }, 800);
  },

  render: function() {
    return (
      
      <section className="page">
    	<div className="container">
    		<div className="row">
    			<div className="col-xs-12">
    				<div className="header text-center">
    					<h2>Prospect Registration</h2>
    				</div>
    			</div>
    		</div>
    		<div className="row">
    			<div className="col-sm-3">
    				<div id="aau-prospect" className="background-blue">
    					<h5>AAU PROSPECT</h5>
    				</div>
    			</div>
    			<div className="col-sm-9 receive">
    				<h5><b>RECEIVE:</b> EVALUATION / RECRUITING MANUAL / ACCESS TO PREMIUM SERVICES<em> - MONTHLY FEE: $5.00 (FIRST 6 MONTHS FREE)</em></h5>
    			</div>
    		</div>
    	</div>
    	
        <form className="text-center" onSubmit={ this.handleSubmit }>
          
          	<a onClick={this.handleButtonClick} className="btn btn-default btn-large">Click To Register</a>
       
        </form>
      </section>
    );
  }
});

ReactDOM.render(<PlayerRegistration />, document.getElementById('playerRegistration'));