class Entity {
  constructor(name) { this.name = name; }

  render() {
    console.log(`Name: ${this.name}`);
  }
}

class Stuff extends Entity {
  constructor(name) {
    super(name)
  }

  render() {
    console.log(`Name stuff: ${this.name}`);
  }
}

class Box extends Entity {
  constructor(name) {
    super(name)
    this.boxStuff
  }

  createBoxStuff(nameStuff) {
    this.boxStuff = new Stuff(nameStuff);
  }

  render() {
    console.log(`Name: ${this.name}, ${this.boxStuff.name}`);
  }
}

class User extends Entity {
  constructor(name) {
    super(name)
    this.userBox
  }

  createUserBox(boxName, nameStuff) {
    let userBox = new Box(boxName);
    userBox.createBoxStuff(nameStuff);
    this.userBox = userBox;
  }

  render() {
    console.log(`User: ${this.name}, 
    box: ${this.userBox.name},
    stuff: ${this.userBox.boxStuff.name}`);
  }
}


let user1 = new User('Sarah');
user1.createUserBox('box1', ['book', 'apple']);
user1.render();
console.log(user1);

let user2 = new User('Ben');
user2.createUserBox('box2', ['pen', 'notebook', 'keys']);
user2.render();
console.log(user2);


