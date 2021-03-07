export const state = () => ({
    products: [
        { 
            id: 'first-product', 
            title: 'first product',
            image: 'https://cdn.pixabay.com/photo/2018/11/08/22/12/beer-3803425_1280.jpg',
            description: 'first product description', 
            price: '4.99'
        },
        { 
            id: 'second-product', 
            title: 'second product',                    
            image: 'https://cdn.pixabay.com/photo/2019/05/24/18/43/cigar-4226899_1280.jpg',
            description: 'second product description', 
            price: '5.99'
        },
        { 
            id: 'third-product', 
            title: 'third product',                    
            image: 'https://cdn.pixabay.com/photo/2020/01/19/15/58/beer-tasting-flight-4778258_1280.jpg',
            description: 'third product description', 
            price: '6.99'
        },
        { 
            id: 'fourth-product', 
            title: 'fourth product',                    
            image: 'https://cdn.pixabay.com/photo/2020/08/24/19/50/hop-5514936_1280.jpg',
            description: 'fourth product description', 
            price: '7.99'
        }
    ],
    moreproducts: [
        { 
          id: 'fifth-product', 
          title: 'fifth product', 
          image: 'https://dummyimage.com/300x300/ccc/aaa', 
          description: 'fifth product description', 
          price: '8.99'
        },
        { 
          id: 'sixth-product', 
          title: 'sixth product', 
          image: 'https://dummyimage.com/300x300/ccc/aaa', 
          description: 'sixth product description', 
          price: '9.99'
        }
    ]
  })