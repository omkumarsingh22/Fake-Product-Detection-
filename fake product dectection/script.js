let qrcode = new QRCode(document.querySelector(".qrcode"));

function generateQr() {
    let productId = document.getElementById("productId").value.trim();
    let productName = document.getElementById("productName").value.trim();
    let productDescription = document.getElementById("productDescription").value.trim();

    if (productId === "" || productName === "" || productDescription === "") {
        alert("Input fields cannot be blank!");
    } else {
        let productInfo = `ID: ${productId}\nName: ${productName}\nDescription: ${productDescription}`;
        let qrCodeURL = generateQRCodeURL(productInfo);
        openQRCodeWindow(qrCodeURL);
    }
}

function generateQRCodeURL(text) {
    return "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(text);
}

function openQRCodeWindow(url) {
    // Open a new window/tab with the QR code
    window.open(url, "_blank");
}