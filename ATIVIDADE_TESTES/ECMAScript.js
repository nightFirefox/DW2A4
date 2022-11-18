class Empresa
{
    nome = 'IFSP'
    #CPNJ = '99.999.999/0001-99'

    atualizarSalario()
    {
        return this._calcularSalario()
    }

    _calcularSalario()
    {
        return 1+1
    }
}

var empresa = new Empresa()

console.log(empresa._CPNJ)
console.log(empresa._calcularSalario())





