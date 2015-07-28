var Greeter;
(function (Greeter_1) {
    var Greeter = (function () {
        function Greeter(element) {
            this.element = element;
            this.element.innerHTML += "The time is: ";
            this.span = document.createElement('span');
            this.element.appendChild(this.span);
            this.span.innerText = new Date().toUTCString();
        }
        Greeter.prototype.start = function () {
            var _this = this;
            this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
        };
        Greeter.prototype.stop = function () {
            clearTimeout(this.timerToken);
        };
        return Greeter;
    })();
    Greeter_1.Greeter = Greeter;
})(Greeter || (Greeter = {}));

/// <reference path="Greeter.ts" />
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter.Greeter(el);
    greeter.start();
};
