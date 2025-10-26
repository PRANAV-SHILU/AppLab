function monthly() {
    document.getElementById("toggle-1").style.backgroundColor = "blue";
    document.getElementById("toggle-1").style.color = "white";

    document.getElementById("toggle-2").style.backgroundColor = "white";
    document.getElementById("toggle-2").style.color = "black";

    document.getElementById('monthly-cards').style.display = '';
    document.getElementById('annual-cards').style.display = 'none';
}

function annual() {
    document.getElementById("toggle-1").style.backgroundColor = "white";
    document.getElementById("toggle-1").style.color = "black";

    document.getElementById("toggle-2").style.backgroundColor = "blue";
    document.getElementById("toggle-2").style.color = "white";

    document.getElementById('monthly-cards').style.display = 'none';
    document.getElementById('annual-cards').style.display = '';
}

function detail(element) {

    const faqDiv = element.closest('.faq');

    const content = faqDiv.querySelector('.faq-content');
    const icon = faqDiv.querySelector('.faq-icon');

    if (content.style.display === 'block') {
        content.style.display = 'none';
        icon.innerHTML = '+';
    } else {
        content.style.display = 'block';
        icon.innerHTML = '-';
    }
}