export interface Savefile {
  'bonus_unlocked': string[], //translator added
  'consecutive_deaths': number,
  'dead_npcs': string[], //translator added
  'death': boolean,
  "ending_1": boolean,
  "ending_2": boolean,
  "ending_3": boolean,
  "hell_discovered": boolean,
  "hope": boolean,
  "husk": boolean,
  "implants_unlocked": string[], //translator added
  "items_found": string[],
  "levels_punished": boolean[], //translator not required
  "levels_unlocked": number,
  "money": number,
  "play_time": number,
  "soul": boolean,
  "weapons_unlocked": boolean[],


  [key: `${string}_hell_raw_stime`]: number;
  [key: `${string}_hell_raw_time`]: number;
  [key: `${string}_hell_string_stime`]: string;
  [key: `${string}_hell_string_time`]: string;
  [key: `${string}_raw_stime`]: number;
  [key: `${string}_raw_time`]: number;
  [key: `${string}_string_stime`]: string;
  [key: `${string}_string_time`]: string;
}

export const deadNpcMapToRus: Record<string, string> = {
  "$1000000 received.": "$1000000 получено.",
  "Golem Exosystem received.": "Экзоcистема 'Голем' получена.",
  "Raymond Shocktroop Tactical received.": "Raymond Shocktroop Tactical получен.",
  "Jurgen Cool": "Йурген Крутой",
  "Mark Bilberry": "Марк Чернигов",
  "Michael Nielsen": "Майкл Нильсен",
  "Burt Grundel": "Берт Грундель",
  "Limit Chancellor": "Канцлер Предела",
  "Ambassador": "Амбассадор",
  "Henrik \"Freakout\" Johnson": "Генрих 'Приступ' Джонсон",
  "Freak": "Фрик"
}
export const deadNpcMapToEng: Record<string, string> = {
  "$1000000 получено.": "$1000000 received.",
  "Экзоcистема 'Голем' получена.": "Golem Exosystem received.",
  "Raymond Shocktroop Tactical получен.": "Raymond Shocktroop Tactical received.",
  "Йурген Крутой": "Jurgen Cool",
  "Марк Чернигов": "Mark Bilberry",
  "Майкл Нильсен": "Michael Nielsen",
  "Берт Грундель": "Burt Grundel",
  "Канцлер Предела": "Limit Chancellor",
  "Амбассадор": "Ambassador",
  "Генрих 'Приступ' Джонсон": "Henrik \"Freakout\" Johnson",
  "Фрик": "Freak"
};

// export const deadNpcArr: [string, string][]= [
//   ["$1000000 received.", "$1000000 получено."],
//   ["Golem Exosystem received.", "Экзоcистема 'Голем' получена."],
//   ["Raymond Shocktroop Tactical received.", "Raymond Shocktroop Tactical получен."],
//   ["Jurgen Cool", "Йурген Крутой"],
//   ["Mark Bilberry", "Марк Чернигов"],
//   ["Michael Nielsen", "Майкл Нильсен"],
//   ["Burt Grundel", "Берт Грундель"],
//   ["Limit Chancellor", "Канцлер Предела"],
//   ["Ambassador", ""],
//   ["Henrik \"Freakout\" Johnson", "Генрих 'Приступ' Джонсон"],
//   ["Freak", ""]
// ]
export const levelMapToRus: Record<string, string> = {
  "Alpine Hospitality": "Альпийское Гостеприимство",
  "Androgen Assault": "Андрогенный Штурм",
  "Apartment Atrocity": "Резня в Апартаментах",
  "Archon Grid": "Архонт Сеть",
  "Bog Business": "Болотный бизнесс",
  "Casino Catastrophe": "Катастрофа в Казино",
  "Cruelty Squad Headquarters": "Штаб Отряда Жестокости",
  "Darkworld": "Тёмномирье",
  "House": "Дом",
  "Idiot Party": "Вечеринка Идиотов",
  "Mall Madness": "Торговое Безумие",
  "Miner's Miracle": "Шахтёрское Чудо",
  "Neuron Activator": "Нейронный Активатор",
  "Office": "Офис",
  "Paradise": "Парадайз",
  "Pharmakokinetiks": "Фармакокинетикс",
  "Seaside Shock": "Прибрежный Шок",
  "Sin Space Engineering": "Космическая Инженерия 'ГРЕХ'",
  "Trauma Loop": "Травматический Цикл"
}

