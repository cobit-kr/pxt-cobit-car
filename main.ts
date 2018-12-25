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
	 * Run left or right motor to CCW or CW with speed of percent. 
     * @param motor left or right motor 
     * @param direction CCW or CW 
     * @param speed speed as percent
	 */
    //% blockId="cobit_runMotor" block="run %motor motor|motor %direction|at %speed|%"
    //% speed.min=0 speed.max=100
    //% weight=80
    export function runMotor(motor: Motor, direction: MotorDirection, speed: number): void {
        let pwr = 0
        speed = Math.abs(speed)
        if (speed > 100) {
            speed = 100
        }

        pwr = speed * 10
        if (pwr > 1024) {
            pwr = 1024
        }

        if (motor == Motor.Left) {
            if (direction == MotorDirection.CCW) {
                pins.digitalWritePin(DigitalPin.P13, 1)
                pins.analogWritePin(AnalogPin.P14, (1024 - pwr))
            } else if (direction == MotorDirection.CW) {
                pins.digitalWritePin(DigitalPin.P13, 0)
                pins.analogWritePin(AnalogPin.P14, pwr)
            }

        } else if (motor == Motor.Right) {
            if (direction == MotorDirection.CCW) {
                pins.digitalWritePin(DigitalPin.P15, 1)
                pins.analogWritePin(AnalogPin.P16, (1024 - pwr))
            } else if (direction == MotorDirection.CW) {
                pins.digitalWritePin(DigitalPin.P15, 1)
                pins.analogWritePin(AnalogPin.P16, pwr)
            }
        }
    }

	/**
	 * Stops the motor.
	 */
    //% weight=90
    //% blockId="cobit_stopMotor" block="motor stop"
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
    //% blockId="cobit_goForward" block="go forward at %speed|%"
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
    //% blockId="cobit_goBackward" block="go backward at %speed|%"
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
    //% blockId="cobit_turnLeft" block="turn left at %speed|%"
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
    //% blockId="cobit_turnRight" block="turn right at %speed|%"
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
    //% blockId="cobit-base_rotateServo" block="서보모터 1 %degree|도 회전하기"
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
    //% blockId="cobit-base_rotateServo" block="서보모터 2 %degree|도 회전하기"
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
    //% blockId="cobit-base_rotateServo" block="서보모터 2 %degree|도 회전하기"
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
    //% blockId="cobit-base_readIRsensor" block="IR센서 읽기"
    export function readIRsensor1(): number {
        let value = 0
        value = pins.digitalReadPin(DigitalPin.P8)
        return value
    }

    /**
	 *  Read IR sensor 2
	 */
    //% weight=90
    //% blockId="cobit-base_readIRsensor" block="IR센서 읽기"
    export function readIRsensor2(): number {
        let value = 0
        value = pins.digitalReadPin(DigitalPin.P4)
        return value
    }

}