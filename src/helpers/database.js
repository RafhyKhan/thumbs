// Reference for using Firebase RealTime DB -> https://firebase.google.com/docs/database/rest/start
// TODO: SWITCH TO FIREBASE 'LOCKED' DATABASE TO SECURE

const FIREBASE_USERS = (path = '') => `https://thumbsapp-748bd-default-rtdb.firebaseio.com/users/${path}.json`

export const createUser = async({ username, password }) => fetch(FIREBASE_USERS(), { method: 'PATCH', body: JSON.stringify({[username]: { password: password }}) })
export const getUser = async(user) => fetch(FIREBASE_USERS(user)).then(res => res.json())
export const getMediaList = async(user) => fetch(FIREBASE_USERS(`${user}/media_list`)).then(res => res.json())
export const updateMediaList = async(user, newMediaList) => fetch(FIREBASE_USERS(`${user}/media_list`), { method: 'PUT', body: JSON.stringify(newMediaList)})


/* 
Make a function that, increments the total number of likes for a 
specific movie. Global among users. 

Make a function that, returns the number of likes of a specific
movie. Global mong users 

Make a function that sends to databas, user liked that 
specific movie or not, can be boolean value. 
Each movie can have a "Liked" property, true, false, null?

*/