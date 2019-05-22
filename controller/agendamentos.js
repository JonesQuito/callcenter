class DataAccess {
    constructor() {
        this.especialidades;
    }

    obterEspecialidades() {
        return new Promise((resolve, reject) => {
            $.get('http://fila.hmja.com.br:3003/especialidades_agenda/15/F', function (data) {
                resolve(data);
            }, 'json');
        })
    }
}

module.exports = DataAccess;