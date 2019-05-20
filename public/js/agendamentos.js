var datas = [];

function renderTable(idTable){}


// Retorna a data atual no formato aaaa/dd/mm
function getNow(){
  var agora = new Date();
  var dataAtual = agora.getFullYear() + '/' +agora.getDate()+ '/' + agora.getMonth();
  return dataAtual;

}

/* Gerador de datas. Gera uma lista de datas a partir de uma data de início e uma data de fim */
function gerarDatas(dataInicio, dataFim){
  var diaInicial = new Date(dataInicio);
  var diaFinal = new Date(dataFim);
  var novaData = diaInicial;

  if (novaData > diaFinal) {
      novaData = diaFinal;
      diaFinal = diaInicial;
  }

  var listaDatas = [];
  while (novaData < diaFinal) {
      novaData = new Date(novaData.getTime() + (24 * 60 * 60 * 1000));
      dataFormatada =  novaData.getDate() + '-' + (novaData.getMonth() + 1) + '-' + novaData.getFullYear() ; 
      listaDatas.push(dataFormatada);
  }
  return listaDatas;
}

let tabelasId = [];

function destaqueMenu(id){ 
  
  for(let i=0; i<estabelecimentos.length; i++){
    if(id  ==  estabelecimentos[i].substring(0, 10)+i){
      document.getElementById(id).style.backgroundColor = 'rgba(211,211,211, 0.8)';
      document.getElementById(id).style.borderRadius = '5px';
      document.getElementById(id).style.boxShadow = "1px 3px rgba(30,144,255, 0.3)";
    }else{
      document.getElementById(estabelecimentos[i].substring(0, 10)+i).style.backgroundColor = '#ffffff';
      document.getElementById(estabelecimentos[i].substring(0, 10)+i).style.borderRadius = '0px';
      document.getElementById(estabelecimentos[i].substring(0, 10)+i).style.boxShadow = "0px 0px white";
    }
  }
}
function rendermenu(){
  // GERAR A COLUNA DE DATAS
  var datas = gerarDatas('2019/01/17', '2019/01/24')
  var cabecalho = '';
  for(let i=0; i<datas.length; i++){
    cabecalho = cabecalho + '<th scope="col">'+datas[i]+'</th>'
  }

  var id;
  var li;
  var table;
  var tableId;
  var myOnclick;
  var linhaTabela;
  var function_detalhes_vaga_00, function_detalhes_vaga_01, function_detalhes_vaga_02, function_detalhes_vaga_03,
      function_detalhes_vaga_04, function_detalhes_vaga_05, function_detalhes_vaga_06;
  var DATA_00, DATA_01, DATA_02, DATA_03, DATA_04, DATA_05, DATA_06;

  
 
  for(let i=0; i<estabelecimentos.length; i++){
    linhaTabela = '';
    tableId = estabelecimentos[i].substring(0, 5) + i;
    tabelasId.push(tableId);
    myOnclick = 'Mudarestado("'+tableId+'"); destaqueMenu("'+estabelecimentos[i].substring(0, 10)+i+'")';
    id = 'hja'+ i.toString();
    li = "<li class='nav-item' >"+
            "<a id='"+estabelecimentos[i].substring(0, 10)+i+"' class='nav-link active' href='#' onclick='"+myOnclick+"'> " +estabelecimentos[i].substring(0, 15) +"</a>" +
          "</li>";
    $('#ul-estab:last-child').append(li);

    

    for(let j=0; j<vagas2.length; j++){
      if(estabelecimentos[i] == vagas2[j].DS_ESTABELECIMENTO.substring(0, 15)){
        DATA_00 = vagas2[j].DATA_00 == 'N'? 'N': vagas2[j].DATA_00.length == '0' ? '0': vagas2[j].DATA_00.length;
        class00 = DATA_00 == 'N'? '': vagas2[j].DATA_00 == 0 ? 'link-vermelho': 'link-azul';
        //dataTarget00 = vagas2[j].DATA_00 != 0 && vagas2[j].DATA_00 != 'N' ? 
        datas.push({data: ''})
  
        DATA_01 = vagas2[j].DATA_01 == 'N'? 'N': vagas2[j].DATA_01.length == '0' ? '0': vagas2[j].DATA_01.length
        class01 = DATA_01 == 'N'? '': vagas2[j].DATA_01 == '0' ? 'link-vermelho': 'link-azul';
  
        DATA_02 = vagas2[j].DATA_02 == 'N'? 'N': vagas2[j].DATA_02.length == '0' ? '0': vagas2[j].DATA_02.length
        class02 = DATA_02 == 'N'? '': vagas2[j].DATA_02 == '0' ? 'link-vermelho': 'link-azul';
  
        DATA_03 = vagas2[j].DATA_03 == 'N'? 'N': vagas2[j].DATA_03.length == '0' ? '0': vagas2[j].DATA_03.length
        class03 = DATA_03 == 'N'? '': vagas2[j].DATA_03 == '0' ? 'link-vermelho': 'link-azul';
  
        DATA_04 = vagas2[j].DATA_04 == 'N'? 'N': vagas2[j].DATA_04.length == '0' ? '0': vagas2[j].DATA_04.length
        class04 = DATA_04 == 'N'? '': vagas2[j].DATA_04 == '0' ? 'link-vermelho': 'link-azul';
  
        DATA_05 = vagas2[j].DATA_05 == 'N'? 'N': vagas2[j].DATA_05.length == '0' ? '0': vagas2[j].DATA_05.length
        class05 = DATA_05 == 'N'? '': vagas2[j].DATA_05 == '0' ? 'link-vermelho': 'link-azul';
  
        DATA_06 = vagas2[j].DATA_06 == 'N'? 'N': vagas2[j].DATA_06.length == '0' ? '0': vagas2[j].DATA_06.length
        class06 = DATA_06 == 'N'? '': vagas2[j].DATA_06 == '0' ? 'link-vermelho': 'link-azul';
        //var onclick_06 = 'alert('+vagas2[j].DATA_06[0].HR_AGENDA+')';

        function_detalhes_vaga_00 = "detalhesVagas(getHorariosAgenda("+j+"), 0);";
        function_detalhes_vaga_01 = "detalhesVagas(getHorariosAgenda("+j+"), 1);";
        function_detalhes_vaga_02 = "detalhesVagas(getHorariosAgenda("+j+"), 2);";
        function_detalhes_vaga_03 = "detalhesVagas(getHorariosAgenda("+j+"), 3);";
        function_detalhes_vaga_04 = "detalhesVagas(getHorariosAgenda("+j+"), 4);";
        function_detalhes_vaga_05 = "detalhesVagas(getHorariosAgenda("+j+"), 5);";
        function_detalhes_vaga_06 = "detalhesVagas(getHorariosAgenda("+j+"), 6);";
        
        linhaTabela = linhaTabela + '<tr id="'+j+'">' +
              '<td>'+vagas2[j].NM_MEDICO+'</td>'+
              '<td <a href="#" class="'+class00+'"  data-toggle="modal" onClick="'+ function_detalhes_vaga_00 +'">'+DATA_00 +'</a></td>'+
              '<td <a href="#" class="'+class01+'"  data-toggle="modal" onClick="'+ function_detalhes_vaga_01 +'">'+DATA_01 +'</a></td>'+
              '<td <a href="#" class="'+class02+'"  data-toggle="modal" onClick="'+ function_detalhes_vaga_02 +'">'+DATA_02 +'</a></td>'+
              '<td <a href="#" class="'+class03+'"  data-toggle="modal" onClick="'+ function_detalhes_vaga_03 +'">'+DATA_03 +'</a></td>'+
              //'<td <a href="#" class="'+class03+'"  data-toggle="modal" data-target="#vagas-detalhes">'+DATA_03 +'</a></td>'+
              '<td <a href="#" class="'+class04+'"  data-toggle="modal" onClick="'+ function_detalhes_vaga_04 +'">'+DATA_04 +'</a></td>'+
              '<td <a href="#" class="'+class05+'"  data-toggle="modal" onClick="'+ function_detalhes_vaga_05 +'">'+DATA_05 +'</a></td>'+
              '<td <a href="#" class="'+class06+'"  data-toggle="modal" onClick="'+ function_detalhes_vaga_06 +'">'+DATA_06 +'</a></td>'+
              '</tr>';
      }
    }

    // Gera uma tabela a ser renderizada com os dados de vagas de um estabelecimento       
    table = '<div id= "'+ tableId +'" class="collapse col-lg-12 text-center mt-1   table-wrapper-scroll-y my-custom-scrollbar">' +
                '<table class="table table-bordered table-hover" id="'+tableId+'" style="height: 255px;">' +
                    '<thead class="thead-dark">'+
                        '<tr>'+
                          '<th scope="col">Médico</th>'+
                            cabecalho +
                          '</tr>'+
                    '</thead>' +
                    '<tbody>' +
                    linhaTabela +
                    '</tbody>' +
                '</table>' +
            '</div>'

    $('#container:last-child').append(table);
  }
}

