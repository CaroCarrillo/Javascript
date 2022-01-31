/*CASA DE PISCIS
Crea un programa que emule las funciones de un cajero automático (al solicitar un retiro, se entregará la cantidad con la menor denominación de billetes posible).

Considera lo siguiente:
El cajero sólo cuenta con $10000 de saldo.
Cada transacción se descontará del saldo del cajero.
La información se recopilará dentro del mismo HTML (puedes usar botones e inputs).
La información del retiro y la denominación de los billetes se mostrará en el HTML.*/



class cajero{
    constructor(saldoCajero){
        this.saldoCajero = saldoCajero;
        //Cambio que generara el Cajero
        this.milBilleteCambio = 0;
        this.quinientosBilleteCambio = 0
        this.doscientosBilleteCambio = 0
        this.cienBilleteCambio = 0
        this.cincuentaBilleteCambio = 0
        this.veinteBilleteCambio = 0

    }

    entregarRestaurar(){
        let leyendaCambio = `Tu cambio es de : ${this.milBilleteCambio} Billetes de mil, ${this.quinientosBilleteCambio} Billetes de quinientos, 
        ${this.doscientosBilleteCambio} Billetes de doscientos,
        ${this.cincuentaBilleteCambio} Billetes de cincuenta,
        ${this.veinteBilleteCambio} Billetes de veinte`

        this.milBilleteCambio = 0;
        this.quinientosBilleteCambio = 0
        this.doscientosBilleteCambio = 0
        this.cienBilleteCambio = 0
        this.cincuentaBilleteCambio = 0
        this.veinteBilleteCambio = 0

        return leyendaCambio
    }

    retirarDinero(retiro){
        if (this.saldoCajero < retiro){
            return "Saldo insuficiente, el saldo con el que cuenta el cajero es de: " + this.saldoCajero;
        }
        if (retiro % 20 != 0){
            return "Esta cantidad tiene que ser múltiplo de $20"
        }
        return this.calcularCambio(retiro)
    }
    calcularCambio(retiro){
        this.saldoCajero = this.saldoCajero - retiro;
        while(retiro != 0){//mientras el retiro no llegue a cero(que es la condición) se tiene que ejecutar la sentencia del while
            retiro  = this.validandoBillete(retiro) // Evalua dinero en validando billete y si el retiro no llega a cero el ciclo continua metiendose a los otros casos del switch
            if(retiro < 20 ){
                break
            }
            
        }
        return this.entregarRestaurar()

    }
    validandoBillete(dinero){
        switch (true) {
            case (dinero >= 1000):
                this.milBilleteCambio = Math.floor(dinero / 1000) // Math floor redonde a el intero mas cercano hacia abajo ejemplo 1580/1000 = 1.58 Math floor redondea a 1
                dinero = dinero - (this.milBilleteCambio * 1000) // Retiramos la cantidad de retiro con el numero de billetes para cada denominacion
                console.log(dinero)
                return dinero
            case (dinero < 1000 && dinero >= 500):
                this.quinientosBilleteCambio = Math.floor(dinero / 500) // Math floor redonde a el intero mas cercano hacia abajo ejemplo 1580/1000 = 1.58 Math floor redondea a 1
                dinero = dinero - (this.quinientosBilleteCambio * 500) // Retiramos la cantidad de retiro con el numero de billetes para cada denominacion
                console.log(dinero)
                return dinero
            case (dinero < 500 && dinero >= 200):
                this.doscientosBilleteCambio = Math.floor(dinero / 200) // Math floor redonde a el intero mas cercano hacia abajo ejemplo 1580/1000 = 1.58 Math floor redondea a 1
                dinero = dinero - (this.doscientosBilleteCambio * 200) // Retiramos la cantidad de retiro con el numero de billetes para cada denominacion
                console.log(dinero)
                return dinero
            case (dinero < 200 && dinero >= 100):
                this.cienBilleteCambio = Math.floor(dinero / 100) // Math floor redonde a el intero mas cercano hacia abajo ejemplo 1580/1000 = 1.58 Math floor redondea a 1
                dinero = dinero - (this.cienBilleteCambio * 100) // Retiramos la cantidad de retiro con el numero de billetes para cada denominacion
                console.log(dinero)
                return dinero
            case (dinero < 100 && dinero >= 50):
                this.cincuentaBilleteCambio = Math.floor(dinero / 50) // Math floor redonde a el intero mas cercano hacia abajo ejemplo 1580/1000 = 1.58 Math floor redondea a 1
                dinero = dinero - (this.cincuentaBilleteCambio * 50) // Retiramos la cantidad de retiro con el numero de billetes para cada denominacion
                console.log(dinero)
                return dinero
            case (dinero < 50 && dinero >= 20):
                this.veinteBilleteCambio = Math.floor(dinero / 20) // Math floor redonde a el intero mas cercano hacia abajo ejemplo 1580/1000 = 1.58 Math floor redondea a 1
                dinero = dinero - (this.veinteBilleteCambio * 20) // Retiramos la cantidad de retiro con el numero de billetes para cada denominacion
                console.log(dinero)
                return dinero
            default:
                console.log("Algo salio mal, verifica con el operador"  +  dinero)
            break;
            }
        }



}

cajeroAutomatico = new cajero(10000)

let botonRetiro = document.getElementById("botonRetiro")
let inputDinero = document.getElementById("retiroInput")
let leyenda = document.getElementById("leyenda")

botonRetiro.onclick = function(){
    let cantidadRetiro = inputDinero.value 
    console.log(cajeroAutomatico.retirarDinero(Number(cantidadRetiro)))
}