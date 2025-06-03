import React, { useState, useRef, useEffect } from "react";
import styles from "./volume.module.css";

export default function Volume() {
  const [volume, setVolume] = useState(0.5);
  const [volumeIcon, setVolumeIcon] = useState(true);
  const [volumeIconMuted, setVolumeIconMuted] = useState(false);

  const audioRef = useRef(null);

  const changeVolume = () => {
    if (volumeIcon) {
      setVolume(0);
      setVolumeIcon(false);
      setVolumeIconMuted(true);
    } else {
      setVolume(0.5);
      setVolumeIcon(true);
      setVolumeIconMuted(false);
    }
  };

  useEffect(() => {
    if (volume === 0) {
      setVolumeIcon(false);
      setVolumeIconMuted(true);
    } else {
      setVolumeIcon(true);
      setVolumeIconMuted(false);
    }
  }, [volume]);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error(
            "Erro ao tentar reproduzir o áudio automaticamente:",
            error
          );
        });
      }
    };

    // Adiciona os ouvintes
    window.addEventListener("click", handleUserInteraction, { once: true });
    window.addEventListener("touchstart", handleUserInteraction, {
      once: true,
    });

    // Cleanup
    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, [volume]);

  // Sempre que o volume muda, atualiza no áudio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="volume">
      <audio
        ref={audioRef}
        src="/images/negociation/negociation_sound_menu.mp3"
        preload="auto"
        loop
      />

      <div className={styles.volumeControl}>
        {volumeIconMuted && (
          <button onClick={changeVolume}>
            <i class="bx  bxs-volume-mute"></i>
          </button>
        )}

        {volumeIcon && (
          <button onClick={changeVolume}>
            <i className="bx  bxs-volume-full"></i>
          </button>
        )}
        <input
          id="volume"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
        <span>{(volume * 100).toFixed(0)}</span>
      </div>
    </div>
  );
}
