import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAR81qiAM6qGn6L4SiHygmYRUmrC2rp-vE",
    authDomain: "play2gether-53910.firebaseapp.com",
    databaseURL: "https://play2gether-53910.firebaseio.com",
    projectId: "play2gether-53910",
    storageBucket: "",
    messagingSenderId: "170600971194"
  };
  firebase.initializeApp(config);

  export default firebase;