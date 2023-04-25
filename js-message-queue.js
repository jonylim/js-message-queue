class JSMessageQueue {
    constructor() {
        this.queue = [];
        this.isRunning = false;
        this.callback = null;
    }
    
    setCallback(callback) {
        if (typeof(callback) != "function") {
            throw new Error("callback must be function");
        }
        this.callback = callback;
    }
    
    addToQueue(item) {
        this.queue.push(item);
        if (!this.isRunning) {
            this.isRunning = true;
            this.processNext();
        }
    }
    
    processNext(stopIfEmpty) {
        if (this.queue.length != 0) {
            this.callback(this.queue.shift());
            if (!stopIfEmpty) {
                setTimeout(() => {
                    this.processNext();
                }, 1);
            }
        } else {
            this.isRunning = false;
        }
    }
}
