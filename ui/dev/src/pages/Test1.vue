<template>
  <q-page padding>
    <s-form
      title="Form Contoh"
      subtitle="Ini adalah contoh form untuk menambahkan user"
      :inputs="inputs"
      v-model="data"
      outlined
      gutter="md"
      submit-btn-label="Simpan"
      submit-btn-icon="save"
      cancel-btn-label="Batal"
      @submit="submit"
      @cancel="cancel"
      horizontal
    />
    <div class="q-ma-lg">
    {{ data }}
    </div>
  </q-page>
</template>

<script>
import SForm from '../../../src/components/SForm'
import SInputs from "../../../src/components/SInputs";
import {ref} from "vue";

export default {
  name: 'Test1',
  components: {
    SForm,
    SInputs
  },
  setup() {
    const value = ref(1107);

    const data = ref({
      name: '',
      address: '',
      city: '',
      is_active: false,
      gender: 'm',
    })

    const inputs = ref([
      {
        field: 'name',
        label: 'Nama',
        icon: 'person',
        rules: [
          v => !!v || 'Nama harus diisi',
        ],
      },
      {
        field: 'address',
        label: 'Alamat',
        icon: 'home',
        autogrow: true,
        rules: [
          v => !!v || 'Alamat harus diisi',
        ],
      },
      {
        field: 'city',
        type: 'select',
        label: 'Kota',
        icon: 'search',
        apiUrl: 'http://localhost:8000/api/cities',
        apiField: 'kota',

      },
      {
        field: 'gender',
        type: 'option-group',
        label: 'Jenis Kelamin',
        options: [
          {label: 'Laki-laki', value: 'm'},
          {label: 'Perempuan', value: 'f'}
        ],
      },
      {
        field: 'is_active',
        type: 'checkbox',
        label: 'Active',
      },
      {
        field: 'is_active',
        type: 'toggle',
        label: 'Active?'
      },
    ]);

    const submit = (d) => {
      console.log(d);
    }
    const cancel = () => {
      console.log('cancel');
    }
    return {
      value,
      inputs,
      data,
      submit,
      cancel
    }
  }
}
</script>

<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>
