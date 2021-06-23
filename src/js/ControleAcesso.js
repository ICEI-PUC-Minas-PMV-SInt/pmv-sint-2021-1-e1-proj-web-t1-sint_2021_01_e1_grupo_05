function storage() {

    loginObj = setLoginObj(document.getElementById("login").value, document.getElementById("senha").value);

    var validador = 0
    var re = new RegExp(/^\s+|\s+$/g, "");

    for (i = 0; i < localStorage.length; i++) {
        const a = localStorage.key(i).replace(re, " ");
        if (localStorage.key(i).toString().toUpperCase().replaceAll(' ', '') === loginObj.login().toUpperCase().replaceAll(' ', '')) {
            validador = validador + 1
            if (loginObj.senha !== localStorage.getItem(localStorage.key(i))) {
                return alert("SENHA INCORRETA!!!")
            }
        } else {
            alert('ERROR.')
        }
    }

    function setLoginObj(login, senha) {
        var loginObj = {
            login: login.toString(),
            senha: senha.toString()
        }

        return loginObj;
    }
}