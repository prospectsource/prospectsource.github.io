var PlayerProfileBasics = React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(item, index) {
      return (
        <div id="profile-basics" key={ index }>
          	<h3>{ item.first}  {item.last} ({ item.grade })</h3>
          	<div><h4>Position:</h4>  { item.position}</div>
        	<div><h4>Height:</h4>  { item.height}</div>
            <div><h4>City/State/Zip:</h4>  { item.cityStateZip}</div>
        </div>
      );
    };
    return <div>{ this.props.prospects.map(createItem) }</div>;
  }
});

var PlayerProfileAthleticInfo = React.createClass({
  render: function() {
    var _this = this;
    var createInfo = function(item, index) {
      return (
        <div id="profile-contact-info" key={ index }>
          	<h3>Contact Information</h3>
          	<div><h4>Phone:</h4>  { item.phone}</div>
        	<div><h4>Email:</h4>  { item.email}</div>
            <div><h4>AAU Coach Name:</h4>  { item.aauCoach}</div>
            <div><h4>AAU Coach Email:</h4>    { item.aauEmail}</div>
            <div><h4>AAU Coach Phone:</h4>    { item.aauPhone}</div>
            <div><h4>HS Coach Name:</h4>     {item.hsCoach}</div>
            <div><h4>HS Coach Email:</h4>    { item.hsEmail}</div>
        </div>
      );
    };
    return <div>{ this.props.prospects.map(createInfo) }</div>;
  }
});

var ProfileViewPage = React.createClass ({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com/prospects');
    this.bindAsArray(firebaseRef.limitToLast(25), 'prospects');
  },

  

  render: function() {
    return (
      <section id="profile" className="page">
    	<div className="container">
    		<div id="profile-top-row" className="row profile-top-row">
    			<div className="col-xs-12 col-sm-3">
    				<div id="profile-picture" className="background-blue">
    					<h5>PROSPECT IMG</h5>
    				</div>
    			</div>
    			<div className="col-sm-6">
    				<div id="" className="">
    					<PlayerProfileBasics prospects={ this.state.prospects } />
    				</div>
    			</div>
    			<div className="col-sm-3">
    				<div id="notifications" className="background-blue">
    					<p>add to notifications</p>
    				</div>
    			</div>
    		</div>
    		<div className="row">
    			<div className="col-sm-3">
    				<div id="club-logo" className="background-blue">
    					<h5>CLUB LOGO</h5>
    				</div>
    				<div id="" className="data-cat-btn background-gray">
    					<h5>Contact Information</h5>
    				</div>
    				<div id="" className="data-cat-btn background-gray">
    					<h5>Athletic Information</h5>
    				</div>
    				<div id="" className="data-cat-btn background-gray">
    					<h5>Academic Information</h5>
    				</div>
    				<div id="" className="data-cat-btn background-blue">
    					<h5>Recruiting Interest</h5>
    				</div>
    			</div>
    			<div className="col-sm-9">
      				<div>
			      		<PlayerProfileAthleticInfo prospects={ this.state.prospects }/>
			      	</div>	
      			</div>
      		</div>
      	</div>
      </section>
    );
  }
});


ReactDOM.render(<ProfileViewPage />,
    document.getElementById('profileView')
);