// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

/*Test.describe('Example tests', _ => {
  Test.assertEquals(findShort('bitcoin take over the world maybe who knows perhaps'), 3);
  Test.assertEquals(findShort('turns out random test cases are easier than writing out basic ones'), 3);
});

function findShort(s) {
  return Math.min.apply(
    null,
    s.split(' ').map(w => w.length),
  );
}*/

/*Description:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/
/*Test.assertEquals(XO('xo'), true);
Test.assertEquals(XO('xxOo'), true);
Test.assertEquals(XO('xxxm'), false);
Test.assertEquals(XO('Oo'), false);
Test.assertEquals(XO('ooom'), false);*/

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

/*Test cases:
Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO('XO'),true);
Test.assertEquals(XO('xo0'),true);
Test.assertEquals(XO('xxxoo'),false);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO(''),true,'Empty string contains equal amount of x and o');
Test.assertEquals(XO('xxxxxoooxooo'),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("ooom"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO('abcdefghijklmnopqrstuvwxyz'),true,'Alphabet contains equal amount of x and o');*/
