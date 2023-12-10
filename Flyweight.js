// A simple Character class that stores the value, type, and position of a character
function Character(value, type, position) {
  this.value = value;
  this.type = type;
  this.position = position;
}

// A Flyweight class that stores character value and type combinations
function CharacterFlyweight(value, type) {
  this.value = value;
  this.type = type;
}

// A factory to automatically create the flyweights that are not present in the list,
// and also generate a count of the total flyweights in the list
const CharacterFlyweightFactory = (function () {
  const flyweights = {};

  return {
    get: function (value, type) {
      if (flyweights[value + type] === undefined)
        flyweights[value + type] = new CharacterFlyweight(value, type);

      return flyweights[value + type];
    },
    count: function () {
      let count = 0;
      for (var f in flyweights) count++;
      return count;
    },
  };
})();

// An enhanced Character class that uses flyweights to store references
// to recurring value and type combinations
function CharacterWithFlyweight(value, type, position) {
  this.flyweight = CharacterFlyweightFactory.get(value, type);
  this.position = position;
}

// A helper function to define the type of a character
// It identifies numbers as N and everything as A (for alphabets)
function getCharacterType(char) {
  switch (char) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      return "N";
    default:
      return "A";
  }
}

// A list class to create an array of Characters from a given string
function CharactersList(str) {
  chars = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    chars.push(new Character(char, getCharacterType(char), i));
  }

  return chars;
}

// A list class to create an array of CharacterWithFlyweights from a given string
function CharactersWithFlyweightsList(str) {
  chars = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    chars.push(new CharacterWithFlyweight(char, getCharacterType(char), i));
  }

  return chars;
}

function run() {
  // Our input is a large paragraph with over 600 characters
  let input =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et velit pretium, consectetur mauris eu, interdum erat. Aliquam sed nisl turpis. Proin eget urna magna. Nam commodo felis neque, in imperdiet libero dictum vitae. Donec finibus consectetur nibh at blandit. Pellentesque consectetur ipsum metus, ut viverra felis rutrum id. Mauris convallis elit sed ante venenatis mollis. Suspendisse urna libero, dapibus gravida semper viverra, aliquam eu mauris. Integer suscipit bibendum viverra. Suspendisse felis diam, ultrices sit amet ornare id, egestas ut diam. Nulla facilisi. Praesent ullamcorper eros in quam tincidunt, eu tincidunt ipsum imperdiet.";

  // We store the string into lists of characters and characterWithFlyweights
  const charactersList = CharactersList(input);
  const charactersWithFlyweightsList = CharactersWithFlyweightsList(input);

  // The characters list turns out to be as long as the string, with each object taking
  // more than 3 times the size of a primitive character (because of its type and position metadata).

  console.log("Character count -> " + charactersList.length);
  // Output: Character count -> 656

  // The number of flyweights created is only 31, since only
  // 31 characters are used to write the entire paragraph.
  // This means that to store 656 characters, a total of
  // (31 * 2 + 656 * 1 = 718) memory blocks are used instead of
  // (656 * 3 = 1968) which would have used by the standard array.
  // (We have assumed each variable to take up one memory block for simplicity.
  // This may vary in real-life scenarios.)

  console.log("Flyweights created -> " + CharacterFlyweightFactory.count());
  // Output: Flyweights created -> 31
}

run();
