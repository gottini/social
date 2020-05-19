import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './Redux/State';

export let rerenderEntireTree = (state) => {

    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>, document.getElementById('root'));

}
