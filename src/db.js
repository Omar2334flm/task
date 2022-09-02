import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAjYTs8lFpt9b5X3tSIIZuiQLx2MR9NPNk",
    authDomain: "my-task-f96fe.firebaseapp.com",
    projectId: "my-task-f96fe",
    storageBucket: "my-task-f96fe.appspot.com",
    messagingSenderId: "566174748835",
    appId: "1:566174748835:web:66683f72db1ac1eafa6f16",
    databaseURL :"https://my-task-f96fe-default-rtdb.europe-west1.firebasedatabase.app/",
  };
  

  const db =firebase.initializeApp(firebaseConfig);

export default db;