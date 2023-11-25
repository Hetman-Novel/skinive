// -> 801
if (window.matchMedia("(min-width: 801px)").matches) {

   // tab left
   document.getElementById('for-dev-usecases-tab-one').addEventListener('click', function () {

      // name tab
      document.getElementById('for-dev-usecases-tab-two').classList.remove('active');
      document.getElementById('for-dev-usecases-tab-three').classList.remove('active');
      document.getElementById('for-dev-usecases-tab-one').classList.add('active');

      // content
      document.getElementById('for-dev-usecases-tabContent-two').classList.remove('show-content');
      document.getElementById('for-dev-usecases-tabContent-three').classList.remove('show-content');
      document.getElementById('for-dev-usecases-tabContent-one').classList.add('show-content');
   });

   // tab center
   document.getElementById('for-dev-usecases-tab-two').addEventListener('click', function () {

      // name tab
      document.getElementById('for-dev-usecases-tab-one').classList.remove('active');
      document.getElementById('for-dev-usecases-tab-three').classList.remove('active');
      document.getElementById('for-dev-usecases-tab-two').classList.add('active');

      // content
      document.getElementById('for-dev-usecases-tabContent-one').classList.remove('show-content');
      document.getElementById('for-dev-usecases-tabContent-three').classList.remove('show-content');
      document.getElementById('for-dev-usecases-tabContent-two').classList.add('show-content');
   });

   // tab right
   document.getElementById('for-dev-usecases-tab-three').addEventListener('click', function () {

      // name tab
      document.getElementById('for-dev-usecases-tab-one').classList.remove('active');
      document.getElementById('for-dev-usecases-tab-two').classList.remove('active');
      document.getElementById('for-dev-usecases-tab-three').classList.add('active');

      // content
      document.getElementById('for-dev-usecases-tabContent-one').classList.remove('show-content');
      document.getElementById('for-dev-usecases-tabContent-two').classList.remove('show-content');
      document.getElementById('for-dev-usecases-tabContent-three').classList.add('show-content');
   });
}

// <-800
// right - tab left
document.getElementById('arrow-right-to-two').addEventListener('click', function () {

   // name tab
   document.getElementById('for-dev-usecases-tab-one').classList.remove('active');
   document.getElementById('for-dev-usecases-tab-two').classList.add('active');

   // arrows
   document.getElementById('arrow-right-to-two').classList.remove('active');
   document.getElementById('arrow-left-to-one').classList.add('active');
   document.getElementById('arrow-right-to-three').classList.add('active');

   // content
   document.getElementById('for-dev-usecases-tabContent-one').classList.remove('show-content');
   document.getElementById('for-dev-usecases-tabContent-two').classList.add('show-content');
});
// right - tab center
document.getElementById('arrow-right-to-three').addEventListener('click', function () {

   // name tab
   document.getElementById('for-dev-usecases-tab-two').classList.remove('active');
   document.getElementById('for-dev-usecases-tab-three').classList.add('active');

   // arrows
   document.getElementById('arrow-right-to-three').classList.remove('active');
   document.getElementById('arrow-right-to-two').classList.remove('active');
   document.getElementById('arrow-left-to-one').classList.remove('active');
   document.getElementById('arrow-left-to-two').classList.add('active');

   // content
   document.getElementById('for-dev-usecases-tabContent-two').classList.remove('show-content');
   document.getElementById('for-dev-usecases-tabContent-three').classList.add('show-content');
});

// left - tab center
document.getElementById('arrow-left-to-one').addEventListener('click', function () {

   // name tab
   document.getElementById('for-dev-usecases-tab-two').classList.remove('active');
   document.getElementById('for-dev-usecases-tab-one').classList.add('active');

   // arrows
   document.getElementById('arrow-left-to-one').classList.remove('active');
   document.getElementById('arrow-right-to-three').classList.remove('active');
   document.getElementById('arrow-right-to-two').classList.add('active');

   // content
   document.getElementById('for-dev-usecases-tabContent-two').classList.remove('show-content');
   document.getElementById('for-dev-usecases-tabContent-one').classList.add('show-content');
});

// left - tab right
document.getElementById('arrow-left-to-two').addEventListener('click', function () {

   // name tab
   document.getElementById('for-dev-usecases-tab-three').classList.remove('active');
   document.getElementById('for-dev-usecases-tab-two').classList.add('active');

   // arrows
   document.getElementById('arrow-left-to-two').classList.remove('active');
   document.getElementById('arrow-left-to-one').classList.add('active');
   document.getElementById('arrow-right-to-three').classList.add('active');

   // content
   document.getElementById('for-dev-usecases-tabContent-three').classList.remove('show-content');
   document.getElementById('for-dev-usecases-tabContent-two').classList.add('show-content');
});