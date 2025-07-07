// Simple cart using localStorage
function addToCart(product){
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('পণ্যের অর্ডার কার্টে যোগ করা হয়েছে');
}

function loadCart(){
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const container = document.getElementById('cart-items');
  if(!container) return;
  container.innerHTML = '';
  cart.forEach((item, idx)=>{
    const div = document.createElement('div');
    div.className='cart-item';
    div.innerHTML = `<span>${item.name}</span><span>${item.price}৳</span>`;
    container.appendChild(div);
  });
  document.getElementById('total').innerText = cart.reduce((t,p)=>t+p.price,0)+'৳';
}

document.addEventListener('DOMContentLoaded', loadCart);
