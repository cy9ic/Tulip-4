function t1(input) {
    document.getElementById("key").innerHTML="";
            var digest = CryptoJS.MD5(input);
            document.getElementById("text").innerHTML = "Type:\t\tMD5";
            document.getElementById("text").innerHTML += "\nMessage:\t" + input;
            document.getElementById("text").innerHTML += "\nHex:\t" + digest;
            document.getElementById("text").innerHTML += "\nBase64:\t" + CryptoJS.enc.Base64.parse(String(digest));
        }