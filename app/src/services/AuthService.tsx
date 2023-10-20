import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { AsyncStorageService } from './AsyncStorageService';

async function createUser(email: string, password: string) {
    await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        });
}

function signInUser(email: string, password: string) {
    auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            console.error(user);
        })
}

function signOut() {
    auth()
        .signOut()
        .then(async () => {
            await AsyncStorageService.removeCurrentUser();
        })
}

export const AuthService = {
    createUser,
    signInUser,
    signOut
}