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
// firebase.analytics();
var db = firebase.firestore();

document.addEventListener('init', function(event) {
    var page = event.target;
    //codepalm
    if (page.id === 'signup') {
        console.log("signup");

        $("#signupbtn").click(function() {

            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                if (errorCode === 'auth/weak-password') {
                    alert('The password is too weak');

                } else {
                    alert(errorMessage);
                    content.load('login.html');
                }
                console.log(error);

            });


        });


    }

    if (page.id === 'loginPage') {
        console.log("loginPage");

        $("#gbtn").click(function() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                content.load('FoodCategory.html');
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
        });

        $("#signinbtn").click(function() {
            var email = $("#email").val();
            var password = $("#password").val();
            firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
                content.load('home.html');

            })

            .catch(function(error) {

                console.log(error.message);
            });



        });



    }


    //codeตัวเอง

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


    //codeAj


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


if (page.id === 'FoodCategoryPage') {
    console.log("FoodCategoryPage");

    $("#Sweetbtn").click(function() {
        localStorage.setItem("resturantlist", "Category", "Sweet");
        $("#content")[0].load("ResturantList.html");
    });

    $("#Beveragebtn").click(function() {
        localStorage.setItem("resturantlist", "Category");
        $("#content")[0].load("ResturantList.html");
    });


    $("#menubtn").click(function() {
        $("#sidemenu")[0].open();
    });

    $("#carousel").empty();
    db.collection("recommended").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var item = `<ons-carousel-item modifier="nodivider" id="item${doc.data().id}" class="recomended_item">
            <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}')">
            </div>
            <div class="recomended_item_title" id="item1_${doc.data().id}">${doc.data().name}</div>
        </ons-carousel-item>`
            $("#carousel").append(item);
        });
    });
}