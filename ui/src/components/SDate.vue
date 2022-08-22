<template>
  <q-input :label="label" outlined v-model="model" hide-bottom-space>
    <template v-slot:prepend>
      <q-icon :name="icon ?? 'event'" class="cursor-pointer" clickable>
        <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
          <q-date v-model="model" mask="DD MMMM YYYY">
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
  name: "SDate",
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

    return {
      model,
    }
  }
}
</script>

<style scoped>

</style>