class UserModel {
    constructor(firstName, lastName, email, password, isConfirmed = false, confirmationDate = null) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password; // In a real application, this should be hashed
        this.isConfirmed = isConfirmed;
        this.confirmationDate = confirmationDate;
    }

    confirmUser() {
        this.isConfirmed = true;
        this.confirmationDate = new Date().toISOString();
    }
}

module.exports = UserModel;