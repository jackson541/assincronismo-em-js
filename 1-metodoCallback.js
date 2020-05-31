// 1 - pegar usuário
// 2 - pegar telefone pelo id do usuário
// 3 - pegar endereço pelo id do usuário



// método de callback
function pegarUsuario(callback){
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'jackson'
        })
    },1000)
}

function pegarTelefone(usuarioId, callback){
    setTimeout(() => {
        return callback(null, {
            ddd: 84,
            numero: 123456789
        })
    }, 1500)
}

function pegarEndereco(usuarioId, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    },2000)
}

pegarUsuario((error1, usuario) => {
    console.time('tempo de execução')
    // null || 0 || "" || undefined === false
    if(error1){
        console.error('Ocorreu algum erro no usuario', error1)
        return
    }

    pegarTelefone(usuario.id, (error2, telefone) => {
        if(error2){
            console.error('Ocorreu algum erro no telefone', error2)
            return
        }

        pegarEndereco(usuario.id, (error3, endereco) => {
            if(error3){
                console.error('Ocorreu algum erro no endereço', error3)
                return
            }

            console.log(`
                usuario: ${usuario.nome},
                telefone: (${telefone.ddd}) ${telefone.numero},
                endereço: ${endereco.rua}, ${endereco.numero}
            `)

            console.timeEnd('tempo de execução')
        })
    })

})
