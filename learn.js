// var
//         - Function Scope
//         - Can be redeclared
//         - Can assign different value
//         - When you call variable before declare it var will return undefined
//         - It generates property with the name of the variable inside the window object but var shouldn't be inside any scope, so it's not organized and accessable from everywhere

//     let
//         - Block Scope
//         - Cannot be redeclared
//         - Can assign different value
//         - When you call variable before declare it let will return error which is more logical
//         - It doesn't generates property with the name of the variable inside the window object and it will return undefined

//     const
//         - Block Scope
//         - Cannot be redeclared
//         - Cannot assign new value
//         // - When you call variable before declare it let will return error which is more logical
// - It doesn't generates property with the name of the variable inside the window object and it will return undefined

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
