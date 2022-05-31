function readURL(input){
    var reader = new FileReader();
    reader.onload = function(e){
        iamgedatauri = e.target.result;
        document.querySelector('#image1').src  = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
}

function hideText(){
    document.querySelector('#image2').src = steg.encode(document.querySelector('#text').value,iamgedatauri);
    // console.log(steg.encode(document.querySelector('#text').value,iamgedatauri));

}


function decode(input){
    var reader = new FileReader();
    reader.onload = function(e){
        // iamgedatauri = e.target.result;
        // document.querySelector('#image1').src  = e.target.result;

        console.log(steg.decode(e.target.result));
        
    }

    reader.readAsDataURL(input.files[0]);

}
