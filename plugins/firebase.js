import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAKRejR__XXB3hufe5ghtMwzrKyU5Q4NDM",
    authDomain: "worktalk-10bef.firebaseapp.com",
    databaseURL: "https://worktalk-10bef.firebaseio.com",
    projectId: "worktalk-10bef",
    storageBucket: "worktalk-10bef.appspot.com",
    messagingSenderId: "837310087476",
    appId: "1:837310087476:web:e0021e6bd83cbb32026561"


    
  })
}

export default firebase