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
            var auth_provider_x509_cert_url = new firebase.auth.GoogleAuthProvider();
            firebase.auth_uri("https://accounts.google.com/o/oauth2/auth").signInWithPopup("https://www.googleapis.com/oauth2/v1/certs").then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token_uri = result.credential.accessToken;
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



    if (page.id === 'FoodCategorypage') {
        console.log("FoodCategorypage");

        $("#Sweetbtn").click(function() {
            // localStorage.setItem("selectedCategory", "Sweet");
            $("#content")[0].load("ResturantList.html");
        });

        $("#Beveragebtn").click(function() {
            // localStorage.setItem("selectedCategory", "Beverage");
            $("#content")[0].load("ResturantList.html");
        });

        $("#fastfoodbtn").click(function() {
            // localStorage.setItem("selectedCategory", "Fastfood");
            $("#content")[0].load("ResturantList.html");
        });
        $("#Japanesefoodbtn").click(function() {
            // localStorage.setItem("selectedCategory", "Japanesefood");
            $("#content")[0].load("ResturantList.html");
        });

        $("#Seafoodbtn").click(function() {
            $("#content")[0].load("ResturantList.html");
        });

        $("#Chainesefoodbtn").click(function() {
            $("#content")[0].load("ResturantList.html");
        });

        $("#Vietnamfoodbtn").click(function() {
            $("#content")[0].load("ResturantList.html");
        });

        $("#Thaifoodbtn").click(function() {
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


    // if (page.id === 'categoryPage') {
    //     var category = localStorage.getItem("selectedCategory");
    //     console.log("categoryPage:" + category);

    //     $("#header").html(category);

    //     $("#menubtn").click(function() {
    //         $("#sidemenu")[0].open();
    //     });

    //     $("#list").empty();
    //     db.collection("resturantlist").where("category", "==", category).get()
    //         .then((querySnapshot) => {
    //             querySnapshot.forEach((doc) => {
    //                 var item = `<ons-row class="category">
    //             <ons-col modifier="nodivider">
    //                 <div class="category_header" style="background-image: url('${doc.data().image}')">
    //                     <figure class="category_thumbnail" id="Sweetbtn">
    //                         <div class="category_title" id="Category_1_name">${doc.data().resturantname}</div>
    //                     </figure>
    //                 </div>
    //             </ons-col>
    //      </ons-row>`
    //                 $("#list").append(item);
    //                 console.log(doc.data().resturantname);

    //             });
    //         });

    // }

    if (page.id === 'ResturantListpage') {
        console.log("ResturantListpage");
        //ฟังก์ชันหน้าResturantlist
        $("#rimbtn").click(function() {
            $("#content")[0].load("ResturantMenu.html");
        });
    }


    // ************************************************
    // Shopping Cart API
    // ************************************************

    var shoppingCart = (function() {
        // =============================
        // Private methods and propeties
        // =============================
        cart = [];

        // Constructor
        function Item(name, price, count) {
            this.name = name;
            this.price = price;
            this.count = count;
        }

        // Save cart
        function saveCart() {
            sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
        }

        // Load cart
        function loadCart() {
            cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
        }
        if (sessionStorage.getItem("shoppingCart") != null) {
            loadCart();
        }


        // =============================
        // Public methods and propeties
        // =============================
        var obj = {};

        // Add to cart
        obj.addItemToCart = function(name, price, count) {
                for (var item in cart) {
                    if (cart[item].name === name) {
                        cart[item].count++;
                        saveCart();
                        return;
                    }
                }
                var item = new Item(name, price, count);
                cart.push(item);
                saveCart();
            }
            // Set count from item
        obj.setCountForItem = function(name, count) {
            for (var i in cart) {
                if (cart[i].name === name) {
                    cart[i].count = count;
                    break;
                }
            }
        };
        // Remove item from cart
        obj.removeItemFromCart = function(name) {
            for (var item in cart) {
                if (cart[item].name === name) {
                    cart[item].count--;
                    if (cart[item].count === 0) {
                        cart.splice(item, 1);
                    }
                    break;
                }
            }
            saveCart();
        }

        // Remove all items from cart
        obj.removeItemFromCartAll = function(name) {
            for (var item in cart) {
                if (cart[item].name === name) {
                    cart.splice(item, 1);
                    break;
                }
            }
            saveCart();
        }

        // Clear cart
        obj.clearCart = function() {
            cart = [];
            saveCart();
        }

        // Count cart 
        obj.totalCount = function() {
            var totalCount = 0;
            for (var item in cart) {
                totalCount += cart[item].count;
            }
            return totalCount;
        }

        // Total cart
        obj.totalCart = function() {
            var totalCart = 0;
            for (var item in cart) {
                totalCart += cart[item].price * cart[item].count;
            }
            return Number(totalCart.toFixed(2));
        }

        // List cart
        obj.listCart = function() {
            var cartCopy = [];
            for (i in cart) {
                item = cart[i];
                itemCopy = {};
                for (p in item) {
                    itemCopy[p] = item[p];

                }
                itemCopy.total = Number(item.price * item.count).toFixed(2);
                cartCopy.push(itemCopy)
            }
            return cartCopy;
        }

        // cart : Array
        // Item : Object/Class
        // addItemToCart : Function
        // removeItemFromCart : Function
        // removeItemFromCartAll : Function
        // clearCart : Function
        // countCart : Function
        // totalCart : Function
        // listCart : Function
        // saveCart : Function
        // loadCart : Function
        return obj;
    })();


    // *****************************************
    // Triggers / Events
    // ***************************************** 
    // Add item
    $('.add-to-cart').click(function(event) {
        event.preventDefault();
        var name = $(this).data('name');
        var price = Number($(this).data('price'));
        shoppingCart.addItemToCart(name, price, 1);
        displayCart();
    });

    // Clear items
    $('.clear-cart').click(function() {
        shoppingCart.clearCart();
        displayCart();
    });


    function displayCart() {
        var cartArray = shoppingCart.listCart();
        var output = "";
        for (var i in cartArray) {
            output += "<tr>" +
                "<td>" + cartArray[i].name + "</td>" +
                "<td>(" + cartArray[i].price + ")</td>" +
                "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>" +
                "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>" +
                "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>" +
                "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>" +
                " = " +
                "<td>" + cartArray[i].total + "</td>" +
                "</tr>";
        }
        $('.show-cart').html(output);
        $('.total-cart').html(shoppingCart.totalCart());
        $('.total-count').html(shoppingCart.totalCount());
    }

    // Delete item button

    $('.show-cart').on("click", ".delete-item", function(event) {
        var name = $(this).data('name')
        shoppingCart.removeItemFromCartAll(name);
        displayCart();
    })


    // -1
    $('.show-cart').on("click", ".minus-item", function(event) {
            var name = $(this).data('name')
            shoppingCart.removeItemFromCart(name);
            displayCart();
        })
        // +1
    $('.show-cart').on("click", ".plus-item", function(event) {
        var name = $(this).data('name')
        shoppingCart.addItemToCart(name);
        displayCart();
    })

    // Item count input
    $('.show-cart').on("change", ".item-count", function(event) {
        var name = $(this).data('name');
        var count = Number($(this).val());
        shoppingCart.setCountForItem(name, count);
        displayCart();
    });

    displayCart();

});