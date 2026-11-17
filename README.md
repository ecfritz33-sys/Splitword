# Splitword

A daily word puzzle. The word is shown as a number made by joining each letter's alphabet position (A=1 … Z=26). Players tap between digits to cut the number back into letters.

- **Daily:** one puzzle a day, scored by time and cuts.
- **Rush:** 60 seconds, as many short words as you can.
- **Test settings:** difficulty levers and a test log for playtesting.

## Files
- `index.html` — the playable game (built file; open it in a browser)
- `src/template.html` — the game's code
- `data/words.json` — answer word lists
- `tools/build.py` — rebuilds `index.html` after editing the template or words: `python3 tools/build.py`

## Install and analytics
- `manifest.webmanifest`, `sw.js` and `icons/` make the game installable from the browser and playable offline.
- Analytics use GoatCounter (anonymous counts, no cookies). Set `GC_CODE` in `src/template.html` to your GoatCounter site code and rebuild. Events: `new-player`, `active`, `return-day-1/2/3/7/14/30`, `start-/solve-/reveal-/share-/peek-<level>`, `time-<bucket>-<level>`, `rush-*`, `arrived-from-share`, `installed`, `opened-as-app`.
