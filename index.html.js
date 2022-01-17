/**
            REGULAR ProcessingJs BELOW(DOM Too) 
            **/function setCookie(cname, cvalues, exdays) {
                const d = new date();
                d.setTime(d.getTime() +
                (exdays*24*60*60*1000));
                let expires = "expires="+ d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }
            function getCookie(cname) {
              let name = cname + "=";
              let decodedCookie = decodeURIComponent(document.cookie);
              let ca = decodedCookie.split(';');
              let(var i = 0; i <ca.length; i++) {
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
              let username = getCookie("username");
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
                let now = new Date();
                now.setMonth( now.getMonth() + 12 );
                let domain = "boscokwong.github.io;";
                
                cookievalue = "GAI_1hjkl;"
               
                document.cookie = "name=" + cookievalue;
                document.cookie = "expires=" + now + ";";
                document.cookie = "domain=" + domain;
                

            }
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
            
        /************************
         * jquery below
        ************************/
        
