import { app } from './app';
import { AddressInfo } from 'net';
import { AssertionError } from 'assert';

const server = app.listen(3000, '0.0.0.0', () => {
  const { port, address } = server.address() as AddressInfo;
  console.log('Server listening on: ', 'http://' + address + ':' + port);
});
