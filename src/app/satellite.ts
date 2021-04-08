export class Satellite {
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name; 
        this.type = type; 
        this.launchDate = launchDate; 
        this.orbitType = orbitType; 
        this.operational = operational; 
    }
    shouldShowWarning(){
        if (this.type.toLowerCase() === "Space Debris"){
            return true;
        }else{
            return false; 
        }
        
    }
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

     
}
