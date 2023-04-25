# js-message-queue
A simple JavaScript class to process messages using queue.

## Example

```javascript
let q = new JSMessageQueue();

let count = 0;
q.setCallback((e) => {
    console.log(`Call #${++count}: ${e}`);
});
```
