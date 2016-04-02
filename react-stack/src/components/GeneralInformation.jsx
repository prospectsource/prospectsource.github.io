import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

class GeneralInformation extends React.Component {
  render(){
    return (
      <div>
          <section className="page">
            <form >
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
                                <div><input  /></div>
                            </div>
                            <div>LAST NAME <input  /></div>            			
                            <div>PHONE (ATHLETE) <input  /></div>
                            <div>EMAIL (ATHLETE OR PARENT) <input  /></div>
                            <div>ADDRESS <input  /></div>
                            <div>CITY/STATE/ZIP <input  /></div>
                            <div>AAU COACH NAME <input  /></div>
                            <div>AAU COACH EMAIL <input  /></div>
                            <div>AAU COACH PHONE <input  /></div>
                            <div>HS COACH NAME <input  /></div>
                            <div>HS COACH EMAIL <input  /></div>
                            <div>HS COACH PHONE <input  /></div>
                         </div>
                    </div>
                    <div className="col-md-4 input-box">
                        <div className="input-container">
                            <h4>ATHLETIC INFORMATION</h4>
                            <div>GRADE/CLASS <input  /></div>
                            <div>HEIGHT <input  /></div>
                            <div>WEIGHT <input  /></div>
                            <div>VERTICAL JUMP <input  /></div>
                            <div>POSITION <input  /></div>
                            <div>AAU PROGRAM <input  /></div>
                            <div>AAU JERSEY <input  /></div>
                            <div>HIGH SCHOOL <input  /></div>
                            <div>HUDL PROFILE <input  /></div>
                         </div>
                    </div>
                    <div className="col-md-4 input-box">
                        <div className="input-container">
                            <h4>ACADEMIC INFORMATION</h4>
                            <div>GPA <input  /></div>
                            <div>ACT <input  /></div>
                            <div>CLASS RANK <input  /></div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="aau-club">Select Your AAU Club</label>
                            <select  id="aau-club" name="aau-club" className="form-control standalone" type="select" label="Select" placeholder="select">
                                <option value="Kingdom Hoops">Kingdom Hoops</option>
                                <option value="Rusty's Rascals">Rustys Rascals</option>
                                <option value="McCall MadMen">McCall MadMen</option>
                                <option value="Alex's Angels">Maschoff Monsters</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
              
              <button id="prospect-data-button" className="btn btn-default btn-large center-button">NEXT</button>
            </form>
          </section>
      </div>
    );
  }
  }

export default GeneralInformation;
