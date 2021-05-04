import firebase from "firebase/app"
import "firebase/auth"
import { customErrorHandler } from "../helper/customErrorHandler";

const devConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };


 
const prodConfig ={}
const config = process.env.NODE_ENV === "development" ? devConfig : prodConfig; 


class Firebase {
    constructor(){
        //TODO: kontol şart initialsApp 
        firebase.initializeApp(devConfig)
        this.firebaseAuth = firebase.auth();
    }

    async register(displayName, email, password) {
        try {
            await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
        this.firebaseAuth.currentUser.updateProfile({
            displayName,
        })
        }
        catch(err){
            console.log("firebase error", err)
        }
    }

    useGoogleProvider(){
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        googleProvider.setCustomParameters({prompt: "select_account"});
        this.firebaseAuth.signInWithPopup(googleProvider)
    }

    async signin(email, password) {
        try{
        await this.firebaseAuth.signInWithEmailAndPassword(email, password);
        //window.location.href = "/";
        }
        catch(err){
            console.log("firebase error", err)
            return customErrorHandler(err);
        }
    }

    signOut(){
        this.firebaseAuth.signOut();
    }
    async forgotPassword(email){
        try {
            await this.firebaseAuth.sendPasswordResetEmail(email);
            window.location.href = "/";
          } catch (error) {
            return customErrorHandler(error);
          }
       
    }
}

export default new Firebase


  