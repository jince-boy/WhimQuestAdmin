import {defineStore} from "pinia";
import {darkTheme, lightTheme} from "naive-ui";

interface ThemeState {
    theme: 'light' | 'dark'
}

export const useThemeStore = defineStore('theme', {
    state: (): ThemeState => ({
        theme: (localStorage.getItem('theme') as 'light' | 'dark')
    }),
    actions: {
        setTheme(theme: 'light' | 'dark') {
            this.theme = theme
            localStorage.setItem('theme', theme)
            this.onThemeChange(theme)
        },
        toggleTheme() {
            this.setTheme(this.theme === 'light' ? 'dark' : 'light')
        },
        onThemeChange(theme: string) {
            const htmlElement = document.documentElement
            htmlElement.classList.toggle('light', theme === 'light')
            htmlElement.classList.toggle('dark', theme === 'dark')
            localStorage.setItem("theme", theme);
        },
        getTheme() {
            if (this.theme !== 'light' && this.theme !== 'dark') {
                this.setTheme('light')
            }
            return this.theme === 'light' ? lightTheme : darkTheme
        }
    }
})
export default useThemeStore