document.querySelectorAll('.clickable').forEach((div) => {
    div.addEventListener('click', function(event) {
        let clickedDiv = event.currentTarget;
        speakerClicked(clickedDiv);
    });
});
document.body.addEventListener('hover', function (event) {

})

function speakerClicked(clickedDiv) {
    let img = clickedDiv.querySelector('img');
    img.classList.add('active-img')
    let cardTitle = clickedDiv.querySelector('.card-title');
    let clickedOnce = clickedDiv.dataset.clicked === 'true';
    cardTitle.classList.add('card-title-active');
    if (!clickedOnce) {
        clickedDiv.dataset.clicked = 'true';
    } else {
        clickedDiv.dataset.clicked = 'false';
        goToLink(clickedDiv.dataset.label);
    }
    clickedDiv.addEventListener('mouseleave', function() {
        clickedDiv.dataset.clicked = 'false';
        cardTitle.classList.remove('card-title-active');
        img.classList.remove('active-img');
    })
}

function goToLink(link) {
    window.open(link, '_blank');
}