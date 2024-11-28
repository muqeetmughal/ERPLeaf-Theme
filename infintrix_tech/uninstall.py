import frappe

def before_uninstall():
    print("Before Uninstall")
    frappe.db.set_value("User", frappe.session.user, "desk_theme", 'Light')
