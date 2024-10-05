//tipe data number adalah tipe data yang didalam nya berisi nilai angka 
//contoh tipe data number
var number = 10;
var number1= 20;
console.log(number + number1);

//tipe data string adalah tipedata yang di beri tanda ('') dan ("") dan tipe data ini bisa bersifat angka maupun huruf
// contoh dari tipe data string

var string1 = "10";
var string2 = '20';
console.log(string1 + string2);

// tipe data boolean adalah tipe data yang menandakan true dan false dari sebuah data
// contoh dari tipe data boolean

var boolean1 = true;
var boolean2 = false;

console.log(boolean1 + boolean2)


// variabel adalah sebuah wadah untuk menampung sebuah nilai , nilai nya itu sebuah tipe data.
// variabel terbagi menjadi tiga (var, let, const).
// contoh var :

var varialbel1 = 10;
varialbel1 = 15;
// var menampung nilai dan nilai itu bisa kita ubah .

// contoh dari let :
let variabel2 = 10;
let v = 20;
// let sama seperti var bisa di ubah data yang telah disimpan tersebut

//contoh dari conts :

const variabel3 = 10;
// const ini tidak bisa di ubah sebuah data yang telah tersimpan didalam nya walaupun saya sudah mengganti nya hasil nya tetap tipe data yang pertama sya tuliskan tadi


// operator aritmatika adalah operator perjumlahan di matematika dan kita harus  mengunakan code ini (*, /, -, +, %)
// operator ini harus memperhatikan kurung,kali, bagi, tambah, kurang
//contoh *
var s = 10;
var s1 = 10;
console.log(s * s1);
// maksud di atas adalah s di kali dengan s1
//contoh /
var i = 10;
var ii = 20;
console.log(i / ii);
// contoh + 
var j = 10;
var jj = 20;
console.log(j + jj);
// contoh -
var k = 10;
var kk = 20;
console.log(k - kk);
// contoh %
var l = 10;
var ll = 20;
console.log(l % ll);
// modulus (%) hasil dari sisah bagi

//operator penugasan adalah operator yang menugaskan tipe data dari opertor aritmatika
// contoh operator  * :
var kali1 = 10;
var kali2 = 20;
console.log(kali1 *= kali2 )
// itulah operator penugasan masuksud dari kali1 *= kali2 adalah kali1 * kali2
// contoh dari / :
var bagi1 = 10;
var bagi2 = 20;
console.log(bagi1 /= bagi2)
// ini operator penugasan  /
// contoh dari +
var emang = 10;
var emang1 = 10;
console.log(emang += emang1)
// inilah operator penugasan +
//contoh dari -
var pengurangan = 10;
var pengulangan = 2;
console.log(pengurangan -= pengulangan)
// inilah contoh dari operator penugasan -
//contoh operator penugasan % (modulus)
var modulus1 = 10;
var modulus = 3;
console.log(modulus %= modulus1)
// mudulus adalah hasih dari sisapembagian

// operator logika menentukan logika dari ekpresi yang kita laku kan,
// operator logika ada 3 yaituh (&&, ||, !)
//contoh dari operator logika && :
var menikah = true;
var jomblo = false;
console.log(menikah && jomblo)
// hasil dari di atas adalah false kareta && operator ini apa bila dalam sebuah tipe data ada false nya maka hasil nya false
// contoh dari operator logika || :
var janda = true;
var duda = false;
console.log(janda || duda)
// hasil nya adalah true karena operator ini apabila dalam tipe data ada bersifat true hasil nya tetap true
// contoh dari  operator logika ! :
var jantan = true;
console.log(!jantan);
// hasil dari operator ini ! adalah true karena operator ini lawan kata jadi ketika kita tulis true maka akan menjadi false

// operator pengkondisian adalah operator yang membandikan dua data yang berbeda dengan mengunakan (if, else if, else)
// contoh dari operator pengkondisian adalah :
var angka = prompt('masukan angka');
if(angka % 2 == 0) {
    alert(angka + 'adalah bilangan genap') 

 } else if(angka % 2 == 1){
        alert(angka + 'adalah bilangan ganjil');
    }else{
        alert('yang anda masukan bukan angka');
    }
    
// kegunaan operator pengkondisian disini untuk memberikan nilai pengkondisian apabila nilai tersebut bersifat true maka akan di jalan kan
// apa bila bersifat false maka akan pergi ke else
// alur logika di atas adalah  tentang angka genap dan ganjil jadi apabila user menulis angka genap maka komputer akan memberi jawaban bahwa angka itu genap dan sebalik nya dan apabila user mengetik huruf bukan angka maka komputer menjawab yang anda masukan bukan angka
// jadi sstematik nya adalah apabila if itu ketika user mengetik angka genap
// dan ketika else if makan user mengetik angka ganjil
// apabila else itu ketika user mengetik hurub bukan angka


// operator pengondisian (switch) adalah operator  yang sama dengan if, else if dan else
// contoh dari operator pengkondisian :
var hari = prompt('masukan angka hari')
switch(hari){
    case '1' :
        alert('senin');
        break;
    case '2' :
        alert('selasa');
        break;
    case '3' :
        alert('rabu');
        break;
    case '4' :
        alert('kamis');
        break;
    case '5' :
        alert('jumat');
        break;
    case '6' :
        alert('sabtu');
        break;
    case '7' :
        alert('minggu');
        break;
        default :
        alert('tidak ada hari libur');
}

// inilah sistematik dari swicth

// perulangan adalah sebuah proses yang dilakukan secara berulang (while, for)
// contoh perulangan for :
var jmlangkot = 10;
var noangkot = 1;
var beroprasi = 5;

for(noangkot; noangkot <= jmlangkot; noangkot++) {
    if(noangkot === beroprasi) {
        console.log('angkot No.' + noangkot + 'sedang baik');
    } else if(noangkot == 8 || noangkot == 10 && noangkot == 5) {
        console.log('angkot No.' + noangkot + 'sedang lembur');
    }else {
        console.log('angokot No.' + noangkot + 'sedang rusak');
    }
}
// pengulangan tersebut diatas saya ini menulis angka (1,2,3,4,6) itu angkot no baik baik saja dan nomor (5,8,10) saya ingin menulis angkot sedang lembur dan (7,9) saya menulis angkot sedang tidak beroprasi
// dengan mengunakan pengkondisian dari if, else if, else

// operator pebandingan == dan ===
// berbedaan nya adalah == hanya membandikan tipe data 
// dan === membandikan tipe data dan nilai nya
// contoh :
var angka1 = 10;
var angka2 = "10";

console.log(angka1 == angka2);
// pasti hasil nya true karena hanya membandikan tipe data nya saja
//contoh :
var angka3 = 10;
var angka4 = '10';
console.log(angka3 === angka4);
//pasti hsil nya false

// kombinasi tipe data dan operator
// contoh :
var w = 21;
var f = 23;
console.log(w <= f);
//contoh :
var n = 'menikah';
var m = 'jomblo';
console.log(n !== m);