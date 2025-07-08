import { Savefile, implantMap, deadNpcMap, levelMap } from "./interface";
import { savefile } from "./savegame";

function translate(savefile: Savefile) {
    const implantsRu = translateImplants(savefile.implants_unlocked);
    const deadNpcsRu = translateDeadNpcs(savefile.dead_npcs);
    const bonusesRu = translateBonuses(savefile.bonus_unlocked)
    const levelsRu = translateLevels(savefile)

    console.log(levelsRu);

}

function translateImplants(implants: Savefile["implants_unlocked"]) {
    const implantsRu: string[] = []
    implants.forEach(element => {
        implantsRu.push(implantMap[element])
    });
    return implantsRu
}
function translateDeadNpcs(deadNpsc: Savefile['dead_npcs']) {
    const deadNpcsRu: string[] = []
    deadNpsc.forEach(element => {
        deadNpcsRu.push(deadNpcMap[element])
    })
    return deadNpcsRu
}
function translateBonuses(bonuses: Savefile['bonus_unlocked']) {
    if (bonuses.indexOf('House') !== -1) {
        bonuses.splice(bonuses.indexOf('House'), 1, "Дом")
    }
    return bonuses
}
function translateLevels(levels: Savefile) {
    let levelsStr = JSON.stringify(levels)
    for (let i = 0; i < Object.keys(levelMap).length; i++) {
        console.log(Object.keys(levelMap)[i], Object.values(levelMap)[i])
        levelsStr = levelsStr.replaceAll(Object.keys(levelMap)[i], Object.values(levelMap)[i])
    }
    return levelsStr
}


translate(savefile)