export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment(number = 1) {
      if (this.counter >= 999999999999999) {
        this.counter = "max";

        return;
      }

      this.counter += number;
    },
  },
};
