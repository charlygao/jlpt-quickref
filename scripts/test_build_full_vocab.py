#!/usr/bin/env python3
import unittest

from build_full_vocab import detailed_pos, pos_label


class DetailedPosTests(unittest.TestCase):
    def test_structured_na_tag_beats_generic_adjective_parent(self):
        tags = [{
            "code": "adj-na",
            "name": "adjectival nouns or quasi-adjectives (keiyodoshi)",
            "category": "adjective (keiyoushi)",
        }]
        self.assertEqual(detailed_pos(tags), "な形容词")

    def test_i_adjective_is_preserved(self):
        self.assertEqual(detailed_pos(["adj-i", "adjective (keiyoushi)"]), "い形容词")

    def test_na_adjective_can_keep_noun_usage(self):
        tags = ["n", "noun (common) (futsuumeishi)", "adj-na"]
        self.assertEqual(detailed_pos(tags), "名词・な形容词")

    def test_suru_noun_can_keep_na_and_adverb_usage(self):
        tags = ["n", "vs", "adj-na", "adv-to", "vt"]
        self.assertEqual(detailed_pos(tags), "名词・サ变・他动词・な形容词・副词")

    def test_intransitive_does_not_imply_transitive(self):
        tags = ["v5r", "vi"]
        self.assertEqual(detailed_pos(tags), "五段动词・自动词")

    def test_pos_label_merges_later_senses(self):
        entry = {
            "senses": [
                {"pos": ["n"]},
                {"pos": ["vs", "vt"]},
                {"pos": ["adj-na"]},
            ]
        }
        self.assertEqual(pos_label(entry), "名词・サ变・他动词・な形容词")

    def test_pos_inheritance_is_respected(self):
        entry = {"senses": [{"pos": ["v5r", "vt"]}, {"glosses": []}]}
        self.assertEqual(pos_label(entry), "五段动词・他动词")


if __name__ == "__main__":
    unittest.main()
