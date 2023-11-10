function cek(){

    if (form1.bil1.value == "" || form1.bil2.value == "") {
 
     alert("Angka Kosong. Harap diisi !!!!");
 
     exit
 
    }
 
   }
function tambah(){
    cek();
    var bil1=document.getElementById("bil1").value;
    var bil2=document.getElementById("bil2").value;
    var hasil=parseInt(bil1)+parseInt(bil2);
    document.getElementById("hasil").value=hasil;
}
function kurang(){
    cek();
    var bil1=document.getElementById("bil1").value;
    var bil2=document.getElementById("bil2").value;
    var hasil=parseInt(bil1)-parseInt(bil2);
    document.getElementById("hasil").value=hasil;
}
function kali(){
    cek();
    var bil1=document.getElementById("bil1").value;
    var bil2=document.getElementById("bil2").value;
    var hasil=parseInt(bil1)*parseInt(bil2);
    document.getElementById("hasil").value=hasil;
}
function bagi(){
    cek();
    var bil1=document.getElementById("bil1").value;
    var bil2=document.getElementById("bil2").value;
    var hasil=parseInt(bil1)/parseInt(bil2);
    document.getElementById("hasil").value=hasil;
}
function refresh(){
	document.getElementById("form1").reset();
}
