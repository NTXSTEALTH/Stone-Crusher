

const product_button = document.getElementById('Products')
const product_section = document.getElementById('Product-section')

const Company_button = document.getElementById('Company')
const Company_section = document.getElementById('Company-section')



Company_button.addEventListener('click', () => { 
    Company_section.scrollIntoView({behavior: 'smooth'}); 
});

product_button.addEventListener('click', () => { 
    product_section.scrollIntoView({behavior: 'smooth'}); 
});