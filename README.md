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
