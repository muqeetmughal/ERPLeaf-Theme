import frappe

def after_install():
    print("After install")
    print(frappe.db.set_value("User", frappe.session.user, "desk_theme", 'Erpleaf'))
