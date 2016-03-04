
var MyProspectsList = React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(prospect, index) {
      return (
        <li key={ index }>
          <ul className="prospect-summary background-light-gray list-inline">
          	<li className="prospect-feed"><i>{prospect.first} {prospect.last}</i> received a text from Southwest Minnesota</li>
          	<li className="profile-link-button text-center background-gray">Profile</li>
          </ul>
        </li>
      );
    };
    return <ul className="prospect-list list-unstyled">{ this.props.prospects.map(createItem) }</ul>;
  }
});


var RecruitingFeed = React.createClass({
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
    				<div className="col-md-3">
    					<div className="panel-container">
    						<div id="program-name" ><h5>School Name</h5></div>
    						<div id="" className="data-cat-btn background-gray">
    							<h5>Dashboard</h5>
							</div>
    						<div className="panel-cat-name">
    							<h5>Edit Information</h5>
    						</div>
    						<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
    							<h5>School Information</h5>
							</div>
							<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
								<h5>Coach Information</h5>
							</div>
							<div className="panel-cat-name">
								<h5>Recruiting Feeds</h5>
							</div>
							<div id="" className="data-cat-btn background-blue" onClick={this.handleContactClick}>
								<h5>D1 Recruiting</h5>
							</div>
							<div id="" className="data-cat-btn background-blue" onClick={this.handleContactClick}>
								<h5>D2 Recruiting</h5>
							</div>
							<div id="" className="data-cat-btn background-blue" onClick={this.handleContactClick}>
								<h5>D3 Recruiting</h5>
							</div>
							<div id="" className="data-cat-btn background-blue" onClick={this.handleContactClick}>
								<h5>NAIA Recruiting</h5>
							</div>
							<div id="" className="data-cat-btn background-blue" onClick={this.handleContactClick}>
								<h5>JUCO Recruiting</h5>
							</div>
						</div>    				
    				</div>
    				<div className="col-sm-9">
    					<div className="prospect-container">
    						<h2 id="" className="text-center" >D1 Recruiting Feed</h2>
    						<ul className="prospect-categories list-inline">
    							<li className="cat-btn background-blue">Class</li>
    							<li className="cat-btn background-blue">State</li>    							
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

ReactDOM.render(<RecruitingFeed />, document.getElementById('recruiting-feed'));

