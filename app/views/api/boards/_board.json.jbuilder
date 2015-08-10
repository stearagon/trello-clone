json.title board.title

json.lists board.lists do |list|
  json.title list.title
  json.ord list.ord

  json.cards list.cards do |card|
      json.title card.title
      json.description card.description
      json.ord card.ord
  end
end
