import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 10},
            {id: 2, message: 'blabla', likesCount: 150}
        ],
        newPostText: ""
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Sergey'},
            {id: 2, name: 'Maiia'},
            {id: 3, name: 'Sara'},
            {id: 4, name: 'Arche'},
            {id: 5, name: '1'},
            {id: 6, name: '2'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'olol'},
            {id: 3, message: 'kek'},
            {id: 4, message: 'lol'},
            {id: 5, message: 'ыыы'},
            {id: 6, message: 'ыыыы'}
        ]
    },
    navbarPage: {
        friends: [
            {
                id: 1,
                name: 'Sergey',
                photo: 'https://i.insider.com/5ba15375e361c01c008b5cf7?width=839&format=jpeg'
            },
            {id: 2, name: 'Maiia', photo: 'https://photos5.appleinsider.com/gallery/23569-29916-IMG_1538-xl.jpg'},
            {
                id: 3,
                name: 'Sara',
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvaMClzg6j-nwCrtaty5nECYh8TGZngGpzYFBohHmuY2Dhnlme&usqp=CAU'
            },
            {id: 4, name: 'Arche', photo: 'https://i.pinimg.com/474x/5c/3c/08/5c3c0807386ea51b2fc5a3ce9c839d1c.jpg'},
            {id: 5, name: '1'},
            {id: 6, name: '2'}
        ],
    }

}


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);

}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

}


export default state;