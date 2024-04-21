function mudarLogin() {
    // Selecionar os elementos uma única vez
    const btnSignin = document.querySelector("#signin");
    const btnSignup = document.querySelector("#signup");
    const body = document.querySelector("body");

    // Função para trocar a classe do body
    function toggleClass(className) {
        body.className = className;
    }

    // Adicionar eventos aos botões
    btnSignin.addEventListener("click", function () {
        toggleClass("sign-in-js");
    });

    btnSignup.addEventListener("click", function () {
        toggleClass("sign-up-js");
    });
}
mudarLogin()