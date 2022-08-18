import SForm from './components/SForm'
import SInput from "./components/SInput";
import SSelect from "./components/SSelect";
import SInputs from "./components/SInputs.vue";


function install (app) {
  app.component(SForm.name, SForm)
  app.component(SInput.name, SInput)
  app.component(SSelect.name, SSelect)
  app.component(SInputs.name, SInputs)
}

export {
  SForm,
  SInput,
  SSelect,
  SInputs,
  install
}
