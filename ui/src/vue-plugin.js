import SForm from './components/SForm'
import SInput from "./components/SInput";
import SSelect from "./components/SSelect";
import SInputs from "./components/SInputs.vue";
import SDate from "./components/SDate";


function install (app) {
  app.component(SForm.name, SForm)
  app.component(SInput.name, SInput)
  app.component(SSelect.name, SSelect)
  app.component(SInputs.name, SInputs)
  app.component(SDate.name, SDate)
}

export {
  SForm,
  SInput,
  SSelect,
  SInputs,
  SDate,
  install
}
