from os.path import abspath, dirname

print(__file__)
print(abspath(__file__))
print(dirname(abspath(__file__)))
print(dirname(dirname(abspath(__file__))))