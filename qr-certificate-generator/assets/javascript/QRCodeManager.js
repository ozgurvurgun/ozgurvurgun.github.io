class QRCodeManager {
  constructor(
    wrapperId,
    canvasId,
    urlInputId,
    generateButtonId,
    downloadButtonId,
    defaultImageUrl,
    fileName
  ) {
    this.wrapperId = wrapperId;
    this.canvasId = canvasId;
    this.urlInputId = urlInputId;
    this.generateButtonId = generateButtonId;
    this.downloadButtonId = downloadButtonId;
    this.defaultImageUrl = defaultImageUrl;
    this.fileName = fileName;
    this.qrCode = null;

    this.initialize();
  }

  generateQRCode(url) {
    const canvas = document.getElementById(this.canvasId);
    canvas.innerHTML = "";
    this.qrCode = new QRCodeStyling({
      width: 270,
      height: 270,
      type: "canvas",
      data: url,
      image: this.defaultImageUrl,
      dotsOptions: {
        color: "#000000",
        type: "rounded",
      },
      backgroundOptions: {
        color: "#ffffff",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 4,
        imageSize: 0.4,
      },
    });

    this.qrCode.append(canvas);
  }

  downloadQRCodeAsPDF(url) {
    const outputElement = document.getElementById(this.wrapperId);
    html2canvas(outputElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const elementWidth = outputElement.offsetWidth / 1.8;
      const elementHeight = outputElement.offsetHeight / 1.8;

      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
      });

      pdf.addImage(imgData, "PNG", 50, 50, elementWidth, elementHeight);
      pdf.text(url, 50, 300);
      pdf.save(`${this.fileName}.pdf`);
    });
  }

  initialize() {
    const urlInput = document.getElementById(this.urlInputId);
    const generateButton = document.getElementById(this.generateButtonId);
    const downloadButton = document.getElementById(this.downloadButtonId);

    // Generate QR Code initially
    this.generateQRCode(urlInput.value);

    // Add event listeners for buttons
    generateButton.addEventListener("click", () => {
      this.generateQRCode(urlInput.value);
    });

    downloadButton.addEventListener("click", () => {
      this.downloadQRCodeAsPDF(urlInput.value);
    });
  }
}

// Initialize first instance
new QRCodeManager(
  "output",
  "canvas",
  "url",
  "generate-qr",
  "download-qr",
  "./assets/logos/enyeni-guven-png-2.webp",
  "ce-belgesi"
);

// Initialize second instance
new QRCodeManager(
  "output2",
  "canvas2",
  "url2",
  "generate-qr2",
  "download-qr2",
  "./assets/logos/enyeni-guven-png-2.webp",
  "kullanim-kilavuzu"
);
