let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Post 1', likesCount: 10},
                {id: 2, message: 'Post 2', likesCount: 150}
            ],
            newPostText: ""
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'User 1'},
                {id: 2, name: 'User 2'},
                {id: 3, name: 'User 3'},
                {id: 4, name: 'User 4'},
            ],
            messages: [
                {id: 1, message: 'Message 1'},
                {id: 2, message: 'Message 2'}
            ],
            newMessageText: "New message"
        },
        navbarPage: {
            friends: [
                {
                    id: 1,
                    name: 'User 1',
                    photo: 'https://i.insider.com/5ba15375e361c01c008b5cf7?width=839&format=jpeg'
                },
                {id: 2, name: 'User 2', photo: 'https://photos5.appleinsider.com/gallery/23569-29916-IMG_1538-xl.jpg'},
                {
                    id: 3,
                    name: 'User 3',
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvaMClzg6j-nwCrtaty5nECYh8TGZngGpzYFBohHmuY2Dhnlme&usqp=CAU'
                },
                {
                    id: 4,
                    name: 'User 4',
                    photo: 'https://i.pinimg.com/474x/5c/3c/08/5c3c0807386ea51b2fc5a3ce9c839d1c.jpg'
                },
            ],
        }

    },
    getState() {
        return this._state;
    },
    _collSubscriber() {
        console.log('State изменился')
    },
    addMessage() {
        let newMessages = {
            id: 3,
            message: this._state.messagesPage.newMessageText,
        };

        this._state.messagesPage.messages.push(newMessages);
        this._state.messagesPage.newMessageText = "";
        this._collSubscriber(this._state);

    },
    updateNewMessageText(newText) {
        this._state.messagesPage.newMessageText = newText;
        this._collSubscriber(this._state);
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._collSubscriber(this._state);

    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._collSubscriber(this._state);

    },
    subscribe(observer) {

        this._collSubscriber = observer;
    },
}


export default store;