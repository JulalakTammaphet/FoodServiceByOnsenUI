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


    if (page.id === 'FoodCategorypage') {
        console.log("FoodCategorypage");

        $("#menubtn").click(function() {
            $("#sidemenu")[0].open();
        });

        $("#carousel").empty();
        db.collection("recommended").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var item = `<ons-carousel-item modifier="nodivider" id="item${doc.data().id}" class="recomended_item">
              <div class="thumbnail" style="background-image: url('${doc.data().image}')">
              </div>
              
              <div class="recomended_item_title" id="item1_${doc.data().id}">${doc.data().resturantname}</div>
          </ons-carousel-item>`
                $("#carousel").append(item);
            });
        });
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