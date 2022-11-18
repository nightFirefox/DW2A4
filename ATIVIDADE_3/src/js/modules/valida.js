export const valida = {

    cpf(value)
    {
        let value1 = value.replace(/\D/g, '')
        if(!value1.length == 11) 
            return false
        return true
    },
    
    date(value)
    {
        let dateRegex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
        return dateRegex.test(value);
    },

    fone(value)
    {
        let value2 = value.replace(/\D/g, '');
        if(!value2.length == 11) 
            return false
        return true
    },

    cep(value)
    {
        let value3 = value.replace(/\D/g, '');
        if(!value3.length == 11)   
            return false
        return true
    }
}




