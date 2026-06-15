print("\n")
print("---starting with linear---")
print("\n")

def linear_search(arr, target):

    for i in range(len(arr)):
        print(f"Checking index {i}, value: (arr[i])")

        if arr[i] == target:
            print("Match found")
            return i
        
    print ("No match found")
    return -1
    
marks = [20,50,70,40,30,22,21,52]
target = 13

result = linear_search(marks,target)

print(result)

#---------------------------Binary-------------------
print("\n")
print("---binary search---")
print("\n")

def binary_search(arr,target):
    left = 0
    right = len(arr) - 1

    while left<=right:
        mid = (left + right)// 2

        print (f"left: {left}, Right: {right}, Mid: {mid},value: {arr[mid]}" )

        if arr[mid]  == target:
            print ("Match found")
            return mid
        elif arr[mid] < target:
            print("Going right")
            left = mid + 1
        else: 
            print("Going left")
            right = mid -1  
    print ("No match found")
    return -1

marks = [20,50,170,240,330,522,621,752]
target = 50

result = binary_search(marks,target)

