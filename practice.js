
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDB49djV3NILfzg7_R5ML_ZGrxtuN8SBIA",
    authDomain: "practice-69351.firebaseapp.com",
    databaseURL: "https://practice-69351-default-rtdb.firebaseio.com",
    projectId: "practice-69351",
    storageBucket: "practice-69351.appspot.com",
    messagingSenderId: "939214328872",
    appId: "1:939214328872:web:17bd2c7b452cb091e5511d"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purprse:" adding user "
    });
}