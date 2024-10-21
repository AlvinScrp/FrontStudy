module.exports = Behavior({
  definitionFilter(defFields) {
    console.log('definitionFilter');
    defFields.data.from = 'behavior'
  },
  behaviors: [],
  properties: {
    myBehaviorPA: {
      type: String,
      value: "mBePA"
    }
  },
  data: {
    myBehaviorDA: 'mBeDA'
  },
  created: function () {
    console.log("behavior created");
  },
  attached: function () {
    console.log("behavior attached");
  },
  ready: function () {
    console.log("behavior ready");
  },
  methods: {
    myBehaviorMethod() {
      console.log('[my-behavior] log by myBehaviorMehtod')
    }
  }

})