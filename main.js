function main() {
  var self = this;

  self.screenWidth = screen.width;
  self.listItems = document.getElementsByClassName("nav-item");

  document.getElementById("arrow-navigate").onclick = function() {
    var navId = self.listItems[1].dataset.navId;
    var elementToScrollTo = document.getElementById(navId);
    elementToScrollTo.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  for (var i = 0; i < self.listItems.length; i++) {
    self.listItems[i].addEventListener("click", function(element) {
      var navId = element.currentTarget.dataset.navId;
      var elementToScrollTo = document.getElementById(navId);
      elementToScrollTo.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  }

  if (self.screenWidth <= 480) {
    document
      .getElementById("logo")
      .setAttribute("src", "./images/Logo--Mobile.svg");
  }
}

main();

// $(document).ready(function() {
//   // Add smooth scrolling to all links
//   $(".nav-item").on("click", function(event) {
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $("html, body").animate(
//         {
//           scrollTop: $(hash).offset().top
//         },
//         800,
//         function() {
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         }
//       );
//     } // End if
//   });
// });

// var self = this;
// self.currentHash = "#home";

// // Select all links with hashes
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, "") ==
//         this.pathname.replace(/^\//, "") &&
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       if (self.currentHash !== this.hash) {
//         var target = $(this.hash);

//         target = target.length
//           ? target
//           : $("[name=" + this.hash.slice(1) + "]");
//         // Does a scroll target exist?
//         if (target.length) {
//           // Only prevent default if animation is actually gonna happen
//           event.preventDefault();
//           $(".parallax").animate(
//             {
//               scrollTop: target.offset().top
//             },
//             1000,
//             function() {
//               // Callback after animation
//               // Must change focus!
//               var $target = $(target);
//               $target.focus();
//               if ($target.is(":focus")) {
//                 // Checking if the target was focused
//                 return false;
//               } else {
//                 $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
//                 $target.focus(); // Set focus again
//               }
//             }
//           );
//         }
//         window.location.hash = this.hash;
//         self.currentHash = this.hash;
//       }
//     }
//   });
