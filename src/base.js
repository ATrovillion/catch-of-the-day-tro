import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAcxflct42otJ4cdfMO1KX9mEKAOdRpfiI",
    authDomain: "catch-of-the-day-e0e27.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-e0e27-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;