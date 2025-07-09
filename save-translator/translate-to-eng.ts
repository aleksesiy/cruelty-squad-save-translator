import { implantMapToEng, deadNpcMapToEng, levelMapToEng, Savefile } from "./interface";
import { savegameru } from "./savegameru";

function translateToEng(savefileru: Savefile): string {
    const savefileEn = translateLevelsToEng(savefileru)

    savefileEn.implants_unlocked = translateImplantsToEng(savefileru.implants_unlocked);
    savefileEn.dead_npcs = translateDeadNpcsToEng(savefileru.dead_npcs);
    savefileEn.bonus_unlocked = translateBonusesToEng(savefileru.bonus_unlocked)

    console.log(JSON.stringify(savefileEn));
    return JSON.stringify(savefileEn)
}

function translateImplantsToEng(implants: Savefile["implants_unlocked"]) {
    const implantsEn: string[] = []
    implants.forEach(element => {
        implantsEn.push(implantMapToEng[element])
    });
    return implantsEn
}

function translateDeadNpcsToEng(deadNpsc: Savefile['dead_npcs']) {
    const deadNpcsRu: string[] = []
    deadNpsc.forEach(element => {
        deadNpcsRu.push(deadNpcMapToEng[element])
    })
    return deadNpcsRu
}

function translateBonusesToEng(bonuses: Savefile['bonus_unlocked']) {
    if (bonuses.indexOf('Дом') !== -1) {
        bonuses.splice(bonuses.indexOf('Дом'), 1, "House")
    }
    return bonuses
}

function translateLevelsToEng(levels: Savefile) {
    let levelsStr = JSON.stringify(levels)
    for (let i = 0; i < Object.keys(levelMapToEng).length; i++) {
        levelsStr = levelsStr.replaceAll(Object.keys(levelMapToEng)[i], Object.values(levelMapToEng)[i])
    }
    levelsStr = levelsStr.replaceAll("Н/Д", "N/A")

    return JSON.parse(levelsStr)
}


translateToEng(savegameru)