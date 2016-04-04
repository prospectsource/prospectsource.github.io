import React from 'react';
import mui from 'material-ui';
import {RouteHandler} from 'react-router';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';

var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;
var FlatButton = mui.FlatButton;

class App extends React.Component {
  constructor(){
    super();

    ThemeManager.setPalette({
      primary1Color: Colors.blue500,
      primary2Color: Colors.blue700,
      primary3Color: Colors.blue100,
      accent1Color: Colors.pink400
    });
  }


  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext(){
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render(){
    return (
      <div>
        <AppBar title="Awesome Chat App"
             //onTitleTouchTap={handleTouchTap}
             iconElementLeft={<IconButton><NavigationClose /></IconButton>}
             iconElementRight={<FlatButton label="Save" />}
         />
        <RouteHandler />
      </div>
    );
  }
}

export default App;
