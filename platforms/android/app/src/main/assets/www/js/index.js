/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        console.log('Received Event: ' + id);
    }

};

app.initialize();

function calculate() {
    data = document.getElementsByClassName("shell")[0].value;
    document.getElementById("shell-result-data").innerHTML = data;
    var regex = /([\+\-\*\/\^])/;

    var a = data.split(regex);
    var result = [];
    var x = 0;

    for (var i = 0; i < a.length; i += 1) {
        if (parseInt(a[i])) {
            result[x] = parseInt(a[i]);
            x++;
        }
    }

    var last_result = parseInt(result[0])
    x = 1;
    for (var i = 0; i < a.length; i++) {
        if (a[i] == '+') {
            last_result = last_result + parseInt(result[x]);
            x++;
        }
        else if (a[i] == '-') {
            last_result = last_result - parseInt(result[x]);
            x++;
        }
        else if (a[i] == '*') {
            last_result = last_result * parseInt(result[x]);
            x++;
        }
        else if (a[i] == '/') {
            last_result = last_result / parseInt(result[x]);
            x++;
        }
        else if (a[i] == '^') {
            last_result = Math.pow(last_result, parseInt(result[i]));
            x++;
        }
    }
    document.getElementById("answer").innerHTML = last_result;
}