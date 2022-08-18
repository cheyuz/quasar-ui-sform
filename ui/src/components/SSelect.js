import {computed, h, onMounted, ref} from "vue";
import {QIcon, QSelect} from "quasar";
import axios from "axios";

export default {
    name: 'SSelect',
    props: {
        label: String,
        icon: String,
        apiUrl: String,
        apiField: String,
        modelValue: {
            type: [String, Number],
            default: ''
        },
        filter: Object,
        bearerToken: String,
    },
    setup(props, {emit}) {
        const options = ref([]);
        const loading = ref(false);
        const model = computed({
            get: () => props.modelValue,
            set: (value) => emit('update:modelValue', value)
        });
        if (props.apiUrl) {
            const getOptions = () => {
                loading.value = true;
                axios.get(`${props.apiUrl}?filter={"id":"${props.modelValue}"}`, {
                    params: {
                        sortBy: props.apiField ?? 'name',
                        sortDir: 'asc',
                        limit: 25
                    }
                }).then(resp => {
                    options.value = resp.data.data.data;
                    loading.value = false;
                }).catch(err => {
                    alert(err.message);
                    loading.value = false;
                })
            };
            onMounted(getOptions);
        }

        const filter = (val, update, abort) => {
            loading.value = true;
            // axios add bearer token
            axios.get(`${props.apiUrl}?filter={"${props.apiField ?? 'name'}":"${val}"}`, {
                params: {
                    sortBy: props.apiField ?? 'name',
                    sortDir: 'asc',
                    limit: 25
                },
                headers: props.bearerToken ? {
                    Authorization: `Bearer ${props.bearerToken}`
                } : {}
            }).then(res => {
                loading.value = false;
                update(() => {
                    options.value = res.data.data.data;
                });
            });
        };

        const __renderComponent = () => {
            const slots = {};
            if (props.icon) {
                slots.prepend = () => h(QIcon, {
                    name: props.icon,
                });
            }
            return h(QSelect, {
                ...props,
                options: options.value,
                useInput: true,
                emitValue: true,
                mapOptions: true,
                hideBottomSpace: true,
                loading: loading.value,
                optionValue: 'id',
                optionLabel: props.apiField ?? 'name',
                modelValue: model.value,
                'onUpdate:modelValue': (val) => model.value = val,
                onFilter: filter,
            }, slots);
        }
        return __renderComponent;
    }
}