const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.thespruceeats.com/thmb/545HnGh_eTNF5l3_QoW-OjSqncA=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/rice-balls-2031330-hero-images-01-ebc74ee7b0c348e2bc9055026d24d123.JPG",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let btnDOM = document.querySelector('.btn-container')
let menuDOM = document.querySelector('.section-center', '.row')
let btnList = ['All', 'Korea', 'Japan', 'China']

btnList.forEach((kitchen) => {
  let buton = document.createElement('button')
  buton.innerHTML = kitchen
  buton.classList.add('btn', "btn-outline-dark", "btn-item")
  buton.setAttribute('menuID', kitchen)
  buton.addEventListener('click', click)
  btnDOM.append(buton)
})

function click(){
  let selection = (this.getAttribute('menuID')=='All') ? menu : menu.filter(element => {
    return element.category == this.getAttribute('menuID')
  })
  showMENU(selection)
}

//show related menu according to clicked button
function showMENU(selection) {
  //menuDOM container should be clear. Otherwise, we cannot see the menu of a specific kitchen like Japan
  menuDOM.innerHTML = ""; 
  //Show all dishes in the selected kitchen in the innerHTML
  for (let kitchen in selection) {
    let selectedKitchen = document.createElement("div");
    // menu-items is a style written in style.css file
    // col-lg-6 is a style of bootstrap 
    selectedKitchen.classList.add("menu-items", "col-lg-6");
    //show all related items of selected kitchen in the innerHTML
    selectedKitchen.innerHTML = `<img src="${selection[kitchen].img}" alt="${selection[kitchen].title}" class="photo">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${selection[kitchen].title}</h4>
        <h4 class="price">${selection[kitchen].price}</h4>
      </div>
      <div class="menu-text">
      ${selection[kitchen].desc}
      </div>
    </div>`
    //add selected kitchen to the menu container
    menuDOM.append(selectedKitchen);
  }
};

// Show all menu
showMENU(menu);