export const levelMapToEng: Record<string, string> = {
  "Альпийское Гостеприимство": "Alpine Hospitality",
  "Андрогенный Штурм": "Androgen Assault",
  "Резня в Апартаментах": "Apartment Atrocity",
  "Архонт Сеть": "Archon Grid",
  "Болотный бизнесс": "Bog Business",
  "Катастрофа в Казино": "Casino Catastrophe",
  "Штаб Отряда Жестокости": "Cruelty Squad Headquarters",
  "Тёмномирье": "Darkworld",
  "Дом": "House",
  "Вечеринка Идиотов": "Idiot Party",
  "Торговое Безумие": "Mall Madness",
  "Шахтёрское Чудо": "Miner's Miracle",
  "Нейронный Активатор": "Neuron Activator",
  "Офис": "Office",
  "Парадайз": "Paradise",
  "Фармакокинетикс": "Pharmakokinetiks",
  "Прибрежный Шок": "Seaside Shock",
  "Космическая Инженерия 'ГРЕХ'": "Sin Space Engineering",
  "Травматический Цикл": "Trauma Loop"
};



export const implantMapToRus: Record<string, string> = {
  "First Aid Kit": "Аптечка Первой Помощи",
  "Load Bearing Vest": "Разгрузочный Жилет",
  "Pneumatic Legs": "Пневматические Ноги",
  "Stealth Suit": "Стелс-Костюм",
  "Grappendix": "Грапендикс",
  "Vertical Entry Device": "Девайс Вертикального Проникновения",
  "Life Sensor": "Датчик Жизненных Показателей",
  "Gunkboosters": "Гноеплюй",
  "CSIJ Level V Biosuit": "Биокостюм V класса CSIJ",
  "Icaros Machine": "Машина Икароса",
  "Nightmare Vision Goggles": "Очки Кошмарного Видения",
  "CSIJ Level II Body Armor": "Броня II класса CSIJ",
  "CSIJ Level IIB Body Armor": "Броня IIВ класса CSIJ",
  "Alien Leg Wetware": "Инопланетное Биологическое Обеспечение Для Ног",
  "CSIJ Level IV Body Armor": "Броня IV класса CSIJ",
  "HE Grenade": "Граната",
  "Hazmat Suit": "Костюм Химзащиты",
  "Speed Enhancer Total Organ Package": "Полный Набор Органов Улучшения Скорости",
  "Angular Advantage Tactical Munitions": "Тактическая Амуниция Углового Преимущества",
  "Funkgrunters": "Фанковорчалки",
  "Tattered Rain Hat": "Бывалая Дождевая Шляпа",
  "Bouncy Suit": "Костюм Прыг-Скок",
  "Flechette Grenade": "Флешеттная Граната",
  "House": "Дом",
  "Ammunition Gland": "Амуниционные Железы",
  "Military Camouflage": "Военный Камуфляж",
  "CSIJ Level III Body Armor": "Броня III класса CSIJ",
  "Tactical Blast Shield": "Тактический Противовзрывной Щит",
  "Biothruster": "Биосопло",
  "ZZzzz Special Sedative Grenade": "Специальная Седативная Граната ZZzzz",
  "Augmented arms": "Аугментированные руки",
  "Zomy X-200 Portable Cassette Player": "Портативный Кассетный Плеер Zomy X-200",
  "Skullgun": "Черепопушка",
  "Zoom n Go Bionic Eyes": "Бионические глаза Zoom N Go",
  "Zoom N Go Bionic Eyes": "Бионические глаза Zoom N Go",
  "Composite Helmet": "Композитный шлем",
  "Speed Enhancer Node Cluster": "Скопление Лимфоузлов Улучшения Скорости",
  "Speed Enhancer Gland": "Гланды Улучшения Скорости",
  "Eyes of Corporate Insight": "Глаз Корповидения",
  "Extravagant Suit": "Экстравагантный костюм",
  "Night Vision Goggles": "Очки Ночного Видения",
  "CSIJ Level VI Golem Exosystem": "Экзоcистема 'Голем' VI класса CSIJ",
  "Goo Overdrive": "Слизь-Перегруз",
  "Cursed Torch": "Проклятый Светильник",
  "Cortical Scaledown+": "Кортикальный Уменьшатель+",
  "Abominator": "Богомерз",
  "Microbial Oil Secretion Glands": "Гланды Выделения Масла Microbial",
  "Holy Scope": "Священный Прицел",
  "Biojet": "Биоджет",
  "Flowerchute": "Цветопрыск"
};

