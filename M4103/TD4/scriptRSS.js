$(document).ready(function() {
    init();
});

function init(){
    //détection support Ajax
    if(window.XMLHttpRequest) //navigateur standard
        myXHRRequest = new XMLHttpRequest();
    else if (window.ActiveXObject) //cas IE : https://books.google.fr/books?id=T79QfU0jsx0C&pg=PT277&lpg=PT277&dq=window.ActiveXObject&source=bl&ots=I-uyp11fI2&sig=Q2pEQD9X4dNR2P5oTB6XaM-Yy_c&hl=fr&sa=X&ved=0ahUKEwjSwtWf_szbAhVsKpoKHRJEAd4Q6AEIXjAG#v=onepage&q=window.ActiveXObject&f=false
        myXHRRequest = new ActiveXObject("Microsoft.XMLHTTP");
    else
        console.log("Ajax non supporté par le navigateur");
    if(myXHRRequest != null)
        myXHRRequest.onreadystatechange = function () {
                //readyState = 4 -> request finished and response is ready
                //status = 200 -> "OK"
                if(myXHRRequest.readyState == 4 && myXHRRequest.status == 200){
                    callback(myXHRRequest.responseText);
                }
                else if(myXHRRequest.readyState == 4){
                    document.getElementById("rssContent").textContent = "The operation is complete but status is not OK"
                }
            }
    document.getElementById("rssFeed").onchange = rssFeed;
}

function rssFeed(event){
    console.log(event.target.value);
    var link = event.target.value;
    http.onreadystatechange = function() {
        if(http.readyState == 4){
            if(http.status === 200) {
                callback(http.response);
            }
        }
    }
    http.open('POST', "proxy.php", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send("rssURL="+link);
}

function callback(data) {
    document.getElementById("rssContent").innerHTML = "<pre lang='xml'>"+data+"</pre>";
}

$(document).ready(function () {
    $("#rssFeed").hide().change(function (event) {
        if(!(event.target.value == "")) {
            $("#rssContent").html('Loading...');
            $.post(
                "/",
                {
                    url: event.target.value
                },
                function (data) {
                    $("#rssContent").html(JSON.stringify(data));
                }
            )
                .fail(function () {
                    $("#rssContent").html("Error");
                });
        }
        else {
            $("#rssContent").html('');
        }

    });
    $("#rssButton").click(function () {
        $("#rssFeed").toggle();
    });
});