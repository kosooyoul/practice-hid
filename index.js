var HID = require('node-hid');
var devices = HID.devices();

function findDeviceLoop() {
  const barcodeDevice = devices.find(item => item.vendorId == '1204' && item.productId == '256')
  if (!barcodeDevice) {
    console.log("Not found barcode device")
    setTimeout(function() {
      findDeviceLoop()
    }, 1000)
    return false;
  }

  var device = new HID.HID(barcodeDevice.vendorId, barcodeDevice.productId);
  device.on("data", function(data) {
    console.log(data)
  });

  return true
}

setTimeout(function() {
  findDeviceLoop()
})