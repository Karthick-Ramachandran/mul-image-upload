document.getElementById('type').addEventListener('keyup', data);



function data(){
    var one = document.getElementById('type').value;
    var xhr = new XMLHttpRequest;
    if (!('withCredentials' in xhr)){

        xhr = new XDomainRequest();

    } 



xhr.open('GET', `http://postalpincode.in/api/pincode/${one}`, true);


xhr.onload = function(){
    if(this.status == 200){
        console.log(this.responseText);
    }
}


xhr.send();

}

