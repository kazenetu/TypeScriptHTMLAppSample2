    /// <reference path="Greeter.ts" />

    window.onload = () => {
        var el = document.getElementById('content');
        var greeter = new Greeter.Greeter(el);
        greeter.start();
    };
