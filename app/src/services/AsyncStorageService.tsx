import AsyncStorage from "@react-native-async-storage/async-storage";

async function getCurrentUser() {
    return await AsyncStorage.getItem("user");
}

async function setCurrentUser(user: string) {
    await AsyncStorage.setItem("user", user);
}

async function removeCurrentUser() {
    await AsyncStorage.removeItem("user");
}

export const AsyncStorageService = {
    getCurrentUser,
    setCurrentUser,
    removeCurrentUser
}