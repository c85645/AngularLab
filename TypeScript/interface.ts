interface ClockInterface {
	currentTime: Date;
	setTime(d: Date);
}

class clock implements ClockInterface{
	currentTime: Date;
	setTime(d: Date){
		this.currentTime = d;
	}
	constructor(h: number, m:number){}
}