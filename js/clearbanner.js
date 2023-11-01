const banner = document.getElementById('banner');
const clearBtn = document.getElementById('clear');

const clear = () => {
    banner.style.display = 'none';
};

clearBtn.addEventListener('click', clear);