import Promise from 'promise-polyfill'; 
import 'whatwg-fetch';

import Exam from './Exam';

// polyfills
if (!window.Promise) {
  window.Promise = Promise;
}


var crypt = new Exam("Cryptography", "09.11.1995", 0, 25, "Micheal Brandon");
var info = new Exam("Informatik", "10.11.1995", 0, 25, "Donald Trump");

