

var ProfileViewPage = React.createClass ({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com/prospects');
    rootRef.child('-KAl8nq_0e7l0jgvnE-u');
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
    					<PlayerPic prospects={ this.state.prospects } />
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
      </section>
    );
  }
});


ReactDOM.render(<ProfileViewPage />,
    document.getElementById('rusty-test')
);