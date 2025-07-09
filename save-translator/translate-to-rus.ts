import { Savefile, implantMapToRus, deadNpcMapToRus, levelMapToRus } from "./interface";
import { savefile } from "./savegame";

function translateToRus(savefile: Savefile): string {
    const savefileRu = translateLevelsToRus(savefile)

    savefileRu.implants_unlocked = translateImplantsToRus(savefile.implants_unlocked);
    savefileRu.dead_npcs = translateDeadNpcsToRus(savefile.dead_npcs);
    savefileRu.bonus_unlocked = translateBonusesToRus(savefile.bonus_unlocked)

    console.log(JSON.stringify(savefileRu));
    return JSON.stringify(savefileRu)
}

function translateImplantsToRus(implants: Savefile["implants_unlocked"]) {
    const implantsRu: string[] = []
    implants.forEach(element => {
        implantsRu.push(implantMapToRus[element])
    });
    return implantsRu
}

function translateDeadNpcsToRus(deadNpsc: Savefile['dead_npcs']) {
    const deadNpcsRu: string[] = []
    deadNpsc.forEach(element => {
        deadNpcsRu.push(deadNpcMapToRus[element])
    })
    return deadNpcsRu
}

function translateBonusesToRus(bonuses: Savefile['bonus_unlocked']) {
    if (bonuses.indexOf('House') !== -1) {
        bonuses.splice(bonuses.indexOf('House'), 1, "Дом")
    }
    return bonuses
}

function translateLevelsToRus(levels: Savefile) {
    let levelsStr = JSON.stringify(levels)
    for (let i = 0; i < Object.keys(levelMapToRus).length; i++) {
        levelsStr = levelsStr.replaceAll(Object.keys(levelMapToRus)[i], Object.values(levelMapToRus)[i])
    }
    levelsStr = levelsStr.replaceAll("N/A", "Н/Д")

    return JSON.parse(levelsStr)
}


translateToRus(savefile)