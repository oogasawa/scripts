/*


*/

import scala.sys.process._

"sudo apt-get --purge remove emacs24".!
"sudo add-apt-repository ppa:kelleyk/emacs".!
"sudo apt-get update".!
"sudo apt-get install emacs25".!

val message="""
Change the emacs version by using update-alternatives command.

sudo update-alternatives --config emacs
(see https://qiita.com/ytoda129/items/58078d8c7e74d9144014)
"""
println()
