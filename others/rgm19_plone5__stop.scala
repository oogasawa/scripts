
import scala.sys.process._

val res = ("ps aux" #| "grep pcelery").lines
for (line <- res)
  println(line)



//println(res.getClass.getName)
//res.foreach(println)

// val result = (Process("ps aux") #| Process("grep pcelery")).lines.toList
// result.foreach(println)

// //---

// val pid_pattern = """^\w+\s+([0-9]+)\s+.+/mnt/raid.+""".r
// def get_pid(line: String): Option[String] = {
//   line match {
//     case pid_pattern(pid) => Some(pid)
//     case _ => None
//   }
// }

// // flatten method removes None elements out of a given list.
// println(result.map(get_pid).flatten) 


