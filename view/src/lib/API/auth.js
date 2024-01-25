import axios from 'axios';

export const createUser = async (userData) => {
    try {
        const newUser = await axios.post('/auth/sign-up', userData);
        return newUser;
    } catch (error) {
        console.log(error)
    }
}

export const logIn = async (logInData) => {
    try {
        const logInAttempt = await axios.post('/auth/login', logInData);
        return logInAttempt;
    } catch (error) {
        console.log(error)
    }
}

export const logOut = async () => {
    try {
        const res = await axios.post('/auth/log-out')
        return res
    } catch (error) {
        console.log(error)
    }
}
