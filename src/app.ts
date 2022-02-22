// Importáld be a HumanHero és TransformerHero osztályokat.

import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";


/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    new HumanHero(1234, "sauperman","male", 99, 9, "handsomephoto"),
    new HumanHero(1234, "sauperman2","male", 99, 9, "handsomephoto"),
    new HumanHero(1234, "sauperman3","male", 99, 9)
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    new TransformerHero(1234, "saupermachine", 1, 99, "evils", "handsomephoto"),
    new TransformerHero(1234, "saupermachine1", 1, 99, "evils"),
    new TransformerHero(1234, "saupermachine3", 1, 99, "goods", "handsomephoto")
];
