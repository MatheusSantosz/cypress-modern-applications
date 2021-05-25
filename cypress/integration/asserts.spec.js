/// <reference types = "cypress"/>


it('Equality', () => {
    const a = 1;
    expect(a).equal(1); //1 igual a 1
    expect(a,'deveria ser 1').equal(1); //mensagem que vai aparecer em caso de falha ou nao
    expect(a).to.be.equal(1); //espero que a seja igual a 1
    expect('a').not.to.be.equal('b'); //espero que a nao seja igual a b

    //bloco checkagens de variaveis simples  numeros e strings

});

it('Truthy or no', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true; // eles sao verdadeiros ou nao
    expect(true).to.be.true; // eles esperava false porem foi true
    expect(b).to.be.null; //esperar que b fosse nula
    expect(a).to.be.not.null;  //esperar que o a nao é nulo
    expect(c).to.be.undefined; //esperar que c é indefinido

});


it('Object Equality', () => {
    const obj = { //objeto no java script fica em chaves
        a:1, //sintaxe é nome da propriedade : valor se tiver outra sempre colocar virgula
        b:2

    }
    expect(obj).equal(obj)//vereficar se ele e igual a ele mesmo
    expect(obj).equals(obj)//vereficar se ele e igual a ele mesmo
    expect(obj).eq(obj)//vereficar se ele e igual a ele mesmo
    expect(obj).equal(obj)//vereficar se ele e igual a ele mesmo
    expect(obj).to.be.equal(obj)//vereficar se ele e igual a ele mesmo

    expect(obj).to.be.deep.equal({a:1, b:2})//vereficar se as propriedades do objetos se sao iguais
    expect(obj).eql({a:1, b:2})///vereficar se as propriedades do objetos se sao iguais
    expect(obj).include({a:1, b:2})//verificar se existe alguma propriedade la dentro 
    expect(obj).to.be.property('b')//verificar se possue a propriedade b
    expect(obj).to.be.property('b',2)//verificar se possue a propriedade b e que o valor dessa propriedade seja 2
    expect(obj).to.not.be.empty//veriricar se o objeto nao esta vazio
    expect({}).to.be.empty//veriricar se o objeto  esta vazio

});

it('Arrays', () => {
    const arr = [1,2,3] ///array é uma lista
    expect(arr).to.be.have.members([1,2,3]) // espere que o array possua o seguinte membro
    expect(arr).to.include.members([1,3]) //vereficar se possui alguns dos membros
    expect(arr).to.not.be.empty //veriricar se o array nao esta vazio
    expect([]).to.be.empty //veriricar se o array  esta vazio
});

it('Type', () => {
    const num =1
    const str = 'String'

    expect(num).to.be.a('number')//espero que ela seja um numero
    expect(str).to.be.a('string')//str seja uma string
    expect({}).to.be.a('object') //srt seja um objeto
    expect([]).to.be.a('array') //str seja uma array


});

it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste') //vereficar se o nome da variavel esta  igual o nome declaro
    expect(str).to.be.length(15) //vereficar o tamanho  da string seja de 15 caracters
    expect(str).to.be.contains('de') //vereficar se tem a letra DE (somente um trecho da string)
    expect(str).to.match(/de/) // vereficar se tem um de dentro
    expect(str).to.match(/String/) // vereficar se tem um string dentro
    expect(str).to.match(/^String/)// deve iniciar com String
    expect(str).to.match(/teste$/) //deve finalizar com teste
    expect(str).to.match(/.{15}/) //vereficar o tamanho do caracter 
    expect(str).to.match(/\W+/) //pedir para vereficar se existem apenas letras
    expect(str).to.match(/\D+/) //vereficar que nao contenha numeros
    
});

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.2123 
    expect(number).to.be.equal(4) //vereficar se esse numero é igual a 4
    expect(number).to.be.above(3) //vereficar se esse numero  é acima de 4
    expect(number).to.be.below(7) //vereficar se esse numero é abaixo de 7
    expect(floatNumber).to.be.equal(5.2123) //vereficar se esse numero é igual a 5.2123
    expect(floatNumber).to.be.closeTo(5.2, 0.1) //vereficar se o floutnumber é acima de 5.2 e aproximado 0.1
    expect(floatNumber).to.be.above(5) //vereficar se o numero é acima de 5


});