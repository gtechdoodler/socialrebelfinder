function Manip(ent) {
  this.ent = ent;
}

Manip.prototype = {

  get(prop) {
    if (!prop in this.ent) {
      throw 'Error: property does not exist on entity.';
    }
    return this.ent[prop];
  },
  
  set(prop, val) {
    if (!prop in this.ent) {
      throw 'Error: property does not exist on entity.';
    }
    this.ent[prop] = val;    
  }
};

export default ent => {
  return new Manip(ent);
};