# js-message-queue
A simple JavaScript class to process messages using queue.

## Example

```javascript
let q = new JSMessageQueue();

// Set callback for handling queue items.
let count = 0;
q.setCallback((e) => {
    console.log(`Call #${++count}: ${JSON.stringify(e)}`);
});

for (let i = 1; i < 10; i++) {
    // Add item to queue.
    q.addToQueue({ "num": x }, 0) 
}
```
