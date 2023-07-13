import firebase from 'firebase/app';
import 'firebase/database';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD19BeMU_fMoa-utjYhEjL8tujWJdihuoo",
  authDomain: "entry-00.firebaseapp.com",
  databaseURL: "https://entry-00-default-rtdb.firebaseio.com",
  projectId: "entry-00",
  storageBucket: "entry-00.appspot.com",
  messagingSenderId: "533783612067",
  appId: "1:533783612067:web:483e5ec125b96189af4d16",
  measurementId: "G-HXNQ3ZRWBJ"
};

if(!firebase.apps.length){
  //Abrir uma conexão conexao
  firebase.initializeApp(firebaseConfig);
}

export default firebase;