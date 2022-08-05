// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

package kata

func GetSize(w,h,d int) [2]int {
    return [2]int{ 2 * w * h + 2 * h * d + 2 * w * d, w * h * d }
}
