// This is a single line comment

/**
 *  This is a multiple
 *  line comment
 * */

/**
 *    let age = 37;
 *    const name = 'Luke';
 *    var address = '123 long avenue';
 * 
    *  let $variable = 0;
    *  let variable = 0;
    *  let _variable = 0;
    * 
    * let firstName = "Luke";
    * let lastName = "Ashton-Johnson";
 */

const productName = 'Baked Beans';
let price = 1.27;
let quantity = 4;
let inStock = true;
let discountAmount = 10;

// console.log( 'Product Name:', productName );
// console.log( 'Price:',price );
// console.log( 'Quantity:', quantity );
// console.log( 'In Stock:',inStock );
// console.log( 'Discount:', discountAmount );

// console.log( typeof productName );
// console.log( typeof price );
// console.log( typeof quantity );
// console.log( typeof inStock );
// console.log( typeof discountAmount );
 
// document.write( "<p>" + productName + "</p>");

// let myName = '';
// let numOfKids = 0;
// let isMarried;

// let newName = 'Luke';
// let newNumOfKids = '1';

// console.log( Boolean(myName) );
// console.log( Boolean(numOfKids) );
// console.log( Boolean(isMarried) );
// console.log( Boolean(null) );
// console.log( Boolean(undefined) );
// console.log( '--------')
// console.log( Boolean(newName) );
// console.log( Boolean(newNumOfKids) );

function showProductName() {
   console.log( productName );
}

function totalPrice( productPrice,productQuantity ) {
   console.log( productPrice * productQuantity );
}

// totalPrice( price, quantity );

// function checkAvailability( productInStock ) {
//    console.log( productInStock );
// }

const checkAvailability = productInStock => console.log( productInStock );

// checkAvailability( inStock );

// let global = 'Global scope';

// const localScope = () => {
//    let scope = 'Local Scope'; // Local
//    console.log(`Inside the function localScope: ${scope}`);
//    console.log(`From outside the function : ${global}`);
// }

// localScope();

// console.log( global );

const productDiscount = () => {
   if( quantity > 1 ) {
      let newPrice = discountAmount - ( price * quantity );
      console.log( newPrice );
   } else {
      console.log( price * quantity );
   }
}

// productDiscount();


// switch Statement

// const level = 6;

// switch( level ) {
//    case 1 :
//       console.log('You are on level 1');
//       break;
//    case 2 :
//       console.log('You are on level 2');
//       break;
//    case 3 :
//       console.log('You are on level 3');
//       break;
//    case 4 :
//       console.log('You are on level 4');
//       break;
//    default:
//       console.log('No level found');
//       break;
// }

// if( level === 1 ) {
//    console.log('You are on level 1');
// } else if(level === 2) {
//    console.log('You are on level 2');
// } //....
// else {
//    console.log('No level found');
// }

// ....... code


const drinkOrder = ( drink, size ) => {

   switch( drink ) {
      case 'cola':
         console.log( `${size} : ${drink}`);
         break;
      case 'lemonade':
         console.log( `${size} : ${drink}`);
         break;
      case 'orangeade':
         console.log( `${size} : ${drink}`);
         break;
      default:
         console.log(`We currently don't have your ${drink} in stock`);
         break;
   }

}

drinkOrder('cola', 'x-large');