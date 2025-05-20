class QRCodeManager {
  constructor(
    canvasId,
    urlInputId,
    widthInputId,
    heightInputId,
    defaultImageUrl,
    downloadButtonId,
    titleInputId = null,
    headingId = null
  ) {
    this.canvasId = canvasId;
    this.urlInputId = urlInputId;
    this.widthInputId = widthInputId;
    this.heightInputId = heightInputId;

    this.downloadButtonId = downloadButtonId;
    this.titleInputId = titleInputId;
    this.headingId = headingId;
    this.qrCode = null;
    this.width = 270;
    this.height = 270;
    this.initialize();
  }

  generateQRCode(data) {
    const canvas = document.getElementById(this.canvasId);
    canvas.innerHTML = ""; // Clear existing QR code

    this.qrCode = new QRCodeStyling({
      width: this.width,
      height: this.height,
      type: "canvas",
      data: data,
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

  downloadQRCode() {
    const outputElement = document.getElementById(this.canvasId).parentNode;
    html2canvas(outputElement).then((canvas) => {
      const link = document.createElement("a");
      link.download = "qr-code.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }

  initialize() {
    const urlInput = document.getElementById(this.urlInputId);
    const widthInput = document.getElementById(this.widthInputId);
    const heightInput = document.getElementById(this.heightInputId);
    const downloadButton = document.getElementById(this.downloadButtonId);
    const titleInput = this.titleInputId
      ? document.getElementById(this.titleInputId)
      : null;
    const heading = this.headingId
      ? document.getElementById(this.headingId)
      : null;

    // Set initial dimensions
    this.width = parseInt(widthInput.value, 10) || 270;
    this.height = parseInt(heightInput.value, 10) || 270;

    // Generate QR Code initially
    this.generateQRCode(urlInput.value);

    // Event listener for URL input
    urlInput.addEventListener("input", () => {
      this.generateQRCode(urlInput.value);
    });

    // Event listener for title input (if applicable)
    if (titleInput && heading) {
      titleInput.addEventListener("input", () => {
        heading.textContent = titleInput.value;
      });
    }

    // Event listener for width/height inputs
    const updateDimensions = () => {
      this.width = parseInt(widthInput.value, 10) || 270;
      this.height = parseInt(heightInput.value, 10) || 270;
      this.generateQRCode(urlInput.value);
    };

    widthInput.addEventListener("input", updateDimensions);
    heightInput.addEventListener("input", updateDimensions);

    // Event listener for download button
    downloadButton.addEventListener("click", () => {
      this.downloadQRCode();
    });
  }
}

// Initialize QR Code Managers

new QRCodeManager(
  "canvas3",
  "url3",
  "qr-width",
  "qr-height",
  "./assets/logos/enyeni-guven-png-2.webp",
  "download-qr3",
  "title3",
  "dynamic-heading"
);
