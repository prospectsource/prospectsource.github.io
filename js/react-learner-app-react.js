

var ContactInfoRow = React.createClass({
    render: function() {
        return 	<div className="col-md-4 input-box">
    				<div className="input-container">
            			<h4>CONTACT INFORMATION</h4>
            			<div>{this.props.categories}</div>
            		</div>
            	</div>;
    	}
	});

	var CATEGORIES = [
	{firstName:'FIRST NAME', lastName:'LAST NAME', phone:'PHONE (ATHLETE)', email:'EMAIL (ATHLETE OR PARENT)', address:'ADDRESS', 
	cityStZip:'CITY/STATE/ZIP', aauCoach:'AAU COACH NAME', aauCoachEmail:'AAU COACH EMAIL', aauCoachPhone:'AAU COACH PHONE', 
	hsCoach:'HS COACH NAME', hsCoachEmail:'HS COACH EMAIL',hsCoachPhone:'HS COACH PHONE'},
	];

	ReactDOM.render(<ContactInfoRow categories={CATEGORIES} />, document.getElementById('rusty-app'));







