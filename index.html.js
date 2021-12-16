/**
            REGULAR ProcessingJs BELOW(DOM Too) 
            **/
            var nameEls1 = document.GetElementById (
                "#poem_2_part_1"
            );
            var nameEls2 = document.GetElementById(
                "#poem_2_part_2"
            );
            var nameEls3 = document.GetElementById(
                "#III"
            );
            var nameEls4 = document.GetElementById(
                "#IV"
            );
            var nameEls5 = document.GetElementById(
                "#V"
            );
            var button1_text
            button1_text.addClassName = ("prototype");
            var button1
            button1.addClassName = ("button");
            var mouseClicked = function() {
                button1 = new button();
                
            };
               
            function setCookie(cname, cvalues, exdays) {
                const d = new date();
                d.setTime(d.getTime() +
                (exdays*24*60*60*1000));
                var expires = "expires="+ d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }
            function getCookie(cname) {
              var name = cname + "=";
              var decodedCookie = decodeURIComponent(document.cookie);
              var ca = decodedCookie.split(';');
              for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                  c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                  return c.substring(name.length, c.length);
                }
              }
              return "";
            }
            function checkCookie() {
              var username = getCookie("username");
              if (username != "") {
               alert("Welcome again " + username);
              } else {
                username = prompt("Please enter your name:", "");
                if (username != "" && username != null) {
                  setCookie("username", username, 365);
                }
              }
            }
            function WriteCookie() {
                var now = new Date();
                now.setMonth( now.getMonth() + 12 );
                var domain = "boscokwong.github.io;";
                
                cookievalue = "GAI_1hjkl;"
               
                document.cookie = "name=" + cookievalue;
                document.cookie = "expires=" + now + ";";
                document.cookie = "domain=" + domain;
                
