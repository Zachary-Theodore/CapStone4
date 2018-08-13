
var itemName = "";
var itemPrice = 0;
var receipt = []
function displayClick(choice)
{
    
    var items = ["Milk", "Eggs", "Cereal", "Juice", "Butter", "Cheese"]
    var price = [1.98, 3.40, 4.83, 2.99, 4.00, 7.89]

    receipt.push(items[choice]);


    //console.log(items[choice]);

    itemPrice = itemPrice + price[choice];
    
    //console.log(itemPrice);
}
function checkOut()
{
    
    for (var i = 0; i < receipt.length; i++)
   {
    console.log(receipt[i]);
    

    }
    console.log(itemPrice.toFixed(2));
   
    

}