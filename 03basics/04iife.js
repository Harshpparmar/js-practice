//  immediately invoked function expressions (IIFE)


(function tea(){

    /// named IIFE
    console.log(`db connected`);
})();

////// IIFE is used for reducing or removing the pollution of global scope 

(  (name) => {
    console.log(`db connected 2 ${name}`);
} )('harsh')

