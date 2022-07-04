let carro = {
    marca: 'Nissan',
    portas : 4,
    modelo : 'skyline',
    turbo : true ,
    motor : 'not rotary'
}
carro.tetoSolar = false;
console.log(carro);
delete carro.motor;
console.log(carro);