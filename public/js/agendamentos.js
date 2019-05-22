// Variáveis globais
var datas = [];
let tabelasId = [];
let estabelecimentos = [];
let medicos = [];
let vagas2 = [];


/*
  FUNÇÕES UTILITÁRIAS
*/
// Retorna a data atual no formato aaaa/dd/mm
function getNow() {
  var agora = new Date();
  var dataAtual = agora.getFullYear() + '/' + agora.getDate() + '/' + agora.getMonth();
  return dataAtual;

}

/* Gerador de datas. Gera uma lista de datas a partir de uma data de início e uma data de fim */
function gerarDatas(dataInicio, dataFim) {
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
    dataFormatada = novaData.getDate() + '-' + (novaData.getMonth() + 1) + '-' + novaData.getFullYear();
    listaDatas.push(dataFormatada);
  }
  return listaDatas;
}


function Foo(vetor) {
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


function removeDuplicatas(arr) {
  var novaArr = arr.filter(function (este, i) {
    return arr.indexOf(este) == i;
  })
  return novaArr;
}


function destaqueMenu(id) {
  for (let i = 0; i < estabelecimentos.length; i++) {
    if (id == estabelecimentos[i].substring(0, 10) + i) {
      document.getElementById(id).style.backgroundColor = 'rgba(211,211,211, 0.8)';
      document.getElementById(id).style.borderRadius = '5px';
      document.getElementById(id).style.boxShadow = "1px 3px rgba(30,144,255, 0.3)";
    } else {
      document.getElementById(estabelecimentos[i].substring(0, 10) + i).style.backgroundColor = '#ffffff';
      document.getElementById(estabelecimentos[i].substring(0, 10) + i).style.borderRadius = '0px';
      document.getElementById(estabelecimentos[i].substring(0, 10) + i).style.boxShadow = "0px 0px white";
    }
  }
}


/*
  Ao carregar a página uma lista de especialidades é recuperada da API e renderizada como menu lateral
  Quando um desses menus for clicado, uma nova requisição tráz a relação de estabelecimentos que tem vaga para aquela especilidade,
  esta lista de estabelecimentos é renderizada como menu na parte superio da página.
  Quando um desses menus for clicado, uma nova requisição é feita, agora trazendo uma relação de médicos, vagas e horários.
*/
function obterEspecialidades() {
  $.get('http://fila.hmja.com.br:3003/especialidades_agenda/15/F', function (data) {
    var getVagasFunc;
    for (var i = 0; i < data.length; i++) {
      getVagasFunc = 'rendermenuEstabelecimentos(' + data[i].CD_ESPECIALIDADE + ')';
      $('#sidebar-wrapper').append('<div class="list-group list-group-flush">' +
        '<a href="#" onClick="' + getVagasFunc + '"  class="list-group-item list-group-item-action bg-light">' + data[i].DS_ESPECIALIDADE + '</a>' +
        '</div>')
    };
  }, 'json');
}


function rendermenuEstabelecimentos(especialidade) {
  obterDadosVagas(especialidade).then((vagas) => {
    vagas2 = vagas;
  });
  // GERAR A COLUNA DE DATAS
  var datas = gerarDatas('2019/01/17', '2019/01/24')
  var cabecalho = '';
  for (let i = 0; i < datas.length; i++) {
    cabecalho = cabecalho + '<th scope="col">' + datas[i] + '</th>'
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

  // Obtendo referências
  var lista = document.getElementById('ul-estab');
  var itens = lista.getElementsByTagName('li');
  // Removendo elementos
  if (itens.length > 0) {
    lista.removeChild(itens)
  }


  for (let i = 0; i < estabelecimentos.length; i++) {
    linhaTabela = '';
    tableId = estabelecimentos[i].substring(0, 5) + i;
    tabelasId.push(tableId);
    myOnclick = 'Mudarestado("' + tableId + '"); destaqueMenu("' + estabelecimentos[i].substring(0, 10) + i + '")';
    id = 'hja' + i.toString();
    li = "<li class='nav-item' >" +
      "<a id='" + estabelecimentos[i].substring(0, 10) + i + "' class='nav-link active' href='#' onclick='" + myOnclick + "'> " + estabelecimentos[i].substring(0, 15) + "</a>" +
      "</li>";
    $('#ul-estab:last-child').append(li);

    for (let j = 0; j < vagas2.length; j++) {
      if (estabelecimentos[i] == vagas2[j].DS_ESTABELECIMENTO.substring(0, 15)) {
        DATA_00 = vagas2[j].DATA_00 == 'N' ? 'N' : vagas2[j].DATA_00.length == '0' ? '0' : vagas2[j].DATA_00.length;
        class00 = DATA_00 == 'N' ? '' : vagas2[j].DATA_00 == 0 ? 'link-vermelho' : 'link-azul';
        datas.push({ data: '' })

        DATA_01 = vagas2[j].DATA_01 == 'N' ? 'N' : vagas2[j].DATA_01.length == '0' ? '0' : vagas2[j].DATA_01.length
        class01 = DATA_01 == 'N' ? '' : vagas2[j].DATA_01 == '0' ? 'link-vermelho' : 'link-azul';
        DATA_02 = vagas2[j].DATA_02 == 'N' ? 'N' : vagas2[j].DATA_02.length == '0' ? '0' : vagas2[j].DATA_02.length
        class02 = DATA_02 == 'N' ? '' : vagas2[j].DATA_02 == '0' ? 'link-vermelho' : 'link-azul';
        DATA_03 = vagas2[j].DATA_03 == 'N' ? 'N' : vagas2[j].DATA_03.length == '0' ? '0' : vagas2[j].DATA_03.length
        class03 = DATA_03 == 'N' ? '' : vagas2[j].DATA_03 == '0' ? 'link-vermelho' : 'link-azul';
        DATA_04 = vagas2[j].DATA_04 == 'N' ? 'N' : vagas2[j].DATA_04.length == '0' ? '0' : vagas2[j].DATA_04.length
        class04 = DATA_04 == 'N' ? '' : vagas2[j].DATA_04 == '0' ? 'link-vermelho' : 'link-azul';
        DATA_05 = vagas2[j].DATA_05 == 'N' ? 'N' : vagas2[j].DATA_05.length == '0' ? '0' : vagas2[j].DATA_05.length
        class05 = DATA_05 == 'N' ? '' : vagas2[j].DATA_05 == '0' ? 'link-vermelho' : 'link-azul';
        DATA_06 = vagas2[j].DATA_06 == 'N' ? 'N' : vagas2[j].DATA_06.length == '0' ? '0' : vagas2[j].DATA_06.length
        class06 = DATA_06 == 'N' ? '' : vagas2[j].DATA_06 == '0' ? 'link-vermelho' : 'link-azul';

        function_detalhes_vaga_00 = "detalhesVagas(getHorariosAgenda(" + j + "), 0);";
        function_detalhes_vaga_01 = "detalhesVagas(getHorariosAgenda(" + j + "), 1);";
        function_detalhes_vaga_02 = "detalhesVagas(getHorariosAgenda(" + j + "), 2);";
        function_detalhes_vaga_03 = "detalhesVagas(getHorariosAgenda(" + j + "), 3);";
        function_detalhes_vaga_04 = "detalhesVagas(getHorariosAgenda(" + j + "), 4);";
        function_detalhes_vaga_05 = "detalhesVagas(getHorariosAgenda(" + j + "), 5);";
        function_detalhes_vaga_06 = "detalhesVagas(getHorariosAgenda(" + j + "), 6);";

        linhaTabela = linhaTabela + '<tr id="' + j + '">' +
          '<td>' + vagas2[j].NM_MEDICO + '</td>' +
          '<td <a href="#" class="' + class00 + '"  data-toggle="modal" onClick="' + function_detalhes_vaga_00 + '">' + DATA_00 + '</a></td>' +
          '<td <a href="#" class="' + class01 + '"  data-toggle="modal" onClick="' + function_detalhes_vaga_01 + '">' + DATA_01 + '</a></td>' +
          '<td <a href="#" class="' + class02 + '"  data-toggle="modal" onClick="' + function_detalhes_vaga_02 + '">' + DATA_02 + '</a></td>' +
          '<td <a href="#" class="' + class03 + '"  data-toggle="modal" onClick="' + function_detalhes_vaga_03 + '">' + DATA_03 + '</a></td>' +
          //'<td <a href="#" class="'+class03+'"  data-toggle="modal" data-target="#vagas-detalhes">'+DATA_03 +'</a></td>'+
          '<td <a href="#" class="' + class04 + '"  data-toggle="modal" onClick="' + function_detalhes_vaga_04 + '">' + DATA_04 + '</a></td>' +
          '<td <a href="#" class="' + class05 + '"  data-toggle="modal" onClick="' + function_detalhes_vaga_05 + '">' + DATA_05 + '</a></td>' +
          '<td <a href="#" class="' + class06 + '"  data-toggle="modal" onClick="' + function_detalhes_vaga_06 + '">' + DATA_06 + '</a></td>' +
          '</tr>';
      }
    }

    // Gera uma tabela a ser renderizada com os dados de vagas de um estabelecimento       
    table = '<div id= "' + tableId + '" class="collapse col-lg-12 text-center mt-1   table-wrapper-scroll-y my-custom-scrollbar">' +
      '<table class="table table-bordered table-hover" id="' + tableId + '" style="height: 255px;">' +
      '<thead class="thead-dark">' +
      '<tr>' +
      '<th scope="col">Médico</th>' +
      cabecalho +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      linhaTabela +
      '</tbody>' +
      '</table>' +
      '</div>'
    $('#container:last-child').append(table);
  }
}

function getHorariosAgenda(index) {
  let vagas = [];
  let DATA_00_vagas = [];
  let DATA_01_vagas = [];
  let DATA_02_vagas = [];
  let DATA_03_vagas = [];
  let DATA_04_vagas = [];
  let DATA_05_vagas = [];
  let DATA_06_vagas = [];
  if (vagas2[index].DATA_00.length > 0) {
    for (let i = 0; i < vagas2[index].DATA_00.length; i++) {
      DATA_00_vagas.push(vagas2[index].DATA_00[i].HR_AGENDA);
    }
  }
  if (vagas2[index].DATA_01.length > 0) {
    for (let i = 0; i < vagas2[index].DATA_01.length; i++) {
      DATA_01_vagas.push(vagas2[index].DATA_01[i].HR_AGENDA);
    }
  }
  if (vagas2[index].DATA_02.length > 0) {
    for (let i = 0; i < vagas2[index].DATA_02.length; i++) {
      DATA_02_vagas.push(vagas2[index].DATA_02[i].HR_AGENDA);
    }
  }
  if (vagas2[index].DATA_03.length > 0) {
    for (let i = 0; i < vagas2[index].DATA_03.length; i++) {
      DATA_03_vagas.push(vagas2[index].DATA_03[i].HR_AGENDA);
    }
  }
  if (vagas2[index].DATA_04.length > 0) {
    for (let i = 0; i < vagas2[index].DATA_04.length; i++) {
      DATA_04_vagas.push(vagas2[index].DATA_04[i].HR_AGENDA);
    }
  }
  if (vagas2[index].DATA_05.length > 0) {
    for (let i = 0; i < vagas2[index].DATA_05.length; i++) {
      DATA_05_vagas.push(vagas2[index].DATA_05[i].HR_AGENDA);
    }
  }
  if (vagas2[index].DATA_06.length > 0) {
    for (let i = 0; i < vagas2[index].DATA_06.length; i++) {
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
function detalhesVagas(arrayHorarios, index) {
  let vaga = '';
  if (arrayHorarios[index].length > 0) {
    for (let i = 0; i < arrayHorarios[index].length; i++) {
      vaga = vaga + '<div class="custom-control custom-radio">' +
        '<input type="radio" class="custom-control-input" name="radio" id="radio' + i + '">' +
        '<label class="custom-control-label" for="radio' + i + '">' + arrayHorarios[index][i] + '</label>' +
        '</div>';
    }
  } else {
    vaga = '<div class="form-check">' +
      '<p>Não há vagas disponíveis</p>' +
      '</div>';
  }
  $('#vagas-detalhes-body').html('')
  $('#vagas-detalhes-body').append(vaga)
  $('#vagas-detalhes').modal('show');
}


function obterDadosVagas(especialidade) {
  var path = 'http://fila.hmja.com.br:3003/agendas_vagas/' + especialidade + '/2019-05-29/M/25'
  return new Promise((resolve, reject) => {
    $.get(path, function (vagas2) {
      // neste laço for, a lista de estabelecimentos está sendo criada
      for (let i = 0; i < vagas2.length; i++) {
        estabelecimentos.push(vagas2[i].DS_ESTABELECIMENTO.substring(0, 15));
        medicos.push(vagas2[i].NM_MEDICO);
      }
      estabelecimentos = removeDuplicatas(estabelecimentos);
      resolve(vagas2);
    }, 'json');
  })
}