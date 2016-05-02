var SchoolRecruitingSummary = React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(prospect, index) {
      return (
         <div id="school-summary" className="recruit-update-container text-center">
          <u><h3>Recruiting Letter</h3></u>
          <input type="text"/><div className="btn-default search">Search School</div>
          <div className="letter-attributes background-light-gray">
          	<ul className="">
          		<li><input type="checkbox" /><span>Mens</span></li>
          		<li><input type="checkbox" /><span>Womens</span></li>
          	</ul> 
        	<label htmlFor="sel1"></label>
    				<select id="sel1" className="form-control standalone" type="select" label="Select" placeholder="select">
      					<option value="NCAA D1  V">NCAA D1  V</option>
    					<option value="NCAA D2  V">NCAA D2  V</option>
    					<option value="NCAA D3  V">NCAA D3  V</option>
    					<option value="NCAA NAIA  V">NCAA NAIA  V</option>
     				</select> 
          </div>        
        </div>
      );
    };
    return <ul className="prospect-list list-unstyled">{ this.props.prospects.map(createItem) }</ul>;
  }
});

var PlayerPic = React.createClass({
  render: function() {
      return (
        <div>
          	<h3>PLAYER PIC</h3>
        </div>
      );
  }
});


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
        <div id="profile-academic-info" key={ index }>
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

var PlayerRecruitingInterest = React.createClass({
  
  
  render: function() {
  		return (
					<div id="player-recruiting-interest" className="">
    					
							<ul className="prospect-categories list-inline">
								<li className="cat-btn background-blue">D1</li>
								<li className="cat-btn background-blue">D2</li>
								<li className="cat-btn background-blue">D3</li>
								<li className="cat-btn background-blue">NAIA</li>
								<li className="cat-btn background-blue">JUCO</li>
							</ul>
							<h2 id="prospect-interest" className="text-center" >Recruiting Interest</h2>
							<div id="recruiting-interest-cats">   
								<ul>
									<li className="btn btn-default">High Major</li>
									<li className="btn btn-default">High Major - / Mid-Major +</li>
									<li className="btn btn-default">Mid-Major</li>
									<li className="btn btn-default">Mid-Major - / Low Major +</li>
									<li className="btn btn-default">Low Major</li>
								</ul>						
							</div>
							<div id="recruiting-activity-feed" >
								<RecruitingActivityFeed prospects={this.props.prospects} />
							</div>
    					
    				</div>
    			);
    		}
});

var RecruitingActivityFeed = React.createClass({
	
	handleSummaryClick: function(event) {  
  	document.getElementById('school-summary').style.display='block';
  	},
	
	render: function()  {
	var createItem = function(prospect, index) {
      return (
        
          <ul className="prospect-activity background-light-gray list-inline" onClick={this.handleSummaryClick} key={ index }>
          	<li className="prospect-update"><i>{prospect.first}</i> Southwest Minnesota</li>
          </ul>
        
      );
    };
    return <ul className="prospect-list list-unstyled">{ this.props.prospects.map(createItem) }</ul>;
  }
});

var CollegeRecruitingSummary = React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(prospect, index) {
      return (
         <div id="marketing-add" className="marketing-add-container text-center">
          <u><h3>Marketing Service</h3></u>
          <div className="marketing-attributes background-light-gray">
          	<ul className="list-inline">
          		<li><input type="checkbox" /><span>Click here if you want to add our marketing service to your cart (send video directly to coaches)</span></li>
          	</ul> 
        	<h4>Thanks for submitting your game film!</h4>
        	<p className="text-left" >Our team will take these files and create a highlight 
        	video and make game film available upon request for interested college coaches. You will 
        	receive a notification when your video is complete.</p>
			<p className="text-left">Your CC on file will be charged accordingly for this service. You will be charged $100 
			for the video service and an additional $100 IF you clicked above to include our marketing service.</p>
          </div>        
        </div>
      );
    };
    return <ul className="prospect-list list-unstyled">{ this.props.prospects.map(createItem) }</ul>;
  }
});

var ProfileViewPage = React.createClass ({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com/prospects');
    this.bindAsArray(firebaseRef.limitToLast(6), 'prospects');
  },

  handleContactClick: function(event) {
    document.getElementById('profile-contact-info').style.display='block';
    document.getElementById('profile-athletic-info').style.display='none';
    document.getElementById('profile-academic-info').style.display='none';
    document.getElementById('player-recruiting-interest').style.display='none';
  },
  
  handleAthleticClick: function(event) {
    document.getElementById('profile-contact-info').style.display='none';
    document.getElementById('profile-athletic-info').style.display='block';
    document.getElementById('profile-academic-info').style.display='none';
    document.getElementById('player-recruiting-interest').style.display='none';
  },

  handleAcademicClick: function(event) {
    document.getElementById('profile-contact-info').style.display='none';
    document.getElementById('profile-athletic-info').style.display='none';
    document.getElementById('profile-academic-info').style.display='block';
    document.getElementById('player-recruiting-interest').style.display='none';
  },
  
  handleRecruitingClick: function(event) {
    document.getElementById('profile-contact-info').style.display='none';
    document.getElementById('profile-athletic-info').style.display='none';
    document.getElementById('profile-academic-info').style.display='none';
    document.getElementById('player-recruiting-interest').style.display='block';
  },

  

  render: function() {
    return (
      <section id="profile" className="page">
    	<div className="container">
    		<div id="profile-top-row" className="row profile-top-row">
    			<div className="col-sm-3">
    				<div id="profile-picture" className="background-blue">
    					<div><PlayerPic prospects={this.state.prospects} /></div>
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
						<PlayerRecruitingInterest prospects={ this.state.prospects }/>
						
			      	</div>	
      			</div>
      		</div>
      	</div>
      	<SchoolRecruitingSummary prospects={this.state.prospects}/>
      </section>
    );
  }
});


ReactDOM.render(<ProfileViewPage />,
    document.getElementById('profile-view-page')
);