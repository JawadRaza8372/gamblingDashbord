import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyBxLhGceV6TJVBpWWofWmv7Jpa1x9nKrQc",
	authDomain: "gambling-application.firebaseapp.com",
	projectId: "gambling-application",
	storageBucket: "gambling-application.appspot.com",
	messagingSenderId: "503781255822",
	appId: "1:503781255822:web:df2d4794ba5f6cc327b7df",
	measurementId: "G-SZZLZM57ZV",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export default firebase;

export { db, auth, storage };
