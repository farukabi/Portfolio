const texts = ["Furkan", "Computer Engineer", "Web Developer", "Mobile Developer"];
        let index = 0;
        let textElement = document.getElementById("changing-text");
        
        function typeWriterEffect() {
            textElement.innerHTML = "";
            let charIndex = 0;
            let currentText = texts[index];
            
            function type() {
                if (charIndex < currentText.length) {
                    textElement.innerHTML += currentText.charAt(charIndex);
                    charIndex++;
                    setTimeout(type, 100);
                } else {
                    setTimeout(() => {
                        index = (index + 1) % texts.length;
                        typeWriterEffect();
                    }, 2000);
                }
            }
            type();
        }
        
        typeWriterEffect();