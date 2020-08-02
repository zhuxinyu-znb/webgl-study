import('./math.wasm').then(m => {
    console.log(m);
    console.log(m.add(1, 2));
    console.log(m.square(1));
})