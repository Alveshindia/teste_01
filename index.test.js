/* const test = require('tape')
const func = require('./teste')
test ('Aplicar desconto padrão', (t) => {
t.assert(func.aplicardesconto(10,5) === 5, "Desconto 01")
t.end()
}
)


test ('Aplicar desconto padrão', (t) => {
t.assert(func.aplicardesconto(11,5) === 5, "Desconto 02")
t.end()
}
)


test ('Aplicar desconto padrão', (t) => {
t.assert(func.aplicardesconto(20,5) === 15, "Desconto 03")
t.end()
}
)


test ('Aplicar desconto padrão', (t) => {
t.assert(func.aplicardesconto(100,50) === 50, "Desconto 04")
t.end()
}
)


test ('Aplicar desconto padrão', (t) => {
t.assert(func.aplicardesconto(1000,500) === 500, "Desconto 05")
t.end()
}
) */

const test = require('tape')
const func = require('./teste')

test ('validar se é numero', (t) => {
    t.assert(func.validanumero(1000) === true, "Validacao 01")
    t.end()
})

test ('valida se é numero', (t) => {
    t.assert(func.validanumero('polli') === true, "Validacao 02")
    t.end()
})