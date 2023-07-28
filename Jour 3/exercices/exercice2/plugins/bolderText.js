export default {
  install: (app) => {
    app.config.globalProperties.$bolderText = (text) => {
      return `<b>${text}</b>`;
    };
  },
};