function getHorariosAgenda(index){
  let vagas = [];
  let DATA_00_vagas = [];
  let DATA_01_vagas = [];
  let DATA_02_vagas = [];
  let DATA_03_vagas = [];
  let DATA_04_vagas = [];
  let DATA_05_vagas = [];
  let DATA_06_vagas = [];

  if(vagas2[index].DATA_00.length > 0){
    for(let i=0; i<vagas2[index].DATA_00.length; i++){
      DATA_00_vagas.push(vagas2[index].DATA_00[i].HR_AGENDA);
    }
  }

  if(vagas2[index].DATA_01.length > 0){
    for(let i=0; i<vagas2[index].DATA_01.length; i++){
      DATA_01_vagas.push(vagas2[index].DATA_01[i].HR_AGENDA);
    }
  }

  if(vagas2[index].DATA_02.length > 0){
    for(let i=0; i<vagas2[index].DATA_02.length; i++){
      DATA_02_vagas.push(vagas2[index].DATA_02[i].HR_AGENDA);
    }
  }

  if(vagas2[index].DATA_03.length > 0){
    for(let i=0; i<vagas2[index].DATA_03.length; i++){
      DATA_03_vagas.push(vagas2[index].DATA_03[i].HR_AGENDA);
    }
  }

  if(vagas2[index].DATA_04.length > 0){
    for(let i=0; i<vagas2[index].DATA_04.length; i++){
      DATA_04_vagas.push(vagas2[index].DATA_04[i].HR_AGENDA);
    }
  }

  if(vagas2[index].DATA_05.length > 0){
    for(let i=0; i<vagas2[index].DATA_05.length; i++){
      DATA_05_vagas.push(vagas2[index].DATA_05[i].HR_AGENDA);
    }
  }

  if(vagas2[index].DATA_06.length > 0){
    for(let i=0; i<vagas2[index].DATA_06.length; i++){
      DATA_06_vagas.push(vagas2[index].DATA_06[i].HR_AGENDA);
    }
  }

  vagas.push(DATA_00_vagas);
  vagas.push(DATA_01_vagas);
  vagas.push(DATA_02_vagas);
  vagas.push(DATA_03_vagas);
  vagas.push(DATA_04_vagas);
  vagas.push(DATA_05_vagas);
  vagas.push(DATA_06_vagas);

  return vagas;
}

// Responsável por montar e exibir o modal com os horários das vagas disponíveis com um determinado médico e dia
function detalhesVagas(arrayHorarios, index){  
  let vaga = '';
  if(arrayHorarios[index].length > 0){
    for(let i=0; i<arrayHorarios[index].length; i++){
      vaga = vaga + '<div class="custom-control custom-radio">' +
                      '<input type="radio" class="custom-control-input" name="radio" id="radio'+i+'">'+
                      '<label class="custom-control-label" for="radio'+i+'">'+arrayHorarios[index][i]+'</label>' +
                    '</div>';
    }
  }else {
    vaga =  '<div class="form-check">' +
              '<p>Não há vagas disponíveis</p>' +
            '</div>';
  }

  $('#vagas-detalhes-body').html('')
  $('#vagas-detalhes-body').append(vaga)
  $('#vagas-detalhes').modal('show');
}



function Foo (vetor) {
  var dicionario = {};
  for (var i = 0; i < vetor.length; i++) {
      dicionario[vetor[i] + ""] = true;
  }
  var novoVetor = [];
  for (var chave in dicionario) {
      novoVetor.push(chave);
  }
  return novoVetor;
}



function removeDuplicatas(arr){
  var novaArr = arr.filter(function(este, i) {
      return arr.indexOf(este) == i;
  })
  return novaArr;
}



function obterEstabelecimentos(){
  for(let i=0; i<vagas2.length; i++){
    estabelecimentos.push(vagas2[i].DS_ESTABELECIMENTO.substring(0, 15));
    medicos.push(vagas2[i].NM_MEDICO);
  }
  estabelecimentos = removeDuplicatas(estabelecimentos);
}

let estabelecimentos = [];
let medicos = [];



