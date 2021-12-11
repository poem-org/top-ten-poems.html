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
            function setCookie(cname,cvalue,exdays) {
              const d = new Date();
              d.setTime(d.getTime() + (exdays*24*60*60*1000));
              let expires = "expires=" + d.toGMTString();
              document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }

            function getCookie(cname) {
              let name = cname + "=";
              let decodedCookie = decodeURIComponent(document.cookie);
              let ca = decodedCookie.split(';');
              for(let i = 0; i < ca.length; i++) {
                let c = ca[i];
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
              let user = getCookie("username");
              if (user != "") {
                alert("Welcome again " + user);
              } else {
                 user = prompt("Please enter your name:","");
                 if (user != "" && user != null) {
                   setCookie("username", user, 30);
                 }
              }
            }
