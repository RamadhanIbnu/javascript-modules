import karyawan from "./karyawan.js";


let karyawan1 = new karyawan("ibnu", 1234)
let kerjaan1 = {
    namaKaryawan : karyawan1.nama,
    idKaryawan : karyawan1.id,
    pekerjaan : "membuat hello world",
    beriKerja(){
        return `kepada karyawan yang mempunyai id ${this.idKaryawan} dan bernama ${this.namaKaryawan} pekerjaan anda adalah ${this.pekerjaan} `;
    }
}

console.log(karyawan1)
console.log(karyawan1.greetings())
console.log(kerjaan1.beriKerja())