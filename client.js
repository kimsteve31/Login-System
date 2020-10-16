//Database for Users
class PandaUsers {
    constructor() {
        this.users = [];
    }

    addPanda(panda) {
        this.users.push(panda);
    }

    alreadyPanda(username, email) {
        if (this.isEmpty()) return false 
        const userArray = this.users.map(function(user) {
            return user.username;
        });
        const emailArray = this.users.map(function(useremail) {
            return useremail.email;
        });
        if (userArray.includes(username.toString()) || emailArray.includes(email.toString())) return true 
        return false 
    }

    isEmpty() {
        return this.users.length == 0;
    }
}

//Panda Class
class Panda {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    getUsername() {
        return this.username;
    }

    getEmail() {
        return this.email;
    }
    
    getPassword() {
        return this.password;
    }
}

// Function handler
function addUserToList(username, email, password) {
    if (username.toString() == '') return false 
    if (email.toString() == '') return false 
    if (password.toString() == '') return false 
    if (!userDatabase.alreadyPanda(username, email)) {
        userDatabase.addPanda(new Panda(username, email, password));
    }
}

// Constant running main function 
function main() {
    $(document).ready(function(){
        $("#get_started").click(function(){
            $("#initial_screen").css("display", "none");
            $("#register_page").css("display", "block");
        });
        $("#sign_in").click(function(){
            $("#initial_screen").css("display", "none");
            $("#enter_sign_in").css("display", "block");
        });
        $('#register_button').click(function(){
            addUserToList(document.querySelector('#username').value, document.querySelector('#register_email').value, document.querySelector('#register_password').value);
        });
    });
}

var userDatabase = new PandaUsers();
main()
