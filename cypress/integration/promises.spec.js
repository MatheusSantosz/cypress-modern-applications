

it('sem testes , ainda ', ()=> { })
    const getSomething = callback => {
        setTimeout(()=> {
            
            callback(12);
        }, 1000)    


    }
   
    const system =() =>{
    console.log('init');
     getSomething(some => console.log(`Something is ${some}`));
    console.log('end')
    }

system();