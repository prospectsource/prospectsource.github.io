
var MyProspectsList = React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(prospect, index) {
      return (
        <li key={ index }>
          <ul className="prospect-summary background-light-gray list-inline">
          	<li className="prospect-update"><i>{prospect.first} {prospect.last}</i> received a text from Southwest Minnesota</li>
          	<li className="profile-link-button text-center background-gray">Profile</li>
          </ul>
        </li>
      );
    };
    return <ul className="prospect-list list-unstyled">{ this.props.prospects.map(createItem) }</ul>;
  }
});


var MyProspects = React.createClass({
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
      
    <section className="">
    		<div className="container">
    			<div className="row">
    				<div className="col-sm-4">
    					<div className="panel-container">
    						<div id="club-logo" className="">logo</div>
    						<div id="program-name" ><h5>Program Name</h5></div>
    						<div className="panel-cat-name">
    							<h5>Edit Information</h5>
    						</div>
    						<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
    							<h5>Program Information</h5>
							</div>
							<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
								<h5>Admin Information</h5>
							</div>
							<div className="panel-cat-name">
								<h5 >My Prospects</h5>
							</div>
							<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
								<h5>Registered Propspects</h5>
							</div>
							<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
								<h5>Invite Prospects</h5>
							</div>
						</div>    				
    				</div>
    				<div className="col-sm-8">
    					<div className="prospect-container">
    						<h2 id="" className="text-center" >My Prospects</h2>
    						<ul className="prospect-categories list-inline">
    							<li className="cat-btn background-blue">D1</li>
    							<li className="cat-btn background-blue">D2</li>
    							<li className="cat-btn background-blue">D3</li>
    							<li className="cat-btn background-blue">NAIA</li>
    							<li className="cat-btn background-blue">JUCO</li>
    						</ul>
    					<MyProspectsList prospects={this.state.prospects}/>
    					</div>
    				</div>
    			</div>
    	  	</div>
    </section>
    );
  }
});

ReactDOM.render(<MyProspects />, document.getElementById('my-prospects'));

