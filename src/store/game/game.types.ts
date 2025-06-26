import type { ICard } from '../../types/card.types.ts';

export type TPlayer = 'player' | 'opponent';

export interface IGameCard extends ICard {
    id: number;
    isOnBoard: boolean;
    isCanAttack: boolean;
}

export interface IHero {
    deck: IGameCard[];
    health: number;
    mana: number;
}

export interface IGameStore {
    player: IHero;
    opponent: IHero;
    currentTurn: TPlayer;
    isGameOver: boolean;
    startGame: () => void;
    endTurn: () => void;
    playCard: (cardId: number) => void;
    attackCard: (attackerId: number, targetId: number) => void;
    attackHero: (attackerId: number) => void;
}
