export interface interfaceApiFilters {
  id: string;
  name: string;
}

export interface interfaceApiFiltersArr {
  id: string;
  name: string;
  filters: Array<interfaceApiFilters>;
}

export const apiFilters = {
  status: "ok",
  result: [
    {
      id: "374",
      name: "Морская рыба",
      filters: [
        {
          id: "3741",
          name: "Акула",
        },
        {
          id: "3742",
          name: "Окунь",
        },
        {
          id: "3743",
          name: "Палтус",
        },
        {
          id: "3744",
          name: "Треска",
        },
      ],
    },
    {
      id: "1",
      name: "Пресноводная рыба",
      filters: [
        {
          id: "11",
          name: "Белоглазка",
        },
        {
          id: "12",
          name: "Осётр",
        },
        {
          id: "13",
          name: "Речной угорь",
        },
        {
          id: "14",
          name: "Налим",
        },
      ],
    },
  ],
};

export interface InterfaceApiCat {
  id: string;
  title: string;
  text: string;
  url: string;
}

export const apiCats = {
  status: "ok",
  result: [
    {
      id: "374",
      title: "Замороженные рыбы",
      text: "Мы заморозили рыбов для вас",
      url: "#",
    },
    {
      id: "39",
      title: "Живые рыбы",
      text: "На кухню или на разведение",
      url: "#",
    },
  ],
};

export interface InterfaceApiPopulars {
  id: string;
  name: string;
  img: string;
  url: string;
}

export const apiPopulars = {
  status: "ok",
  result: [
    {
      id: "331",
      name: "Палтус",
      img: "https://koldvor.ru/media/images/products/1038/paltus.jpg",
      url: "#",
    },
    {
      id: "3131",
      name: "Сёмга",
      img: "",
      url: "#",
    },
    {
      id: "3331",
      name: "Сом",
      img: "",
      url: "#",
    },
    {
      id: "4",
      name: "Мойва",
      img: "",
      url: "#",
    },
    {
      id: "6",
      name: "Сельдь",
      img: "",
      url: "#",
    },
    {
      id: "77",
      name: "Тунец",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bluefin-big.jpg/1200px-Bluefin-big.jpg",
      url: "#",
    },
  ],
};
