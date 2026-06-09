const dataUser = {
    "user101" : {
        nama: "Dian",
        hobi: ["memancing","berenang"],
        pekerjaan: "penyanyi",
        alamat:{
            desa:"Klampok",
            kec:"Singosari",
            kota:"Malang"
        }
    },
    "user102" : {
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

const mobil = {
    merk: 'toyota',
    type: "avanza",
    tahun: 2019
}

for (const data in mobil) {
    console.log(data +" : "+ mobil[data] )
}