export const format = {
    cpf(value)
    {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        .replace(/(-\d{2})\d+?$/, '$1');
    },

    date(value)
    {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")
        .replace(/(\/\d{4})\d+?$/, '$1');
    },

    fone(value)
    {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(\d{5})(\d{4})/, "$1-$2")
        .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
        .replace(/(-\d{4})\d+?$/, '$1');
    },

    cep(value)
    {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d{3})/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, '$1');
    }
}