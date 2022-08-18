<template>
  <template v-if="!horizontal" v-for="input in inputs">
    <s-input v-if="input.type === 'text' || !input.type" v-model="model[input.field]" :label="input.label"
             :outlined="outlined" :filled="filled" :error="input.error" :error-message="input.errorMessage"
             :icon="input.icon" :dense="dense" :rules="input.rules" :autogrow="input.autogrow"/>
    <s-select v-if="input.type === 'select'" v-model="model[input.field]" :label="input.label"
              :outlined="outlined" :filled="filled" :error="input.error"
              :icon="input.icon" :dense="dense" :api-field="input.apiField"
              :api-url="input.apiUrl" :rules="input.rules" :error-message="input.errorMessage"/>
    <q-checkbox v-if="input.type === 'checkbox'" v-model="model[input.field]" :label="input.label"
                :outlined="outlined" :dense="dense" :rules="input.rules" :error="input.error"/>
    <q-toggle v-if="input.type === 'toggle'" v-model="model[input.field]" :label="input.label"
              :dense="dense" :rules="input.rules" :error="input.error" :error-message="input.errorMessage"/>
    <q-radio v-if="input.type === 'radio'" v-model="model[input.field]" :label="input.label"
             :dense="dense" :rules="input.rules" :val="input.val" :error="input.error"
             :error-message="input.errorMessage"/>
    <q-option-group v-if="input.type === 'option-group'" v-model="model[input.field]" :label="input.label"
                    :dense="dense" :rules="input.rules" :options="input.options" :error="input.error"
                    :error-message="input.errorMessage"/>
  </template>
  <template v-else v-for="input in inputs">
    <q-item>
      <q-item-section class="col-md-3">
        <q-item-label v-if="input.type==='text' || !input.type || input.type==='select' || input.type==='option-group'">
          {{ input.label }}
        </q-item-label>
      </q-item-section>
      <q-item-section>
        <s-input v-if="input.type === 'text' || !input.type" v-model="model[input.field]"
                 :outlined="outlined" :filled="filled" :error="input.error"
                 :dense="dense" :rules="input.rules" :autogrow="input.autogrow" :error-message="input.errorMessage"/>
        <s-select v-if="input.type === 'select'" v-model="model[input.field]"
                  :outlined="outlined" :filled="filled"
                  :dense="dense" :api-field="input.apiField"
                  :api-url="input.apiUrl" :rules="input.rules" :error="input.error"
                  :error-message="input.errorMessage"/>
        <q-checkbox v-if="input.type === 'checkbox'" v-model="model[input.field]" :label="input.label"
                    :outlined="outlined" :dense="dense" :rules="input.rules" :error="input.error"
                    :error-message="input.errorMessage"/>
        <q-toggle v-if="input.type === 'toggle'" v-model="model[input.field]" :label="input.label"
                  :dense="dense" :rules="input.rules" :error="input.error" :error-message="input.errorMessage"/>
        <q-radio v-if="input.type === 'radio'" v-model="model[input.field]" :label="input.label"
                 :dense="dense" :rules="input.rules" :val="input.val" :error="input.error"
                 :error-message="input.errorMessage"/>
        <q-option-group v-if="input.type === 'option-group'" v-model="model[input.field]" :label="input.label"
                        :dense="dense" :rules="input.rules" :options="input.options" :error="input.error"
                        :error-message="input.errorMessage"/>
      </q-item-section>
    </q-item>
  </template>
</template>

<script>
import {computed} from "vue";
import SSelect from "./SSelect";
import SInput from "./SInput";

export default {
  name: "SInputs",
  components: {SInput, SSelect},
  props: {
    inputs: {
      type: Array,
      required: true
    },
    modelValue: {
      type: Object,
      required: true
    },
    outlined: {
      type: Boolean,
      default: false
    },
    filled: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    horizontal: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {emit}) {
    const model = computed({
      get: () => props.modelValue,
      set: (val) => emit('update:modelValue', val)
    })
    return {
      model
    }
  }
}
</script>

<style scoped>

</style>