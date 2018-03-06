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
