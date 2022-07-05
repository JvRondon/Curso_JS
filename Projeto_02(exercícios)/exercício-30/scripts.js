let mouse = ["MouseBang","MousePad","MouseHolder","MouseCharger","MouseUltralight","MouseBluetooth","MousePersonalizado"];
let teclado = ["Bluetooth","deMarca","Camelô"];

function verficarPerifericos(arr) {
    if(arr.length >= 5) {
        console.log("Muitos Elementos");
    } else{
        console.log("Poucos Elementos");
    }
}

console.log(verficarPerifericos(mouse));
console.log(verficarPerifericos(teclado));