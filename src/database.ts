import { TClient, TProduct, TPurchase, CATEGORY_PROD } from "./types";

export const user: TClient[] = [
  {
    id: "01",
    email: "teste@email.com",
    password: "123456",
  },
  {
    id: "02",
    email: "teste2@email.com",
    password: "789012",
  },
];

export const products: TProduct[] = [
  {
    id: "01",
    name: "bananinha",
    price: 10,
    category: "usuario",
  },
  {
    id: "02",
    name: "Astrodev",
    price: 15,
    category: "dev",
  },
];

export const purchases: TPurchase[] = [
  {
    userId: "01",
    productId: "01",
    quantity: 1,
    totalPrice: 10,
  },
  {
    userId: "02",
    productId: "01",
    quantity: 2,
    totalPrice: 20,
  },
];

export function createUser(
  id: string,
  email: string,
  password: string
): string {
  clients.push({
    id,
    email,
    password,
  });
  return "Cadastro realizado com sucesso";
}

export function getAllClients(): TClient[] {
  return user;
}

export function createProduct(
  id: string,
  name: string,
  price: number,
  category: CATEGORY_PROD
): string {
  products.push({
    id,
    name,
    price,
    category,
  });
  return "Produto criado com sucesso";
}

export function getAllProducts(): TProduct[] {
  return products;
}

export function getProductById(id: string): undefined | TProduct {
  return products.find((product) => product.id === id);
}

export function queryProductsByName(q: string): TProduct[] {
  return products.filter((product) =>
    product.name.toLowerCase().includes(q.toLowerCase())
  );
}

export function createPurchase(
  userId: string,
  productId: string,
  quantity: number,
  totalPrice: number
): string {
  purchases.push({
    userId,
    productId,
    quantity,
    totalPrice,
  });
  return "Compra realizada com sucesso";
}

export function getAllPurchasesFromClientId(
  clientIdToSearch: string
): TPurchase[] {
  return purchases.filter((purchase) => purchase.userId === clientIdToSearch);
}