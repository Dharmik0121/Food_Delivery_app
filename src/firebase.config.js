import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCD7L6YrRSjoqyVhhcnWn3O0lDZpZHDaVM",
    authDomain: "food-delivery-app-dfab2.firebaseapp.com",
    databaseURL: "https://food-delivery-app-dfab2-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-dfab2",
    storageBucket: "food-delivery-app-dfab2.appspot.com",
    messagingSenderId: "817239912005",
    appId: "1:817239912005:web:3234de77c2f94a6352fd2c"
  };

  const app = getApps.length > 0? getApp() : initializeApp(firebaseConfig);

  const firestore =  getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage };