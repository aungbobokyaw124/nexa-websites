const hamburger=document.getElementById('hamburger');
const navLinks=document.getElementById('navLinks');
if(hamburger){hamburger.addEventListener('click',()=>{navLinks.classList.toggle('active')})}
document.querySelectorAll('.nav-links a').forEach(link=>{link.addEventListener('click',()=>{navLinks.classList.remove('active')})});
document.querySelectorAll('.faq-question').forEach(button=>{button.addEventListener('click',()=>{const answer=button.nextElementSibling;const icon=button.querySelector('.faq-icon');document.querySelectorAll('.faq-answer').forEach(item=>{if(item!==answer&&item.classList.contains('active')){item.classList.remove('active');item.previousElementSibling.querySelector('.faq-icon').textContent='+'}});answer.classList.toggle('active');icon.textContent=answer.classList.contains('active')?'−':'+'})});

let products=[];
async function loadProducts(){
try{
const response=await fetch('product.json');
products=await response.json();
renderFeatured();
renderCategories();
renderNew();
renderPopular();
renderFree();
}catch(e){console.log('Products loading...')}
}

function createProductCard(product){
const originalPrice=product.originalPrice?`<span class="original">$${product.originalPrice}</span>`:'';
const priceDisplay=product.isFree?'<span class="product-price">Free</span>':`<div class="product-price">${originalPrice}$${product.price}</div>`;
const badge=product.isFree?'<span class="product-badge badge-free">Free</span>':(product.originalPrice?'<span class="product-badge badge-discount">-'+Math.round((1-product.price/product.originalPrice)*100)+'%</span>':'<span class="product-badge badge-premium">Premium</span>');
const tech=product.technology?product.technology.slice(0,3).join(' · '):'';
return`
<div class="product-card">
<img src="${product.thumbnail}" alt="${product.name}" class="product-img" loading="lazy">
<div class="product-body">
${badge}
<h3 class="product-name">${product.name}</h3>
<p class="product-desc">${product.shortDescription}</p>
<p class="product-tech">${tech}</p>
<div class="product-footer">
${priceDisplay}
<span class="product-rating">★ ${product.rating}</span>
</div>
<div class="product-actions">
<a href="product.html?id=${product.id}" class="product-btn btn-preview">View Details</a>
<a href="login.html" class="product-btn btn-buy">Buy Now</a>
</div>
</div>
</div>`;
}

function renderFeatured(){
const grid=document.getElementById('featuredGrid');
if(!grid)return;
const featured=products.filter(p=>p.isFeatured).slice(0,6);
grid.innerHTML=featured.map(createProductCard).join('');
}

function renderNew(){
const grid=document.getElementById('newGrid');
if(!grid)return;
const sorted=[...products].sort((a,b)=>new Date(b.lastUpdated)-new Date(a.lastUpdated)).slice(0,6);
grid.innerHTML=sorted.map(createProductCard).join('');
}

function renderPopular(){
const grid=document.getElementById('popularGrid');
if(!grid)return;
const popular=products.filter(p=>p.isPopular).slice(0,6);
grid.innerHTML=popular.map(createProductCard).join('');
}

function renderFree(){
const grid=document.getElementById('freeGrid');
if(!grid)return;
const free=products.filter(p=>p.isFree).slice(0,6);
grid.innerHTML=free.map(createProductCard).join('');
}

function renderCategories(){
const grid=document.getElementById('categoriesGrid');
if(!grid)return;
const categories=['Website Templates','Landing Pages','Admin Dashboards','SaaS','E-commerce','AI','Portfolio','Blog','UI Kits','Mobile UI','Business','Free'];
const icons={'Website Templates':'🌐','Landing Pages':'🚀','Admin Dashboards':'📊','SaaS':'☁️','E-commerce':'🛒','AI':'🤖','Portfolio':'🎨','Blog':'📝','UI Kits':'🧩','Mobile UI':'📱','Business':'💼','Free':'🎁'};
grid.innerHTML=categories.map(cat=>{
const count=products.filter(p=>p.category===cat).length;
return`<a href="templates.html?category=${encodeURIComponent(cat)}" class="category-card"><div class="category-icon">${icons[cat]||'📦'}</div><div class="category-name">${cat}</div><div class="category-count">${count} templates</div></a>`;
}).join('');
}

loadProducts();
