function minhaFuncao1(){
    console.log("asasas");
    $('#area-01').css({
        color: '#ff0000',
        textTransform: 'uppercase',
        width: '70%'
    });
};

function minhaFuncao3(){
    $('#area-02').empty();
    var alunos = [
        {
            nome: "Aluno 01",
            idade: 11
        },
        {
            nome: "Aluno 02",
            idade: 22
        },
        {
            nome: "Aluno 03",
            idade: 33
        },
        {
            nome: "Aluno 04",
            idade: 44
        },
        {
            nome: "Aluno 05",
            idade: 55
        }
    ];

    for(i = 0 ; i < 5 ; i++){
        console.log(alunos[i]);
    }

    var list = $('#area-02').append('<ul></ul>').find('ul');
    $.each(alunos, function(index, value){
        list.append('<li>' + value.nome + ' - ' + value.idade + '</li>');
    });
};