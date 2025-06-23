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

    const newPlayerMana = getNewMana('player', state.playerDeck.mana);
    const newOpponentMana = getNewMana('opponent', state.opponentDeck.mana);

    return {
        currentTurn: newTurn,
        playerDeck: {
            ...state.playerDeck,
            mana: newPlayerMana,
            deck: resetAttack(state.playerDeck.deck),
        },
        opponentDeck: {
            ...state.opponentDeck,
            mana: newOpponentMana,
            deck: resetAttack(state.opponentDeck.deck),
        },
    };
};
