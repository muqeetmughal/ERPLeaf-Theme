frappe.provide("frappe.ui");

frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
    constructor() {
        super()
    }

    fetch_themes() {
		return new Promise((resolve) => {
			this.themes = [
				{
					name: "light",
					label:("Frappe Light"),
					info:("Light Theme"),
				},
				{
					name: "dark",
					label:"Timeless Night",
					info:"Dark Theme",
				},
				{
					name: "automatic",
					label:"Automatic",
					info:"Uses system's theme to switch between light and dark mode",
				},
                {
                    name:"erpleaf",
                    label: "Erpleaf",
                    info: "Erpleaf Theme"
                },


			];

			resolve(this.themes);
		});
	}

}


// const formElement = document.querySelector('form.justify-content-end');
// if (formElement) {
//     formElement.classList.remove('justify-content-end');
//     formElement.classList.add('justify-content-center');
// }


