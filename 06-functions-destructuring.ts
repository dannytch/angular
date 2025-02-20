
interface Product {
    description: string;
    price: number;
}

const phone: Product ={
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product ={
    description: "ipad Air",
    price: 250.0
}
interface TaxCalculationOpstions {
    tax: number;
    products:Product[];
}

function taxCalculation(options:TaxCalculationOpstions):number[]{
    let total = 0;
     options.products.forEach( product =>{
        total += product.price;
     });
      return [total, total*options.tax ];
}

const shopingCart = [phone, tablet];
const tax = 0.15;


const result = taxCalculation({
    products: shopingCart,
    tax: tax
});

console.log('Total', result[0]);
console.log('Tax', result[1]);



export{}