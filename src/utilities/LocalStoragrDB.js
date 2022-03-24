//using localstorage as our database hosting

// const addToLocalStorag = id => {
//     let cartItems = {};

// const gettingItems = localStorage.getItem('cart-items')
// if(gettingItems){
//     cartItems = JSON.parse(gettingItems);
// }

// //add items in local storage
//     const quantity = cartItems[id];
//     if (quantity) {
//         const newQuantity = quantity + 1;
//         cartItems[id] = newQuantity;
//     } else {
//         cartItems[id] = 1;
//     }
//     localStorage.setItem('cart-items', JSON.stringify(cartItems));
// }

// export { addToLocalStorag }

const addToLocalStorag = id => {
    // let newCart = {};

    // const storedItems = localStorage.getItem('new-items-cart')
    // if(storedItems){
    //     newCart = JSON.parse(storedItems)
    // }

    // //adding system in localstorage
    // const quantity = newCart[id];
    // if (quantity) {
    //     const newQuantity = quantity + 1;
    //     newCart[id] = newQuantity;
    // } else {
    //     newCart[id] = 1;
    // }
    // localStorage.setItem('new-items-cart', JSON.stringify(newCart));

    const cartItems = {};
    const storedItems = localStorage.getItem('setting-items');
    if (storedItems) {
        cartItems = JSON.parse(storedItems);
    }

    const productQuantity = cartItems[id];
    if (productQuantity) {
        const newQuantity = productQuantity + 1;
        cartItems[id] = newQuantity;
    } else {
        cartItems[id] = 1;
    }
    localStorage.setItem('setting-items', JSON.stringify(cartItems));

}



export {
    addToLocalStorag
}