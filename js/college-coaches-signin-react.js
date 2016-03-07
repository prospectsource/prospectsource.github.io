                            
var CollegeCoachesSignIn = React.createClass({
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
      });
      this.setState({
        name: '',
        position: '',
      });
    }
    this.state.text = String.Empty;
    this.state.text2 = String.Empty;
  },

   handleButtonClick: function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(mensWomensRegistration).offset().top - 60
    }, 800);
  },

  render: function() {
    return (
      
    <section className="">
       	<form onSubmit={ this.handleSubmit }>
    		<div className="container">
    			<div className="row">
		          	<div id="logo" className="col-sm-offset-3 col-sm-6 input-box">
		          		<div>
		          			<img src="img/ps-logo-md.png" className="image-responsive" alt=""/>
		          		</div>
		          	</div>
    				<div id="signin" className="col-sm-offset-3 col-sm-6 input-box">
    					<div className=" sign-in text-center">
    						<div><input onChange={this.handleUserInput} value={ this.state.ccNumber } placeholder="Email"/></div>
          					<div><input onChange={this.handleUserInput} value={ this.state.ccCode } placeholder="Password" /></div>
    						<button id="question" className="btn btn-default">?</button>
    						<button className="btn btn-default">Sign In</button>
    					</div>
    				</div>
    				<div id="signin" className="col-sm-offset-3 col-sm-6 input-box">
    					<div id="links" className="input-container text-center">
    						<h5>College basketball prospect? <a href="prospect-registration" >Join now</a>.</h5>
							<h5 onClick={this.handleButtonClick} >College basketball coach? <a href="coach-registration" >Join now</a>.</h5>
    					</div>
    				</div>
    			</div>
    	  	</div>
    	</form>
    </section>
    );
  }
});

ReactDOM.render(<CollegeCoachesSignIn />, document.getElementById('coachesSignin'));