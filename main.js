
            const btn = document.getElementsByClassName("resumeRef");
            const workExperience = Array.from(btn).slice(0,4);
            const projects = Array.from(btn).slice(4,8);
            const skills = Array.from(btn).slice(8,11);
            const education = Array.from(btn).slice(11,15);
            const languages = Array.from(btn).slice(15,19);

            console.log(workExperience);
            console.log(projects);
            console.log(skills);
            console.log(education);
            console.log(languages);
            

            for (var i = 0; i < workExperience.length; i++){
            var work = workExperience[i]
                switch (i) {
                    case 1:
                    wikium();
                    break;
                }
        }
        

        function wikium(){
            workExperience[1].addEventListener("click", function() {
                event.preventDefault();
        
                console.log('Test');
                
                document.getElementById("companyName").innerText = btn[1].textContent || btn[1].innerText;
                document.getElementById("firstRole").innerText = "Telesales Agent"
                document.getElementById("workDate").innerText = "Apr. 2020 - Jul. 2020 (Remote)"
                
                try {
                document.getElementById("secondRole").remove();
                } catch {
                    console.log('No second role to remover');
                }


            
                const dutiesList = Array.from(document.getElementsByClassName("workDuties"))
                
                try{
                dutiesList[1].remove();
                } catch {
                    console.log("No list to remove");
                    
                }

                const duties = Array.from(dutiesList[0].getElementsByTagName('li'));
                console.log('LI,' , duties);
                
                duties[0].innerText = 'Conducted phone calls and provided consultations to clients in the United States interested in Wikium in order to secure a sale (no cold calling)'
                
                if(duties.length > 0){
                for (let i = 1; i < duties.length; i++) {
                    duties[i].remove();
                }
                }

                document.getElementById('infoLink').innerText = 'https://wikium.ru/';
                document.getElementById('infoLink').href = 'https://wikium.ru/';
                // const list = document.createElement('ul');
                // list.className = "workDuties"
                // const li = document.createElement("li");
                // li.className = "duty"
                // li.innerText = "TEST"
                // document.body.append(list);
                // list.appendChild(li);

              });
            }