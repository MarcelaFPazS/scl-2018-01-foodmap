
 window.onload = (() => {
  /* Para esconder la pantalla de inicio y sale en los segundos*/
   setTimeout(function hide() { $('#splash').hide('fast');
   document.getElementById('container').style.display = 'block'; }, 4000);

   initMap();/* aparece el mapita */
 
 });

