async function ambildata() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json(); 


        const productid = document.getElementById('product');

        data.forEach(product => {
            productid.innerHTML += `
            <div class="card">
              <img src="${product.image}" alt="${product.title}">
              <h2>${product.title}</h2>
              <p>$${product.price}</p>
            </div>`;
        });

    } catch (error) {
        console.log('Data Error:', error);
    }
}

ambildata();