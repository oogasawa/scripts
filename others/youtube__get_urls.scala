
import scala.collection.mutable.HashSet
import scala.io.Source
import scala.sys.process._


main()

def main() {
  val htmlPath = args(0)
  val videoIds = getVideoIds(htmlPath)
  videoIds.foreach(printUrl)
}


def getVideoIds(htmlPath: String): HashSet[String] = {
  val result = new HashSet[String]

  val video_r = """\"videoId\":\"(\w+?)\"""".r

  val htmlStr = Source.fromFile(htmlPath, "UTF-8").mkString
  val found   = video_r.findAllIn(htmlStr)
  for (m <- found) {
    result.add(m)
  }
  return result
}


def printUrl(videoId: String) {
  val id_r = """\"videoId\":\"(\w+?)\"""".r
  videoId match {
    case id_r(id) => println("youtube-dl https://www.youtube.com/watch?v=" + id)
    case _ => None
  }
}


