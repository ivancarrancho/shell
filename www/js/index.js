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

$(document).keypress(function(e) {
  if(e.which == 13) {
    data = document.getElementsByClassName("shell")[0].value;
    var aux = data; 
    document.getElementById("shell-result-data").innerHTML = data;   
    document.getElementsByClassName("shell")[0].value='';
    $(document).keypress(function(e) {
        if(e.which != 13) {console.log('demo')};
        if(e.which == 13) {
            //REvisar print
            var word = data;
            console.log(aux);
            console.log(word);
            console.log(word == 'calculate');
            if (word == 'calculate'){
                console.log(word);
                function calculate() {
                    var regex = /([\+\-\*\/\^])/;

                    var a = aux.split(regex);
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
                        document.getElementById("answer").innerHTML = last_result;
                    }
                }
            }
            else if (word == 'cls'){
                document.getElementsByClassName("shell")[0].value='';
                document.getElementById("shell-result-data").innerHTML = '';
            }
            else if (word == 'exit'){
                self.close();
            }
            else if (word == 'date'){
                document.getElementById("shell-result-data").innerHTML = new Date();
            };
        }
    });
  }
});
