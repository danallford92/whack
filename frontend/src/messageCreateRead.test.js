import { mount } from 'enzyme';
import App from './index';

describe('messages', () => {
  let getRemoteMessages, addRemoteMessage;

  beforeEach(() => {
    getRemoteMessages = () => [];
    addRemoteMessage = jest.fn();
  })

  describe('when entering a string into text input', () => {
    describe('and submiting the containing form', () => {
      it('the new message is added at the end of the in-memory message list', () => {
        const wrapper = mount(<App getRemoteMessages={getRemoteMessages} addRemoteMessage={addRemoteMessage}/>)
        wrapper.find('input').simulate('change', {value: '1234'})
        wrapper.find('form').simulate('submit');
        
      })
      it('the message is added to the remote', () => {

      })
    })
  })

  describe('when the remote returns a list of messages', () => {
    it('renders the messages in the same order they came in', () => {


    })
  })
})
