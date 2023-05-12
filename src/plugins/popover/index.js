import { reactive,readonly } from "vue";
const state = reactive({visible: false, content: {}})
const actions = {
    closePopover() {
        state.visible = false;
        let timeout = setTimeout(() => {
            state.content = {};
            clearTimeout(timeout);
        }, 300)
    },
    openPopover(content) {
        const {confirmText, cancelText, onConfirm, onCancel,maskClosable} = content;
        content.confirmText = confirmText ? confirmText : 'Yes';
        content.cancelText = cancelText ? cancelText : 'No';
        content.maskClosable = maskClosable ? maskClosable :false
        content.onConfirm = () => {
            onConfirm && onConfirm();
            actions.closePopover();
        }
        content.onCancel = (feedback) => {
            if(feedback === 'mask' && !maskClosable) return;
            onCancel && onCancel();
            actions.closePopover();
        }
        state.content = content;
        state.visible = true;
    },
    open(content) {
        actions.openPopover(content);
    },
}
const getters = {
    getContent() {
        return state.content;
    },
    getVisible() {
        return state.visible;
    }
}
const usePopover = () => {
    return {
        ...readonly(state),
        ...actions,
        ...getters
    }
}

export default usePopover;