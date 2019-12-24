function main() {
    var self = this;

    self.screenWidth = screen.width;
    self.listItems = document.getElementsByClassName('nav-item');
    
    document.getElementById('arrow-navigate').onclick = function () {
        var navId = self.listItems[1].dataset.navId;
        var elementToScrollTo = document.getElementById(navId);
        elementToScrollTo.scrollIntoView({block: 'start', behavior: 'smooth'});
    }

    for (var i = 0; i < self.listItems.length; i++) {        
        self.listItems[i].addEventListener('click', function (element) {
            var navId = element.currentTarget.dataset.navId;
            var elementToScrollTo = document.getElementById(navId);
            elementToScrollTo.scrollIntoView({block: 'start', behavior: 'smooth'});
        });
    }    

    if(self.screenWidth <= 480) {
        document.getElementById('logo').setAttribute('src', './images/Logo--Mobile.svg');
    }
}

main();