import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase.config';

export const firebaseInitialize = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
};

export const firebaseEmailSignedIn = (name, email, password) => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            user.err = '';
            updateName(name);
            return user;
        })
        .catch((error) => {
            const user = {};
            user.err = error.message;
            return user;
        });
};

const updateName = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name,
    })
        .then(() => {
            console.log('UserName added');
        })
        .catch((error) => {
            console.log('UserName Eooro', error);
        });
};

export const signInUserWithEmail = (email, password) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            user.err = '';
            return user;
        })
        .catch((error) => {
            const user = {};
            user.err = error.message;
            return user;
        });
};
