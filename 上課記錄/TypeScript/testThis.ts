let myData = {
  name: 'Jeff',
  weather: 'sunny',
  printMessages: function() {
    console.log('Hello ' + this.name + '.');
    console.log('Today is ' + this.weather + '.');
  }
};
myData.printMessages();