export const implantMapToEng: Record<string, string> = {
  "Аптечка Первой Помощи": "First Aid Kit",
  "Разгрузочный Жилет": "Load Bearing Vest",
  "Пневматические Ноги": "Pneumatic Legs",
  "Стелс-Костюм": "Stealth Suit",
  "Грапендикс": "Grappendix",
  "Девайс Вертикального Проникновения": "Vertical Entry Device",
  "Датчик Жизненных Показателей": "Life Sensor",
  "Гноеплюй": "Gunkboosters",
  "Биокостюм V класса CSIJ": "CSIJ Level V Biosuit",
  "Машина Икароса": "Icaros Machine",
  "Очки Кошмарного Видения": "Nightmare Vision Goggles",
  "Броня II класса CSIJ": "CSIJ Level II Body Armor",
  "Броня IIВ класса CSIJ": "CSIJ Level IIB Body Armor",
  "Инопланетное Биологическое Обеспечение Для Ног": "Alien Leg Wetware",
  "Броня IV класса CSIJ": "CSIJ Level IV Body Armor",
  "Граната": "HE Grenade",
  "Костюм Химзащиты": "Hazmat Suit",
  "Полный Набор Органов Улучшения Скорости": "Speed Enhancer Total Organ Package",
  "Тактическая Амуниция Углового Преимущества": "Angular Advantage Tactical Munitions",
  "Фанковорчалки": "Funkgrunters",
  "Бывалая Дождевая Шляпа": "Tattered Rain Hat",
  "Костюм Прыг-Скок": "Bouncy Suit",
  "Флешеттная Граната": "Flechette Grenade",
  "Дом": "House",
  "Амуниционные Железы": "Ammunition Gland",
  "Военный Камуфляж": "Military Camouflage",
  "Броня III класса CSIJ": "CSIJ Level III Body Armor",
  "Тактический Противовзрывной Щит": "Tactical Blast Shield",
  "Биосопло": "Biothruster",
  "Специальная Седативная Граната ZZzzz": "ZZzzz Special Sedative Grenade",
  "Аугментированные руки": "Augmented arms",
  "Портативный Кассетный Плеер Zomy X-200": "Zomy X-200 Portable Cassette Player",
  "Черепопушка": "Skullgun",
  "Бионические глаза Zoom N Go": "Zoom N Go Bionic Eyes",
  "Композитный шлем": "Composite Helmet",
  "Скопление Лимфоузлов Улучшения Скорости": "Speed Enhancer Node Cluster",
  "Гланды Улучшения Скорости": "Speed Enhancer Gland",
  "Глаз Корповидения": "Eyes of Corporate Insight",
  "Экстравагантный костюм": "Extravagant Suit",
  "Очки Ночного Видения": "Night Vision Goggles",
  "Экзоcистема 'Голем' VI класса CSIJ": "CSIJ Level VI Golem Exosystem",
  "Слизь-Перегруз": "Goo Overdrive",
  "Проклятый Светильник": "Cursed Torch",
  "Кортикальный Уменьшатель+": "Cortical Scaledown+",
  "Богомерз": "Abominator",
  "Гланды Выделения Масла Microbial": "Microbial Oil Secretion Glands",
  "Священный Прицел": "Holy Scope",
  "Биоджет": "Biojet",
  "Цветопрыск": "Flowerchute"
};
