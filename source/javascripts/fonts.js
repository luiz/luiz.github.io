WebFontConfig = {
  google: { families: [ 'Yanone+Kaffeesatz:400,700:latin', 'Numans:400:latin', 'Rancho:400:latin', 'Gafata:400:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
