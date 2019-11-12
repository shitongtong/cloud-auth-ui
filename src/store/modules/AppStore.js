export default {
    state: {
        appName: "cloud-auth-ui",  // 应用名称
        themeColor: '#545c64',
        oldThemeColor: '#545c64',
        collapse: false  // 导航栏收缩状态
    },
    getters: {
        collapse(state) {// 对应着上面state
            return collapse;
        }
    },
    mutations: {
        collapse(state) {  // 改变收缩状态
            state.collapse = !state.collapse;
        },
        themeColor(state, themeColor) {
            state.themeColor = themeColor;
        },
        oldThemeColor(state, oldThemeColor) {
            state.oldThemeColor = oldThemeColor;
        }
    },
    actions: {

    }
}