

async function getFooter() {
    let myPromise = new Promise(function(resolve) {
        let request = new XMLHttpRequest();
        request.open('GET', "footer.html");
        request.onload = function() {
            if(request.status == 200) {
                resolve(request.response);
            } else {
                resolve("404 Error");
            }
        };
        request.send();
    });
    document.getElementById("footerpage").innerHTML = await myPromise;
}
getFooter();
