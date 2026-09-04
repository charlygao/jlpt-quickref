# Vocabulary frequency ordering notice

The vocabulary ordering in this project uses corpus-based Japanese frequency estimates from **wordfreq** by Robyn Speer.

- Project: https://github.com/rspeer/wordfreq
- Package version used by the build workflow: `wordfreq 3.1.1`
- Frequency function: `zipf_frequency(word, "ja", wordlist="best")`
- This project stores only the resulting frequency scores/order alongside the JLPT vocabulary cards; it does not generate example sentences from wordfreq.

`wordfreq` code is distributed under the Apache License, and its frequency data includes material distributed under Creative Commons Attribution-ShareAlike 4.0 and other attributed sources. See the upstream project for the full source and attribution list.

The transformed frequency ordering in this repository is provided with attribution under compatible share-alike terms. The frequency score is an estimate from mixed corpora, not an official JLPT ranking and not a guarantee of conversational frequency in every context.
