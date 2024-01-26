function verTest() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x);
  }
  console.log(x);
  return "Done";
}
console.log(verTest()); // Done
// Var : vdlnaha mra 1 o t applicat 3la kolshi
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x);
  }
  console.log(x);
  return "Done";
}
console.log(letTest());
// valeur d x tbdlat ghi wst loop
