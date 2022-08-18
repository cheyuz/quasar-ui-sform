import {computed, h} from "vue";
import {QIcon, QInput} from "quasar";

export default {
    name: 'SInput',
    props: {
        icon: {
            type: String,
            default: ''
        },
    },
    setup(props, {emit}) {
        const __renderComponent = () => {
            const children = {}
            if (props.icon) {
                children.prepend = () => h(QIcon, {
                    name: props.icon
                })
            }
            return h(QInput, {
                ...props,
                hideBottomSpace: true,
            }, children);
        };
        return __renderComponent;
    }
}