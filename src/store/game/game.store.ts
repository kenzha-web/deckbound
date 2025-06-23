import type { IGameStore, IHero } from './game.types.ts';
import { create } from 'zustand/react';
import { createDecK } from './create-dec.ts';

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
}));

export { useGameStore };
