const menu =[
    {
    id:1,
    title : "Classic Pancakes",
    category : "breakfast",
    price: 15.99,
    img: "./images/pancake.jpg",
    desc: "Fluffy buttermilk pancakes served with maple syrup and butter."
},{
    id:2,
    title : "Salmon Teriyaki",
    category : "Dinner",
    price: 24.50,
    img: "images/SalmonTeriyaki.jpg",
    desc: "Pan-seared salmon glazed with teriyaki sauce, served with jasmine rice and stir-fried vegetables."
},{
    id:3,
    title : "Classic Chocolate Shake",
    category : "Shakes",
    price: 7.99,
    img: "./images/ChocolateShake.jpg",
    desc: "Rich chocolate ice cream blended with milk, topped with whipped"
},{
    id:4,
    title : "Grilled Chicken Salad",
    category : "Lunch",
    price: 14.99,
    img: "./images/ChickenSalad.jpg",
    desc: "Mixed greens with grilled chicken, avocado, cucumber, cherry tomatoes, and balsamic vinaigrette."
}
];

const items = document.querySelector(".items");

const container = document.querySelector(".button-container");


window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    displayMenuButtons();
});



function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        
        return `<div class="item">
            <img src= ${item.img} alt= ${item.title}>
            <div class="item-info">
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
                <p>${item.desc}
                </p>
                <h5>Category: ${item.category}</h5>
            </div>
            <br>
        </div>`;
    });
    displayMenu = displayMenu.join("");
    items.innerHTML = displayMenu;

}
function displayMenuButtons(){
    const categories = menu.reduce(
        function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;

        },['all']
    );
    const categoryBtns = categories.map(function(category){
        return ` <button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join("");
    container.innerHTML = categoryBtns;   
    const filterBtns = container.querySelectorAll(".filter-btn");

    filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.category === category){
                return menuItem;
            }
            
        });
        //console.log(menuCategory);
        if(category=== 'all'){
            displayMenuItems(menu);  
        }
        else{
            displayMenuItems(menuCategory);
        }
        });
    });

}