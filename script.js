function escolherPersonagem(personagem){
    let mensagem;
    switch(personagem){
        case "guerreiro":
            mensagem="🗡️você escolheu o guerreiro. Pronto para a batalha";
            break;
        case "arqueiro":
            mensagem="🏹 Você escolheu o arqueiro! Mire com precisão!";
            break;
        case "mago":
            mensagem="🔥 Você escolheu o mago! Prepare-se para lançar feitiços!";
            break;
        defaut:
        mensagem="⚠️ Escolha inválida!"
    }
    document.getElementById("mensagem").innerText=mensagem;
}