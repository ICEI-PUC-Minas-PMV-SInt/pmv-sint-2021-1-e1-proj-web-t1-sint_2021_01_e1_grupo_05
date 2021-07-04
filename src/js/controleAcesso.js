function storage() {
  const loginTemp = document.querySelector("#login").value;
  const senhaTemp = document.querySelector("#senha").value;
  const usuarioAtual = { [loginTemp]: senhaTemp };

  localStorage.setItem("loginLocalTemp", JSON.stringify(usuarioAtual));
  var loginLocalStorage = JSON.parse(localStorage.getItem("loginObj"));
  console.log(loginLocalStorage);

  if (loginLocalStorage == null) {
    localStorage.setItem("loginObj", JSON.stringify(usuarioAtual));
    return alert("USUÁRIO CADASTRADO COM SUCESSO!!!");
  }

  var chaves = Object.keys(loginLocalStorage);
  var valores = Object.values(loginLocalStorage);

  for (var i = 0; i < chaves.length; i++) {
    if (chaves[i] == loginTemp) {
      if (Object.values(loginLocalStorage)[i] == senhaTemp) {
        location.href = "menu.html";
        return alert("USUÁRIO LOGADO COM SUCESSO!!!");
      }
    }
    if (chaves[i] == loginTemp && valores[i] != senhaTemp) {
      console.log(loginTemp, senhaTemp);
      return alert("SENHA INCORRETA!!!");
    }
  }

  {
    Object.assign(loginLocalStorage, usuarioAtual);
    localStorage.setItem("loginObj", JSON.stringify(loginLocalStorage));
  }
  return alert("USUÁRIO CADASTRADO COM SUCESSO!!!");
}
