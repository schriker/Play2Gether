import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyAR81qiAM6qGn6L4SiHygmYRUmrC2rp-vE",
    authDomain: "play2gether-53910.firebaseapp.com",
    databaseURL: "https://play2gether-53910.firebaseio.com",
    projectId: "play2gether-53910",
    storageBucket: "gs://play2gether-53910.appspot.com",
    messagingSenderId: "170600971194",
  };
  firebase.initializeApp(config);

const firestoreSettings = {
  timestampsInSnapshots: true
};

firebase.firestore().settings(firestoreSettings);

export default firebase;