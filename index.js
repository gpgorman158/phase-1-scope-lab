var customerName = 'bob';
const leastFavoriteCustomer = "gerald";

console.log(customerName);

function upperCaseCustomerName(){
    return customerName.toUpperCase();
}
console.log(upperCaseCustomerName());

function setBestCustomer(){
    bestCustomer = 'not bob';
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
function changeLeastFavoriteCustomer (){
    leastFavoriteCustomer = 'not gerald';
}
//console.log(changeLeastFavoriteCustomer());
console.log(leastFavoriteCustomer);