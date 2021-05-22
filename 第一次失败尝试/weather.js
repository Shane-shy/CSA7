window.onload = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "https://tianqiapi.com/free/day?appid=64225613&appsecret=yxy3RWIY", true);
    xhr.send(null);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                let res = xhr.responseText;
                res = JSON.parse(res);
                console.log(res);
            }
        }
    }
}