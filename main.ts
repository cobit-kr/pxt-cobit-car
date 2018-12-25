enum Motor {
    //% block="left"
    Left = 0,
    //% block="right"
    Right = 1
}

enum MotorDirection {
    //% block="CCW"
    CCW = 0,
    //% block="CW"
    CW = 1
}

/**
 * Functions to operate the moto:bit
 */
//% color=#f44242 icon="\uf1b9" block="cobit-car"
namespace cobit_car {

	/**
	 * Stops the motor.
	 */
    //% weight=90
    //% blockId="cobit_stopMotor" block="자동차 멈추기"
    export function motorStop(): void {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
    }

    /**
	 * Go forward
	 */
    //% speed.min=0 speed.max=100
    //% weight=90
    //% blockId="cobit_goForward" block="앞으로 %speed|% 속도로 가기"
    export function goForward(speed: number): void {
        let pwr = 0
        if (speed > 100) {
            speed = 100
        }
        pwr = speed * 10
        if (pwr > 1024) {
            pwr = 1024
        }
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, pwr)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, pwr)
    }

    /**
	 *  Go backward
	 */
    //% speed.min=0 speed.max=100
    //% weight=90
    //% blockId="cobit_goBackward" block="뒤로 %speed|% 속도로 가기"
    export function goBackward(speed: number): void {
        let pwr = 0
        if (speed > 100) {
            speed = 100
        }
        pwr = speed * 10
        if (pwr > 1024) {
            pwr = 1024
        }
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P14, (1024 - pwr))
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.analogWritePin(AnalogPin.P16, (1024 - pwr))
    }

    /**
	 *  Turn left
	 */
    //% speed.min=0 speed.max=100
    //% weight=90
    //% blockId="cobit_turnLeft" block="왼쪽으로" %speed|%속도로 회전하기"
    export function turnLeft(speed: number): void {
        let pwr = 0
        if (speed > 100) {
            speed = 100
        }
        pwr = speed * 10
        if (pwr > 1024) {
            pwr = 1024
        }
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, pwr)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
    }

    /**
	 *  Turn right
	 */
    //% speed.min=0 speed.max=100
    //% weight=90
    //% blockId="cobit_turnRight" block="오른쪽으로 %speed|% 속도로 회전하기"
    export function turnLight(speed: number): void {
        let pwr = 0
        if (speed > 100) {
            speed = 100
        }
        pwr = speed * 10
        if (pwr > 1024) {
            pwr = 1024
        }
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, pwr)
    }

    /**
	 *  Read ultrasonic sensor 
	 */
    //% weight=90  
    //% blockId="cobit_readUltraSonic" block="초음파센서 읽기"
    export function readUltra(): number {
        let value = 0
        pins.digitalWritePin(DigitalPin.P9, 0)
        basic.pause(2)
        pins.digitalWritePin(DigitalPin.P9, 1)
        basic.pause(10)
        pins.digitalWritePin(DigitalPin.P9, 0)
        value = pins.pulseIn(DigitalPin.P10, PulseValue.High)  /  58 
        return  value
    }   

    /**
	 * Moves the servo 1.
     * @param degree servo rotation degree 
	 */
    //% weight=90
    //% degree.min=0 degree.max=180
    //% blockId="cobit-base_rotateServo_first" block="첫번쩨 서보모터  %degree|도 회전하기"
    export function rotateServo1(degree: number): void {
        if (degree > 180) {
            degree = 180
        }
        if (degree < 0) {
            degree = 0
        }
        pins.servoWritePin(AnalogPin.P7, degree)
    }

    /**
	 * Moves the servo 2.
     * @param degree servo rotation degree 
	 */
    //% weight=90
    //% degree.min=0 degree.max=180
    //% blockId="cobit-base_rotateServo_second" block="두번째 서보모터 %degree|도 회전하기"
    export function rotateServo2(degree: number): void {
        if (degree > 180) {
            degree = 180
        }
        if (degree < 0) {
            degree = 0
        }  
        pins.servoWritePin(AnalogPin.P2, degree)
    }


    /**
	 * Moves the servo 3.
     * @param degree servo rotation degree 
	 */
    //% weight=90
    //% degree.min=0 degree.max=180
    //% blockId="cobit-base_rotateServo_third" block="세번째 서보모터 %degree|도 회전하기"
    export function rotateServo3(degree: number): void {
        if (degree > 180) {
            degree = 180
        }
        if (degree < 0) {
            degree = 0
        }
        pins.servoWritePin(AnalogPin.P3, degree)
    }  


    /**
	 *  Read IR sensor 1
	 */
    //% weight=90
    //% blockId="cobit-base_readIRsensor_first" block="첫번째 IR센서 읽기"
    export function readIRsensor1(): number {
        let value = 0
        value = pins.digitalReadPin(DigitalPin.P8)
        return value
    }

    /**
	 *  Read IR sensor 2
	 */
    //% weight=90
    //% blockId="cobit-base_readIRsensor_second" block="두번째 센서 읽기"
    export function readIRsensor2(): number {
        let value = 0
        value = pins.digitalReadPin(DigitalPin.P4)
        return value
    }      

}