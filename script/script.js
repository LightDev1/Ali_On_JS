document.addEventListener('DOMContentLoaded', () => {

    const search = document.querySelector('.search');
    const cartBtn = document.getElementById('cart');
    const wishListBtn = document.getElementById('wishlist');
    const cart = document.querySelector('.cart');

    const goodsWrapper = document.querySelector('.goods-wrapper');

    

    const createCartGoods = (id, title, price, img) => {
        const card = document.createElement('div');
        card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
        card.innerHTML = `<div class="card">
                            <div class="card-img-wrapper">
                                <img class="card-img-top" src="${img}" alt="">
                                <button class="card-add-wishlist"
                                data-goods-id="${id}"></button>
                            </div>
                            <div class="card-body justify-content-between">
                                <a href="#" class="card-title">${title}</a>
                                <div class="card-price">${price} ₽</div>
                                <div>
                                    <button class="card-add-cart"
                                    data-goods-id="${id}">Добавить в корзину</button>
                                </div>
                            </div>
                        </div>`;
        
        return card;
    };

    goodsWrapper.appendChild(createCartGoods(1, 'Дартс', 2000, 'img/temp/Archer.jpg'));
    goodsWrapper.appendChild(createCartGoods(2, 'Фламинго', 3000, 'img/temp/Flamingo.jpg'));
    goodsWrapper.appendChild(createCartGoods(3, 'Носки', 333, 'img/temp/Socks.jpg'));
  

    const closeCart = (event) => {
        const target = event.target;
        

        if (target === cart || target.classList.contains('cart-close')) {
        cart.style.display = '';
        }

    }

   
       
   
    

    const openCart = (event) => {
        event.preventDefault();
        cart.style.display = 'flex';
       
    };

    cartBtn.addEventListener('click', openCart);
    cart.addEventListener('click', closeCart);
    document.addEventListener('keydown', (event) => {
        console.log(event.key);
        if (event.key == 'Escape') {
            cart.style.display = '';
        }
    })
    

});