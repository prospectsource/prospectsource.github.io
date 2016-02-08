/** @jsx React.DOM */


var TodoList3 = React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(item, index) {
      return (
        <li key={ index }>
          <div>Name: { item.name /**this ".name" changes the attribute displayed in the todo list */ }</div>
          <div>Position: { item.position }</div>
          <div>Height: { item.height }</div>
          <div><span onClick={ _this.props.removeItem.bind(null, item['.key']) }
                style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}>
                  Delete Player
          	</span>
          </div>
        </li>
      );
    };
    return <ul>{ this.props.items.map(createItem) }</ul>;
  }
});

var TodoApp3 = React.createClass({
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

  onFirstChange: function(e) {
    this.setState({first: e.target.value});
  },
  
  onLastChange: function(e) {
    this.setState({last: e.target.value});
  },
  
  onPhoneChange: function(e) {
    this.setState({phone: e.target.value});
  },
  
  onEmailChange: function(e) {
    this.setState({email: e.target.value});
  },
  
  onAddressChange: function(e) {
    this.setState({address: e.target.value});
  },
  
  onCityStateZipChange: function(e) {
    this.setState({cityStateZip: e.target.value});
  },
  
  onAauCoachChange: function(e) {
    this.setState({aauCoach: e.target.value});
  },
  
  onAauEmailChange: function(e) {
    this.setState({aauEmail: e.target.value});
  },
  
  onAauPhoneChange: function(e) {
    this.setState({aauPhone: e.target.value});
  },
  
  onHsCoachChange: function(e) {
    this.setState({hsCoach: e.target.value});
  },
  
  onHsEmailChange: function(e) {
    this.setState({hsEmail: e.target.value});
  },
  
  onHsPhoneChange: function(e) {
    this.setState({hsPhone: e.target.value});
  },
  
  onGradeChange: function(e) {
    this.setState({grade: e.target.value});
  },
  
  onHeightChange: function(e) {
    this.setState({height: e.target.value});
  },
  
  onWeightChange: function(e) {
    this.setState({weight: e.target.value});
  },
  
  onVertChange: function(e) {
    this.setState({vert: e.target.value});
  },
  
  onPositionChange: function(e) {
    this.setState({position: e.target.value});
  },
  
  onAauProgramChange: function(e) {
    this.setState({aauProgram: e.target.value});
  },
  
  onAauJerseyChange: function(e) {
    this.setState({aauJersey: e.target.value});
  },
  
  onSchoolChange: function(e) {
    this.setState({school: e.target.value});
  },
  
  onHudlChange: function(e) {
    this.setState({hudl: e.target.value});
  },
  
  onGpaChange: function(e) {
    this.setState({gpa: e.target.value});
  },
  
  onActChange: function(e) {
    this.setState({act: e.target.value});
  },
  
  onClassRankChange: function(e) {
    this.setState({classRank: e.target.value});
  },
  
  removeItem: function(key) {
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com/players/');
    firebaseRef.child(key).remove();
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.text && this.state.text.trim().length !== 0) {
      this.firebaseRefs['items'].push({
        first: this.state.first,// "name:" changes the input attribute category
        last: this.state.last, 
        phone: this.state.phone,
        email: this.state.email, 
        address: this.state.address,
        cityStateZip: this.state.cityStateZip, 
        aauCoach: this.state.aauCoach,
        aauEmail: this.state.aauEmail, 
        aauPhone: this.state.aauPhone,
        hsCoach: this.state.hsCoach, 
        hsEmail: this.state.hsEmail,
        hsPhone: this.state.hsPhone, 
        grade: this.state.grade,
        height: this.state.height, 
        weight: this.state.weight,
        vert: this.state.vert, 
        position: this.state.position,
        aauProgram: this.state.aauProgram, 
        aauJersey: this.state.aauJersey,
        school: this.state.school, 
        hudl: this.state.hudl,
        gpa: this.state.gpa,
        act: this.state.act, 
        classRank: this.state.classRank
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
      
      <section id="data-collection">
    	<div className="container">
    		<div className="row">
    			<div className="col-sm-4">
    				<div className="timeline-image1 background-gray">
    					<h2>1</h2>
    				</div>
    				<h5 className="timeline-heading1">REGISTER WITH AAU CLUB</h5>
    			</div>
    			<div className="col-sm-4">
    				<div className="timeline-image2 background-blue">
    					<h2>2</h2>
    				</div>
    				<h5 className="timeline-heading2">GENERAL INFORMATION</h5>
    			</div>
    			<div className="col-sm-4">
    				<div className="timeline-image3 background-gray">
    					<h2>3</h2>
    				</div>
	    			<h5 className="timeline-heading3">BILLING</h5>
    			</div>
    		</div>
    		<div className="row">
    			<div className="col-md-4 input-box">
    				<div className="input-container">
            			<h4>CONTACT INFORMATION</h4>
            			<div>FIRST NAME <input onChange={ this.onFirstChange } value={ this.state.first } /></div>
						<div>LAST NAME <input onChange={ this.onLastChange } value={ this.state.last } /></div>            			
            			<div>PHONE (ATHLETE) <input onChange={ this.onPhoneChange } value={ this.state.phone } /></div>
          				<div>EMAIL (ATHLETE OR PARENT) <input onChange={ this.onEmailChange } value={ this.state.email } /></div>
          				<div>ADDRESS <input onChange={ this.onAddressChange } value={ this.state.address } /></div>
          				<div>CITY/STATE/ZIP <input onChange={ this.onCityStateZipChange } value={ this.state.cityStateZip } /></div>
          				<div>AAU COACH NAME <input onChange={ this.onAauCoachChange } value={ this.state.aauCoach } /></div>
          				<div>AAU COACH EMAIL <input onChange={ this.onAauEmailChange } value={ this.state.aauEmail } /></div>
          				<div>AAU COACH PHONE <input onChange={ this.onAauPhoneChange } value={ this.state.aauPhone } /></div>
          				<div>HS COACH NAME <input onChange={ this.onHsCoachChange } value={ this.state.hsCoach } /></div>
          				<div>HS COACH EMAIL <input onChange={ this.onHsEmailChange } value={ this.state.hsEmail } /></div>
          				<div>HS COACH PHONE <input onChange={ this.onHsPhoneChange } value={ this.state.hsPhone } /></div>
       				 </div>
    			</div>
    			<div className="col-md-4 input-box">
    				<div className="input-container">
            			<h4>ATHLETIC INFORMATION</h4>
            			<div>GRADE/CLASS <input onChange={ this.onGradeChange } value={ this.state.grade } /></div>
          				<div>HEIGHT <input onChange={ this.onHeightChange } value={ this.state.height } /></div>
          				<div>WEIGHT <input onChange={ this.onWeightChange } value={ this.state.weight } /></div>
          				<div>VERTICAL JUMP <input onChange={ this.onVertChange } value={ this.state.vert } /></div>
          				<div>POSITION <input onChange={ this.onPositionChange } value={ this.state.position } /></div>
          				<div>AAU PROGRAM <input onChange={ this.onAauProgramChange } value={ this.state.aauProgram } /></div>
          				<div>AAU JERSEY <input onChange={ this.onAauJerseyChange } value={ this.state.aauJersey } /></div>
          				<div>HIGH SCHOOL <input onChange={ this.onSchoolChange} value={ this.state.school } /></div>
          				<div>HUDL PROFILE <input onChange={ this.onHudlChange } value={ this.state.hudl } /></div>
       				 </div>
    			</div>
    			<div className="col-md-4 input-box">
    				<div className="input-container">
            			<h4>ACADEMIC INFORMATION</h4>
            			<div>GPA <input onChange={ this.onGpaChange } value={ this.state.gpa } /></div>
          				<div>ACT <input onChange={ this.onActChange } value={ this.state.act } /></div>
          				<div>CLASS RANK <input onChange={ this.onClassRankChange } value={ this.state.classRank } /></div>
       				</div>
    			</div>
    		</div>
    	</div>
    	
        <form className="text-center" onSubmit={ this.handleSubmit }>
          
          <button className="btn btn-default btn-large">NEXT</button>
        </form>
      </section>
    );
  }
});

ReactDOM.render(<TodoApp3 />, document.getElementById('generalInformation'));