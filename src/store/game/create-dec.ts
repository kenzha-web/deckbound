import type { IGameCard } from './game.types.ts';
import { CARDS } from '../../constants/game/cards.constants.ts';

export function createDec(): IGameCard[] {
    return CARDS.map((card, index) => ({
        ...card,
        id: index + 1,
        isOnBoard: false,
        isCanAttack: false,
    }));
}
