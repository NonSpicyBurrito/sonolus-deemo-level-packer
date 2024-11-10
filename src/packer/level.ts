import { dcToLevelData, dsToDC } from 'sonolus-deemo-engine'
import type { PackLevelData } from '.'

export const packLevelData: PackLevelData = async ({ chart, offset }) => {
    if (!chart) throw new Error('No chart file selected')

    const mc = dsToDC(JSON.parse(await chart.text()) as never)
    const levelData = dcToLevelData(mc, offset)

    return { type: 'json', data: levelData }
}
