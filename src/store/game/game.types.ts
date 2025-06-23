import { ICard } from '../../types/card.types.ts';

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
    playerDeck: IHero;
    opponentDeck: IHero;
    currentTurn: TPlayer;
    isGameOver: boolean;
    startGame: () => void;
    endTurn: () => void;
    playCard: (card: IGameCard) => void;
    attackCard: (attackerId: number, targetId: number) => void;
    attackHero: (attackerId: number) => void;
}
