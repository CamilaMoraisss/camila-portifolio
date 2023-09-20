use("db_patissier");

db.createCollection("cake");
db.cake.insertMany([
    {   _id: ObjectId(1),
        nome:"Bolo de Quatro Leites Tradicional",
        peso:"1kg",
        preço: 57, 
        ingredientes:[
            
               {nome:"Ovos",quatidade:'4'},
               {nome:"Trigo",quatidade:'Meia xícara de chá'},
               {nome:"Leite",quatidade:'100ml'},
               {nome:"Leite Condensado",quatidade:'1 caixa'},
               {nome:"Leite em pó",quatidade: '3 colheres'},

            
        ]
    },

    {   _id: ObjectId(2),
        nome:"Bolo de Chocolate",
        peso:"1kg",
        preço: 45, 
        ingredientes:[

            {nome:"Ovos",quatidade:'4'},
            {nome:"Trigo",quatidade:'Meia xícara de chá'},
            {nome:"Leite",quatidade:'100ml'},
            {nome:"Chocolate em pó",quatidade:'4 colheres'},

            
        ]
    },
    {   _id: ObjectId(3),
        nome:"Bolo de banana",
        peso:"1kg",
        preço: 30, 
        ingredientes:[
            
            {nome:"Ovos",quatidade:'4'},
            {nome:"Trigo",quatidade:'Meia xícara de chá'},
            {nome:"Leite",quatidade:'100ml'},
            {nome:"Bananas",quatidade:'5'},

            
        ]
    },

    {   _id: ObjectId(4),
        nome:"Bolo de cenoura",
        peso:"1kg",
        preço: 57, 
        ingredientes:[
            
            {nome:"Ovos",quatidade:'4'},
            {nome:"Trigo",quatidade:'Meia xícara de chá'},
            {nome:"Leite",quatidade:'100ml'},
            {nome:"Cenouras",quatidade:'300g'},
            {nome:"Chocolate em pó",quatidade:'4 colheres'},


            
        ]
    },
   
])

//3- excluir o document cake com ObjectId(1)
db.cake.deleteOne({ _id: ObjectId(1)});

//4- Listar o "nome" e "preço" de todos os bolos.
db.cake.find({})


//5- Listar o "nome" e "preço" de todos os bolos menor ou igual a 70.



//6- criar uma consulta que, usando o update, mude o nome, peso e acrescente 1 ingrediente no bolo de ObjectId(2);



//7- criar update que modifique 1 ingrediente de um nome "ovo" e quantidade "3 unidades";