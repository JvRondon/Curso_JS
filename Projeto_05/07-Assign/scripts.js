let moto = {
    marca : "ninja",
    luz : "led",
    cor : "vermelha"
}

let adc = {
    escapamento: true,
    capacete :true,
    assinatura : true
}

console.log(moto);

Object.assign(moto, adc);

console.log(moto);