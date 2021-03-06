var Bee = function() {
  Grub.call(this); //call the Grub superclass
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

/*

 set the prototype
 set the constructor
 an age property that is set to 5
 a color property that is set to yellow
 a food property that is inherited from grub
 an eat method that is inherited from grub
 a job property that is set to keep on growing
*/