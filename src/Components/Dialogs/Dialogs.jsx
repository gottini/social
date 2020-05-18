import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.state.messages.map(m => <Message message={m.message}/>);
    let newMessageElement = React.createRef();
    let addMassage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div className={s.text}>
                <textarea ref={newMessageElement}></textarea>
                <div>
                    <button onClick={addMassage}>Add massage</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
