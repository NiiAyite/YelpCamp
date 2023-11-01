const dropdown = document.getElementById('dropdown');
const menuBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

const open = () => {
    dropdown.style.display = 'flex';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
}

const close = () => {
    dropdown.style.display = 'none';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
}

menuBtn.addEventListener('click', open);
closeBtn.addEventListener('click', close);