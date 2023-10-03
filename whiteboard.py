import re

# // # DESCRIPTION:

# // # Background:

# // # You've probably seen those intriguing paragraphs where the inner letters of each word are scrambled, but the first and last letters are in place. Readers surprisingly comprehend such texts with relative ease. Inspired by this phenomenon, we will create a function that generates text in a similar pattern. However, instead of scrambling the inner letters, our function will sort them alphabetically!

# // # Task:

# // # Your task is to create a function that takes a string and returns a modified string where:

# // # The first and last characters of each word stay in their original positions.
# // # The characters between the first and last characters of each word are sorted alphabetically.
# // # Any punctuation remains in its original position. For instance, "shan't" should be transformed into "sahn't".
# // # Assumptions:

# // # For the purpose of this task, make the following assumptions:

# // # Words are separated by single spaces.
# // # Only spaces separate words. Special characters do not create word boundaries. For example, "tik-tak" should be transformed to "tai-ktk".
# // # Special characters do not replace the positions of non-special characters. For instance, "-dcba" should become "-dbca".
# // # Punctuation for this exercise is limited to the following four characters: hyphen(-), apostrophe('), comma(,), and period(.)
# // # Ignore the capitalization when sorting the letters, but maintain the original capitalization in the output string.
# /* use replace, less than 3, leave alone, otherwise, leave first and last, alpha sort the middle. */


def sort_inner(sentence):
    def sort_word(word):
        if len(word) <= 3:
            return word
        else:
            middle = sorted(word[1:1], reverse=True)
            middle = [char.lower() for char in middle]
            middle = sorted(middle)
            return word[0] + ' '.join(middle) + word[-1]
        
def special_char(c):
    return c in {"-","'",",","."}

    words = re.split(r'(\s+l\W+)', sentence)
    sorted_words = [sort_inner(word) if not special_char(word[0]) else word for word in words]
    return ''.join(sorted_words)

sentence = "I can not tell you how glad I am that I did not get picked for this one"
print(sort_inner(sentence))