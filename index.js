var HID = require('node-hid');
var devices = HID.devices();
const barcodeDevice = devices.find(item => item.vendorId == '1204' && item.productId == '256')
var device = new HID.HID(barcodeDevice.vendorId, barcodeDevice.productId);
device.on("data", function(data) {
  console.log(data)
});
