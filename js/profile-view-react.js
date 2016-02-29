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

var PlayerProfileContactInfo = React.createClass({
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

var PlayerProfileAthleticInfo = React.createClass({
  render: function() {
    var _this = this;
    var createInfo = function(item, index) {
      return (
        <div id="profile-athletic-info" key={ index }>
          	<h3>Athletic Information</h3>
          	<div><h4>Grade/Class:</h4>  { item.grade}</div>
        	<div><h4>Height:</h4>  { item.height}</div>
            <div><h4>Weight:</h4>  { item.weight}</div>
            <div><h4>Vertical Jump:</h4>    { item.vert}</div>
            <div><h4>Position:</h4>    { item.position}</div>
            <div><h4>AAU Program:</h4>     {item.program}</div>
            <div><h4>AAU Jersey:</h4>    { item.jersey}</div>
            <div><h4>High School:</h4>    { item.school}</div>
            <div><h4>HUDL Profile:</h4>    { item.hudl}</div>

        </div>
      );
    };
    return <div>{ this.props.prospects.map(createInfo) }</div>;
  }
});

var PlayerProfileAcademicInfo = React.createClass({
  render: function() {
    var _this = this;
    var createInfo = function(item, index) {
      return (
        <div id="profile-athletic-info" key={ index }>
          	<h3>Academic Information</h3>
          	<div><h4>GPA:</h4>  { item.gpa}</div>
        	<div><h4>ACT:</h4>  { item.act}</div>
            <div><h4>Class Rank:</h4>  { item.classRank}</div>
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

  handleContactClick: function(event) {
    document.getElementById('profile-contact-info').style.display='block';
    document.getElementById('profile-athletic-info').style.display='none';
    document.getElementById('profile-academic-info').style.display='none';
  },
  
  handleAthleticClick: function(event) {
    document.getElementById('profile-contact-info').style.display='none';
    document.getElementById('profile-athletic-info').style.display='block';
    document.getElementById('profile-academic-info').style.display='none';
  },

  handleAcademicClick: function(event) {
    document.getElementById('profile-contact-info').style.display='none';
    document.getElementById('profile-athletic-info').style.display='none';
    document.getElementById('profile-academic-info').style.display='block';
  },
  
  handleAcademicClick: function(event) {
    document.getElementById('profile-contact-info').style.display='none';
    document.getElementById('profile-athletic-info').style.display='none';
    document.getElementById('profile-academic-info').style.display='block';
  },

  render: function() {
    return (
      <section id="profile" className="page">
    	<div className="container">
    		<div id="profile-top-row" className="row profile-top-row">
    			<div className="col-sm-3">
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
    					<h5>add to notifications</h5>
    				</div>
    			</div>
    		</div>
    		<div className="row">
    			<div className="col-sm-3">
    				<div id="club-logo" className="background-blue">
    					<h5>CLUB LOGO</h5>
    				</div>
    				<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
    					<h5>Contact Information</h5>
    				</div>
    				<div id="" className="data-cat-btn background-gray" onClick={this.handleAthleticClick}>
    					<h5>Athletic Information</h5>
    				</div>
    				<div id="" className="data-cat-btn background-gray" onClick={this.handleAcademicClick}>
    					<h5>Academic Information</h5>
    				</div>
    				<div id="" className="data-cat-btn background-blue" onClick={this.handleRecruitingClick}>
    					<h5>Recruiting Interest</h5>
    				</div>
    			</div>
    			<div id="athlete-info-container" className="col-sm-9">
      				<div>
			      		<PlayerProfileContactInfo prospects={ this.state.prospects }/>
			      		<PlayerProfileAthleticInfo prospects={ this.state.prospects }/>
			      		<PlayerProfileAcademicInfo prospects={ this.state.prospects }/>
			      	</div>	
      			</div>
      		</div>
      	</div>
      </section>
    );
  }
});


ReactDOM.render(<ProfileViewPage />,
    document.getElementById('profileViewContact')
);