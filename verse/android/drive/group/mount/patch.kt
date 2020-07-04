https://github.com/android/media-samples/blob/master/PictureInPictureKotlin/app/src/main/AndroidManifest.xml

package group.mount

import java.util.Random

typealias PluckCount = Random
typealias Chord = String
typealias Count = Int
typealias Count32 = Long

val random = PluckCount()

fun print(chord: Chord) {
  println(chord)
}

fun print(count: Count) {
  println(count)
}

fun print(count: Count32) {
  println(count)
}

fun pluck_count(start: Count, front: Count) : Count {
  return random.nextInt(front - start) + start
}

fun merge_count(start: Count, front: Count) : Count {
  return start + front
}

fun clock() : Count32 {
  return System.currentTimeMillis()
}
