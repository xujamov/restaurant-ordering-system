import admin from "firebase-admin";


const serviceAccount = {
    "type": "service_account",
    "project_id": "food-order-ce173",
    "private_key_id": "c649783e2ca5e4d644bc6281edf54c58e549eb15",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCkkq7NR/gSYaD0\noEWPx6jke9j4lvW00v/zqsqkM9JWmXSRmHDfRROHnlgVDXHzqqazil4dAA5nM/px\nah0+c+DHflg8sTJqsnx/kb78eI8ccHszNUDiQnXYHJ/eMctAugSE4o+DF6XVO/bi\nw5lpIo6ipe6aEcn5xd6Rjta3W+5oPdtvUtYRkVmCeOgrqJkoPMvDFbCgurqCAKgj\n9mmfV6cA7eisaeTXZro7qDi4H3OEcY6zLHH+Y9NqM1rbSYQB/cvuo7fXkwrKZfe3\nFm9jjr40dzSd2PEqOMUw2FAUXuwniAPl1mxtE0ewPz+dsDMwWgkwOY5EogRYOWSW\nn1f4Za2bAgMBAAECggEAC1CyiBa8rbbctDUY00vtBtilEGKAvlALnRtPF38gpSej\n5ibPC+rZ7ucqMzhbb196WrnWwrOwSdQ/EfEz1YluGQlM089zIfbnrHW+5ej8Hf51\n2g19SpE7PQKq00IlMWwYx3I0X9UOZ9zZmrnMIHhpyjESeLFka7H5HZTummjNuYj7\nA7L0J+atXkUloUi3ClBcwEYINXrMFOLsdlO7dNAWUwzU8Ho51L2t8AHzU3K83i9x\n2LodGui1aWK3zhNEnV+06IorYWDfOswdNxR6GYkbmpalWmtw/1WK8jwZ5BSb/F65\n0b4ld0zE/+Gvx7gbt5PkD5z2vuKBmIuDgWJ/KVVjoQKBgQDSJ1vqJD85lvLuDwVv\nVkTprORML9AuZm1fjphEQMUONdhmvO3/mKPtV4IrnuYnQnMeNXJOrnpSvDiiM/AX\n7FHonmnkJ3yfNye0hRdhZQMjr8AmtK/kt3AE6MpL4qjYlLRFQGOBNhqC8h/SLLwl\nDDk28jH/drubXvRplBJpaIu8iQKBgQDIebwSSL4cdRhyaugAoQeAyVZLIVIV9FEw\npqC+R4hOTbBEY6hOS2a5epif0v/I940J4Hh4s3WV7CAmfDlXJBVuQ6pvYavN4XST\nO+Y3lLDO6tnTyYbv4lWhuofRDVKJPBcALpkHT9evr0/3E48S0VEiCT+rOC7gVc/U\nNl0thUC4AwKBgHxjjZUGRWIKBdqAi5/9+SYzDqJFvrxoJh7kYR4tFDY4CtGszFZ4\ne7b1D/hPwjzEqSzdR75oqcCk5gSkJ12RpF3CvjysXqhC1j6UdGVSi8wor9x5II+J\nQEW3oF3QWE5xnk5LMVp+sqyFMe6OSgLHvGnYa12hYqQxTQvc+BTqK6O5AoGAQ4Fa\nZv2/pm13ke+Vt8CBekhRmnLZ5TKjtDInpmsH5vYaCK1WGycgrAwwIIE4SD+zakP/\nzQUA7z7XhJ4H4OPxo3N9jIvjAiyMyJc+6jBTaRmDx+DwYw5fr1nUKfzGched1x3Z\nwbCM/EeYMaaQYtHA9CkRG2KLxlae6OJ1dcKNDGkCgYEArusq11XLK6SrAry+RLi7\nf7zxGKm4RfsJzzw+9Q+YG1EA/ztM/3F/97p/QQvYTaFH8Yvoh+HKRCppn0oDVYbf\n7Vq5Rc/lWfSIpyC6yl4NChQDozMJpLxM0Hn5l0Fk2krFpcxLn3bhGQkpW0dfbhzF\nzBh5fPqzzv4iDAoIKldaQ6M=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-p9nvs@food-order-ce173.iam.gserviceaccount.com",
    "client_id": "107961969815739371478",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-p9nvs%40food-order-ce173.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
};

admin.initializeApp({
    credential: admin.credential.cert(
        serviceAccount
    )
});

export default admin