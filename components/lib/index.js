import RCard from './card/src/main.vue';

const components = {
    RCard,
}

const install = function (Vue) {
    if (install.installed) return;
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name,components[key]);
    })
}

const API = {
    install,
}

export default API;