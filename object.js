// Contoh Object Literal
const mobil = {
    //Properti
    merk:"Honda",
    model:"Jazz",
    tahun:2014,
    warna:"Hitam",
    transmisi:"Otomatis",
    //Method
    nyalakanMesin: function(){
        console.log("Mesin Menyala.");
    },
    info: function(){
        return this.merk +" "+ this.model + " Tahun " + this.tahun;
    }
}

//console.log(mobil.info());
//console.log(mobil["transmisi"]);
//console.log(mobil.nyalakanMesin());
//
//mobil.transmisi = "Manual"
//
//console.log(`Dijual Mobil merek : ${mobil["merk"]} tahun ${mobil.tahun} transmisi ${mobil.transmisi}`);

const dataUSer = {
    "001" : {
        nama: "Dian",
        hobi: ["memancing","berenang"],
        pekerjaan: "penyanyi",
        alamat:{
            desa:"Klampok",
            kec:"Singosari",
            kota:"Malang"
        }
    },
    "002" : {
        nama: "Juna",
        hobi: ["memasak","berkendara"],
        pekerjaan: "koki",
        alamat:{
            desa:"Muara Baru",
            kec:"Jonggol",
            kota:"Jakarta Barat"
        }
    }
}

//console.log(dataUSer["001"].nama);
//console.log(`Berasal dari ${dataUSer["001"].alamat.kota}`);
//console.log(dataUSer["002"].nama);
//console.log(`Berasal dari ${dataUSer["002"].alamat.kota}`);

//Object Costructor
//tanpa menggunakan keyword "this"
//menggunakan fungsi deklarasi
function barang(nama,harga,stok) {
    let dataBarang = {};
    dataBarang.nama = nama;
    dataBarang.harga = harga;
    dataBarang.stok = stok;
    return dataBarang;
}

//const data1 = barang("Beras 1KG",15000,10)
//console.log(`${data1.nama} dengan Harga Rp. ${data1.harga} persediaan digudang sebanyak ${data1.stok} karung.`);
//const data2 = barang("Minyak Goreng 1L",22000,14)
//console.log(`${data2.nama} dengan Harga Rp. ${data2.harga} persediaan digudang sebanyak ${data2.stok} bungkus.`);

//object costructor mneggunakan "this"

function laptopSpecs(pross,vga,ram,storage,os){
    this.pross = pross;
    this.vga = vga;
    this.ram = ram;
    this.storage = storage;
    this.os = os;
    this.getInfo = function(){
        return `${this.pross} dengan ${this.vga} sudah mampu menjalankan game terkini`;
    };
}

const laptopAndi = new laptopSpecs("AMD RYZEN 7 5680U","RADEON RDNA 3","16 GB","1 TB","WINDOWS 11 PRO");
const laptopJohn = new laptopSpecs("INTEL CORE i5 1245","NVIDIA RTX 3050","16 GB","1 TB","WINDOWS 11 PRO");
console.log(laptopAndi.getInfo());
console.log(laptopJohn.getInfo());