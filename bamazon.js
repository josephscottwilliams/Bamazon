// Make sure to intall npm, myql, and inquirer 
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// CREATE the connection of the database and store as a variable
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "PianoMan01",
    database: "bamazon_db"
});

//CONNECT THE CONNECTION Use established variable for connected database!! Console.log if there are errors in connection.
connection.connect(function (err) {
    if (err) {
        console.log(err);
        return;

    }
    // console.log("connected as id " + connection.threadId);
    displayProducts();
})

// Display the items that are available for purchase from Database (Console.log) Include IDs, names, prices
function displayProducts() {
    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        // for (var i = 0; i < res.length; i++) {
        // console.log(res[i].id + res[i].product_name + res[i].price );
        purchaseItems(res);

    }

    );
}

// Ask the user what item they would like to purchase
// Ask the user how many of that item they would like to purchase

function purchaseItems() {

    var query = "SELECT * FROM products";
    connection.query(query, function (err, results) {
        if (err) throw err;
        // console.table(res);
    

    var inventoryQuantity;
    var inventoryId;

    // Asking the Questions
    inquirer.prompt([{
        type: "input",
        name: "item",
        message: "What would you like to purchase (Select the ID number)?",

    },
    {
        type: "input",
        name: "quantity",
        message: "How many would you like to purchase (Select the ID number)?"
    },
    

    ]).then(function (answer) {
        // Get the answer of user for item ID 
        // Get the answer of user for desired item quantity
        var userChoice = answer.item;
        var userQuantity = answer.quantity;

        for(var b = 0; b <results.length; b++){
            if(b === answer.choice){
                console.log("we found a match")
            }
        }
        

        console.log(userChoice);

        // After we know user ID, we need to know the actual quantity of ID - Then, see if it is less than total in stock
        // Get the total quantity of item in stock



        var query2 = "SELECT id FROM products";
        // Get results into an array

        connection.query(query2, function (err, res) {
            if (err) throw err;
            console.table(res);
            for(var i = 0; i < res.length; i++) {
                if (i === userChoice) {
                   
                    console.log("We've got a match!" + res[i].stock_quantity)
                }

            }
            // Loop through an array of all IDs for products...
            // If product ID matches userChoice - get the quantity of this ID

            // If the userQuantity < stock_quantity{console.log("Awesome, we have that in stock!")}

            // Create and Call a function that will subtract/update mysql database when the quantity is selected

            // Create and Call a function that will tell the customer the total price of the purchase



            // We need to check to see if the quantity the user selected is available in stock:
            // We also need to get the quantity of that specific item in a variable to compare it


            // for(var i = 0; i< results.length){
            //     if(userChoice === )
            // }
            // var inventoryQuantity = results[i].stock_quantity;

            // if(answer.item === )
            // var userChoice = answer.item;
            // var userQuantity = answer.quantity;
            // // Establish a variable for retreiving info from database

            // for(var i =0; i<idfromdatabase.length;i++){
            //     if(userChoice === [i]) && (userQuantity < quantityfromdatabase) {
            //         Display: "Awesome, we have that in stock!"
            //         Display: "Insufficient quantity in stock!"
            //     }
            // }
            //    var product = checkInventory();
            //    var productId = parseInt();
            //    var quantity = 
            // if{

            // }
            // else{
            //     console.log("Sorry we don't have that in stock")
            //     displayProducts();
            // }

            // var product = function checkInventory();
            // console.log("working?")

            // if(answer.purchaseItems ){
            //     goodYearsForArtist();
            // }
            // else if(answer.selectSearch === "SONG"){
            //     songInfo();



            // Display the total cost of the Purchase
            // displayTotalCost();
        });
    })
})
}



function checkInventory() {

}

function displayTotalCost() {

}


// Compare 



// function start(){
//     inquirer.prompt([{
//         type: "list",
//         name: "selectSearch",
//         message: "Welcome to this LIT music app, What would you like to search for?",
//         choices: ["ARTIST", "SONG", "ALBUM", "BIGGEST HIT OF THE YEAR"]

//     }]).then(function(answer){
//         if(answer.selectSearch === "ARTIST"){
//             goodYearsForArtist();
//         }
//         else if(answer.selectSearch === "SONG"){
//             songInfo();
//         }
//     })


// };