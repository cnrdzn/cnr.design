document.addEventListener('DOMContentLoaded', function () {

  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
  /*
  document.getElementById("navMyWorks").onclick = function() {
    document.querySelector('#myWorks').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };
  document.getElementById("navAboutMe").onclick = function() {
    document.querySelector('#aboutMe').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };
  document.getElementById("navMyContactInfo").onclick = function() {
    document.querySelector('#myContactInfo').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };
  */
});


