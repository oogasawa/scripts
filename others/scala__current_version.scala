
import java.io.File
import scala.io.Source
import scala.sys.process._

main()

def main() {
  val url = getScalaDebUrl()
  val deb = getDebFilename(url)
  println(deb)
}


def getScalaDebUrl(): String = {
  var url = ""

  val src = Source.fromURL("https://scala-lang.org/download/")
  val deb_r = """https:.+\.deb""".r

  var continue = true
  for (l <- src.getLines if continue) {
    var m = deb_r.findFirstIn(l)
    if (m != None) {
      url = m.get
      continue = false
    }
  }

  return url
}



def getDebFilename(url: String) : String = {
  val deb_r     = """[A-Za-z0-9_.-]+\.deb""".r
  val filename = deb_r.findFirstIn(url).get
  return filename
}


