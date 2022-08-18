<template>
  <q-form ref="form">
    <q-card class="bg-white" :flat="outlined" :bordered="outlined">
      <q-card-section v-if="title || subtitle">
        <div class="text-h6">{{ title }}</div>
        <p v-if="subtitle">{{ subtitle }}</p>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div :class="'q-gutter-'+ gutter">
          <s-inputs :inputs="inputs" v-model="model" :dense="dense" :outlined="outlined" :filled="filled" :horizontal="horizontal" />
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section class="bg-grey-1">
        <div class="row q-gutter-md">
          <q-space/>
          <q-btn :label="cancelBtnLabel ?? 'Cancel'" flat @click="cancel" />
          <q-btn v-if="submitBtnIcon" :icon="submitBtnIcon" :label="submitBtnLabel ?? 'Save'" color="primary" @click="submit"/>
          <q-btn v-else :label="submitBtnLabel ?? 'Save'" color="primary" @click="submit"/>
        </div>
      </q-card-section>
    </q-card>
  </q-form>
</template>

<script>
import {computed, ref} from "vue";
import SInput from "./SInput";
import SSelect from "./SSelect";
import SInputs from "./SInputs";

export default {
  name: "SForm",
  components: {SInputs, SSelect, SInput},
  props: {
    submitBtnLabel: {
      type: String,
    },
    submitBtnIcon: {
      type: String,
    },
    cancelBtnLabel: {
      type: String,
    },
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    dense: {
      type: Boolean,
      default: false
    },
    filled: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    gutter: {
      type: String,
      default: 'md'
    },
    inputs: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Object,
      default: () => ({})
    },
    horizontal: {
      type: Boolean,
      default: false
    },
  },
  setup(props, {emit}) {
    const model = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value)
    });
    const form = ref('form');
    const submit = async () => {
      const valid = await form.value.validate();
      if (valid)
        emit('submit', model.value);
    };
    const cancel = () => emit('cancel');

    const validateFromServer = (errorData) => {
      props.inputs.forEach(input => {
        input.error = false;
        if (errorData[input.field]) {
          input.error = true;
          input.errorMessage = errorData[input.field][0];
        }
      });
    }

    return {
      model,
      form,
      submit,
      cancel,
      validateFromServer
    }
  }
}
</script>

<style scoped>

</style>