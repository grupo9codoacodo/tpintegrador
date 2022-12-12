import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

//we need to somehow seed the database

//we need a config here, put your api details here 

//const config = {
//    apiKey: "AIzaSyD6rfFIRNC4j0YoRtZGi6vLlJ0M2baoffE",
//    authDomain: "netflix-react-9480e.firebaseapp.com",
//    projectId: "netflix-react-9480e",
//    storageBucket: "netflix-react-9480e.appspot.com",
//    messagingSenderId: "124358470674",
//    appId: "1:124358470674:web:e265ab9bc66f7c4e9a3ccb"
// };

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDQ9EvhP7IOdW6QoiqSj0jpnfPiY2Ysoiw",
  authDomain: "tpgrupo9react.netlify.app",
  projectId: "tpgrupo9",
  storageBucket: "tpgrupo9.appspot.com",
  messagingSenderId: "1082044343072",
  appId: "1:1082044343072:web:b8abb401bb7e3368c1ad45"
};
const firebase = Firebase.initializeApp(config);

//dont uncomment this bcz it will dupliacte the database on firebase
//seedDatabase(firebase);

export { firebase };
