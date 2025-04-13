const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");


//show sidebar
menuBtn.addEventListener('click', () => {
      sideMenu.style.display = 'block';
})


//close sidebar
closeBtn.addEventListener('click', () => {
      sideMenu.style.display = 'none';
})


//change theme
themeToggler.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme-variables');
      themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
      themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

//Fill order in table
Orders.forEach(order => {
      const tr = document.createElement.createElement('tr');
       const trContent = `
                          <td>${order.productName}</td>
                          <td>${order.productName}</td>
                          <td>${order.productName}</td>
                          <td class="${order.shipping === 
                              'Declined' ? 'danger' : order.
                              shipping === 'pending' ? 'warning'
                              : 'primary'}">${order.shipping}</td>
                          <td class="Primary">Details</td>
                          `;
      tr.innerHTML = trContent;
      document.querySelector('table tbody').appendChild('tr');
})