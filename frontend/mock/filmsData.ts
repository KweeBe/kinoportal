import { Collection, Compilation, PromoItemType } from "@components/types/film";

export const collections: Collection[] = [
  {
    id: 0,
    name: 'Лучшие сериалы в подписке',
    link: 'luchshie-serialyi-v-podpiske',
    items: [
      {
        id: 0,
        name: 'Красная зона',
        link: '#',
        image: 'red-zone.png',
        genre: 'Мелодрамы',
        year: 2021,
        country: 'Россия',
        rating: 8.6,
        age: 16,
        seasons: 1,
      },
      {
        id: 1,
        name: 'Беспринципные',
        link: '#',
        image: 'red-zone.png',
        genre: 'Мелодрамы',
        year: 2021,
        country: 'Россия',
        rating: 8.1,
        age: 16,
        seasons: 1,
      },
      {
        id: 2,
        name: 'Хочу не могу!',
        link: '#',
        image: 'red-zone.png',
        genre: 'Комедийные',
        year: 2021,
        country: 'Россия',
        rating: 7.7,
        age: 16,
        seasons: 1,
      },
      {
        id: 3,
        name: 'Заключение',
        link: '#',
        image: 'red-zone.png',
        genre: 'Детективы',
        year: 2021,
        country: 'Россия',
        rating: 8.0,
        age: 16,
        seasons: 1,
      },
      {
        id: 4,
        name: 'Сыщицы',
        link: '#',
        image: 'red-zone.png',
        genre: 'Детективы',
        year: 2021,
        country: 'Россия',
        rating: 7.2,
        age: 16,
        seasons: 1,
      },
      {
        id: 5,
        name: 'Красная зона',
        link: '#',
        image: 'red-zone.png',
        genre: 'Мелодрамы',
        year: 2021,
        country: 'Россия',
        rating: 8.6,
        age: 16,
        seasons: 1,
      },
      {
        id: 6,
        name: 'Беспринципные',
        link: '#',
        image: 'red-zone.png',
        genre: 'Мелодрамы',
        year: 2021,
        country: 'Россия',
        rating: 8.1,
        age: 16,
        seasons: 1,
      },
      {
        id: 7,
        name: 'Хочу не могу!',
        link: '#',
        image: 'red-zone.png',
        genre: 'Комедийные',
        year: 2021,
        country: 'Россия',
        rating: 7.7,
        age: 16,
        seasons: 1,
      },
      {
        id: 8,
        name: 'Заключение',
        link: '#',
        image: 'red-zone.png',
        genre: 'Детективы',
        year: 2021,
        country: 'Россия',
        rating: 8.0,
        age: 16,
        seasons: 1,
      },
      {
        id: 9,
        name: 'Сыщицы',
        link: '#',
        image: 'red-zone.png',
        genre: 'Детективы',
        year: 2021,
        country: 'Россия',
        rating: 7.2,
        age: 16,
        seasons: 1,
      },
    ],
  },
  {
    id: 1,
    name: 'Современные мультфильмы',
    link: 'sovremennyie-multfilmyi',
    items: [
      {
        id: 0,
        name: 'Простоквашино',
        link: '#',
        image: 'kolobanga.png',
        genre: 'Комедия',
        year: 2021,
        country: 'Россия',
        rating: 8.6,
        age: 0,
        seasons: 1,
      },
      {
        id: 1,
        name: 'Финник',
        link: '#',
        image: 'kolobanga.png',
        genre: 'Фэнтези',
        year: 2021,
        country: 'Россия',
        rating: 8.1,
        age: 6,
        seasons: 1,
      },
      {
        id: 2,
        name: 'Чуч-мяуч',
        link: '#',
        image: 'kolobanga.png',
        genre: 'Для детей',
        year: 2021,
        country: 'Россия',
        rating: 7.7,
        age: 0,
        seasons: 1,
      },
      {
        id: 3,
        name: 'Царство против разбойников',
        link: '#',
        image: 'kolobanga.png',
        genre: 'Приключения',
        year: 2021,
        country: 'Россия',
        rating: 8.0,
        age: 6,
        seasons: 1,
      },
      {
        id: 4,
        name: 'Колобанга. Привет, интернет!',
        link: '#',
        image: 'kolobanga.png',
        genre: 'Приключения',
        year: 2021,
        country: 'Россия',
        rating: 7.2,
        age: 0,
        seasons: 1,
      },
    ],
  },
];

export const compilation: Compilation = {
  name: 'Самое интересное',
  items: [
    { id: 0, name: 'Сериалы Иви', image: 'interesting-1.jpg' },
    { id: 1, name: 'Новинки', image: 'interesting-2.jpg' },
    { id: 2, name: 'Российские комедии', image: 'interesting-3.jpg' },
    { id: 3, name: 'Лучшие детективы', image: 'interesting-4.jpg' },
  ],
};

export const promoItems: PromoItemType[] = [
  {
    id: 0,
    name: 'Пансион',
    link: 'pansion',
    image: 'promo-1.png',
    age: 16,
  },
  {
    id: 1,
    name: 'Тайна пропавшей деревни',
    link: 'taina-propavshej-derevni',
    image: 'promo-2.jpg',
    age: 16,
  },
  {
    id: 2,
    name: 'Моя ужасная сестра',
    link: '487282',
    image: 'promo-3.jpg',
    age: 6,
  },
  {
    id: 3,
    name: 'Папы',
    link: '208079',
    image: 'promo-4.jpg',
    age: 6,
  },
  {
    id: 4,
    name: 'Стажер',
    link: 'stazher',
    image: 'promo-5.jpg',
    age: 16,
  },
  {
    id: 5,
    name: 'Бумеранг',
    link: '193567',
    image: 'promo-6.jpg',
    age: 6,
  },
];
