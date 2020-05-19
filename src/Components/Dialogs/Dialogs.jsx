import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.state.messages.map(m => <Message message={m.message}/>);
    let newMessageElement = React.createRef();
    let addMassage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div className={s.text}>
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText}/>
                <div>
                    <button onClick={addMassage}>Add Message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
