import { App as Application } from "vue";
import SESEButton from "./SESEButton.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, SESEButton);
  }
};

export default Plugin;

export { SESEButton };
