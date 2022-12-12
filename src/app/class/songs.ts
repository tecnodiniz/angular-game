export class Songs {

    battleSong(){
        let audio = new Audio();
        audio.src = "../../assets/audio/battleTheme.mp3"
        audio.load();
        return audio;
      }
      theBraveTheme(){
        let audio = new Audio();
        audio.src = "../../assets/audio/awesomeness.wav"
        audio.load();
        audio.loop = true;
        return audio;

      }


}
