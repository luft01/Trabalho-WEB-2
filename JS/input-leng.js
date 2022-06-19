document.body.querySelector("#username").addEventListener("input", function () {
    document.body.querySelector("#useremail").addEventListener("input", function () {
        document.body.querySelector("#userlogin").addEventListener("input", function () {

            var botao_proximo = document.body.querySelector("#proximo");

            botao_proximo.disabled = this.value.length >= 1 ? false : true;

        });

    });
    /* var botao_proximo = document.body.querySelector("#proximo");
    botao_proximo.disabled = this.value.length >= 1 ? false : true; */

});

function newPopup() {

    alert('Devido ao nosso programador preguiçoso, estamos sem banco de dados no momento.'
        + ' Então sinta-se cadastrado em nosso sistema!');
    varWindow = window.open('cards.html', "_blank");
}