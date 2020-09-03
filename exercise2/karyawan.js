export default class karyawan{
    constructor(nama, id){
        this.nama = nama;
        this.id = id;
    }

    greetings(){
        return `hello ${this.nama} id kamu adalah ${this.id}`
    }
}
