/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

console.log("background-script: LOAD");

var listener = {
  frameSent: function () {
    console.log("frameSent");
  }
}

browser.websocket.addListener("mywinid", listener).then(
  message => console.log(`hello sez: "${message}"`)
);
