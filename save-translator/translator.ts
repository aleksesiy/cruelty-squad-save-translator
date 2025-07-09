import { Savefile, implantMap, deadNpcMap, levelMap } from "./interface";
import { savefile } from "./savegame";

function translateToRus(savefile: Savefile) {
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
        implantsRu.push(implantMap[element])
    });
    return implantsRu
}
function translateDeadNpcsToRus(deadNpsc: Savefile['dead_npcs']) {
    const deadNpcsRu: string[] = []
    deadNpsc.forEach(element => {
        deadNpcsRu.push(deadNpcMap[element])
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
    for (let i = 0; i < Object.keys(levelMap).length; i++) {
        levelsStr = levelsStr.replaceAll(Object.keys(levelMap)[i], Object.values(levelMap)[i])
    }
    return JSON.parse(levelsStr)
}


translateToRus(savefile)