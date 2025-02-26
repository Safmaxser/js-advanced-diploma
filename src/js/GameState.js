export default class GameState {
  static stateGame;

  static from(object) {
    if (typeof object.currentLevel != 'number' ||
        typeof object.playerTurn != 'boolean' ||
        typeof object.points != 'number' ||
        typeof object.boardSize != 'number' ||
        typeof object.characterCount != 'number' ||
        !Array.isArray(object.dataCharacterByPosition)) {
      throw new Error('Invalid state');
    }
    GameState.stateGame = {};
    GameState.stateGame.currentLevel = object.currentLevel;
    GameState.stateGame.dataCharacterByPosition = object.dataCharacterByPosition;
    GameState.stateGame.playerTurn = object.playerTurn;
    GameState.stateGame.points = object.points;
    GameState.stateGame.boardSize = object.boardSize;
    GameState.stateGame.characterCount = object.characterCount;
    return null;
  }
}
