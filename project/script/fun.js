let bagItems = [ ];
onLoad();
function onLoad(){
  let bagItemStr=localStorage.getItem('bagItems');
  bagItems=bagItemStr ? JSON.parse( bagItemStr ) : [];

displayItemsHomePage();
displayBagIcons();
}

function addToBag(itemId){ 
  
  let btn = document.getElementsByTagName("button")[0];
  let audio = btn.getElementsByTagName("audio")[0];

  bagItems.push(itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displayBagIcons();

  console.log(audio)
  audio.play();


}

function displayBagIcons(){ 
  let bagItemCountElement = document.querySelector('.bag-item-count');

  if(bagItems.length > 0){
    bagItemCountElement.style.visibility = 'visible';
  bagItemCountElement.innerText = bagItems.length;
  }else { 
    bagItemCountElement.style.visibility = 'hidden';
  }
  
}

function displayItemsHomePage(){ 
  let itemscontainerElement = document.querySelector('.items-container');

if( ! itemscontainerElement){
  console.log(itemscontainerElement);
  return;
}

let innerHTML='';
items.forEach(item=> { 
  innerHTML+= `
  <div class="item-card">
  <img class="item-image" src="${item.image}" alt="item images">
  <div class = "item-card-text">
  <div class="rating">
      ${item.rating.stars}⭐|${item.rating.count} 
  </div>
  <div class="company-name">${item.company}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="price">
  <span class="current-price">TK ${item.current_price}</span>
  <span class="original-price">Tk ${item.original_price}</span>
  <span class="discount">(${item.discount_percentage}% OFF)</span>
  </div>
  </div>
  <button class="btn-add-bag" onclick="addToBag(${item.id})">
  <audio src = "yamete.mp3" type = "audio/mpeg">
  </audio>
  Add to Bag</button>
  
  </div>`;
});
itemscontainerElement.innerHTML = innerHTML;
let btn = document.getElementsByTagName("button")[0];
console.log("Hello")
console.log(btn)
// btn.addEventListener("click",()=>{
//   let audio = btn.getElementsByTagName("audio")[0];
//   console.log(audio)
//   audio.play();
// })

}

