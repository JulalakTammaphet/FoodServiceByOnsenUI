// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDli-NgsCNF9Yf4XrnEh-xWpYJ1K9Nn8vE",
    authDomain: "foodservice-5eda5.firebaseapp.com",
    databaseURL: "https://foodservice-5eda5.firebaseio.com",
    projectId: "foodservice-5eda5",
    storageBucket: "foodservice-5eda5.appspot.com",
    messagingSenderId: "176284206523",
    appId: "1:176284206523:web:ae50c5ad2a6166bfbb709e",
    measurementId: "G-Y4HQSTZWF1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

document.addEventListener('init', function(event) {
    var page = event.target;


    if (page.id === 'loginpage') {
        function signIn() {
            var email = document.getElementById('emailRegis').value;
            var password = document.getElementById('passwordRegis').value;
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
            alert('logged in');
        }
    }




    if (page.id === 'Regispage') {
        function signUp() {
            var email = document.getElementById('emailRegis').value;
            var password = document.getElementById('passwordRegis').value;
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/weak-password') {
                    alert('The password is too weak');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
        }
    }





    if (page.id === 'loginPage') {
        console.log("loginPage");

        $("#login").click(function() {
            $("#content")[0].load("login.html");
            $("#sidemenu")[0].close();
        });

        $("#home").click(function() {
            $("#content")[0].load("FoodCategory.html");
            $("#sidemenu")[0].close();
        });
    }

    if (page.id === 'loginPage') {
        console.log("loginPage");

        $("#backhomebtn").click(function() {
            $("#content")[0].load("FoodCategory.html");
        });
    }
});