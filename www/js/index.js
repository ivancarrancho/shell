var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

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
    var e_number = 2.718281828;
    data = document.getElementsByClassName("shell")[0].value;
    var aux = data;
    document.getElementById("shell-result-data").innerHTML = data;
    document.getElementsByClassName("shell")[0].value='';
    $(document).keypress(function(e) {
        if(e.which == 13) {
            var word = data;
            if (word == 'calc'){
                var regex = /([\+\-\*\/\^])/;
                var a = aux.split(regex).filter(Boolean);
                function equation(x_equation) {
                    var x = 0;
                    var result = [];
                    for (var i = 0; i < a.length; i++) {
                        if (a[i] == 'e') {
                            result.push(e_number);
                        }
                        else if (a[i] == 'x') {
                            result.push(parseFloat(x_equation));
                        }
                        else if (parseFloat(a[i])) {
                            result.push(parseFloat(a[i]));
                        }
                    }
                    // result = just numbers ej[0, 3, 4, 0, 2]
                    // a = complete expresion ["x", "^", "3", "+", "4", "*", "x", "-", "2"]

                    var last_result = parseFloat(result[0]);
                    x = 1;
                    for (var i = 0; i < a.length; i++) {
                        var operate = parseFloat(result[x])
                        if (a[i] == '+') {
                            last_result = last_result + operate;
                            x++;
                        }
                        else if (a[i] == '-') {
                            last_result = last_result - operate;
                            x++;
                        }
                        else if (a[i] == '*') {
                            last_result = last_result * operate;
                            x++;
                        }
                        else if (a[i] == '/') {
                            last_result = last_result / operate;
                            x++;
                        }
                        else if (a[i] == '^') {
                            if (a[i+1] == '-') {
                                pow = -1 * operate;
                                last_result = Math.pow(last_result, pow);
                                x++;
                                i++;
                            } else {
                                last_result = Math.pow(last_result, operate);
                                x++;
                            }
                        }
                    }
                    return last_result.toFixed(5);
                }

                var x1 = 0;
                var x2 = 1;

                var answer = 0;
                var complete_answer = ''
                for (var i = 0; i <= 2; i++) {
                    eqx1 = equation(x1)
                    answer = (x1 - ((eqx1 * (x1 - x2)) / (eqx1 - equation(x2)))).toFixed(5);
                    complete_answer += 'Iter ' + i + ' resultado= ' + answer + ' x1= ' + x1 + ' x2= ' + x2 + "<br>"
                    x1 = x2;
                    x2 = answer;
                }
                document.getElementById("answer").innerHTML = complete_answer;

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
