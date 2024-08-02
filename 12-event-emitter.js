const EventEmitter = require("events");

const customEmitter = new EventEmitter();

const CUSTOM_EMMITER_NAME = "response";

customEmitter.on(CUSTOM_EMMITER_NAME, (name, id) => {
  console.log(`Data recived ${name} ${id}`);
});

customEmitter.on(CUSTOM_EMMITER_NAME, () => {
  console.log(`Some other logic here`);
});

customEmitter.emit(CUSTOM_EMMITER_NAME, "John", 34);
