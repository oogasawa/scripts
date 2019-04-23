
import java.io.File
import scala.io.Source
import scala.sys.process._


main()


def main() {
  if (!hasDownloadsDir()) {
    makeDownloadsDir()
  }
  
  val url = getScalaDebUrl()
  val deb = getDebFilename(url)

  if (!hasDeb(deb)) 
    downloadDeb(url)

  if (!beInstalled(deb))
    installDeb(deb)
}


def hasDownloadsDir() : Boolean = {
  val dir  = new File(sys.env("HOME") + "/Downloads")
  return dir.isDirectory()
}


def makeDownloadsDir() {
  println("Downloads directory does not exist.")
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



def downloadDeb(url: String) {
  val dir = new File(sys.env("HOME") + "/Downloads")
  val p = Process("wget " + url, dir, "LANG"->"C")
  p.!
}


def getDebFilename(url: String) : String = {
  val deb_r     = """[A-Za-z0-9_.-]+\.deb""".r
  val filename = deb_r.findFirstIn(url).get
  return filename
}

def hasDeb(deb: String) : Boolean = {
  val dir  = new File(sys.env("HOME") + "/Downloads/" + deb)
  return dir.isFile()
}


def beInstalled(deb: String): Boolean = {
  return false
}


def installDeb(deb: String) {
  val cmd = "sudo dpkg -i " + deb
  val dir = new File(sys.env("HOME") + "/Downloads")
  val p   = Process(cmd, dir, "LANG"->"C")
  p.!
}





//var retcode = "ls ~/Download".!
//println(f"retcode: $retcode")



// main()

// def main() {
//   val dl_s = "ls ~/Download".!!
//   println(dl_s)
//   // val url = get_download_url()
//   // "cd ~/Download".!
//   // var com = "wget " + url 
//   // com.!
//   // "ls ".!
// }

