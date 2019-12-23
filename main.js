function main() {
    var self = this;

    self.screenWidth = screen.width;
    self.listItems = document.getElementsByClassName('nav-item');

    for (var i = 0; i < self.listItems.length; i++) {        
        self.listItems[i].addEventListener('click', function (element) {
            var navId = element.currentTarget.dataset.navId;
            var elementToScrollTo = document.getElementById(navId);
            elementToScrollTo.scrollIntoView({block: 'end', behavior: 'smooth'});
        });
    }

    if(self.screenWidth <= 480) {
        document.getElementById('logo').setAttribute('src', './images/Logo--Mobile.svg');
    }
}

main();