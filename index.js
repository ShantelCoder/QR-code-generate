function generateQRcode(){

    //get the value of the input field
    const url =  document.getElementById("urlInput").value;

    //check if url is not empty 
    if (url){

        //use the url with the user input 
        const qrcodeurl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;

        const qrImg = document.getElementById("qrCode");
        qrImg.src = qrcodeurl;

        qrImg.style.display = "block";
    }else{
        alert("Please enter a valid URL");
    }
}