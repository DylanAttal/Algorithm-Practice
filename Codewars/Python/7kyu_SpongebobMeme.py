# You need to create a function that converts the input into this format,
# with the output being the same string expect there is a pattern of uppercase and lowercase letters.

# Example:

# input:  "stop Making spongebob Memes!"
# output: "StOp mAkInG SpOnGeBoB MeMeS!"

def sponge_meme(s):
    return "".join([letter.upper() if not index % 2 else letter.lower() for index, letter in enumerate(s)])
