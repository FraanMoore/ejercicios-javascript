//Escribe el código para generar un objeto en que las keys (claves) 
//sean los nombres de los depósitos y 
//los valores un arreglo con los números de serie de los productos ordenados

const storage = [
    { id: 1, name: 'Miami' },
    { id: 2, name: 'Tampa' },
    { id: 3, name: 'Orlando' }
  ];
  
  const products = [
    { id: 1, SerialNumber: '86620855', name: 'Monitor'},
    { id: 2, SerialNumber: '73178559', name: 'MotherBoard'},
    { id: 3, SerialNumber: '73826497', name: 'Notebook'},
    { id: 4, SerialNumber: '88587715', name: 'Consoles'},
    { id: 5, SerialNumber: '94020190', name: 'SmartPhones'},
    { id: 6, SerialNumber: '99804238', name: 'HeadSets' }
  ];
  
  const items= [
    { productId: 6, storageId: 1, balance: 150 },
    { productId: 1, storageId: 3, balance: 180 },
    { productId: 5, storageId: 3, balance: 1350 },
    { productId: 2, storageId: 2, balance: 56 },
    { productId: 3, storageId: 1, balance: 230 },
    { productId: 5, storageId: 2, balance: 150 },
    { productId: 3, storageId: 3, balance: 459 },
    { productId: 2, storageId: 3, balance: 190 },
    { productId: 4, storageId: 3, balance: 510 },
    { productId: 5, storageId: 1, balance: 890 },
    { productId: 1, storageId: 2, balance: 16 },
    { productId: 5, storageId: 3, balance: 375 },
    { productId: 6, storageId: 1, balance: 192 },
    { productId: 2, storageId: 3, balance: 100 },
    { productId: 3, storageId: 2, balance: 54 },
    { productId: 3, storageId: 1, balance: 90 },
    { productId: 4, storageId: 3, balance: 135 },
    { productId: 2, storageId: 1, balance: 382 },
    { productId: 5, storageId: 2, balance: 170 },
    { productId: 1, storageId: 3, balance: 10 },
    { productId: 5, storageId: 2, balance: 6 },
    { productId: 6, storageId: 1, balance: 162 },
    { productId: 2, storageId: 2, balance: 100 }
  ]
  
    const keys = {};
    
    storage.forEach( storage =>
        keys[storage.name] = storage);

    products.forEach(products => 
        keys[products.SerialNumber]= products);
    console.log(keys)

  