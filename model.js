class Chronometer {

    constructor(){
        this.isOn = false;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.centiseconds = 0;
        this.chronometerID = "";
        this.visor = document.getElementById("relogio");
    }

    getHours(){
        return String(this.hours).padStart(2, "0");
    }

    getMinutes(){
        return String(this.minutes).padStart(2, "0");
    }

    getSeconds(){
        return String(this.seconds).padStart(2, "0");
    }

    getCentiseconds(){
        return String(this.centiseconds).padStart(2, "0");
    }

    getTime(){

        if(this.getCentiseconds() == 100){
            this.seconds += 1;
            this.centiseconds = 0;
        }

        if(this.getSeconds() == 60){
            this.minutes += 1;
            this.seconds = 0;
        }

        if(this.getMinutes() == 60){
            this.hours += 1;
            this.minutes = 0;
        }

        let template = `${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}.${this.getCentiseconds()}`

        return template;
    }

    start(){
        if(this.isOn == false){
            this.isOn = true;
            this.show();
            this.chronometerID = setInterval(() => {
                this.centiseconds += 1;
                this.show();
            }, 10)
        }
    }

    stop(){
        this.isOn = false;
        clearInterval(this.chronometerID);
    }

    show(){
        this.visor.innerHTML = this.getTime();
    }

    reset(){
        this.stop()
        this.centiseconds = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.show();
    }

}
