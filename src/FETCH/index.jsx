function FETCH(formDataBool, url) {
    var formdata = new FormData();
    var requestOptions = {};
    if(formDataBool === true) {
        requestOptions = {
            method: 'GET',
            body: formdata,
            redirect: 'follow'
        };
    } else {
        requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    fetch(url, requestOptions)
        .then(response => response.json())
        .then((result) => {
                return (result);
            }
        )
        .catch(error => console.log('error', error));
}

export default FETCH;