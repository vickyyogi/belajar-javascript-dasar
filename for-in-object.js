console.log("___________-___________")
console.log("For in dalam Object");
console.log("_______________________")
//contoh mengambil nilai dari object
//contoh object
const mobil = {
    merk: 'toyota',
    type: "avanza",
    tahun: 2019
}

//variabel "data" bisa diubah dengan kata apa saja yang mewakili
//kemudian akan kembali di tampikan menggunakan log
for (const data in mobil) {
    console.log(data +" : "+ mobil[data] )
}


console.log("___________-___________")
console.log("For in dalam Object Bersarang");
console.log("_______________________")

//contoh penggunaan pada object bersarang
const users = {
    nama: "Yuni",
    age: 23,
    status: "single",
    alamat: {
        desa: "mulyorejo",
        kecamatan: "blimbing",
        kota: "malang"
    }
}

//menggunakan pengulangan bertingkat
for (const data in users){
    if(typeof users[data] === "object"){
        for (const dataDalam in users[data]){
            console.log(dataDalam + " : " + users[data][dataDalam]);
        }
    }else{
        console.log(data + " : " + users[data]);
    }
}