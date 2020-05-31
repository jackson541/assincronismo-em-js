// 1 - pegar usuário
// 2 - pegar telefone pelo id do usuário
// 3 - pegar endereço pelo id do usuário


//utilizando async/await
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


//executando a main
main()

//função assíncrona
async function main(){
    console.time('tempo de execução')

    const usuario = await pegarUsuario()

    // O promise.all() retorna uma promise em formato de array e encerra quando
    // todas as promisses do array forem concluídas. Em caso de sucesso de todas
    // as promises, irá retornar um array com os seus resultados. Se não, irá
    // retornar o reject da primeira promise a dar erro.

    // Nesse método, todas as promises são executadas ao mesmo tempo. Sendo assim,
    // é ideal para trabalhar com promises que não tem dependências entre si.

    const resultado = await Promise.all([
        pegarTelefone(usuario.id),
        pegarEndereco(usuario.id)
    ])

    const telefone = resultado[0]
    const endereco = resultado[1]

    console.log('resultado', `
        usuario: ${usuario.nome},
        telefone (${telefone.ddd}) ${telefone.numero},
        endereço: ${endereco.rua}, ${endereco.numero}
    `)

    console.timeEnd('tempo de execução')
}

