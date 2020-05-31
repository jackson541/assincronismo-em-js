// 1 - pegar usuário
// 2 - pegar telefone pelo id do usuário
// 3 - pegar endereço pelo id do usuário


//utilizando promises
function pegarUsuario(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //return reject(new Error('erro no usuário'))

            return resolve({
                id: 1,
                nome: 'jackson'
            })
        },1000)
    })
}

function pegarTelefone(usuarioId){
    //as promises recebem um método para sucesso (resolse) e um para erro (reject)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                ddd: 84,
                numero: 123456789
            })
        }, 1500)
    })
}

function pegarEndereco(usuarioId){
    return new Promise((resolse, reject) => {
        setTimeout(() => {
            return resolse({
                rua: 'dos bobos',
                numero: 0
            })
        },2000)
    })
}

// a promise retorna os resultados do callback e os then contém as funções que
// tratam desses resultados.

const usuarioPromise = pegarUsuario()

//o resultado de um then está sendo retornado para o próximo then
usuarioPromise
    .then((usuario) => {
        console.time('tempo de execução')

        //para retornar o usuario e o telefone
        return pegarTelefone(usuario.id)
                .then((telefone) => {
                    return {
                        usuario: usuario,
                        telefone: telefone
                    }
                })
    })
    .then((resultado) => {
        //para retornar usuario, telefone e endereço
        return pegarEndereco()
                .then((endereco) => {
                    return {
                        usuario: resultado.usuario,
                        telefone: resultado.telefone,
                        endereco: endereco
                    }
                })
    })
    .then((resultado) => {
        console.log('resultado', `
            usuario: ${resultado.usuario.nome},
            telefone: (${resultado.telefone.ddd}) ${resultado.telefone.numero},
            endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
        `)

        console.timeEnd('tempo de execução')
    })
    .catch((error) => {
        console.error('ocorre um erro', error);
    })
