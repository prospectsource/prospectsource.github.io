import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

class ProspectRegistration extends React.Component {
  render(){
    return (
      <div>
          <section className="page">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="header text-center">
                            <h2>Prospect Registration</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div id="aau-prospect" className="background-blue">
                            <h5>AAU PROSPECT</h5>
                        </div>
                    </div>
                    <div className="col-sm-9 receive">
                        <h5><b>RECEIVE:</b> EVALUATION / RECRUITING MANUAL / ACCESS TO PREMIUM SERVICES<em> - MONTHLY FEE: $5.00 (FIRST 6 MONTHS FREE)</em></h5>
                    </div>
                </div>
            </div>
            
            <form className="text-center" onSubmit={ this.handleSubmit }>
              
                <a onClick={this.handleButtonClick} className="btn btn-default btn-large">Click To Register</a>
           
            </form>
          </section>
      </div>
    );
  }
  }

export default ProspectRegistration;
