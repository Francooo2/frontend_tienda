export const getMainData = async (url) => {

    try {
        const response = await fetch(url)
        const products = await response.json()
        return products
    } catch (error) {
        return 'Productos no disponibles en este momento, favor intentar en unos minutos nuevamente.'
    }

}

export const renderCards = (elements, nameArray, list, parent, imgDefault, select, category) => {

    for (const product of elements) {

        let optionsDiscount = ['', '10% Desc.', '20% Desc.', '30% Desc.', '40% Desc.', '50% Desc.', '60% Desc.']
        let discount = optionsDiscount[Math.floor((Math.random() * ((optionsDiscount.length - 1) - 0 + 1)) + 0)] 

        if (product.category.image) {
            parent.innerHTML += `<article class="card">
                <div class="card__header">
                    <p>${product.category.name.toUpperCase()}</p>
                    <p class="card__discount">${discount}</p>   
                </div>  
                <img class="card__img" src=${product.images[0]} alt="Producto a la venta">
                <p class="card__text">${product.title}</p>
                <div class="card__footer">
                    <p>$${product.price}</p>
                    <input type="number" value="1" min="1" class="lateral__input">
                    <i class="fas fa-cart-plus card__plus"></i>   
                </div>
            </article>`
        } else {
            parent.innerHTML += `<article class="card">
            <div class="card__header">
                <p>${product.category.name.toUpperCase()}</p>
                <p class="card__discount">${discount}</p>   
            </div>    
            <img class="card__img" src=${imgDefault} alt="Producto a la venta">
            <p class="card__text">${product.title}</p>
            <div class="card__footer">
                <p>$${product.price}</p>
                <input type="number" value="1" min="1" class="lateral__input">
                <i class="fas fa-cart-plus card__plus"></i>   
            </div>
        </article>`
        }

        let opt = document.createElement('option')
        opt.value = product.title
        list.appendChild(opt)

        if ( category.includes(product.category.name) === false ) {
            let opt2           = document.createElement('option')
            opt2.value     = product.category.name
            opt2.innerHTML = product.category.name
            select.appendChild(opt2)
        }

        nameArray.push(product.title)
        category.push(product.category.name)
    }

    return nameArray

}