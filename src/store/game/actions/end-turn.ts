import type { IGameCard, IGameStore, TPlayer } from '../game.types.ts';

const getNewMana = (newTurn: TPlayer, currentMana: number) => {
    return newTurn === 'player' ? Math.min(currentMana + 1, 6) : currentMana;
};

const resetAttack = (deck: IGameCard[]) =>
    deck.map((card) => ({
        ...card,
        isCanAttack: card.isOnBoard,
    }));

export const endTurnAction = (get: () => IGameStore): Partial<IGameStore> => {
    const state = get();

    const newTurn: TPlayer = state.currentTurn === 'player' ? 'opponent' : 'player';

    const newPlayerMana = getNewMana('player', state.player.mana);
    const newOpponentMana = getNewMana('opponent', state.opponent.mana);

    return {
        currentTurn: newTurn,
        player: {
            ...state.player,
            mana: newPlayerMana,
            deck: resetAttack(state.player.deck),
        },
        opponent: {
            ...state.opponent,
            mana: newOpponentMana,
            deck: resetAttack(state.opponent.deck),
        },
    };
};
