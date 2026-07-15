let age : number =25;
let disc : boolean =true;
let price :number =0;

if(age<12){
    price=60;
}else if (age<60){
    price=120;
}else {
    price=100;
}
let finalprice =price;
if (disc){
    finalprice=price-(price*0.10);
}

console.log('คุณอายุ',age,'ปี');
console.log('ตั๋วราคาปกติ ', price,'บาท');
if(disc){
    console.log('ได้รับส่วนลด 10% ราคาสุทธิ',finalprice,'บาท');
}else {
    console.log('ไม่ได้รับส่วนลด ราคา สุทธิ',finalprice,'บาท');
}