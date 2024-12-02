let data = { list: [1, 2, 3, 4] };

(function (val) {
  Object.defineProperty(data, "list", {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log("get");

      return val;
    },
    set: function (newVal) {
      if (val === newVal) {
        return;
      }
      val = newVal;
    },
  });
})([1, 2, 3, 4]);
console.log(data.list);
