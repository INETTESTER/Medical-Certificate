import http from 'k6/http';

export function API_local() {
    const url = 'https://moph-certificate.moph.go.th/ecredential/api/v4/vaccine-certificate/verifiable-credential/multi-sign-ssl/pdf/cad/loop/test/local';

    const payload = JSON.stringify({});

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const response = http.post(url, payload, params);

    //console.log('Response body:', response.body);

    return response;
}
