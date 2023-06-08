def dot_product(v1, v2):
    if len(v1) != len(v2):
        raise ValueError

    result = 0
    for i in range(len(v1)):
        result += v1[i] * v2[i]

    return result






    def are_vectors_orthogonal(vectors):
    for v1, v2 in vectors:
        result = dot_product(v1, v2)
        if result != 0:
            return False






    return True
    vectors = [([1, 2, 3], [4, -2, 1]), ([0, 1], [2, 0]), ([3, -1, 0], [0, 0, 0])]
orthogonal = are_vectors_orthogonal(vectors)
print(orthogonal)  # Output: False






def insertion_sort(arr):
    # Traverse through 1 to len(arr)
    for i in range(1, len(arr)):
        key = arr[i]  

        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = key  

    return arr