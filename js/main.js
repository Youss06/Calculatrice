function verification(entree) {
  var car ="1234567890[]()+-.*,/";
  for (var i = 0; i < entree.length; i++)
   if (car.indexOf(entree.charAt(i))<0 ) return false;
  return true;
 }

 function calcul() {
   var a = 0;
  if (verification(document.calculatrice.result.value))
     a = eval(document.calculatrice.result.value);
   document.calculatrice.result.value = a;
 }

 function ajouter(caracteres) {
  document.calculatrice.result.value =
  document.calculatrice.result.value + caracteres;
 }
