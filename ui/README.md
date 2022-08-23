# Component SForm (Simple Form)

[![npm](https://img.shields.io/npm/v/quasar-ui-sform.svg?label=quasar-ui-sform)](https://www.npmjs.com/package/quasar-ui-sform)
[![npm](https://img.shields.io/npm/dt/quasar-ui-sform.svg)](https://www.npmjs.com/package/quasar-ui-sform)

**Compatible with Quasar UI v2 and Vue 3**.


# Component SForm
> With this component, you can create forms dynamically via json. However, you can still create forms statically inside the s-form tag.

# Installation

```bash
npm install quasar-ui-sform
```


# Usage

```html
<style src="quasar-ui-sform/dist/index.css"></style>

<script>
import { SForm, SInputs, SInput, SSelect, SDate } from 'quasar-ui-sform'

export default {
  
  components: {
    SForm,
    SInputs,
    SInput,
    SSelect,
    SDate
  }
  
}
</script>
```

# List of Components

- [SForm](#sform)
- [SInputs](#sinputs)
- [SInput](#sinput)
- [SSelect](#sselect)
- [SDate](#sdate)

# SForm props

| Name | Type | Description |
| ---- | ---- | ----------- |
| v-model | Object | Model of the form data |
| inputs | Array | Array of inputs |
| title | String | Title of the form |
| subtitle | String | Subtitle of the form |
| submitBtnLabel | String | Label of the submit button |
| submitBtnIcon | String | Icon of the submit button |
| cancelBtnLabel | String | Label of the cancel button |
| dense | Boolean | Dense form inputs |
| filled | Boolean | Filled styles form inputs |
| outlined | Boolean | Outlined styles form inputs |
| gutter | ['xs', 'sm', 'md', 'lg', 'xl'] | Gutter of the form inputs |
| horizontal | Boolean | Horizontally style for form inputs |

# Examples

```html
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
import { SForm } from 'quasar-ui-sform'
import {ref} from "vue";

export default {
  name: 'Test1',
  components: {
    SForm
  },
  setup() {
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
      inputs,
      data,
      submit,
      cancel
    }
  }
}
</script>
```


# License
MIT (c) Cecep Yusuf <cheyuz@gmail.com>
