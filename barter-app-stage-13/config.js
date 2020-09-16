import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  //PUT YOUR CONFIG HERE!!
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
