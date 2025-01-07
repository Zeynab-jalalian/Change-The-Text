let text=document.querySelector('p');
let btn=document.querySelector('button');
let arr=['میشه یه خواهشی ازت کنم؟',
    'همیشه لبخند بزن',
    'چون اینطوری خیلی خوشگل تر میشی',
    'و همیشه بلند بخند',
    'تو یه آدم منحصر به فردی',
    'پس قدر وجودت رو بدون',
    'چون هیچ وقت ',
    'کسی مثل تو ',
    'توی این جهان ',
    'نبوده و نیست و نخواهد بود',
    'تو بهترینی'
]
let index=0;
btn.addEventListener('click',function(){
   if(index<arr.length){
    text.innerHTML=arr[index];
    index++;
   }else{
    text.innerHTML=':)'
   }
})