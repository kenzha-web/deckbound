import type { IGameStore } from '../game.types.ts';

export const playCardAction = (state: IGameStore, cardId: number): Partial<IGameStore> => {
    const isPlayerTurn = state.currentTurn === 'player';
    const currentPlayer = isPlayerTurn ? state.player : state.opponent;

    const currentCard = currentPlayer.deck.find((card) => card.id === cardId);

    if (currentCard && currentPlayer.mana >= currentCard?.mana) {
        currentCard.isOnBoard = true;
        currentPlayer.mana -= currentCard.mana;
    }

    return isPlayerTurn ? { player: currentPlayer } : { opponent: currentPlayer };
};
