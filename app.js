const searchProducts=()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>showDetails(data))
}

var arr=new Array(20).fill(0);

const showDetails=(products)=>{
    const details=document.getElementById('card-display');

    products.forEach(element => {
        console.log(element);

        const ratingStar=ratings(element.rating.rate);
       

        const div=document.createElement('div');

        div.innerHTML=`
        
        <div class="flex flex-col items-center w-11/12 h-full drop-shadow-xl rounded-xl bg-orange-200 text-center">

            <img class="p-2 w-6/12 h-1/3" src="${element.image}" alt="">

            <p class="p-2 text-xs h-1/5 font-medium sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-xl">${element.title}</p>

            <p class="text-sm font-medium w-11/12 sm:text-sm md:text-sm lg:text-lg xl:text-lg 2xl:text-4xl">$<span>${element.price}</span></p>

            <div class="">
                ${ratingStar}
            </div>

            
            <div>
            <button class="p-2 m-2 text-sm font-medium bg-blue-200 rounded bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl" onclick="addTOcard(${element.id},${element.price})" >Add Button</button>

            <button class="p-2 m-2 text-sm font-medium bg-blue-200 rounded bg-red-500 hover:bg-red-700 sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl" onclick="RemoveTOcard(${element.id},${element.price})">Remove Button</button>

            </div>
            
        

            
            
        </div>
        
        `

        details.appendChild(div);
    });
}

 let count=0;
 const addTOcard=(id,price)=>{
    arr[id-1]++;
    count=count+1;
    document.getElementById('totall-item').innerHTML=count;
    const oldprice=parseFloat(document.getElementById('price').innerText);
    const newPrice=oldprice+price;
    document.getElementById('price').innerHTML=newPrice.toFixed(2);

    const curPrice=parseFloat(document.getElementById('price').innerText)

    
    if(curPrice<500)
        {
            document.getElementById('delivery').innerHTML=0;
        }
    
        else if(curPrice>=500&&curPrice<=800)
        {
            document.getElementById('delivery').innerHTML=50; 
        }
    
        else if(curPrice>800)
            {
                document.getElementById('delivery').innerHTML=120; 
            }

            const deliveryPrice=parseFloat(document.getElementById('delivery').innerText);

            const newTotalPrice=curPrice+deliveryPrice;

    document.getElementById('totall-price').innerHTML=newTotalPrice.toFixed(2);    
}


 const RemoveTOcard=(R_id,R_price)=>{
    if(arr[R_id-1]>0)
    {
        arr[R_id-1]--;
       
         let itemCount=parseInt(document.getElementById('totall-item').innerText);

        itemCount=itemCount-1;
        document.getElementById('totall-item').innerHTML=itemCount;
        count=itemCount;

        const R_old_price=parseFloat(document.getElementById('price').innerText)
        const R_new_price=R_old_price-R_price;
        document.getElementById('price').innerHTML=R_new_price.toFixed(2);

        const R_curPrice=parseFloat(document.getElementById('price').innerText)

        if(R_curPrice<500)
        {
            document.getElementById('delivery').innerHTML=0;
        }
    
        else if(R_curPrice>=500&&curPrice<=800)
        {
            document.getElementById('delivery').innerHTML=50; 
        }
    
        else if(R_curPrice>800)
            {
                document.getElementById('delivery').innerHTML=120; 
            }

            const R_deliveryPrice=parseFloat(document.getElementById('delivery').innerText);

            const R_newTotalPrice=R_curPrice+R_deliveryPrice;

            document.getElementById('totall-price').innerHTML=R_newTotalPrice.toFixed(2);
    }


 }


 const orderBtn=()=>{
    const x=parseFloat(document.getElementById('totall-price').innerText)
    document.getElementById('orderCon').innerHTML=x.toFixed(2)
 }




const ratings=(rate)=>{
    if(rate>=4){
      return star=` <h3><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> ${rate}</h3>`
    }
   else if(rate>=3 && rate<4)
   {
     return star=` <h3><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> ${rate}</h3>`
   }
   else if(rate>=2 && rate<3){
     return star=` <h3><i class="fas fa-star"></i><i class="fas fa-star"></i> ${rate}</h3>`
   }
   else{
    return star=` <h3><i class="fas fa-star"></i> ${rate}</h3>`
   }
   
  }


  searchProducts();