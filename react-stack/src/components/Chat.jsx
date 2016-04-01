import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import ChatStore from '../stores/ChatStore';
import SelectClub from './SelectClub.jsx';

class Chat extends React.Component {
  render(){
        //<div style={{
        //  display: 'flex',
        //  flexFlow: 'row wrap',
        //  maxWidth: 1200,
        //  width: '100%',
        //  margin: '30px auto 30px'
        //}}>
        //  <ChannelList {...this.props} />
        //  <MessageList />
        //</div>
        //<MessageBox />
    return (
      <div>
          <SelectClub />
      </div>
    );
  }

  static willTransitionTo(transition){
    var state = ChatStore.getState();
    if(!!state.user){
      transition.redirect('/login');
    }
  }
}

export default Chat;
