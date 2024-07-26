export const categories = [
  {
    name: "Пиццы",
  },
  {
    name: "Завтрак",
  },
  {
    name: "Закуски",
  },
  {
    name: "Коктейли",
  },
  {
    name: "Напитки",
  },
];

export const ingredients = [
  {
    name: "Сырный бортик",
    price: 179,
    imageUrl: "/ingridients/ingridients1.png",
  },
  {
    name: "Сливочная моцарелла",
    price: 79,
    imageUrl: "/ingridients/ingridients2.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 79,
    imageUrl: "/ingridients/ingridients3.png",
  },
  {
    name: "Острый перец халапеньо",
    price: 59,
    imageUrl: "/ingridients/ingridients4.png",
  },
  {
    name: "Нежный цыпленок",
    price: 79,
    imageUrl: "/ingridients/ingridients5.png",
  },
  {
    name: "Шампиньоны",
    price: 59,
    imageUrl: "/ingridients/ingridients6.png",
  },
  {
    name: "Ветчина",
    price: 79,
    imageUrl: "/ingridients/ingridients7.png",
  },
  {
    name: "Пикантная пепперони",
    price: 79,
    imageUrl: "/ingridients/ingridients8.png",
  },
  {
    name: "Острая чоризо",
    price: 79,
    imageUrl: "/ingridients/ingridients9.png",
  },
  {
    name: "Маринованные огурчики",
    price: 59,
    imageUrl: "/ingridients/ingridients10.png",
  },
  {
    name: "Свежие томаты",
    price: 59,
    imageUrl: "/ingridients/ingridients11.png",
  },
  {
    name: "Красный лук",
    price: 59,
    imageUrl: "/ingridients/ingridients12.png",
  },
  {
    name: "Сочные ананасы",
    price: 59,
    imageUrl: "/ingridients/ingridients13.png",
  },
  {
    name: "Итальянские травы",
    price: 39,
    imageUrl: "/ingridients/ingridients14.png",
  },
  {
    name: "Сладкий перец",
    price: 59,
    imageUrl: "/ingridients/ingridients15.png",
  },
  {
    name: "Кубики брынзы",
    price: 79,
    imageUrl: "/ingridients/ingridients16.png",
  },
  {
    name: "Митболы",
    price: 79,
    imageUrl: "/ingridients/ingridients17.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Омлет с ветчиной и грибами",
    imageUrl: "/products/products1.webp",
    categoryId: 2,
  },
  {
    name: "Омлет с пепперони",
    imageUrl: "/products/products2.webp",
    categoryId: 2,
  },
  {
    name: "Кофе Латте",
    imageUrl: "/products/products3.webp",
    categoryId: 2,
  },
  {
    name: "Дэнвич ветчина и сыр",
    imageUrl: "/products/products4.webp",
    categoryId: 3,
  },
  {
    name: "Куриные наггетсы",
    imageUrl: "/products/products5.webp",
    categoryId: 3,
  },
  {
    name: "Картофель из печи с соусом 🌱",
    imageUrl: "/products/products6.webp",
    categoryId: 3,
  },
  {
    name: "Додстер",
    imageUrl: "/products/products7.webp",
    categoryId: 3,
  },
  {
    name: "Острый Додстер 🌶️🌶️",
    imageUrl: "/products/products8.webp",
    categoryId: 3,
  },
  {
    name: "Банановый молочный коктейль",
    imageUrl: "/products/products9.webp",
    categoryId: 4,
  },
  {
    name: "Карамельное яблоко молочный коктейль",
    imageUrl: "/products/products10.webp",
    categoryId: 4,
  },
  {
    name: "Молочный коктейль с печеньем Орео",
    imageUrl: "/products/products11.webp",
    categoryId: 4,
  },
  {
    name: "Классический молочный коктейль 👶",
    imageUrl: "/products/products12.webp",
    categoryId: 4,
  },
  {
    name: "Ирландский Капучино",
    imageUrl: "/products/products13.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Карамельный капучино",
    imageUrl: "/products/products14.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Кокосовый латте",
    imageUrl: "/products/products15.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Американо",
    imageUrl: "/products/products16.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Латте",
    imageUrl: "/products/products17.webp",
    categoryId: 5,
  },
];
