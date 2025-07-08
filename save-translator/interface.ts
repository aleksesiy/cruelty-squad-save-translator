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



  "Alpine Hospitality_hell_raw_stime": number;
  "Alpine Hospitality_hell_raw_time": number;
  "Alpine Hospitality_hell_string_stime": string;
  "Alpine Hospitality_raw_stime": number;
  "Alpine Hospitality_raw_time": number;
  "Alpine Hospitality_string_stime": string;

  "Androgen Assault_hell_raw_stime": number;
  "Androgen Assault_hell_raw_time": number;
  "Androgen Assault_hell_string_stime": string;
  "Androgen Assault_raw_stime": number;
  "Androgen Assault_raw_time": number;
  "Androgen Assault_string_stime": string;

  "Apartment Atrocity_hell_raw_stime": number;
  "Apartment Atrocity_hell_raw_time": number;
  "Apartment Atrocity_hell_string_stime": string;
  "Apartment Atrocity_raw_stime": number;
  "Apartment Atrocity_raw_time": number;
  "Apartment Atrocity_string_stime": string;

  "Archon Grid_hell_raw_stime": number;
  "Archon Grid_hell_raw_time": number;
  "Archon Grid_hell_string_stime": string;
  "Archon Grid_raw_stime": number;
  "Archon Grid_raw_time": number;
  "Archon Grid_string_stime": string;

  "Bog Business_hell_raw_stime": number;
  "Bog Business_hell_raw_time": number;
  "Bog Business_hell_string_stime": string;
  "Bog Business_raw_stime": number;
  "Bog Business_raw_time": number;
  "Bog Business_string_stime": string;

  "Casino Catastrophe_hell_raw_stime": number;
  "Casino Catastrophe_hell_raw_time": number;
  "Casino Catastrophe_hell_string_stime": string;
  "Casino Catastrophe_raw_stime": number;
  "Casino Catastrophe_raw_time": number;
  "Casino Catastrophe_string_stime": string;

  "Cruelty Squad Headquarters_hell_raw_stime": number;
  "Cruelty Squad Headquarters_hell_raw_time": number;
  "Cruelty Squad Headquarters_hell_string_stime": string;
  "Cruelty Squad Headquarters_raw_stime": number;
  "Cruelty Squad Headquarters_raw_time": number;
  "Cruelty Squad Headquarters_string_stime": string;

  "Darkworld_hell_raw_stime": number;
  "Darkworld_hell_raw_time": number;
  "Darkworld_hell_string_stime": string;
  "Darkworld_raw_stime": number;
  "Darkworld_raw_time": number;
  "Darkworld_string_stime": string;

  "House_hell_raw_stime": number;
  "House_hell_raw_time": number;
  "House_hell_string_stime": string;
  "House_raw_stime": number;
  "House_raw_time": number;
  "House_string_stime": string;

  "Idiot Party_hell_raw_stime": number;
  "Idiot Party_hell_raw_time": number;
  "Idiot Party_hell_string_stime": string;
  "Idiot Party_raw_stime": number;
  "Idiot Party_raw_time": number;
  "Idiot Party_string_stime": string;

  "Mall Madness_hell_raw_stime": number;
  "Mall Madness_hell_raw_time": number;
  "Mall Madness_hell_string_stime": string;
  "Mall Madness_raw_stime": number;
  "Mall Madness_raw_time": number;
  "Mall Madness_string_stime": string;

  "Miner's Miracle_hell_raw_stime": number;
  "Miner's Miracle_hell_raw_time": number;
  "Miner's Miracle_hell_string_stime": string;
  "Miner's Miracle_raw_stime": number;
  "Miner's Miracle_raw_time": number;
  "Miner's Miracle_string_stime": string;

  "Neuron Activator_hell_raw_stime": number;
  "Neuron Activator_hell_raw_time": number;
  "Neuron Activator_hell_string_stime": string;
  "Neuron Activator_raw_stime": number;
  "Neuron Activator_raw_time": number;
  "Neuron Activator_string_stime": string;

  "Office_hell_raw_stime": number;
  "Office_hell_raw_time": number;
  "Office_hell_string_stime": string;
  "Office_raw_stime": number;
  "Office_raw_time": number;
  "Office_string_stime": string;

  "Paradise_hell_raw_stime": number;
  "Paradise_hell_raw_time": number;
  "Paradise_hell_string_stime": string;
  "Paradise_raw_stime": number;
  "Paradise_raw_time": number;
  "Paradise_string_stime": string;

  "Pharmakokinetiks_hell_raw_stime": number;
  "Pharmakokinetiks_hell_raw_time": number;
  "Pharmakokinetiks_hell_string_stime": string;
  "Pharmakokinetiks_raw_stime": number;
  "Pharmakokinetiks_raw_time": number;
  "Pharmakokinetiks_string_stime": string;

  "Seaside Shock_hell_raw_stime": number;
  "Seaside Shock_hell_raw_time": number;
  "Seaside Shock_hell_string_stime": string;
  "Seaside Shock_raw_stime": number;
  "Seaside Shock_raw_time": number;
  "Seaside Shock_string_stime": string;

  "Sin Space Engineering_hell_raw_stime": number;
  "Sin Space Engineering_hell_raw_time": number;
  "Sin Space Engineering_hell_string_stime": string;
  "Sin Space Engineering_raw_stime": number;
  "Sin Space Engineering_raw_time": number;
  "Sin Space Engineering_string_stime": string;

  "Trauma Loop_hell_raw_stime": number;
  "Trauma Loop_hell_raw_time": number;
  "Trauma Loop_hell_string_stime": string;
  "Trauma Loop_raw_stime": number;
  "Trauma Loop_raw_time": number;
  "Trauma Loop_string_stime": string;
}

export const deadNpcMap: Record<string, string> = {
  "$1000000 received.": "$1000000 получено.",
  "Golem Exosystem received.": "Экзоcистема 'Голем' получена.",
  "Raymond Shocktroop Tactical received.": "Raymond Shocktroop Tactical получен.",
  "Jurgen Cool": "Йурген Крутой",
  "Mark Bilberry": "Марк Чернигов",
  "Michael Nielsen": "Майкл Нильсен",
  "Burt Grundel":  "Берт Грундель",
  "Limit Chancellor": "Канцлер Предела",
  "Ambassador": "",
  "Henrik \"Freakout\" Johnson": "Генрих 'Приступ' Джонсон",
  "Freak": ""
}
export const levelMap: Record<string, string> = {
  "Alpine Hospitality": "Альпийское Гостеприимство",
  "Androgen Assault": "Андрогенный Штурм",
  "Apartment Atrocity": "Резня в Апартаментах",
  "Archon Grid": "Архонт Сеть",
  "Bog Business": "Болотный бизнесс",
  "Casino Catastrophe": "Катастрофа в Казино",
  "Cruelty Squad Headquarters": "Штаб-Квартира Cruelty Squad",
  "Darkworld": "Тёмный Мир",
  "House": "Дом",
  "Idiot Party": "Вечеринка Идиотов",
  "Mall Madness": "Торговое Безумие",
  "Miner's Miracle": "Чудо Шахтёра",
  "Neuron Activator": "Нейронный Активатор",
  "Office": "Офис",
  "Paradise": "Парадайз",
  "Pharmakokinetiks": "Фармакокинетика",
  "Seaside Shock": "Прибрежный Шок",
  "Sin Space Engineering": "Космическая Инженерия 'ГРЕХ'",
  "Trauma Loop": "Травматический Цикл"
}


export const implantMap: Record<string, string> = {
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
  "Skull Gun": "Черепопушка",
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
