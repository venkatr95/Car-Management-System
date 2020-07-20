export class Car {
    id: number;
    model: string;
    engine: string;
    infSystem: string; // infotainment system
    design: string; // car design
    currentLocation: string; // First latitude, then longitude (This can be changed later to dictionary type with map)
    
    Car() {
        this.id = null;
        this.model = null;
        this.engine = null;
        this.infSystem = null;
        this.design = null;
        this.currentLocation = null; 
    }
}
