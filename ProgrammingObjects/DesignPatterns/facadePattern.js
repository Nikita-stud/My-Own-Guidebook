//Facade Pattern = facade is a simple interface that hides complex underlying code

class HomeTheaterFacade {
  constructor() {
    this.tv = new TV();
    this.sound = new SoundSystem();
    this.streaming = new StreamingService();
    this.lights = new Lights();
  }

  watchMovie(movie) {
    console.log('--- Starting movie night ---');
    this.tv.turnOn();
    this.sound.turnOn();
    this.sound.setVolume(50);
    this.lights.dim(20);
    this.streaming.connect();
    this.streaming.play(movie);
  }

  endMovie() {
    console.log('--- Ending movie night ---');
    this.streaming.disconnect();
    this.sound.turnOff();
    this.tv.turnOff();
    this.lights.turnOn();
  }
}

const homeTheater = new HomeTheaterFacade();

homeTheater.watchMovie('Inception'); // One simple call!
homeTheater.endMovie(); // One simple call!
