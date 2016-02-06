(function(logger){

    Object.assign(logger, {
        isEnabled: false,
        log
    });

    function log(...args){
        if (this.isEnabled) console.log.apply(console, args);
    }

}(window.l = window.l || {}));



