function AdjacentTiles(tile) {
  this.tile = tile;
}

AdjacentTiles.prototype.u = function() {
  if (!this.prop_u) {
    this.prop_u = this.tile.arena.grid[this.tile.arena.inBounds("width", this.tile.x-1)][this.tile.arena.inBounds("height", this.tile.y)];
  };
  return this.prop_u;
}

AdjacentTiles.prototype.d = function() {
  if (!this.prop_d) {
    this.prop_d = this.tile.arena.grid[this.tile.arena.inBounds("width", this.tile.x+1)][this.tile.arena.inBounds("height", this.tile.y)];
  };
  return this.prop_d;
}

AdjacentTiles.prototype.l = function() {
  if (!this.prop_l) {
    this.prop_l = this.tile.arena.grid[this.tile.arena.inBounds("width", this.tile.x)][this.tile.arena.inBounds("height", this.tile.y-1)];
  };
  return this.prop_l;
}

AdjacentTiles.prototype.r = function() {
  if (!this.prop_r) {
    this.prop_r = this.tile.arena.grid[this.tile.arena.inBounds("width", this.tile.x)][this.tile.arena.inBounds("height", this.tile.y+1)];
  };
  return this.prop_r;
}
