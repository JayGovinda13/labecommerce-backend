//cliente cadastrado
export type TClient = {
    id: string
    email: string
    password: string
}

//produto cadastrado
export type TProduct = {
    id: string
    name: string
    price: number
    category: string
}

//compra do cliente
export type TPurchase = {
    userId: string
    productId: string
    quantity: number
    totalPrice: number
}