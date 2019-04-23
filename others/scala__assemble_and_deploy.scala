
import scala.sys.process._

main()

def main() {
  //val scala_ver = "2.12"
  val jar = args(0)
  println(jar)
  var com = "sbt assembly"
  println(com)
  Process(com).lineStream.foreach(l=>println(l))
  com = "cp " + jar + " " + sys.env("HOME") + "/jar-files/"
  println(com)
  Process(com).lineStream.foreach(l=>println(l))
}
