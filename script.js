const hamburger=document.getElementById('hamburger');
const navLinks=document.getElementById('navLinks');
if(hamburger&&navLinks){hamburger.addEventListener('click',()=>{navLinks.classList.toggle('active')})}
document.querySelectorAll('.nav-links a').forEach(link=>{link.addEventListener('click',()=>{if(navLinks)navLinks.classList.remove('active')})});
document.querySelectorAll('.faq-question').forEach(button=>{button.addEventListener('click',()=>{const answer=button.nextElementSibling;const icon=button.querySelector('.faq-icon');document.querySelectorAll('.faq-answer').forEach(item=>{if(item!==answer&&item.classList.contains('active')){item.classList.remove('active');const previous=item.previousElementSibling;if(previous){const previousIcon=previous.querySelector('.faq-icon');if(previousIcon)previousIcon.textContent='+'}}});if(answer){answer.classList.toggle('active');if(icon)icon.textContent=answer.classList.contains('active')?'−':'+'}})});

let products=[];
async function loadProducts(){
try{
const response=await fetch('product.json',{cache:'no-store'});
if(!response.ok)throw new Error(`HTTP ${response.status}`);
products=await response.json();
if(!Array.isArray(products))throw new Error('Invalid product data');
renderFeatured();
renderCategories();
renderNew();
renderPopular();
renderFree();
renderTemplatesPage();
}catch(e){
console.error('Unable to load product.json:',e);
showProductLoadErrors();
}
}

function showProductLoadErrors(){
['featuredGrid','categoriesGrid','newGrid','popularGrid','freeGrid','templatesGrid'].forEach(id=>{
const el=document.getElementById(id);if(el)el.innerHTML='<div class="empty-state"><strong>Unable to load templates.</strong><p>Please refresh the page and try again.</p></div>';
});
}

