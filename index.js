<script language="JavaScript">

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = 'page = 1
while repeat == \'true\':
 print(\'page\')
 document.onkeydown = checkKey;

 function checkKey(e) {

  e = e || window.event;

  if (e.keyCode == \'38\') {
    // up arrow
  }
  else if (e.keyCode == \'40\') {
   // down arrow
  }
  else if (e.keyCode == \'37\') {
   // left arrow
  }
  else if (e.keyCode == \'39\') {
    // right arrow
  }

}
while page == \'10\':
 stopup = true
else:
  stopdown = false
if e.KeyCode == \'37\':
  if stopup == \'false\':
   page = page+1
if e.KeyCode == \'39\':
  if stopdown == \'false\':
   page = page+1
repeat = true
  '

document.write(pagecode);

</script>
