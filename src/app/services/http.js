export class HTTP {
    http_request = false;

    makeRequest(url) {

        this.http_request = false;

        /**
         * Mozilla, Safari,...
         */
        if (window.XMLHttpRequest) {
            this.http_request = new XMLHttpRequest();
            if (this.http_request.overrideMimeType) {
                this.http_request.overrideMimeType('text/xml');
            }
        }
        /**
         * IE
         */
        else if (window.ActiveXObject) {
            try {
                this.http_request = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    this.http_request = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
            }
        }

        if (!this.http_request) {
            alert('Falla :( No es posible crear una instancia XMLHTTP');
            return false;
        }
        http_request.onreadystatechange = alertContents;
        http_request.open('GET', url, true);
        http_request.send();

    }

    alertContents() {

        if (this.http_request.readyState == 4) {
            if (this.http_request.status == 200) {
                alert(http_request.responseText);
            } else {
                alert('Hubo problemas con la petición.');
            }
        }

    }
}