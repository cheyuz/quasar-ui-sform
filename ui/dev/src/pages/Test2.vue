<template>
  <q-page padding>
    <s-form ref="form" title="Add Talent" :inputs="inputs" v-model="data" outlined @submit="save" horizontal/>
    <s-date label="Tanggal" v-model="data.tanggal" />
  </q-page>
</template>

<script>
import SForm from "../../../src/components/SForm";
import {SDate} from "../../../src/vue-plugin";
import {ref} from "vue";
import axios from "axios";

export default {
  name: "Test2",
  components: {
    SForm,
    SDate
  },
  setup() {
    const form = ref(null);
    const data = ref({
      nama_asli: "",
      nama_panggilan: "",
      alamat1: "",
      tanggal: "",
    });
    const inputs = ref([
      {
        label: "Nama Asli",
        field: "nama_asli",
        type: "text",
        icon: 'person',
        rules: [
          v => !!v || "Nama Asli is required",
          v => (v && v.length <= 10) || "Nama Asli must be less than 10 characters"
        ]
      },
      {
        label: 'Nama Panggilan',
        field: 'nama_panggilan',
        type: 'text',
        icon: 'person'
      },
      {
        label: 'Alamat 1',
        field: 'alamat1',
        type: 'text',
        icon: 'home'
      },
      {
        label: 'Tanggal',
        field: 'tanggal',
        type: 'date',
      }
    ]);
    const save = () => {
      axios.post('http://localhost:8000/api/talents', data.value)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          form.value.validateFromServer(err.response.data.data);
        }
      );
    }

    return {
      inputs,
      save,
      data,
      form
    };
  }
}
</script>

<style scoped>

</style>
