
/**
 * Functions to operate the moto:bit
 */
//% color=#f44242 icon="\uf1b9" block="cobit-car"
namespace cobit_car {

    /**
	 *  Read ultrasonic sensor 
	 */
    //% weight=90  
    //% blockId="cobit_readUltraSonic" block="초음파센서 읽기"
    export function readUltraSonic(): number {
        let value = 0
        pins.digitalWritePin(DigitalPin.P9, 0)
        basic.pause(2)
        pins.digitalWritePin(DigitalPin.P9, 1)
        basic.pause(10)
        pins.digitalWritePin(DigitalPin.P9, 0 )
        value = pins.pulseIn(DigitalPin.P10, PulseValue.High)  /  58 
        return  value
    }   
}