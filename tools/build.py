"""Build index.html from src/template.html and data/words.json."""
from pathlib import Path
root = Path(__file__).resolve().parent.parent
html = (root / "src/template.html").read_text().replace("__WORDS__", (root / "data/words.json").read_text())
(root / "index.html").write_text(html)
print("Built index.html")
