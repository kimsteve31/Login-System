//Database for Users
class PandaUsers {
    constructor() {
        this.users = [];
    }

    addPanda(panda) {
        this.users.push(panda);
    }

    checkSignIn(email, password) {
        if (this.isEmpty()) return false 
        const match = this.users.find((panda) => {
            return panda.email === email && panda.password === password;
        });
        return match != undefined;
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

// Function handlers to add user to database and check user info
function addUserToList(username, email, password) {
    if (!isInfoEmpty(username, email, password)) return false 
    if (!userDatabase.alreadyPanda(username, email)) {
        userDatabase.addPanda(new Panda(username, email, password));
        return true 
    }
    return false
}

function checkUserInfo(email, password) {
    if (!isInfoEmpty('fill', email, password)) return false 
    if (userDatabase.checkSignIn(email, password)) return true
}

// Check empty input
function isInfoEmpty(username, email, password) {
    return (username.toString() != '' && email.toString() != '' && password.toString() != '');
}

// Constant running main function 
function main() {
    // This html project utilizies JQuery instead of DOM 
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
            let execute = addUserToList(document.querySelector('#username').value, document.querySelector('#register_email').value, document.querySelector('#register_password').value);
            if (execute) window.alert("Registered User!");
            else window.alert("User not Registered!");
            $("#enter_sign_in").css("display", "block");
            $("#register_page").css("display", "none");
        });
        $('#sign_button').click(function() {
            let execute = checkUserInfo(document.querySelector('#input_email').value, document.querySelector('#input_password').value);
            if (execute) window.alert('Welcome Panda User!');
            else window.alert("User not Recognized!");
        });
    });
}

var userDatabase = new PandaUsers();
main()
