class SortedList {

    constructor(items,length) {
	
	this.items = []
	//this.length = this.items.length creado el get de length se quita de aqui

}

	get length(){
	return this.items.length
}

    add(item) {
	//this.length = this.items.length esto no se debe hacer
    this.items = [...this.items,item]
    this.items.sort((a, b) => a - b);
	return this.items
}

    get(pos) {
	
        if (pos > this.length) {
            throw new Error("OutOfBounds");
          }
          return this.items[pos];
  
}

    max() {
        if(this.items.length===0){
            throw new Error("EmptySortedList")
        }
        return this.items[this.length - 1]
}

    min() {
        if(this.items.length===0){
            throw new Error("EmptySortedList")
        }
        return this.items[0] 

}

    sum() {
        if(this.items.length===0){
            return 0
        }
        return this.items.reduce((acc, el) => acc + el, 0)

}

average() {
    if(this.items.length===0){
        throw new Error("EmptySortedList")
    }
    return this.sum() / this.length;

}
  };
  
  module.exports = SortedList;
