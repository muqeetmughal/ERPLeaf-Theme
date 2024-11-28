import frappe

@frappe.whitelist()
def switch_theme(theme):
	print("Checking theme", theme)
	if theme in ["Dark", "Light", "Automatic", "Erpleaf"]:
		frappe.db.set_value("User", frappe.session.user, "desk_theme", theme)
