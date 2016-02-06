(function(logger){
    let isEnabled = false;

    Object.assign(logger, {
        log
    });

    function log(...args){
        if (isEnabled) console.log.apply(console, args);
    }

}(window.l = window.l || {}));



