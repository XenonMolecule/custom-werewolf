import { Howl, Howler } from 'howler';

function AudioPlayer() {
  const sound = new Howl({
    src: ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'],
    html5: true,
  });

  const playSound = () => {
    sound.play();
  };

  return (
    <div>
      <button onClick={playSound}>Play Sound</button>
    </div>
  );
}

export default AudioPlayer;
