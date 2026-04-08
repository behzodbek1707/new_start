// Understanding Execution Context
var a = 10;

function foo() {
  var b = 20;
  console.log(a + b);
}

foo();

//Phase 1 -> Memory Creation
// a = undefined
// foo = function

// Phase 2: Execution
// a = 10

// Then:

// foo() → new execution context

// Inside foo:

// b = undefined → 20