function escapeHtml(value){
return String(value??'').replace(/[&<>\'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function createProductCard(product){
const originalPrice=product.originalPrice?`<span class="original">$${escapeHtml(product.originalPrice)}</span>`:'';
const priceDisplay=product.isFree?'<span class="product-price">Free</span>':`<div class="product-price">${originalPrice}$${escapeHtml(product.price)}</div>`;
const badge=product.isFree?'<span class="product-badge badge-free">Free</span>':(product.originalPrice?'<span class="product-badge badge-discount">-'+Math.round((1-product.price/product.originalPrice)*100)+'%</span>':'<span class="product-badge badge-premium">Premium</span>');
const technology=Array.isArray(product.technology)?product.technology:[];
const tech=technology.slice(0,3).map(escapeHtml).join(' · ');
const id=encodeURIComponent(product.id);
return `<article class="product-card">
<img src="${escapeHtml(product.thumbnail)}" alt="${escapeHtml(product.name)}" class="product-img" loading="lazy" onerror="this.style.visibility='hidden'">
<div class="product-body">
${badge}
<h3 class="product-name">${escapeHtml(product.name)}</h3>
<p class="product-desc">${escapeHtml(product.shortDescription)}</p>
<p class="product-tech">${tech}</p>
<div class="product-footer">
${priceDisplay}
<span class="product-rating" aria-label="Rating ${escapeHtml(product.rating)}">★ ${escapeHtml(product.rating)}</span>
</div>
<div class="product-actions">
<a href="product.html?id=${id}" class="product-btn btn-preview">Preview</a>
<a href="product.html?id=${id}" class="product-btn btn-buy">View Details</a>
</div>
</div>
</article>`;
}

function renderGrid(grid,items){
if(!grid)return;
if(!items.length){grid.innerHTML='<div class="empty-state"><strong>No templates found.</strong><p>Try another category or search.</p></div>';return;}
grid.innerHTML=items.map(createProductCard).join('');
}

function renderFeatured(){
const grid=document.getElementById('featuredGrid');
if(!grid)return;
renderGrid(grid,products.filter(p=>p.isFeatured).slice(0,6));
}
function renderNew(){
const grid=document.getElementById('newGrid');
if(!grid)return;
renderGrid(grid,[...products].sort((a,b)=>new Date(b.lastUpdated)-new Date(a.lastUpdated)).slice(0,6));
}
function renderPopular(){
const grid=document.getElementById('popularGrid');
if(!grid)return;
renderGrid(grid,products.filter(p=>p.isPopular).slice(0,6));
}
function renderFree(){
const grid=document.getElementById('freeGrid');
if(!grid)return;
renderGrid(grid,products.filter(p=>p.isFree).slice(0,3));
}
function renderCategories(){
const grid=document.getElementById('categoriesGrid');
if(!grid)return;
const categories=['Website Templates','Landing Pages','Admin Dashboards','SaaS','E-commerce','AI','Portfolio','Blog','UI Kits','Mobile UI','Business','Free'];
const icons={'Website Templates':'🌐','Landing Pages':'🚀','Admin Dashboards':'📊','SaaS':'☁️','E-commerce':'🛒','AI':'🤖','Portfolio':'🎨','Blog':'📝','UI Kits':'🧩','Mobile UI':'📱','Business':'💼','Free':'🎁'};
grid.innerHTML=categories.map(cat=>{
const count=products.filter(p=>p.category===cat).length;
return `<a href="templates.html?category=${encodeURIComponent(cat)}" class="category-card"><div class="category-icon">${icons[cat]||'📦'}</div><div class="category-name">${escapeHtml(cat)}</div><div class="category-count">${count} templates</div></a>`;
}).join('');
}

function renderTemplatesPage(){
const grid=document.getElementById('templatesGrid');
if(!grid)return;
const searchInput=document.getElementById('templateSearch');
const categorySelect=document.getElementById('categoryFilter');
const priceSelect=document.getElementById('priceFilter');
const technologySelect=document.getElementById('technologyFilter');
const sortSelect=document.getElementById('sortFilter');
const countEl=document.getElementById('templateCount');
const params=new URLSearchParams(window.location.search);
const requestedCategory=params.get('category');
if(requestedCategory&&categorySelect){categorySelect.value=requestedCategory;}
const update=()=>{
let result=[...products];
const q=(searchInput?.value||'').trim().toLowerCase();
const category=categorySelect?.value||'all';
const price=priceSelect?.value||'all';
const technology=technologySelect?.value||'all';
const sort=sortSelect?.value||'newest';
if(q)result=result.filter(p=>[p.name,p.description,p.shortDescription,p.category,...(p.tags||[]),...(p.technology||[])].join(' ').toLowerCase().includes(q));
if(category!=='all')result=result.filter(p=>p.category===category);
if(price==='free')result=result.filter(p=>p.isFree);
if(price==='under20')result=result.filter(p=>!p.isFree&&Number(p.price)<20);
if(price==='20to40')result=result.filter(p=>!p.isFree&&Number(p.price)>=20&&Number(p.price)<=40);
if(price==='over40')result=result.filter(p=>!p.isFree&&Number(p.price)>40);
if(technology!=='all')result=result.filter(p=>(p.technology||[]).includes(technology));
if(sort==='newest')result.sort((a,b)=>new Date(b.lastUpdated)-new Date(a.lastUpdated));
if(sort==='price-low')result.sort((a,b)=>Number(a.price)-Number(b.price));
if(sort==='price-high')result.sort((a,b)=>Number(b.price)-Number(a.price));
if(sort==='rating')result.sort((a,b)=>Number(b.rating)-Number(a.rating));
renderGrid(grid,result);
if(countEl)countEl.textContent=`${result.length} template${result.length===1?'':'s'}`;
};
[searchInput,categorySelect,priceSelect,technologySelect,sortSelect].forEach(el=>{if(el){el.addEventListener('input',update);el.addEventListener('change',update);}});
update();
}

loadProducts();
