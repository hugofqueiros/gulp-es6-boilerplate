import utils from './utils';

console.log('Hello World!', utils);

if(!utils.isDeviceMobile()) {
  console.log('not mobile');
}
else {
  console.log('mobile device');
}
