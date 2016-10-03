const serialport = require('serialport')

const { SerialPort } = serialport

serialport
  .list((err, ports) => ports
    .forEach(port => console.log(port.comName)))