// Dados
let vagas2 = [
    {
      "CD_ESTABELECIMENTO": 20,
      "DS_ESTABELECIMENTO": "Clínica de Especialidades Jardim América",
      "NM_MEDICO": "Julianna Barroso Rizzo Mendonça",
      "NR_CRM": "16073",
      "CD_AGENDA": 1162,
      "DS_COMPLEMENTO": null,
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed \n\n# VALOR DA CONSULTA PARTICULAR: R$220,00\n\n# FAIXA ETÁRIA: A partir de 12 anos\n\n# SEXO: Atende ambos os sexos\n\n# INTERVALOS DE ATENDIMENTOS:  INFORMAR PARA OS PACIENTES CHEGAREM EM INTERVALOS DE 20 MINUTOS. (EXEMPLO: DE 09:00 ÀS 09:20, INFORMAR 09:00. DE 09:21 ÀS 09:40, INFORMAR 09:20. DE 09:41 ÀS 09:59, INFORMAR 09:40.)\n\n# DIAS DE ATENDIMENTO:\n\n=> Segunda-feira:\n> 08:30 ás 11:30\n- HORA MARCADA\n- REALIZA CONSULTA/DIU\n- QUANTIDADE DE PACIENTES: 14 (1 RESERVAS TÉCNICAS)\n- OBSERVAÇÕES: NÃO AGENDAR 1º CONSULTA\n\n=> Terça-feira (MATUTINO):\n> 08:00 ás 12:00\n- HORA MARCADA\n- REALIZA CONSULTA/DIU\n- QUANTIDADE DE PACIENTES: 17 (2 RESERVAS TÉCNICAS)\n- OBSERVAÇÕES: NÃO AGENDAR 1º CONSULTA\n\n=> Terça-feira (VESPERTINO):\n> 13:00 ás 17:00\n- HORA MARCADA\n- REALIZA CONSULTA/DIU\n- QUANTIDADE DE PACIENTES: 17 (2 RESERVAS TÉCNICAS)\n- OBSERVAÇÕES:  NÃO AGENDAR 1º CONSULTA",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": "N",
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": [],
      "DATA_06": []
    },
    {
      "CD_ESTABELECIMENTO": 2,
      "DS_ESTABELECIMENTO": "Hospital América Ltda",
      "NM_MEDICO": "Ana Tamiris Perini",
      "NR_CRM": "19474",
      "CD_AGENDA": 804,
      "DS_COMPLEMENTO": "Ginecologista-Obstetra",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed\n\n# VALOR  DA CONSULTA PARTICULAR: R$ 250,00\n\n# FAIXA ETÁRIA:  A partir de 16 anos.\n\n# SEXO:  Feminino.\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:19, informar 09:00. De 09:20 às 09:39, informar 09:20. De 09:40 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n\n=> Quinta-feira:\n> 19:00 as 21:20 H.\n- HORA MARCADA\n- QUANTIDADE DE PACIENTES: 07\n- NÃO ATENDE ENCAIXES \n- 02 Pacientes Seguimento (GINECO)\n- 03 Pacientes Seguimento (GESTANTE)\n- 02 GESTANTE-PARTO ADEQUADO\n\n=>  Sexta-feira:\n> 13:00 as 16:20 H.\n- HORA MARCADA\n- QUANTIDADE DE PACIENTES: 10\n- NÃO ATENDE ENCAIXES \n- 03 Pacientes de Seguimento (GINECO)\n- 01 Diu-(procedimento)\n- 04 Pacientes de Seguimento (GESTANTE)\n- 02 GESTANTE-PARTO ADEQUADO\n",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": [],
      "DATA_02": [],
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 2,
      "DS_ESTABELECIMENTO": "Hospital América Ltda",
      "NM_MEDICO": "Carolina Bernardo De Campos",
      "NR_CRM": "15295",
      "CD_AGENDA": 368,
      "DS_COMPLEMENTO": "Ginecologista-Obstetra",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed\n\n# VALOR  DA CONSULTA PARTICULAR: R$ 250,00\n\n# FAIXA ETÁRIA:  A partir de 14 anos.\n\n# SEXO: Feminino.\n\n# NÃO ATENDE GESTANTES.\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:19, informar 09:00. De 09:20 às 09:39, informar 09:20. De 09:40 às 09:59, informar 09:40)\n\n\n# DIAS DE ATENDIMENTO:\n=> Segunda-feira:\n> 14:00 às 16:00\n-HORA MARCADA\n-QUANTIDADE DE PACIENTES: 14\n-04 Pacientes de primeira consulta\n-05 Pacientes de seguimento\n-03 Pacientes de retorno\n-02 Pacientes p/ Diu (procedimento).\n\n=>  Terça-feira: Manhã\n> 08:00 às 10:40\n-HORA MARCADA\n-QUANTIDADE DE PACIENTES: 18\n-06 Pacientes de primeira consulta\n-07 Pacientes de seguimento\n-03 Pacientes de retorno\n-02 Pacientes p/ Diu (procedimento).\n\n=>  Terça-feira: Tarde\n> 14:00 às 16:00\n-HORA MARCADA\n-QUANTIDADE DE PACIENTES: 14\n-04 Pacientes de primeira consulta\n-05 Pacientes de seguimento\n-03 Pacientes de retorno\n-02 Pacientes p/ Diu (procedimento).\n\n=>  Quarta-feira: \n> 08:00 às 10:40\n-HORA MARCADA\n-QUANTIDADE DE PACIENTES: 18\n-06 Pacientes de primeira consulta\n-07 Pacientes de seguimento\n-03 Pacientes de retorno\n-02 Pacientes p/ Diu (procedimento).\n\n=>  Quinta-feira: \n> 14:00 às 16:00\n-HORA MARCADA\n-QUANTIDADE DE PACIENTES: 14\n-04 Pacientes de primeira consulta\n-05 Pacientes de seguimento\n-03 Pacientes de retorno\n-02 Pacientes p/ Diu (procedimento).\n\n=>  Sexta-feira: \n> 08:00 às 10:40\n-HORA MARCADA\n-QUANTIDADE DE PACIENTES: 18\n-06 Pacientes de primeira consulta\n-07 Pacientes de seguimento\n-03 Pacientes de retorno\n-02 Pacientes p/ Diu (procedimento).\n\n\n\n\n\n\n",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": [],
      "DATA_01": [],
      "DATA_02": [],
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": [],
      "DATA_06": []
    },
    {
      "CD_ESTABELECIMENTO": 2,
      "DS_ESTABELECIMENTO": "Hospital América Ltda",
      "NM_MEDICO": "Mucio Marcelino Bernardes",
      "NR_CRM": "3925",
      "CD_AGENDA": 811,
      "DS_COMPLEMENTO": "Ginecologista-Obstetra",
      "DS_ORIENTACAO": "PLANOS ATENDIDOS: América,Promed,Unimed,Afego, Itaú, Celgmed, Bradesco, Cassi, Casembrapa, Saúde Caixa, Assefaz.\n\n# VALOR  DA CONSULTA PARTICULAR: R$ 350,00\n\n# FAIXA ETÁRIA: Atende a patir de 14 anos.\n\n# SEXO: Feminino\n\n# ATENDE GESTANTES\n\n\n# INFORMAÇÕES ADICIONAIS\n- Não atende 1ª consulta de Gineco.\n- Somente caso cirurgico.\n\n***SOMENTE A SECRETÁRIA ANA CRISTINA QUE MARCA PACIENTES NESSA AGENDA***\n\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:19, informar 09:00. De 09:20 às 09:39, informar 09:20. De 09:40 às 09:59, informar 09:40).\n\n# DIAS DE ATENDIMENTO:\n\n\n=> Segunda á sexta: Manhã\n> 07:40 às 10:00\n- HORA MARCADA\n-QUANTIDADE DE PACIENTES:18\n-QUANTIDADE DE ENCAIXES:0\n\n=> Terça á sexta: Tarde\n> 13:00 às 16:00\n- HORA MARCADA\n-QUANTIDADE DE PACIENTES:20\n-QUANTIDADE DE ENCAIXES:0\n\n\n\n",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": [],
      "DATA_01": [],
      "DATA_02": [],
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": [],
      "DATA_06": []
    },
    {
      "CD_ESTABELECIMENTO": 2,
      "DS_ESTABELECIMENTO": "Hospital América Ltda",
      "NM_MEDICO": "Rodrigo Eduardo de Brito",
      "NR_CRM": "12301",
      "CD_AGENDA": 359,
      "DS_COMPLEMENTO": "Ginecologista-Obstetra",
      "DS_ORIENTACAO": "#PLANOS ATENDIDOS: América e Promed\n\n# VALOR  DA CONSULTA PARTICULAR: R$ 200,00 \n \nFAIXA ETÁRIA:  A partir de 15 anos- Menores com acompanhante\n\n# SEXO:  Feminino\n\n# ATENDE GESTANTES\n\n# INFORMAÇÕES ADICIONAIS:\n-  Coloca Implanon\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:19, informar 09:00. De 09:20 às 09:39, informar 09:20. De 09:40 às 09:59, informar 09:40)\n\n\n# DIAS DE ATENDIMENTO:\n=> Segunda-feira: \n>13:20 as 16:00\n- HORA MARCADA\n-QUANTIDADE DE PACIENTES: 18\n-07 Pacientes de Seguimento (Gestante).\n-01 Início de Pré- Natal\n-05 Pacientes de Primeira consulta (Gineco).\n-05 Pacientes de Seguimento (Gineco).\n\n=>Terça-feira: Tarde\n>13:20 ás 15:20 \n- HORA MARCADA\n -QUANTIDADE DE PACIENTES: 07\n- -07 Pacientes de Seguimento (Gestante).\n\n=>Quarta-feira: \n>10:00 ás 11:00\n- HORA MARCADA\n-QUANTIDADE DE PACIENTES: 08\n-05 Pacientes de Seguimento (Gineco).\n-03 Pacientes de Primeira consulta (Gineco).\n\n=>Quinta-feira: manhã  \n> 09:20  ás 11:40\n-HORA MARCADA\n-QUANTIDADE DE PACIENTES: 10\n-05 Pacientes de Seguimento (GESTANTE).\n-06 Pacientes de Seguimento (Gineco).\n\n=>Quinta-feira: tarde\n 14:20 as 18:20\n-HORA MARCADA\n-QUANTIDADE DE PACIENTES: 18\n-05 Pacientes de Seguimento (GESTANTE).\n- 1 Início de Pré- Natal\n-06 Pacientes de Seguimento (Gineco).\n-03 Pacientes de Primeira consulta (Gineco)\n-04 Reservas Técnicas\n\n\n=>Sexta-feira: \n> 13:00 ás 15:20\n-HORA MARCADA\n-QUANTIDADE DE PACIENTES: 14\n-05 Pacientes de Seguimento (GESTANTE).\n-05 Pacientes de Seguimento (Gineco).\n-04 Pacientes de Primeira consulta (Gineco)",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": [],
      "DATA_01": [],
      "DATA_02": [],
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": [],
      "DATA_06": [
        {
          "NR_SEQUENCIA": 144081133,
          "DT_AGENDA": "2019-06-04",
          "HR_AGENDA": "14:20",
          "NR_MINUTO_DURACAO": 20
        },
        {
          "NR_SEQUENCIA": 144081134,
          "DT_AGENDA": "2019-06-04",
          "HR_AGENDA": "14:40",
          "NR_MINUTO_DURACAO": 20
        },
        {
          "NR_SEQUENCIA": 144081135,
          "DT_AGENDA": "2019-06-04",
          "HR_AGENDA": "15:20",
          "NR_MINUTO_DURACAO": 20
        }
      ]
    },
    {
      "CD_ESTABELECIMENTO": 2,
      "DS_ESTABELECIMENTO": "Hospital América Ltda",
      "NM_MEDICO": "Sebastiao Ferro de Moraes",
      "NR_CRM": "3699",
      "CD_AGENDA": 798,
      "DS_COMPLEMENTO": "Ginecologista-Obstetra",
      "DS_ORIENTACAO": "PLANOS ATENDIDOS: América e Promed\n\n# VALOR  DA CONSULTA PARTICULAR: R$ 200,00 \n\n# FAIXA ETÁRIA:  A partir de 15 anos \n\n# SEXO:  Feminino\n\n# INFORMAÇÕES ADICIONAIS\n-NÃO IRÁ ATENDER GESTANTES\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:19, informar 09:00. De 09:20 às 09:39, informar 09:20. De 09:40 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n=> Terça-feira: \n>07:20 as 09:00\n-HORA MARCADA\n-QUANTIDADE DE PACIENTES: 08\n-QUANTIDADE DE ENCAIXES:0\n-04 Pacientes de Primeira consulta (Gineco). \n-04 Pacientes de Seguimento (Gineco).",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": "N",
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": []
    },
    {
      "CD_ESTABELECIMENTO": 4,
      "DS_ESTABELECIMENTO": "Hospital Jardim América Ltda",
      "NM_MEDICO": "Ana Tamiris Perini",
      "NR_CRM": "19474",
      "CD_AGENDA": 1467,
      "DS_COMPLEMENTO": "Ginecologia e Obstetrícia",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: Atende todos os convênios do Hospital.\n\n# VALOR DA CONSULTA PARTICULAR: R$250,00\n\n# FAIXA ETÁRIA: Atende a partir de 16 anos\n\n# SEXO: APENAS MULHERES.\n\n# NÃO ATENDE GESTANTE\n# NÃO AGENDAR CASOS DE INFERTILIDADE ESTA COBRINDO A DRA .PABLINE QUE SAIU DE LICENÇA MATERNIDADE!!\r\n\n# NÃO ATENDE CONSULTA DE ROTINA.\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n=> Quinta-feira:\n> 10:00 às 11:20\n- HÓRARIO MARCADO\n- SOMENTE CONSULTA\n- QUANTIDADE DE PACIENTES: 6\n\n\n# INFORMAÇÕES ADICIONAIS:\n- Realiza aqui Histeroscopia cirurgica e diagnostica (somente com sedação).\n-Não marcar casos de endometriose.\n-Histeroscopia diagnostica (CORA 3954-1933).\n-Colposcopia e CAAF DRA. BARBARA E ELIANE (Hosp América).\r\n-Infertilidade: Dra Raquel (policlinica) e (Hosp América).\r\n-Infertilidade: Dr.Diego (policlinica).",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": [],
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 4,
      "DS_ESTABELECIMENTO": "Hospital Jardim América Ltda",
      "NM_MEDICO": "Messias Alves Vieira",
      "NR_CRM": "7434",
      "CD_AGENDA": 441,
      "DS_COMPLEMENTO": "Ginecologia",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: Atende todos os convênios do Hospital e Unimed.\n\n# VALOR DA CONSULTA PARTICULAR: R$250,00\n\n# FAIXA ETÁRIA: Atende a partir de 16 anos\n\n# SEXO: Somente mulheres.\n\n# NÃO ATENDE GESTANTE\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n=> Segunda-feira, Terça-feira, Quinta-feira e Sexta-feira\n> 13:00 às 15:30\n- HÓRARIO MARCADO\n- SOMENTE CONSULTA\n- QUANTIDADE DE PACIENTES: 15\n\n\n# INFORMAÇÕES ADICIONAIS:\n AGENDA EXTRA DIA 13/04, 20/04 e 27/04\n\n- Marcar no maximo 3 Ipasgo por atendimento;\n- Marcar 18 pacientes ,somente 2 retornos por dia.\n-Consultas PARTICULARES  retorno 30 dias, caso paciente não consiga retorno dentro do prazo e justificar o motivo no qual não conseguiu, será avaliado e poderá estender ate no maximo 60 dias. Atençao somente consultas particulares.",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": [],
      "DATA_02": [],
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": [],
      "DATA_06": []
    },
    {
      "CD_ESTABELECIMENTO": 4,
      "DS_ESTABELECIMENTO": "Hospital Jardim América Ltda",
      "NM_MEDICO": "Pabline Barbosa Lima Almeida",
      "NR_CRM": "7606",
      "CD_AGENDA": 482,
      "DS_COMPLEMENTO": "Ginecologia e Obstetrícia",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: Atende todos os convênios do Hospital.\n\n# VALOR DA CONSULTA PARTICULAR: R$250,00\n\n# FAIXA ETÁRIA: Atende a partir de 16 anos\n\n# SEXO: APENAS MULHERES.\n\n# NÃO ATENDE GESTANTE\n\n# NÃO ATENDE CONSULTA DE ROTINA.\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n=> Quinta-feira:\n> 09:00 às 11:00\n- HÓRARIO MARCADO\n- SOMENTE CONSULTA\n- QUANTIDADE DE PACIENTES: 6\n\n\n# INFORMAÇÕES ADICIONAIS:\n- Atende somente casos de infertilidade.\n- Realiza aqui Histeroscopia cirurgica e diagnostica (somente com sedação).\n-Não marcar casos de endometriose.\n-Histeroscopia diagnostica (CORA 3954-1933).\n-Colposcopia (HOSP AMERICA)",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": [],
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Camilla Martins Jacintho Quirino",
      "NR_CRM": "20291",
      "CD_AGENDA": 1584,
      "DS_COMPLEMENTO": "Ginecologista / Obstetrícia ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed \n\n# VALOR DA CONSULTA PARTICULAR: NÃO MARCAR\n\n# FAIXA ETÁRIA: ATENDE TODAS AS IDADES\n\n# FAZ PRÉ NATAL\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO\n\n=> Segunda-feira\n>13:30 AS 17:30H\n-HORÁRIO MARCADO\n-Somente CONSULTAS\nQUANTIDADE: 20 PACIENTES\n\n=> Terça-feira\n>07:30 as 11:00H\n-HORÁRIO MARCADO\n-Somente CONSULTAS\nQUANTIDADE: 20 PACIENTES\n\n# INFORMAÇÕES ADICIONAIS:\nMARCAR INICIO DE PRÉ-NATAL APENAS NOS 4 PRIMEIROS HORÁRIOS",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": "N",
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": [],
      "DATA_06": []
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Clayton De Souza Fortunato Filho",
      "NR_CRM": "15220",
      "CD_AGENDA": 1350,
      "DS_COMPLEMENTO": "AMÉRICA ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América\n\n# VALOR DA CONSULTA PARTICULAR: R$ 250,00\n\n# FAIXA ETÁRIA: Atende a partir de 12 anos \n\n# FAZ PRÉ-NATAL\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n\n=>Quinta-feira\n>13:30 as 16:30H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 17\n\n# INFORMAÇÕES ADICIONAIS:\n#### SÓ ATENDE AMÉRICA ####",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": [],
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Cristiane de Souza Silveira",
      "NR_CRM": "11537",
      "CD_AGENDA": 663,
      "DS_COMPLEMENTO": "Ginecologista",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed.\n\n# VALOR DA CONSULTA PARTICULAR: R$ 200,00\n\n# FAIXA ETÁRIA: Atende a partir de 12 anos\n\n# NÃO ATENDE GESTANTE\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n\n=>Quinta-feira\n> 08:00 às 11:00\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 18\n\n=>Sexta-feira\n> 08:00 às 11:00\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 18\n\n# INFORMAÇÕES ADICIONAIS:\nATENÇÃO NÃO MARCAR GESTANTE",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": [],
      "DATA_02": [],
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Custodio Pereira da Costa Neto",
      "NR_CRM": "10277",
      "CD_AGENDA": 809,
      "DS_COMPLEMENTO": "Ginecologia / Obstetícia",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed.\n\n# VALOR DA CONSULTA PARTICULAR: R$ 170,00\n\n# FAZ PRÉ-NATAL\n\n# FAIXA ETÁRIA: Atende todas as idades.\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n=> Segunda-feira\n> 07:30 ás 11:50H\n- HORÁRIO MARCADO\n-  Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 26\n\n=> Quinta-feira\n>15:30 ás 21:00H\n- HORÁRIO MARCADO\n-  Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 33\n\n# INFORMAÇÕES ADICIONAIS:\n",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": [],
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": [],
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Deborah Aline Alves Moreira",
      "NR_CRM": "14334",
      "CD_AGENDA": 650,
      "DS_COMPLEMENTO": "Ginecologista ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed.\n\n# VALOR DA CONSULTA PARTICULAR: R$ 200,00\n\n# FAIXA ETÁRIA: Atende a partir de 14 anos\n\n# NÃO ATENDE GESTANTE\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n=>Sexta-feira\n> 13:30 as 17:00H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 21\n\n# INFORMAÇÕES ADICIONAIS:\nATENÇÃO NÃO MARCAR GESTANTE",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": "N",
      "DATA_02": [],
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Diego Fraga Rezende",
      "NR_CRM": "18326",
      "CD_AGENDA": 814,
      "DS_COMPLEMENTO": "Ginecologia / Obstetrícia ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed.\n\n# VALOR DA CONSULTA PARTICULAR: GINECOLOGIA/OBSTETRICIA  R$ 250,00\n\n# VALOR DA CONSULTA PARTICULAR: REPRODUÇÃO HUMANA R$ 300,00\n\n# FAIXA ETÁRIA: Atende todas as idades\n\n# FAZ PRÉ-NATAL \n# ATENDE REPRODUÇÃO HUMANA \n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n\n=>Quarta-feira\n>13:30 as 18:00H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 19\n\n=>Quinta-feira \n>18:00 as 21:00H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 13\n\n# INFORMAÇÕES ADICIONAIS:\n",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": [],
      "DATA_01": [],
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Fabiola F Rodrigues da Cunha",
      "NR_CRM": "20352",
      "CD_AGENDA": 1521,
      "DS_COMPLEMENTO": "Ginecologista",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: AMÉRICA E PROMED\n\n# VALOR DA CONSULTA PARTICULAR: R$150,00\n\n# FAIXA ETÁRIA: ATENDE TODAS AS IDADES\n\n# NÃO FAZ PRÉ NATAL , SOMENTE GINECO SIMPLES\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO\n\n=> Terça-feira\n>18:00 as 21:30H\n-HORÁRIO MARCADO\n-Somente CONSULTAS\nQUANTIDADE: 17 PACIENTES\n\n# INFORMAÇÕES ADICIONAIS:\nNÃO MARCAR GESTANTE ",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": "N",
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": []
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Fernanda Paludetto Rodrigues",
      "NR_CRM": "19302",
      "CD_AGENDA": 1583,
      "DS_COMPLEMENTO": "AMÉRICA ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América\n\n# VALOR DA CONSULTA PARTICULAR: NÃO MARCAR\n\n# FAIXA ETÁRIA: ATENDE TODAS AS IDADES.\n\n# NÃO FAZ PRÉ NATAL / NÃO MARCAR \n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO\n\n=> Quinta-feira\n>08:00 as 12:00H\n-HORÁRIO MARCADO\n-Somente CONSULTAS\nQUANTIDADE: 16 PACIENTES\n\n# INFORMAÇÕES ADICIONAIS:\nNÃO FAZ PRÉ-NATAL \nNÃO MARCAR GESTANTE ",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": [],
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Flavia de Castro Santana",
      "NR_CRM": "6514",
      "CD_AGENDA": 1846,
      "DS_COMPLEMENTO": "AMÉRICA",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América\n\n# VALOR DA CONSULTA PARTICULAR: R$ 170,00\n\n# FAIXA ETÁRIA: ATENDE TODAS AS IDADES.\n\n# NÃO FAZ PRÉ NATAL / NÃO MARCAR \n# NÃO COLOCA DIU / NÃO MARCAR\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO\n\n=> Quarta-feira\n>18:00 as 22:00H\n-HORÁRIO MARCADO\n-Somente CONSULTAS\nQUANTIDADE: 15 PACIENTES\n\n=> Quinta-feira\n>18:00 as 22:00H\n-HORÁRIO MARCADO\n-Somente CONSULTAS\nQUANTIDADE: 15 PACIENTES\n\n# INFORMAÇÕES ADICIONAIS:\nNÃO FAZ PRÉ-NATAL \nNÃO MARCAR GESTANTE ",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": [],
      "DATA_01": [],
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Helen Maia Silva",
      "NR_CRM": "7573",
      "CD_AGENDA": 725,
      "DS_COMPLEMENTO": "Ginecologista",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed.\n\n# VALOR DA CONSULTA PARTICULAR: R$ 250,00\n\n# FAIXA ETÁRIA: Atende a partir de 12 anos\n\n# NÃO ATENDE GESTANTE ##\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n\n=>Segunda-feira\n> 17:30 AS 20:30H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 19\n\n=>Quarta-feira\n> 15:30 às 20:30H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 31\n\n# INFORMAÇÕES ADICIONAIS:\nATENÇÃO NÃO MARCAR GESTANTE",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": [],
      "DATA_01": "N",
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": [],
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Helen Maia Silva",
      "NR_CRM": "7573",
      "CD_AGENDA": 1383,
      "DS_COMPLEMENTO": "AMÉRICA ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América\n\n# VALOR DA CONSULTA PARTICULAR: R$ 250,00\n\n# FAIXA ETÁRIA: Atende a partir de 12 anos\n\n# NÃO ATENDE GESTANTE ##\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n\n=>Quinta-feira\n> 13:30 as 16:50H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 21\n\n=>Sexta-feira\n> 13:30 as 16:50H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 21\n\n# INFORMAÇÕES ADICIONAIS:\nSó América \nATENÇÃO NÃO MARCAR GESTANTE",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": [],
      "DATA_02": [],
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Janine Martins Ferreira",
      "NR_CRM": "18173",
      "CD_AGENDA": 815,
      "DS_COMPLEMENTO": "Ginecologia / Obstetrícia ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed.\n\n# VALOR DA CONSULTA PARTICULAR: R$ 200,00\n\n# FAIXA ETÁRIA: Atende todas as idades\n\n# FAZ PRÉ-NATAL\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n\n=>Segunda-feira\n> 08:00 às 12:00\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 16\n\n=>Quinta-feira\n> 08:00 às 12:00\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 16\n\n# INFORMAÇÕES ADICIONAIS:",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": [],
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": [],
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Jayme Gomes Junior",
      "NR_CRM": "17313",
      "CD_AGENDA": 951,
      "DS_COMPLEMENTO": "Ginecologia / Obstetrícia",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed.\n\n# VALOR DA CONSULTA PARTICULAR: R$ 200,00\n\n# FAIXA ETÁRIA: Á PARTIR DOS 16 ANOS\n\n# ATENDE GESTANTE\nSOMENTE 02 INICIO DE PRÉ-NATAL (FAVOR COLOCAR NA OBS)\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO\n\n=> Quinta-feira\n>08:00 as 11:15h\n-HORÁRIO MARCADO\n-Somente CONSULTAS\nQUANTIDADE: 14 PACIENTES\n\n# INFORMAÇÕES ADICIONAIS:\nSOMENTE 02 INICIO DE PRÉ-NATAL (FAVOR COLOCAR NA OBS)\n",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": [],
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Juliana Lopes Rodrigues",
      "NR_CRM": "19836",
      "CD_AGENDA": 1478,
      "DS_COMPLEMENTO": "Ginecologista / Obstetrícia ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed\n\n# VALOR DA CONSULTA PARTICULAR: R$ 200,00\n\n# FAIXA ETÁRIA: a partir de 8 anos \n\n# ATENDE GESTANTE\nDÁ PREFERENCIA PARA AGENDAMENTOS DE GESTANTE\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO\n\n=> Sexta-feira\n>08:00 as 11:30H\n-HORÁRIO MARCADO\n-Somente CONSULTAS\nQUANTIDADE: 18 PACIENTES\n\n# INFORMAÇÕES ADICIONAIS:\nSOMENTE O PLANO AMÉRICA \n",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": "N",
      "DATA_02": [],
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Marcela Muniz Maia de Menezes",
      "NR_CRM": "17224",
      "CD_AGENDA": 718,
      "DS_COMPLEMENTO": "Ginecologia / Obstetrícia ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed.\n\n# VALOR DA CONSULTA PARTICULAR: R$ 200,00\n\n# FAIXA ETÁRIA: Atende a partir de 12 anos\n\n# NÃO MARCAR INICIO DE PRÉ-NATAL\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n=>Segunda-feira\n> 09:00 às 11:45\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 14\n\n=>Terça-feira\n> 14:00 às 17:30\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 18\n\n=>Quarta-feira\n> 14:00 às 17:30\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 18\n\n=>Sexta-feira\n> 14:00 às 17:30\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 18\n\n# INFORMAÇÕES ADICIONAIS:",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": [],
      "DATA_01": "N",
      "DATA_02": [],
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": [],
      "DATA_06": []
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Maria Eduarda Melo Heraclio Cabral de Araujo",
      "NR_CRM": "12193",
      "CD_AGENDA": 667,
      "DS_COMPLEMENTO": "Ginecologista ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed.\n\n# VALOR DA CONSULTA PARTICULAR: R$ 250,00\n\n#NÃO ATENDE GESTANTE \n\n# FAIXA ETÁRIA: Atende a partir de 14 anos\n\n# DIAS DE ATENDIMENTO:\n=>Segunda-feira\n> 14:30 as 17:00H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 15\n\n=>Terça-feira\n>08:30 as11:30H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 18\n\n=>Terça-feira\n> 14:30 as 17:00H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 15\n\n=>Sexta-feira\n> 14:30 as 17:00H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 15\n\n# INFORMAÇÕES ADICIONAIS:\nATENÇÃO, NÃO MARCAR GESTANTE, MÉDICA NÃO FAZ PRÉ-NATAL ",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": "N",
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": [],
      "DATA_06": []
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Mariana Matias Diniz Brito",
      "NR_CRM": "12935",
      "CD_AGENDA": 634,
      "DS_COMPLEMENTO": "Ginecologista / Obstetrícia",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed.\n\n# VALOR DA CONSULTA PARTICULAR: R$ 150,00\n\n# FAIXA ETÁRIA: Atende todas as idades\n\n# ATENDE GESTANTE\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n=>Segunda-feira\n> 13:30 às 17:10\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 13\n\n# INFORMAÇÕES ADICIONAIS:\n- FAZ PRÉ-NATAL",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": "N",
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": [],
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Maryanne Oliveira Silva",
      "NR_CRM": "19812",
      "CD_AGENDA": 1571,
      "DS_COMPLEMENTO": "Ginecologia / Obstetrícia ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: AMÉRICA E PROMED\n\n# VALOR DA CONSULTA PARTICULAR: NÃO MARCAR.\n\n# FAIXA ETÁRIA: Atende todas as idades\n\n# FAZ PRÉ-NATAL \n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO\n\n=> Segunda-feira \n>13:00 AS 17:00h\n-HORÁRIO MARCADO\n-Somente CONSULTAS\nQUANTIDADE: 20 PACIENTES\n\n=> Quarta-feira\n>18:00 AS 21:30h\n-HORÁRIO MARCADO\n-Somente CONSULTAS\nQUANTIDADE: 17 PACIENTES\n\n=> Sexta-feira\n>08:00 as 12:00h\n-HORÁRIO MARCADO\n-Somente CONSULTAS\nQUANTIDADE: 20 PACIENTES\n\n# INFORMAÇÕES ADICIONAIS:\nMARCAR INICIO DE PRÉ-NATAL SOMENTE NOS 4 PRIMEIROS HORÁRIOS ",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": [],
      "DATA_01": "N",
      "DATA_02": [],
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": [],
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Max Aurélio Silva Santos",
      "NR_CRM": "18953",
      "CD_AGENDA": 1471,
      "DS_COMPLEMENTO": "Ginecologista / Obstetrícia",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed (ATENÇÃO MARCAR PROMED A PARTIR DE ABRIL)\n\n# VALOR DA CONSULTA PARTICULAR: R$ 200,00\n\n# FAIXA ETÁRIA: Á PARTIR DOS 16 ANOS\n\n# ATENDE GESTANTE\nDÁ PREFERENCIA PARA AGENDAMENTOS DE GESTANTE\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO\n\n=> Segunda-feira \n>14:00 as 20:00H\n-HORÁRIO MARCADO\n-Somente CONSULTAS\nQUANTIDADE: 34 PACIENTES\n\n# INFORMAÇÕES ADICIONAIS:\nDÁ PREFERENCIA PARA AGENDAMENTOS DE GESTANTE\n",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": "N",
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": [
        {
          "NR_SEQUENCIA": 144150774,
          "DT_AGENDA": "2019-06-03",
          "HR_AGENDA": "17:30",
          "NR_MINUTO_DURACAO": 10
        }
      ],
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Milena Karla Silva Cruz",
      "NR_CRM": "17641",
      "CD_AGENDA": 1016,
      "DS_COMPLEMENTO": "Ginecologia / Obstetrícia ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed.\n\n# VALOR DA CONSULTA PARTICULAR: R$ 220,00\n\n# FAIXA ETÁRIA: A partir de 12 anos.\n\n# SEXO: Ambos\n\n#FAZ PRÉ-NATAL\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n=> Terça-feira\n> 08:00 ás 11:30H\n- HORÁRIO MARCADO\n-  Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 15\n\n=> Terça-feira\n> 13:30 AS 17:00H\n- HORÁRIO MARCADO\n-  Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 15\n\n=> Quarta-feira\n> 08:00 ás 11:30H\n- HORÁRIO MARCADO\n-  Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 15\n\n=>Sexta-feira\n>13:30 as 17:00H\n- HORÁRIO MARCADO\n-  Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 15\n\n# INFORMAÇÕES ADICIONAIS:",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": [],
      "DATA_01": "N",
      "DATA_02": [],
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": []
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Raquel Carvalho de Moraes",
      "NR_CRM": "14793",
      "CD_AGENDA": 645,
      "DS_COMPLEMENTO": "Ginecologista / Obstetrícia ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed.\n\n# VALOR DA CONSULTA PARTICULAR: R$ 250,00\n\n# FAIXA ETÁRIA: Atende a partir de 12 anos\n\n# NÃO MARCAR INICIO DE PRÉ NATAL (SE MARCAR VAI DESMARCAR)\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n\n# DIAS DE ATENDIMENTO:\n=>Segunda-feira\n> 14:30 às 17:30H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 10\n\n=>Terça-feira\n> 14:30 às 17:30H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 10\n\n=>Quinta-feira\n> 14:30 às 17:30H - VESPERTINO\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 10\n\n- OBSERVAÇÕES: **GINECOLOGIA E REPRODUÇÃO HUMANA**\n\n# INFORMAÇÕES ADICIONAIS:\n",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": [],
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": [],
      "DATA_06": []
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Taissa Fernandes Lemes",
      "NR_CRM": "22970",
      "CD_AGENDA": 993,
      "DS_COMPLEMENTO": "Ginecologia / Obstetrícia ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed.\n\n# VALOR DA CONSULTA PARTICULAR: R$ 200,00\n\n# FAIXA ETÁRIA: Atende a partir de 14 anos.\n\n# FAZ PRÉ-NATAL\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n\n=>Terça-feira\n> 14:00 as 18:00H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 12\n-SOMENTE GINECOLOGIA \n\n=>Quarta-feira\n> 08:30 às 12:30H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 12\n-SOMENTE GESTANTE \n\n=>Sexta-feira \n> 08:30 às 12:30H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 12\n-SOMENTE GESTANTE\n\n# INFORMAÇÕES ADICIONAIS:",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": [
        {
          "NR_SEQUENCIA": 144143122,
          "DT_AGENDA": "2019-05-29",
          "HR_AGENDA": "10:50",
          "NR_MINUTO_DURACAO": 20
        },
        {
          "NR_SEQUENCIA": 144143123,
          "DT_AGENDA": "2019-05-29",
          "HR_AGENDA": "11:10",
          "NR_MINUTO_DURACAO": 20
        }
      ],
      "DATA_01": "N",
      "DATA_02": [
        {
          "NR_SEQUENCIA": 144143397,
          "DT_AGENDA": "2019-05-31",
          "HR_AGENDA": "08:50",
          "NR_MINUTO_DURACAO": 20
        },
        {
          "NR_SEQUENCIA": 144143398,
          "DT_AGENDA": "2019-05-31",
          "HR_AGENDA": "10:30",
          "NR_MINUTO_DURACAO": 20
        },
        {
          "NR_SEQUENCIA": 144143399,
          "DT_AGENDA": "2019-05-31",
          "HR_AGENDA": "10:50",
          "NR_MINUTO_DURACAO": 20
        },
        {
          "NR_SEQUENCIA": 144143400,
          "DT_AGENDA": "2019-05-31",
          "HR_AGENDA": "11:10",
          "NR_MINUTO_DURACAO": 20
        }
      ],
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": []
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Tatiana da Silva Chaves",
      "NR_CRM": "15048",
      "CD_AGENDA": 720,
      "DS_COMPLEMENTO": "Ginecologia / Obstetrícia ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed.\n\n# VALOR DA CONSULTA PARTICULAR: R$ 250,00\n\n# FAIXA ETÁRIA: Atende a partir de 10 anos\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# FAZ PRÉ-NATAL\n\n# DIAS DE ATENDIMENTO:\n=>Segunda-feira \n> 13:00 às 18:20H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 32\n\n=>Sexta-feira\n> 08:30 as 12:20H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 23\n\n# INFORMAÇÕES ADICIONAIS:\n- NÃO MARCAR INÍCIO DE PRÉ-NATAL NA SEXTA-FEIRA\n- MARCAR APENAS 2 INICIO DE PRÉ-NATAL NA SEGUNDA-FEIRA (QUANDO MARCAR FAVOR COLOCAR NA OBSERVAÇÃO)",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": "N",
      "DATA_02": [],
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": [],
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Tiago Guimarães Gomez Barreto",
      "NR_CRM": "17222",
      "CD_AGENDA": 1763,
      "DS_COMPLEMENTO": "Ginecologista / Obstetrícia ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Rromed \n\n# VALOR DA CONSULTA PARTICULAR: NÃO MARCAR\n\n# FAIXA ETÁRIA: ATENDE TODAS AS IDADES.\n\n# FAZ PRÉ-NATAL \n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO\n\n=> Segunda-feira \n>13:00 as 17:30h\n-HORÁRIO MARCADO\n-Somente CONSULTAS\nQUANTIDADE: 25 PACIENTES\n\n# INFORMAÇÕES ADICIONAIS:\n",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": "N",
      "DATA_01": "N",
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": [
        {
          "NR_SEQUENCIA": 144163060,
          "DT_AGENDA": "2019-06-03",
          "HR_AGENDA": "13:00",
          "NR_MINUTO_DURACAO": 10
        },
        {
          "NR_SEQUENCIA": 144163061,
          "DT_AGENDA": "2019-06-03",
          "HR_AGENDA": "14:20",
          "NR_MINUTO_DURACAO": 10
        },
        {
          "NR_SEQUENCIA": 144163062,
          "DT_AGENDA": "2019-06-03",
          "HR_AGENDA": "14:30",
          "NR_MINUTO_DURACAO": 10
        },
        {
          "NR_SEQUENCIA": 144163063,
          "DT_AGENDA": "2019-06-03",
          "HR_AGENDA": "14:40",
          "NR_MINUTO_DURACAO": 10
        },
        {
          "NR_SEQUENCIA": 144163064,
          "DT_AGENDA": "2019-06-03",
          "HR_AGENDA": "14:50",
          "NR_MINUTO_DURACAO": 10
        },
        {
          "NR_SEQUENCIA": 144163065,
          "DT_AGENDA": "2019-06-03",
          "HR_AGENDA": "15:10",
          "NR_MINUTO_DURACAO": 10
        }
      ],
      "DATA_06": "N"
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Valdeberto Abecassis Mendes",
      "NR_CRM": "10856",
      "CD_AGENDA": 614,
      "DS_COMPLEMENTO": "Ginecologia / Obstetrícia",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed.\n\n# VALOR DA CONSULTA PARTICULAR: R$ 200,00\n\n# FAIXA ETÁRIA: Atende todas as idades\n\n# FAZ PRÉ NATAL \n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n=>Terça-feira (MATUTINO) \n> 08:30 às 11:15H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 17\n\n=>Terça-feira \n> 14:00 às 20:00H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 36\n\n=>Quarta-feira (MATUTINO) - VAI ATENDER ESSE PERIODO SOMENTE ATÉ O DIA 15/05\n> 08:00 às 12:00h\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 24\n\n=>Quinta-feira (MATUTINO) \n> 08:30 às 11:15H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 17\n\n=>Quinta-feira \n> 14:00 às 20:00H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 36\n\n# INFORMAÇÕES ADICIONAIS:",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": [],
      "DATA_01": [],
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": [
        {
          "NR_SEQUENCIA": 144150132,
          "DT_AGENDA": "2019-06-04",
          "HR_AGENDA": "15:50",
          "NR_MINUTO_DURACAO": 10
        },
        {
          "NR_SEQUENCIA": 144150133,
          "DT_AGENDA": "2019-06-04",
          "HR_AGENDA": "17:30",
          "NR_MINUTO_DURACAO": 10
        },
        {
          "NR_SEQUENCIA": 144150134,
          "DT_AGENDA": "2019-06-04",
          "HR_AGENDA": "17:40",
          "NR_MINUTO_DURACAO": 10
        }
      ]
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Wanessa Masson Moura",
      "NR_CRM": "17621",
      "CD_AGENDA": 799,
      "DS_COMPLEMENTO": "Ginecologia / Obstetrícia ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed.\n\n# VALOR DA CONSULTA PARTICULAR: NÃO MARCAR POR ENQUANTO \n\n# FAIXA ETÁRIA: Atende todas as idades\n\n# FAZ PRÉ-NATAL\n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n=>Terça-feira\n> 13:00  às 16:00\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 14\n\n=>Quarta-feira\n>07:30 as 11:00H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 15\n\n=>Quinta-feira\n> 13:00 às 16:00\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 14\n\n# INFORMAÇÕES ADICIONAIS:\nAO MARCAR INICIO DE PRÉ-NATAL FAVOR COLOCAR NA OBSERVAÇÃO ",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": [],
      "DATA_01": [],
      "DATA_02": "N",
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": []
    },
    {
      "CD_ESTABELECIMENTO": 13,
      "DS_ESTABELECIMENTO": "Policlínica Sul",
      "NM_MEDICO": "Weridyana Batista de Oliveira",
      "NR_CRM": "15309",
      "CD_AGENDA": 1362,
      "DS_COMPLEMENTO": "Ginecologista / Obstetrícia ",
      "DS_ORIENTACAO": "# PLANOS ATENDIDOS: América e Promed \n\n# VALOR DA CONSULTA PARTICULAR: R$ 200,00\n\n# FAIXA ETÁRIA: Atende a partir de 12 anos.\n\n# FAZ PRÉ NATAL \n\n# INTERVALOS DE ATENDIMENTO: Informar para os pacientes chegarem em intervalos de 20 minutos. (Exemplo: De 09:00 às 09:20, informar 09:00. De 09:21 às 09:40, informar 09:20. De 09:41 às 09:59, informar 09:40)\n\n# DIAS DE ATENDIMENTO:\n=>Quarta-feira \n> 08:30 as 12:00H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 18\n\n=>Quarta-feira ( A PARTIR DE MAIO/2019)\n> 13:30 AS 17:20H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 18\n\n=>Quarta-feira ( VAI ATENDER NESSE PERIODO SOMENTE ATÉ DIA 26/04/2019)\n> 18:00 as 22:00H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 18\n\n=>Sexta-feira\n> 08:30 as 12:00H\n- HORÁRIO MARCADO\n- Somente CONSULTAS\n- QUANTIDADE DE PACIENTES: 18\n\n# INFORMAÇÕES ADICIONAIS:\n- FAZ PRÉ-NATAL",
      "NR_SEQ_AGRUPAMENTO": null,
      "DATA_00": [],
      "DATA_01": "N",
      "DATA_02": [],
      "DATA_03": "N",
      "DATA_04": "N",
      "DATA_05": "N",
      "DATA_06": "N"
    }
  ]


  