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
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com/prospects/');
    this.bindAsArray(firebaseRef.limitToLast(25), 'items');
  },

  firstChange: function(e) {
    this.setState({first: e.target.value});
  },
  
  lastChange: function(e) {
    this.setState({last: e.target.value});
  },
  
  phoneChange: function(e) {
    this.setState({phone: e.target.value});
  },
  
  emailChange: function(e) {
    this.setState({email: e.target.value});
  },
  
  addressChange: function(e) {
    this.setState({address: e.target.value});
  },
  
  cityStateZipChange: function(e) {
    this.setState({cityStateZip: e.target.value});
  },
  
  aauCoachChange: function(e) {
    this.setState({aauCoach: e.target.value});
  },
  
  aauEmailChange: function(e) {
    this.setState({aauEmail: e.target.value});
  },
  
  aauPhoneChange: function(e) {
    this.setState({aauPhone: e.target.value});
  },
  
  hsCoachChange: function(e) {
    this.setState({hsCoach: e.target.value});
  },
  
  hsEmailChange: function(e) {
    this.setState({hsEmail: e.target.value});
  },
  
  hsPhoneChange: function(e) {
    this.setState({hsPhone: e.target.value});
  },
  
  gradeChange: function(e) {
    this.setState({grade: e.target.value});
  },
  
  heightChange: function(e) {
    this.setState({height: e.target.value});
  },
  
  weightChange: function(e) {
    this.setState({weight: e.target.value});
  },
  
  vertChange: function(e) {
    this.setState({vert: e.target.value});
  },
  
  positionChange: function(e) {
    this.setState({position: e.target.value});
  },
  
  aauProgramChange: function(e) {
    this.setState({aauProgram: e.target.value});
  },
  
  aauJerseyChange: function(e) {
    this.setState({aauJersey: e.target.value});
  },
  
  schoolChange: function(e) {
    this.setState({school: e.target.value});
  },
  
  hudlChange: function(e) {
    this.setState({hudl: e.target.value});
  },
  
  gpaChange: function(e) {
    this.setState({gpa: e.target.value});
  },
  
  actChange: function(e) {
    this.setState({act: e.target.value});
  },
  
  classRankChange: function(e) {
    this.setState({classRank: e.target.value});
  },
  
  removeItem: function(key) {
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com/prospects/');
    firebaseRef.child(key).remove();
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.first && this.state.first.trim().length !== 0) {
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
        first: '',
        last: '', 
        phone: '',
        email: '', 
        address: '',
        cityStateZip: '', 
        aauCoach: '',
        aauEmail: '', 
        aauPhone: '',
        hsCoach: '', 
        hsEmail: '',
        hsPhone: '', 
        grade: '',
        height: '', 
        weight: '',
        vert: '', 
        position: '',
        aauProgram: '', 
        aauJersey: '',
        school: '', 
        hudl: '',
        gpa: '',
        act: '', 
        classRank: ''
      });
    }
    this.state.text = String.Empty;
    this.state.text2 = String.Empty;
    this.state.text3 = String.Empty;
    this.state.first = String.Empty;
    this.state.last = String.Empty; 
    this.state.phone = String.Empty;
    this.state.email = String.Empty; 
	this.state.address = String.Empty;
    this.state.cityStateZip = String.Empty; 
    this.state.aauCoach = String.Empty;
    this.state.aauEmail = String.Empty; 
    this.state.aauPhone = String.Empty;
    this.state.hsCoach = String.Empty; 
    this.state.hsEmail = String.Empty;
    this.state.hsPhone = String.Empty; 
    this.state.grade = String.Empty;
    this.state.height = String.Empty; 
    this.state.weight = String.Empty;
    this.state.vert = String.Empty; 
	this.state.position = String.Empty;
    this.state.aauProgram = String.Empty; 
    this.state.aauJersey = String.Empty;
    this.state.school = String.Empty; 
    this.state.hudl = String.Empty;
	this.state.gpa = String.Empty;
    this.state.act = String.Empty; 
    this.state.classRank = String.Empty;
  },

  render: function() {
    return (
      
      <section className="page">
        <form onSubmit={ this.handleSubmit }>
    	<div className="container">
    		<div className="row">
    			<div className="col-sm-4">
    				<div className="timeline-image1 background-gray">
    					<h2>1</h2>
    				</div>
    				<h5 className="timeline-heading1">Select CLUB</h5>
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
            			<div className="first-name-container">
            				<div>FIRST NAME </div>
            				<div><input onChange={ this.firstChange } value={ this.state.first } /></div>
            			</div>
						<div>LAST NAME <input onChange={ this.lastChange } value={ this.state.last } /></div>            			
            			<div>PHONE (ATHLETE) <input onChange={ this.phoneChange } value={ this.state.phone } /></div>
          				<div>EMAIL (ATHLETE OR PARENT) <input onChange={ this.emailChange } value={ this.state.email } /></div>
          				<div>ADDRESS <input onChange={ this.addressChange } value={ this.state.address } /></div>
          				<div>CITY/STATE/ZIP <input onChange={ this.cityStateZipChange } value={ this.state.cityStateZip } /></div>
          				<div>AAU COACH NAME <input onChange={ this.aauCoachChange } value={ this.state.aauCoach } /></div>
          				<div>AAU COACH EMAIL <input onChange={ this.aauEmailChange } value={ this.state.aauEmail } /></div>
          				<div>AAU COACH PHONE <input onChange={ this.aauPhoneChange } value={ this.state.aauPhone } /></div>
          				<div>HS COACH NAME <input onChange={ this.hsCoachChange } value={ this.state.hsCoach } /></div>
          				<div>HS COACH EMAIL <input onChange={ this.hsEmailChange } value={ this.state.hsEmail } /></div>
          				<div>HS COACH PHONE <input onChange={ this.hsPhoneChange } value={ this.state.hsPhone } /></div>
       				 </div>
    			</div>
    			<div className="col-md-4 input-box">
    				<div className="input-container">
            			<h4>ATHLETIC INFORMATION</h4>
            			<div>GRADE/CLASS <input onChange={ this.gradeChange } value={ this.state.grade } /></div>
          				<div>HEIGHT <input onChange={ this.heightChange } value={ this.state.height } /></div>
          				<div>WEIGHT <input onChange={ this.weightChange } value={ this.state.weight } /></div>
          				<div>VERTICAL JUMP <input onChange={ this.vertChange } value={ this.state.vert } /></div>
          				<div>POSITION <input onChange={ this.positionChange } value={ this.state.position } /></div>
          				<div>AAU PROGRAM <input onChange={ this.aauProgramChange } value={ this.state.aauProgram } /></div>
          				<div>AAU JERSEY <input onChange={ this.aauJerseyChange } value={ this.state.aauJersey } /></div>
          				<div>HIGH SCHOOL <input onChange={ this.schoolChange} value={ this.state.school } /></div>
          				<div>HUDL PROFILE <input onChange={ this.hudlChange } value={ this.state.hudl } /></div>
       				 </div>
    			</div>
    			<div className="col-md-4 input-box">
    				<div className="input-container">
            			<h4>ACADEMIC INFORMATION</h4>
            			<div>GPA <input onChange={ this.gpaChange } value={ this.state.gpa } /></div>
          				<div>ACT <input onChange={ this.actChange } value={ this.state.act } /></div>
          				<div>CLASS RANK <input onChange={ this.classRankChange } value={ this.state.classRank } /></div>
       				</div>
    			</div>
    		</div>
    	</div>
          
          <button id="prospect-data-button" className="btn btn-default btn-large center-button">NEXT</button>
        </form>
      </section>
    );
  }
});

ReactDOM.render(<TodoApp3 />, document.getElementById('generalInformation'));