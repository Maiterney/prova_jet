function renderProducts() {
    /* let putProducts = document.querySelector('[data-show="products"]'); */
    let putAllProducts = document.querySelectorAll('[data-show="products"]');

    fetch("../petshopdata.json")
    .then(res => res.json())
    .then(data => {
        /* console.log(data.products, putProducts, limiterProducts); */
        putAllProducts.forEach(productDiv => {
            let limiterProducts = productDiv.dataset.quantity;
        
            // Mapear produtos pra renderizar
            let callproduct = data.products;
            callproduct.map(( product, index ) => {
                // Limitar produtos através de quantidade
                if (limiterProducts >= index + 1) {
                    productDiv.innerHTML += `
                        <div class="product_card">
                            <div class="card_header">
                                <img src="./assets/imgs/product/${product.image}" alt="">
                                <div class="store_buttons">
                                    <div class="favorites">
                                        <button class="btn_off_style" data-product-id="${product.id}"><img src="./assets/imgs/wish.png" alt=""></button>
                                    </div>
                                    <div class="cart">
                                        <button class="btn_off_style" data-product-id="${product.id}"><img src="./assets/imgs/cart.png" alt=""></button>
                                    </div>
                                </div>
                            </div>
                            <div class="card_content">
                                <div class="description">
                                    <p>${product.name}</p>
                                </div>
                                <div class="rating">
                                    <i ${product.rating >= 1 ? '':'class="out"'}>                                
                                        <svg ${product.rating >= 1 ? 'style="display:block;"':'style="display:none;"'}aria-hidden="true" focusable="false" data-prefix="fad" data-icon="stars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-stars fa-w-16 fa-2x"><g class="fa-group"><path fill="currentColor" d="M415.99814,80.0021a7.297,7.297,0,0,0-3.68757-5.96246L362.669,53.338,341.96545,3.697a6.65746,6.65746,0,0,0-11.926,0L309.33591,53.338,259.69042,74.03964a6.66417,6.66417,0,0,0,0,11.92493l49.64549,20.69969,20.70353,49.643a6.65746,6.65746,0,0,0,11.926,0L362.669,106.66426l49.64159-20.69969A7.31629,7.31629,0,0,0,415.99814,80.0021Zm93.05649,139.2264L469.339,202.67109,452.7801,162.961a5.32533,5.32533,0,0,0-9.53925,0L426.678,202.67109l-39.7117,16.55741a5.33544,5.33544,0,0,0,0,9.54033L426.678,245.3282l16.56282,39.7081a5.32376,5.32376,0,0,0,9.53925,0L469.339,245.3282l39.71561-16.55937a5.33544,5.33544,0,0,0,0-9.54033Z" class="fa-secondary"></path><path fill="currentColor" d="M364.294,267.29343,259.4951,251.99764l-46.90716-95.19633c-8.39078-16.99879-32.68813-17.2019-41.18829,0l-46.90716,95.19633L19.69358,267.29343C.89634,269.99636-6.71318,293.19783,6.99021,306.49376l75.90772,73.99472L64.89758,485.07476c-3.20319,18.9049,16.68782,33.107,33.29752,24.2014l93.7987-49.3871,93.79869,49.3871A22.95361,22.95361,0,0,0,319.09,485.07476L301.199,380.48848l75.89209-73.99472C390.70077,293.19783,383.09125,269.99636,364.294,267.29343Z" class="fa-primary"></path></g></svg>
                                        <svg ${product.rating >= 1 ? 'style="display:none;"':'style="display:block;"'} aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-2x"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" class=""></path></svg>
                                    </i>
                                    <i ${product.rating >= 2 ? '':'class="out"'}>                                
                                        <svg ${product.rating >= 2 ? 'style="display:block;"':'style="display:none;"'}aria-hidden="true" focusable="false" data-prefix="fad" data-icon="stars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-stars fa-w-16 fa-2x"><g class="fa-group"><path fill="currentColor" d="M415.99814,80.0021a7.297,7.297,0,0,0-3.68757-5.96246L362.669,53.338,341.96545,3.697a6.65746,6.65746,0,0,0-11.926,0L309.33591,53.338,259.69042,74.03964a6.66417,6.66417,0,0,0,0,11.92493l49.64549,20.69969,20.70353,49.643a6.65746,6.65746,0,0,0,11.926,0L362.669,106.66426l49.64159-20.69969A7.31629,7.31629,0,0,0,415.99814,80.0021Zm93.05649,139.2264L469.339,202.67109,452.7801,162.961a5.32533,5.32533,0,0,0-9.53925,0L426.678,202.67109l-39.7117,16.55741a5.33544,5.33544,0,0,0,0,9.54033L426.678,245.3282l16.56282,39.7081a5.32376,5.32376,0,0,0,9.53925,0L469.339,245.3282l39.71561-16.55937a5.33544,5.33544,0,0,0,0-9.54033Z" class="fa-secondary"></path><path fill="currentColor" d="M364.294,267.29343,259.4951,251.99764l-46.90716-95.19633c-8.39078-16.99879-32.68813-17.2019-41.18829,0l-46.90716,95.19633L19.69358,267.29343C.89634,269.99636-6.71318,293.19783,6.99021,306.49376l75.90772,73.99472L64.89758,485.07476c-3.20319,18.9049,16.68782,33.107,33.29752,24.2014l93.7987-49.3871,93.79869,49.3871A22.95361,22.95361,0,0,0,319.09,485.07476L301.199,380.48848l75.89209-73.99472C390.70077,293.19783,383.09125,269.99636,364.294,267.29343Z" class="fa-primary"></path></g></svg>
                                        <svg ${product.rating >= 2 ? 'style="display:none;"':'style="display:block;"'} aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-2x"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" class=""></path></svg>
                                    </i>
                                    <i ${product.rating >= 3 ? '':'class="out"'}>                                
                                        <svg ${product.rating >= 3 ? 'style="display:block;"':'style="display:none;"'}aria-hidden="true" focusable="false" data-prefix="fad" data-icon="stars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-stars fa-w-16 fa-2x"><g class="fa-group"><path fill="currentColor" d="M415.99814,80.0021a7.297,7.297,0,0,0-3.68757-5.96246L362.669,53.338,341.96545,3.697a6.65746,6.65746,0,0,0-11.926,0L309.33591,53.338,259.69042,74.03964a6.66417,6.66417,0,0,0,0,11.92493l49.64549,20.69969,20.70353,49.643a6.65746,6.65746,0,0,0,11.926,0L362.669,106.66426l49.64159-20.69969A7.31629,7.31629,0,0,0,415.99814,80.0021Zm93.05649,139.2264L469.339,202.67109,452.7801,162.961a5.32533,5.32533,0,0,0-9.53925,0L426.678,202.67109l-39.7117,16.55741a5.33544,5.33544,0,0,0,0,9.54033L426.678,245.3282l16.56282,39.7081a5.32376,5.32376,0,0,0,9.53925,0L469.339,245.3282l39.71561-16.55937a5.33544,5.33544,0,0,0,0-9.54033Z" class="fa-secondary"></path><path fill="currentColor" d="M364.294,267.29343,259.4951,251.99764l-46.90716-95.19633c-8.39078-16.99879-32.68813-17.2019-41.18829,0l-46.90716,95.19633L19.69358,267.29343C.89634,269.99636-6.71318,293.19783,6.99021,306.49376l75.90772,73.99472L64.89758,485.07476c-3.20319,18.9049,16.68782,33.107,33.29752,24.2014l93.7987-49.3871,93.79869,49.3871A22.95361,22.95361,0,0,0,319.09,485.07476L301.199,380.48848l75.89209-73.99472C390.70077,293.19783,383.09125,269.99636,364.294,267.29343Z" class="fa-primary"></path></g></svg>
                                        <svg ${product.rating >= 3 ? 'style="display:none;"':'style="display:block;"'} aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-2x"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" class=""></path></svg>
                                    </i>
                                    <i ${product.rating >= 4 ? '':'class="out"'}>                                
                                        <svg ${product.rating >= 4 ? 'style="display:block;"':'style="display:none;"'}aria-hidden="true" focusable="false" data-prefix="fad" data-icon="stars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-stars fa-w-16 fa-2x"><g class="fa-group"><path fill="currentColor" d="M415.99814,80.0021a7.297,7.297,0,0,0-3.68757-5.96246L362.669,53.338,341.96545,3.697a6.65746,6.65746,0,0,0-11.926,0L309.33591,53.338,259.69042,74.03964a6.66417,6.66417,0,0,0,0,11.92493l49.64549,20.69969,20.70353,49.643a6.65746,6.65746,0,0,0,11.926,0L362.669,106.66426l49.64159-20.69969A7.31629,7.31629,0,0,0,415.99814,80.0021Zm93.05649,139.2264L469.339,202.67109,452.7801,162.961a5.32533,5.32533,0,0,0-9.53925,0L426.678,202.67109l-39.7117,16.55741a5.33544,5.33544,0,0,0,0,9.54033L426.678,245.3282l16.56282,39.7081a5.32376,5.32376,0,0,0,9.53925,0L469.339,245.3282l39.71561-16.55937a5.33544,5.33544,0,0,0,0-9.54033Z" class="fa-secondary"></path><path fill="currentColor" d="M364.294,267.29343,259.4951,251.99764l-46.90716-95.19633c-8.39078-16.99879-32.68813-17.2019-41.18829,0l-46.90716,95.19633L19.69358,267.29343C.89634,269.99636-6.71318,293.19783,6.99021,306.49376l75.90772,73.99472L64.89758,485.07476c-3.20319,18.9049,16.68782,33.107,33.29752,24.2014l93.7987-49.3871,93.79869,49.3871A22.95361,22.95361,0,0,0,319.09,485.07476L301.199,380.48848l75.89209-73.99472C390.70077,293.19783,383.09125,269.99636,364.294,267.29343Z" class="fa-primary"></path></g></svg>
                                        <svg ${product.rating >= 4 ? 'style="display:none;"':'style="display:block;"'} aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-2x"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" class=""></path></svg>
                                    </i>
                                    <i ${product.rating == 5 ? '':'class="out"'}>                                
                                        <svg ${product.rating == 5 ? 'style="display:block;"':'style="display:none;"'}aria-hidden="true" focusable="false" data-prefix="fad" data-icon="stars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-stars fa-w-16 fa-2x"><g class="fa-group"><path fill="currentColor" d="M415.99814,80.0021a7.297,7.297,0,0,0-3.68757-5.96246L362.669,53.338,341.96545,3.697a6.65746,6.65746,0,0,0-11.926,0L309.33591,53.338,259.69042,74.03964a6.66417,6.66417,0,0,0,0,11.92493l49.64549,20.69969,20.70353,49.643a6.65746,6.65746,0,0,0,11.926,0L362.669,106.66426l49.64159-20.69969A7.31629,7.31629,0,0,0,415.99814,80.0021Zm93.05649,139.2264L469.339,202.67109,452.7801,162.961a5.32533,5.32533,0,0,0-9.53925,0L426.678,202.67109l-39.7117,16.55741a5.33544,5.33544,0,0,0,0,9.54033L426.678,245.3282l16.56282,39.7081a5.32376,5.32376,0,0,0,9.53925,0L469.339,245.3282l39.71561-16.55937a5.33544,5.33544,0,0,0,0-9.54033Z" class="fa-secondary"></path><path fill="currentColor" d="M364.294,267.29343,259.4951,251.99764l-46.90716-95.19633c-8.39078-16.99879-32.68813-17.2019-41.18829,0l-46.90716,95.19633L19.69358,267.29343C.89634,269.99636-6.71318,293.19783,6.99021,306.49376l75.90772,73.99472L64.89758,485.07476c-3.20319,18.9049,16.68782,33.107,33.29752,24.2014l93.7987-49.3871,93.79869,49.3871A22.95361,22.95361,0,0,0,319.09,485.07476L301.199,380.48848l75.89209-73.99472C390.70077,293.19783,383.09125,269.99636,364.294,267.29343Z" class="fa-primary"></path></g></svg>
                                        <svg ${product.rating == 5 ? 'style="display:none;"':'style="display:block;"'} aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-2x"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" class=""></path></svg>
                                    </i>
                                </div>
                                <div class="price">
                                    <span class="discount_value">R$ ${product.discount.toFixed(2)}</span>
                                    <span class="value">R$ ${product.price.toFixed(2)}</span>
                                </div>
                            </div>
                            <div class="card_button">
                                <button class="btn_second" data-product-id="${product.id}">
                                    Comprar
                                </button>
                            </div>
                        </div>
                    `;
                }
            })
        })
    })
    
}

export { renderProducts }