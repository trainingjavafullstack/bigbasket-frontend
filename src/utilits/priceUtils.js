export const calculateDiscount=(mrp,price)=>{
    if(!mrp || mrp<=price) return 0;
    return Math.round(((mrp-price)/mrp)*100);
}