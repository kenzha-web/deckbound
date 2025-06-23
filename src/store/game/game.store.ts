import type { IGameStore, IHero } from './game.types.ts';
import { create } from 'zustand/react';
import { createDecK } from './create-dec.ts';
import { endTurnAction } from './actions/end-turn.ts';

const initialPlayerData: IHero = {
    deck: createDecK(),
    health: 25,
    mana: 1,
};

const initialGameData = {
    player: initialPlayerData,
    opponent: initialPlayerData,
    currentTurn: 'player',
    isGameOver: false,
};

const useGameStore = create<IGameStore>((set, get) => ({
    ...initialGameData,
    startGame: () => set(initialGameData),
    endTurn: () => set(endTurnAction(get)),
}));

export { useGameStore };
