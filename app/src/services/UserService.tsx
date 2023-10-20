import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import firestore from "@react-native-firebase/firestore"

async function assignTeam(team: string) {
    let token = await auth().currentUser?.getIdToken()

    firestore()
        .collection("Team")
        .add({
            UserToken: token,
            team: team
        })
        .then(() => {
            console.log("Team added");
        });
}

export const UserService = {
    assignTeam
}