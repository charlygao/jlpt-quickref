# Vocabulary frequency ordering notice

Vocabulary cards are ordered by a reproducible estimate of how commonly each **dictionary entry** is used. The ranking is a study aid, not an official JLPT frequency list.

## Primary signal: entry-level JMdict priority ranking

The main ordering signal is the `freq_rank` table in **Tomoshi Dictionary Open Data**. Tomoshi derives this entry-level rank from JMdict priority markers. Because it is attached to a JMdict entry rather than only to the visible spelling, it is less vulnerable to homographs sharing the same surface form but having different meanings.

Smaller `frequencyRank` values are treated as more common and are shown earlier within the same JLPT level.

## Secondary signal: wordfreq

For entries without an entry-level rank, and as a secondary corpus signal, the build records a Japanese Zipf frequency estimate from **wordfreq** by Robyn Speer.

- Project: https://github.com/rspeer/wordfreq
- Package version used by the build workflow: `wordfreq 3.1.1`
- Function: `zipf_frequency(word, "ja", wordlist="best")`

Surface-form corpus frequency is not used to generate definitions or example sentences. It is only frequency metadata used after the entry-aware rank.

## Important limitations

- JLPT does not publish an official per-word frequency order.
- Frequency varies by conversation, news, workplace, literature, age group, and other domains.
- Higher JLPT levels naturally contain more formal, institutional, academic, and news vocabulary, so their highest-ranked words are not necessarily casual-conversation words.
- A frequency rank should therefore be read as **relative learning priority within that JLPT level**, not a universal statement about every Japanese context.

## Example sentences

Frequency processing **never creates example sentences**. Imported vocabulary records contain no example field. Example sentences are stored separately and appear only when an explicit human-reviewed entry exists in the repository. If no reviewed example exists, the card intentionally shows no example.

See `FULL_VOCAB_NOTICE.md` for dictionary-data attribution and upstream licensing details. See the upstream wordfreq project for its corpus/source attribution and license information.
