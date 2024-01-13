const product = {
    'g': [
        {
            'id': '',
            'title': '',
            'img': '',
            'price': '',
            'sesc': ''
        }
    ]
}

function showProduct() {
    const arr = product.g;
    let output = "";
    arr.forEach(obj=>{
        // console.log(generateCard(obj));
       output += generateCard(obj);
    })

    return output;

    function generateCard({ id, title, img, price, desc }) {
        return `
        <div class="card" style="width: 18rem;">
            <img src="./res/img/vector1.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">H-01</h5>
                <span class="card-text">13,599.00 LKR</span>
                <br>
                <span>4 Hours flight time</span>
            </div>
        </div>
        `
    }
}


showProduct();