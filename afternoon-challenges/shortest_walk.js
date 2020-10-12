// A man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST".  Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort.  Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed the desert the smart way.  The directions given to the man are, for example, the following:

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

// You can immediately see that going "NORTH" and then "SOUTH" is not reasonable,  better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]

// Other examples:

// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.  What a waste of time! Better to do nothing.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other,  therefore, the final result is []

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"],  "NORTH" and "SOUTH" are not directly opposite but they become directly  opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task:

// Write a function shortestWalk which will take an array of strings and returns an array of strings with the needless directions removed: (W<->E or S<->N side by side).

// Examples:

// shortestWalk(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) // should return ["WEST"]

// shortestWalk(["NORTH", "SOUTH", "EAST", "WEST"]) // should return []

function shortestWalk(walk) {
  let n = "NORTH",
    s = "SOUTH",
    e = "EAST",
    w = "WEST";

  for (let i = 0; i < walk.length; i++) {
    if (
      (walk[i] == n && walk[i + 1] == s) ||
      (walk[i] == s && walk[i + 1] == n) ||
      (walk[i] == w && walk[i + 1] == e) ||
      (walk[i] == e && walk[i + 1] == w)
    ) {
      walk.splice(i, 2);
      shortestWalk(walk); //recursion
    }
  }

  return walk;
}

console.log(
  shortestWalk(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
