const jobQueue = new Set();
const p = Promise.resolve();
var foo = 1;

let isFlushing = false;
function flushJob() {
  if (isFlushing) return;
  isFlushing = true;
  p.then(() => {
    jobQueue.forEach((job) => job());
  }).finally(() => (isFlushing = false));
}
function log() {
  console.log('foo', foo);
}
increment();
increment();
function increment() {
  foo++;
  jobQueue.add(log);
  flushJob();
}
