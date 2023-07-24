export default {
  install: (app) => {
    app.config.globalProperties.$boldText = (text) => {
      return `<b>${text}</b>`;
    };
  },
};
 