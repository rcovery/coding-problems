array = [
	[3,5,7],
	[9,4,5],
	[4,9,3]
]

def isToeplitz(arr):
	for fooIndex, foo in enumerate(arr):
		for barIndex, bar in enumerate(foo):
			if fooIndex > 0 and barIndex > 0:
				if (array[fooIndex - 1][barIndex - 1] == bar):
					return True;

	return False;

print(isToeplitz(array))
