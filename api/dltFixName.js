import http from 'k6/http';

export function dltFixName() {
  const url = 'https://moph-certificate.moph.go.th/ecredential/api/v4/vaccine-certificate/verifiable-credential/multi-sign-ssl/pdf/cad/loop/test/new-fix-name';

  const headers = {
    'Content-Type': 'application/json',
  };

  const payload = '';

  const params = {
    headers: headers,
  };

  const res = http.post(url, payload, params);

  return res
}
