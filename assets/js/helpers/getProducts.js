async function getProducts() {
  return [
    {
      id: 1,
      name: "Camiseta clásica",
      price: 45000,
      quantity: 10,
      image: "./assets/img/products/camiseta.jpg"
    },
    {
      id: 2,
      name: "Tenis deportivos",
      price: 120000,
      quantity: 8,
      image: "./assets/img/products/tenis.jpg"
    },
    {
      id: 3,
      name: "Mochila urbana",
      price: 65000,
      quantity: 12,
      image: "./assets/img/products/mochila.jpg"
    },
    {
      id: 4,
      name: "Reloj casual",
      price: 85000,
      quantity: 6,
      image: "./assets/img/products/reloj.jpg"
    },
    {
      id: 5,
      name: "Gorra deportiva",
      price: 30000,
      quantity: 15,
      image: "./assets/img/products/gorra.jpg"
    },
    {
      id: 6,
      name: "Audífonos",
      price: 55000,
      quantity: 9,
      image: "./assets/img/products/audifonos.jpg"
    }
  ];
}

export default getProducts;
