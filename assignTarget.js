function assignTarget(currentPlayer, allPlayers) {
  const candidates = allPlayers.filter(player =>
    player.location === currentPlayer.location &&
    player.time === currentPlayer.time &&
    player.id !== currentPlayer.id
  );

  if (candidates.length === 0) {
    return null; // no valid target
  }

  const randomIndex = Math.floor(Math.random() * candidates.length);
  const target = candidates[randomIndex];

  return {
    targetId: target.id,
    hints: target.hints
  };
}