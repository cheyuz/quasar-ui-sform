<template>
  <q-input :label="label" outlined v-model="modelComputed" hide-bottom-space readonly>
    <template v-slot:prepend>
      <q-icon :name="icon ?? 'event'" class="cursor-pointer" clickable>
        <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
          <q-date v-model="model" mask="DD MMMM YYYY" range>
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>

import { computed } from '@vue/reactivity';

export default {
  name: "SRange",
  props: {
    label: String,
    icon: String,
    modelValue: String,
  },
  setup(props, {emit}){
    const model = computed({
      get(){
        return props.modelValue;
      },
      set(val){
        emit('update:modelValue', val);
      }
    });
    const modelComputed = computed(()=> {
        return model.value.from + ' - ' + model.value.to;
    });

    return {
      model,
      modelComputed,
    }
  }
}
</script>

<style scoped>

</style>