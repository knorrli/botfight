function BotMovement(bot) {
  this.bot = bot;
  this.direction;
  this.tile = this.bot.tile;
  this.nextTile;
  this.maxHeight = arena.width;
  this.maxWidth = arena.height;
}

BotMovement.prototype.move = function(progress) {
  this.nextTile = this.tile[this.direction]();

  if (!this.nextTile.isOccupied()) {
    this[this.direction](progress);
  };
};

BotMovement.prototype.up = function(progress) {
  this.bot.y = this.tile.y - this.stepSize(progress);

  // overflow handling
  if (this.bot.y < 0) {
    this.bot.y += this.maxHeight;
  };
};

BotMovement.prototype.down = function(progress) {
  this.bot.y = this.tile.y + this.stepSize(progress);

  // overflow handling
  if (this.bot.y > this.maxHeight) {
    this.bot.y -= this.maxHeight;
  };
};

BotMovement.prototype.left = function(progress) {
  this.bot.x = this.tile.x - this.stepSize(progress);

  // overflow handling
  if (this.bot.x < 0) {
    this.bot.x += this.maxWidth;
  };
};

BotMovement.prototype.right = function(progress) {
  this.bot.x = this.tile.x + this.stepSize(progress);

  //overflow handling
  if (this.bot.x > this.maxWidth) {
    this.bot.x -= this.maxWidth;
  };
};

BotMovement.prototype.stepSize = function(progress) {
  return progress * this.tile.height;
}

// turn face direction
BotMovement.prototype.render = function(context) {
  var degrees = this.degreesForDirection();
  var rad = degrees*Math.PI/180;
  context.save();
  context.translate(this.bot.x, this.bot.y);
  context.rotate(rad);
  context.drawImage(this.bot.icon, 0+this.bot.offset, 0+this.bot.offset);
  context.restore();
}

BotMovement.prototype.degreesForDirection = function() {
  var degrees = {"up": 270, "down": 90, "left": 180, "right": 0};
  return degrees[this.direction];
}

BotMovement.prototype.updateAction = function(action_hash) {
  this.action = action_hash["action"];
  this.direction = action_hash["direction"];
}

BotMovement.prototype.finishTurn = function() {
  this.tile.removeBot(this.bot);
  this.tile = this.nextTile;
  this.tile.addBot(this.bot);
}