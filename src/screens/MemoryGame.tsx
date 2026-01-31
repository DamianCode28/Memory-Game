import { useEffect, useState } from "react";

const IMAGES = [
  "https://img.icons8.com/color/96/spyro.png",
  "https://img.icons8.com/stickers/100/super-mario.png",
  "https://img.icons8.com/papercut/120/sonic-the-hedgehog-1.png",
  "https://img.icons8.com/color/96/crash-bandicoot.png",
  "https://img.icons8.com/plasticine/100/mortal-kombat.png",
  "https://img.icons8.com/plasticine/100/pacman--v1.png",
  "https://img.icons8.com/3d-fluency/94/play-station.png",
  "https://img.icons8.com/color/96/batman.png",
  "https://img.icons8.com/external-those-icons-lineal-color-those-icons/96/external-bomberman-video-games-those-icons-lineal-color-those-icons.png",
  "https://img.icons8.com/nolan/96/grand-theft-auto-v.png",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

export default function Memotest() {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (selected.length == 2) {
      if (selected[0].split("|")[1] == selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }

      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length == IMAGES.length) {
      alert("You win!");
      location.reload();
    }
  }, [guessed]);

  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr))",
        gap: 24,
      }}
    >
      {IMAGES.map((image) => {
        const [, url] = image.split("|");

        return (
          <li
            key={image}
            style={{
              cursor: "pointer",
              padding: 20,
              border: "3px solid #000000",
              borderRadius: 12,
            }}
            onClick={() =>
              selected.length < 2 &&
              setSelected((selected) => selected.concat(image))
            }
          >
            {selected.includes(image) || guessed.includes(image) ? (
              <img alt="icon" src={url} />
            ) : (
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/color/96/nintendo-switch-pro-controller.png"
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
