const isPalindrome(string):
    // Make string lowercase
    const newString = text.toLowerCase();
    
    // Starting positions (index 0 and length-1)
    leftLetter = 0
    rightLetter = length(newString) - 1
    
    while leftLetter < rightLetter:
        // Compare letters at left and right positions
        if newString[leftLetter] is not equal to newString[rightLetter]:
            return false
        
        // Move letters towards the centre
        leftLetter + 1
        rightLetter - 1 
    
    return true

console.log(isPalindrome(string);

// The time complexity is O(n), where n is the length of the input string.
// Unsure of space complexity.
// I chose this method because of its efficiency, only requiring one (or really half) pass through the input string.
// This is just pseudocode that I bulked out with ideas but it probably isn't correct, so I can't say whether it's the most efficient way of doing it, but I don't think it needs much more to it.
