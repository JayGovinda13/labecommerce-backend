import { TClient, TProduct, TPurchase } from "./types"

export const user: TClient[] = [{
    id: "01",
    email: "teste@email.com",
    password: "123456",
},
{
    id: "02",
    email: "teste2@email.com",
    password: "789012",  
}]

export const products:TProduct[]=[{
    id: "01",
    name: "bananinha",
    price: 10,
    category: "usuario"
},{
    id: "02",
    name: "Astrodev",
    price: 15,
    category: "dev"
}
]

export const purchases:TPurchase[]=[{
    userId: "01",
    productId: "01",
    quantity: 1,
    totalPrice: 20.22,
},{
    userId: "02",
    productId: "01",
    quantity: 2,
    totalPrice: 40.44,
}

]