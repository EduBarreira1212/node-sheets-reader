const updateSheets = async (userForm) => {
    const userAdded = await sheet.addRow({Email: userForm.Email, Name: userForm.Name, Password: userForm.Password, Phone: userForm.Phone, CEP: userForm.CEP});
    return userAdded;
}

export default updateSheets;