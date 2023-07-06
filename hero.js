class Hero {
    constructor(nama,nyawa,power) {
        this.nama = nama;
        this.nyawa = nyawa;
        this.power = power;
        this.cetak();
    }
    cetak(){
        console.log(`ini hero gue ${this.nama}, ${this.nyawa}, ${this.power}`);
    }
    serang(enemy){
        enemy.nyawa = enemy.nyawa - this.power;
        if (enemy.nyawa<=0) {
            console.log ("dead")
            
        } else {
        this.cetak();
            
        }

    }
}

module.exports=Hero;