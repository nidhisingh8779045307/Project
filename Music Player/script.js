let progress = document.getElementById("progress");
        let song = document.getElementById("song");
        let ctrlIcon = document.getElementById("ctrlIcon");

        song.onloadedmetadata = function(){
            progress.max = song.duration;
            progress.value = song.currentTime;
        }

        function playPause(){
            if (ctrlIcon.classList.contains("fa-pause")){
                song.pause();
                ctrlIcon.classList.remove("fa-pause");
                ctrlIcon.classList.add("fa-play");
            } else {
                song.play();
                ctrlIcon.classList.add("fa-pause");
                ctrlIcon.classList.remove("fa-play");
            }
        }


        if (song.play()){
            setInterval(()=>{
                progress.value = song.currentTime;
            }, 500);
        }

        progress.onchange = function(){
            song.play();
            song.currentTime = progress.value;
            ctrlIcon.classList.add("fa-pause");
            ctrlIcon.classList.remove("fa-play");
        }
        let isLooping = false;
        const loopButton = document.getElementById("loop-button");

        loopButton.addEventListener("click", () => {
        isLooping = !isLooping;
        if (isLooping) {
        loopButton.classList.add("active");
        } else {
        loopButton.classList.remove("active");
            }
        });

        song.addEventListener("ended", () => {
        if (isLooping) {
        // Restart the song when it ends
        song.currentTime = 0;
        song.play();
        } else {
        // Handle next song logic here
            }
        });



