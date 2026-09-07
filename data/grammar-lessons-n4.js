// Explicitly authored lessons. Edit this file; do not generate examples at runtime.
// The first ID determines this source file; aliases may belong to another level.
window.JLPT_GRAMMAR_LESSONS = window.JLPT_GRAMMAR_LESSONS || [];
window.JLPT_GRAMMAR_LESSONS.push(...[
  {
    "ids": [
      "g-n4-001"
    ],
    "card": {
      "meaning": "补充背景、说明理由，或询问事情缘由。",
      "connection": "普通形＋んです（N・な形现在肯定：なんです）",
      "examples": [
        {
          "jp": "今日は帰ります。頭が痛いんです。",
          "zh": "我今天先回去了，因为头疼。",
          "covers": "い形 + んです"
        },
        {
          "jp": "どこへ行くんですか。",
          "zh": "你这是要去哪儿？",
          "covers": "V普通形 + んですか"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "んです是のです的口语形式，把当前信息与背景联系起来。不是给所有句子增加礼貌的词尾；平铺直叙的事实不一定需要它。",
      "category": "背景说明",
      "register": {
        "label": "日常常用"
      },
      "formation": "普通形＋んです（N・な形现在肯定：なんです）",
      "formationRows": [
        {
          "label": "动词与い形容词",
          "form": "普通形＋んです",
          "derivation": "行くんです；寒いんです"
        },
        {
          "label": "名词与な形容词",
          "form": "N／な形＋なんです",
          "derivation": "休みなんです；好きなんです"
        }
      ],
      "usages": [
        {
          "title": "解释原因",
          "explanation": "对方已知道或能看出某个情况，再说明背景。",
          "examples": [
            {
              "jp": "今日は帰ります。頭が痛いんです。",
              "zh": "我今天先回去了，因为头疼。",
              "focus": "痛いんです",
              "note": "解释为何要回去。",
              "covers": "い形 + んです"
            }
          ]
        },
        {
          "title": "根据线索追问",
          "explanation": "看到对方准备出门，询问情况。",
          "examples": [
            {
              "jp": "どこへ行くんですか。",
              "zh": "你这是要去哪儿？",
              "focus": "行くんですか",
              "note": "比单纯询问目的地多了对当前情形的关注。",
              "covers": "V普通形 + んですか"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "名词前变成なんです",
          "explanation": "です不直接加んです。",
          "examples": [
            {
              "jp": "明日は休みなんです。",
              "zh": "明天我正好休息。",
              "focus": "休みなんです",
              "note": "不说休みですんです；无背景时休みです即可。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-004",
      "gx-n4-1cbyiph"
    ],
    "card": {
      "meaning": "根据样子或当前迹象判断：看起来……；好像要……。",
      "connection": "Vます去ます／い形去い／な形 + そうだ",
      "examples": [
        {
          "jp": "このケーキはおいしそうです。",
          "zh": "这个蛋糕看起来很好吃。",
          "covers": "い形去い + そうです"
        },
        {
          "jp": "雨が降りそうです。",
          "zh": "好像要下雨了。",
          "covers": "Vます去ます + そうです"
        },
        {
          "jp": "この公園は静かそうです。",
          "zh": "这个公园看起来很安静。",
          "covers": "な形 + そうです"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "根据事物的样子或当前掌握的情况，表达自己的印象或预测。形容词后常表示“看起来……”，动词后常表示“好像要……／看来会……”。它与转述消息的「～そうだ（传闻）」接续不同。",
      "category": "样态・预测",
      "register": {
        "label": "日常常用",
        "note": "普通体用「そうだ」，礼貌体用「そうです」。"
      },
      "formation": "动词ます形去ます／い形容词去い／な形容词词干 + そうだ",
      "formationRows": [
        {
          "label": "动词",
          "form": "ます形去ます + そうだ",
          "derivation": "降る → 降ります → 降りそうだ"
        },
        {
          "label": "い形容词",
          "form": "去掉词尾い + そうだ",
          "derivation": "おいしい → おいしそうだ；いい → よさそうだ"
        },
        {
          "label": "な形容词",
          "form": "词干直接 + そうだ（不加な／だ）",
          "derivation": "静か → 静かそうだ"
        }
      ],
      "usages": [
        {
          "title": "根据样子表达印象",
          "explanation": "还没有直接确认味道、感受等，从外观或表现作出判断。",
          "examples": [
            {
              "jp": "このケーキはおいしそうです。",
              "zh": "这个蛋糕看起来很好吃。",
              "focus": "おいしそうです",
              "note": "还没有吃，只是看着觉得好吃。"
            },
            {
              "jp": "写真で見ると、この公園は静かそうです。",
              "zh": "从照片上看，这个公园好像很安静。",
              "focus": "静かそうです",
              "note": "根据照片判断环境；「静か」后不加「な」。"
            }
          ]
        },
        {
          "title": "根据迹象判断即将发生的事",
          "explanation": "当前情况让人觉得某件事很快就要发生，但尚未发生。",
          "examples": [
            {
              "jp": "空が暗くなってきました。雨が降りそうです。",
              "zh": "天空渐渐暗下来了，好像要下雨了。",
              "focus": "降りそうです",
              "note": "阴暗的天空是作出判断的线索。"
            }
          ]
        },
        {
          "title": "根据当前情况预测结果",
          "explanation": "也可以根据已有信息作出自己的预测，不限于眼前即将发生的事。",
          "examples": [
            {
              "jp": "予約が多いので、明日は忙しくなりそうです。",
              "zh": "因为预约很多，看来明天会忙起来。",
              "focus": "忙しくなりそうです",
              "note": "预约情况是判断依据；是在预测，不是在转述别人说的话。"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "样态与传闻：差一个词形，信息来源就变了",
          "explanation": "样态「降りそう」是自己的判断；传闻「降るそう」是转述消息。两种句子都正确。",
          "examples": [
            {
              "jp": "空が暗いですね。雨が降りそうです。",
              "zh": "天空好暗啊，好像要下雨了。",
              "focus": "降りそうです",
              "note": "降ります去ます＋そうです：根据迹象判断。"
            },
            {
              "jp": "天気予報によると、明日は雨が降るそうです。",
              "zh": "据天气预报说，明天会下雨。",
              "focus": "降るそうです",
              "note": "动词普通形＋そうです：转述预报内容。"
            }
          ]
        },
        {
          "title": "な形容词不加な，名词不能直接套用",
          "explanation": "样态接续是「静かそう」，不是「静かなそう」。判断“像学生”时要换用「学生のようだ」等表达。",
          "examples": [
            {
              "jp": "この町は静かなそうです。",
              "zh": "想表达：这个城镇看起来很安静。",
              "focus": "静かなそうです",
              "verdict": "incorrect",
              "note": "应改为「静かそうです」；若说「静かだそうです」，则变成“听说很安静”。"
            },
            {
              "jp": "あの人は学生のようです。",
              "zh": "那个人好像是学生。",
              "focus": "学生のようです",
              "note": "「学生」是名词；这里不用「学生そうです」。"
            }
          ]
        }
      ],
      "specialCases": [
        {
          "title": "可以描述过去看起来怎样",
          "explanation": "把样态表达的句尾变为过去式「そうだった／そうでした」。不要与传闻的“普通形过去＋そうです”混淆。",
          "examples": [
            {
              "jp": "昨日見たケーキは、おいしそうでした。",
              "zh": "昨天看到的蛋糕看起来很好吃。",
              "focus": "おいしそうでした",
              "note": "回顾昨天看到时的印象。"
            },
            {
              "jp": "友達によると、そのケーキはおいしかったそうです。",
              "zh": "据朋友说，那个蛋糕很好吃。",
              "focus": "おいしかったそうです",
              "note": "转述朋友吃过后的评价。"
            }
          ]
        },
        {
          "title": "常见特殊变化与否定",
          "explanation": "「いい」变为「よさそう」；形容词的否定常用「～くなさそう」。动词“不像会发生”可用“ます形去ます＋そうにない”。",
          "examples": [
            {
              "jp": "この辞書はよさそうです。",
              "zh": "这本词典看起来不错。",
              "focus": "よさそうです",
              "note": "いい → よさそう；不用「いそう」。"
            },
            {
              "jp": "この料理は辛くなさそうです。",
              "zh": "这道菜看起来不辣。",
              "focus": "辛くなさそうです",
              "note": "辛い → 辛くない → 辛くなさそう。"
            },
            {
              "jp": "まだ仕事がたくさんあって、今日は早く帰れそうにありません。",
              "zh": "工作还很多，今天看来没法早回去了。",
              "focus": "帰れそうにありません",
              "note": "帰れる → 帰れそうにない：判断“能早回去”的可能性很低。"
            }
          ]
        },
        {
          "title": "修饰名词用そうな，修饰动作用そうに",
          "explanation": "「そうだ」在句中还可以连接名词或描述动作的样子。",
          "examples": [
            {
              "jp": "おいしそうなケーキを買いました。",
              "zh": "买了一个看起来很好吃的蛋糕。",
              "focus": "おいしそうな",
              "note": "「そうな」修饰名词「ケーキ」。"
            },
            {
              "jp": "子供たちが楽しそうに遊んでいます。",
              "zh": "孩子们玩得很开心的样子。",
              "focus": "楽しそうに",
              "note": "「そうに」描述玩耍时表现出的样子。"
            }
          ]
        }
      ],
      "references": [
        {
          "title": "国際交流基金：そうです（様態）",
          "url": "https://www.kyozai.jpf.go.jp/kyozai/material/BTS00094/ja/render.do"
        },
        {
          "title": "国際交流基金：そうだ／ようだ／らしい",
          "url": "https://www.jpf.go.jp/j/project/japanese/teach/tsushin/grammar/201012.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-005",
      "gx-n4-axzupa"
    ],
    "card": {
      "meaning": "转述听到或读到的消息：听说……。",
      "connection": "普通形＋そうだ（N・な形现在肯定保留だ）",
      "examples": [
        {
          "jp": "天気予報によると、明日は雪が降るそうです。",
          "zh": "据天气预报说，明天会下雪。",
          "covers": "V普通形 + そうです"
        },
        {
          "jp": "田中さんのお父さんは医者だそうです。",
          "zh": "听说田中的父亲是医生。",
          "covers": "N だ + そうです"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "普通形＋そうだ标出信息来自他处，常与によると搭配。它不表示亲眼观察后“看起来”；否定或过去通常放在被转述内容里。",
      "category": "传闻",
      "register": {
        "label": "日常常用"
      },
      "formation": "普通形＋そうだ（N・な形现在肯定保留だ）",
      "formationRows": [
        {
          "label": "动词等普通形",
          "form": "来る／来ない／来た＋そうだ",
          "derivation": "明日は来ないそうだ"
        },
        {
          "label": "名词与な形容词",
          "form": "Nだ／な形だ＋そうだ",
          "derivation": "医者だそうだ；元気だそうだ"
        }
      ],
      "usages": [
        {
          "title": "转述预测",
          "explanation": "明确消息来源。",
          "examples": [
            {
              "jp": "天気予報によると、明日は雪が降るそうです。",
              "zh": "据天气预报说，明天会下雪。",
              "focus": "降るそうです",
              "note": "降る是完整的普通形。",
              "covers": "V普通形 + そうです"
            }
          ]
        },
        {
          "title": "转述身份",
          "explanation": "名词判断需保留だ。",
          "examples": [
            {
              "jp": "田中さんのお父さんは医者だそうです。",
              "zh": "听说田中的父亲是医生。",
              "focus": "医者だそうです",
              "note": "不是医者そうです。",
              "covers": "N だ + そうです"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "与样态的接续不同",
          "explanation": "样态看外观，传闻转述消息。",
          "examples": [
            {
              "jp": "雨が降りそうです。",
              "zh": "看样子要下雨了。",
              "focus": "降りそうです",
              "note": "降り＋そう是样态；降るそう是传闻。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-006",
      "gx-n4-uq21qt"
    ],
    "card": {
      "meaning": "根据线索推断；也可表示像……一样。",
      "connection": "V普通形／い形＋ようだ；な形な／Nの＋ようだ",
      "examples": [
        {
          "jp": "電気が消えています。もう寝たようです。",
          "zh": "灯关着，看来已经睡了。",
          "covers": "V普通形 + ようです"
        },
        {
          "jp": "こんな景色が見られるなんて、夢のようです。",
          "zh": "能看到这样的景色，简直像做梦。",
          "covers": "N の + ようです"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ようだ把判断保留为推断，也可作比喻。推断通常有观察到的线索；名词用の、な形容词用な接续。具体是推断还是比喻，要看上下文。",
      "category": "推断・比喻",
      "register": {
        "label": "日常常用"
      },
      "formation": "V普通形／い形＋ようだ；な形な／Nの＋ようだ",
      "formationRows": [
        {
          "label": "动词与い形容词",
          "form": "普通形＋ようだ",
          "derivation": "出かけたようだ；高いようだ"
        },
        {
          "label": "名词与な形容词",
          "form": "の／な＋ようだ",
          "derivation": "夢のようだ；元気なようだ"
        }
      ],
      "usages": [
        {
          "title": "依据迹象判断",
          "explanation": "根据间接证据推测。",
          "examples": [
            {
              "jp": "電気が消えています。もう寝たようです。",
              "zh": "灯关着，看来已经睡了。",
              "focus": "寝たようです",
              "note": "灯灭是推断线索，不能保证真的睡了。",
              "covers": "V普通形 + ようです"
            }
          ]
        },
        {
          "title": "比喻相似",
          "explanation": "把眼前感受比作另一事物。",
          "examples": [
            {
              "jp": "こんな景色が見られるなんて、夢のようです。",
              "zh": "能看到这样的景色，简直像做梦。",
              "focus": "夢のようです",
              "note": "不是判断这真的是梦。",
              "covers": "N の + ようです"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "名词前不要用だ",
          "explanation": "与伝聞そうだ的接续不同。",
          "examples": [
            {
              "jp": "留守のようです。",
              "zh": "好像不在家。",
              "focus": "留守のようです",
              "note": "不用留守だようです。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-007",
      "gx-n4-jbxhv7"
    ],
    "card": {
      "meaning": "口语中表示好像……或像……一样。",
      "connection": "V普通形／い形／な形词干／N＋みたいだ",
      "examples": [
        {
          "jp": "誰も出ませんね。留守みたいです。",
          "zh": "没人应门呢，好像不在家。",
          "covers": "N + みたいです"
        },
        {
          "jp": "この雲は犬みたいです。",
          "zh": "这朵云像一只狗。",
          "covers": "N + みたいです"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "みたいだ可根据线索推断，也可比喻。语义与ようだ相近，但更口语化；名词、な形容词现在肯定直接接みたい，不加の或な。",
      "category": "口语推断・比喻",
      "register": {
        "label": "口语常用"
      },
      "formation": "V普通形／い形／な形词干／N＋みたいだ",
      "formationRows": [
        {
          "label": "直接接续",
          "form": "普通形等＋みたいだ",
          "derivation": "寝たみたい；静かみたい；夢みたい"
        }
      ],
      "usages": [
        {
          "title": "口语推断",
          "explanation": "用观察线索作保留判断。",
          "examples": [
            {
              "jp": "誰も出ませんね。留守みたいです。",
              "zh": "没人应门呢，好像不在家。",
              "focus": "留守みたいです",
              "note": "留守后不加の。",
              "covers": "N + みたいです"
            }
          ]
        },
        {
          "title": "比喻",
          "explanation": "并非真的成为所比喻的事物。",
          "examples": [
            {
              "jp": "この雲は犬みたいです。",
              "zh": "这朵云像一只狗。",
              "focus": "犬みたいです",
              "note": "说形状相似。",
              "covers": "N + みたいです"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "区别見たい",
          "explanation": "みたい是语法表达；見たい是“想看”。",
          "examples": [
            {
              "jp": "その映画を見たいです。",
              "zh": "我想看那部电影。",
              "focus": "見たいです",
              "note": "由見る＋たい构成。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-008",
      "gx-n4-1uro7mp"
    ],
    "card": {
      "meaning": "表示有某种可能：也许……。",
      "connection": "普通形＋かもしれない（N・な形现在肯定去だ）",
      "examples": [
        {
          "jp": "明日は雨が降るかもしれません。",
          "zh": "明天可能会下雨。",
          "covers": "V普通形 + かもしれません"
        },
        {
          "jp": "あの人は新しい先生かもしれません。",
          "zh": "那个人也许是新老师。",
          "covers": "N + かもしれません"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "かもしれない承认一种可能，但不承诺概率高。可以同时承认相反可能；名词和な形容词现在肯定不带だ。",
      "category": "可能性推测",
      "register": {
        "label": "日常常用"
      },
      "formation": "普通形＋かもしれない（N・な形现在肯定去だ）",
      "formationRows": [
        {
          "label": "动词与形容词",
          "form": "来る／高い／静か＋かもしれない",
          "derivation": "来ないかもしれない"
        },
        {
          "label": "名词",
          "form": "N＋かもしれない",
          "derivation": "雨かもしれない"
        }
      ],
      "usages": [
        {
          "title": "不确定的事件",
          "explanation": "未来可能发生。",
          "examples": [
            {
              "jp": "明日は雨が降るかもしれません。",
              "zh": "明天可能会下雨。",
              "focus": "降るかもしれません",
              "note": "并未断言一定下雨。",
              "covers": "V普通形 + かもしれません"
            }
          ]
        },
        {
          "title": "对身份的猜测",
          "explanation": "名词直接接。",
          "examples": [
            {
              "jp": "あの人は新しい先生かもしれません。",
              "zh": "那个人也许是新老师。",
              "focus": "先生かもしれません",
              "note": "不说先生だかもしれません。",
              "covers": "N + かもしれません"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "否定放在内容内",
          "explanation": "“可能不来”是来ない＋かもしれない。",
          "examples": [
            {
              "jp": "彼は今日は来ないかもしれません。",
              "zh": "他今天可能不来。",
              "focus": "来ないかもしれません",
              "note": "不是“他绝对不来”。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-009"
    ],
    "card": {
      "meaning": "把动词变为能做／条件允许做的形式。",
      "connection": "五段う段→え段＋る；一段去る＋られる；する→できる；来る→来られる",
      "examples": [
        {
          "jp": "私は漢字が読めます。",
          "zh": "我能读汉字。",
          "covers": "五段可能形"
        },
        {
          "jp": "この店では夜遅くまで食べられます。",
          "zh": "这家店晚上很晚还可以用餐。",
          "covers": "一段可能形"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "五段动词末尾う段改え段加る；一段去る加られる。する变できる、来る变来られる（こられる）。可能形自身按一段动词活用。",
      "category": "能力・可能",
      "register": {
        "label": "日常常用"
      },
      "formation": "五段う段→え段＋る；一段去る＋られる；する→できる；来る→来られる",
      "formationRows": [
        {
          "label": "五段",
          "form": "う段→え段＋る",
          "derivation": "書く→書ける；買う→買える"
        },
        {
          "label": "一段与不规则",
          "form": "去る＋られる等",
          "derivation": "食べる→食べられる；する→できる；来る→来られる"
        }
      ],
      "usages": [
        {
          "title": "能力",
          "explanation": "说明会做的事情。",
          "examples": [
            {
              "jp": "私は漢字が読めます。",
              "zh": "我能读汉字。",
              "focus": "読めます",
              "note": "読む→読める→読めます。",
              "covers": "五段可能形"
            }
          ]
        },
        {
          "title": "外部条件",
          "explanation": "规定或环境使动作可能。",
          "examples": [
            {
              "jp": "この店では夜遅くまで食べられます。",
              "zh": "这家店晚上很晚还可以用餐。",
              "focus": "食べられます",
              "note": "此处说营业条件，非个人能力。",
              "covers": "一段可能形"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "读める与見える的含义不同",
          "explanation": "可能形常关乎有意进行的动作；見える、聞こえる常说自然感知。",
          "examples": [
            {
              "jp": "ここから海が見えます。",
              "zh": "从这里看得见海。",
              "focus": "見えます",
              "note": "描述景物自然进入视野。"
            }
          ]
        }
      ],
      "specialCases": [
        {
          "title": "口语缩约",
          "explanation": "食べれる、来れる在口语可见；学习标准活用先掌握られる形。",
          "examples": [
            {
              "jp": "明日は来られますか。",
              "zh": "明天能来吗？",
              "focus": "来られますか",
              "note": "来读こ；不是くられます。"
            }
          ]
        }
      ],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-010",
      "gx-n4-1rw5r3o"
    ],
    "card": {
      "meaning": "表示有过某种经历。",
      "connection": "Vた＋ことがある",
      "examples": [
        {
          "jp": "北海道へ行ったことがあります。",
          "zh": "我去过北海道。",
          "covers": "Vた + ことがあります"
        },
        {
          "jp": "一度も飛行機に乗ったことがありません。",
          "zh": "我一次也没坐过飞机。",
          "covers": "Vた + ことがありません"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "た形＋ことがある把过去的事件当作经验，不强调是哪一次。明确叙述昨天做过什么，通常直接用过去式。",
      "category": "经历",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vた＋ことがある",
      "formationRows": [
        {
          "label": "经验肯定与否定",
          "form": "た形＋ことがある／ない",
          "derivation": "行ったことがある；見たことがない"
        }
      ],
      "usages": [
        {
          "title": "人生经历",
          "explanation": "重点是是否有过这种经验。",
          "examples": [
            {
              "jp": "北海道へ行ったことがあります。",
              "zh": "我去过北海道。",
              "focus": "行ったことがあります",
              "note": "不交代具体哪次旅行。",
              "covers": "Vた + ことがあります"
            }
          ]
        },
        {
          "title": "没有经历",
          "explanation": "た形不变，否定在ある上。",
          "examples": [
            {
              "jp": "一度も飛行機に乗ったことがありません。",
              "zh": "我一次也没坐过飞机。",
              "focus": "乗ったことがありません",
              "note": "一度も加强全面否定。",
              "covers": "Vた + ことがありません"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "具体一次事件直接叙述",
          "explanation": "已明确时间的单次事件通常不用经验句式。",
          "examples": [
            {
              "jp": "昨日、映画を見ました。",
              "zh": "昨天看了电影。",
              "focus": "見ました",
              "note": "直接讲昨天做的事。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-011",
      "gx-n4-1vvi6d7"
    ],
    "card": {
      "meaning": "举出若干动作或状态作为例子。",
      "connection": "Vた＋り、Vた＋りする；形容词过去普通形＋りする",
      "examples": [
        {
          "jp": "日曜日は本を読んだり、映画を見たりします。",
          "zh": "星期天读读书、看看电影等。",
          "covers": "Vた り Vた りする"
        },
        {
          "jp": "最近は暑かったり寒かったりします。",
          "zh": "最近时热时冷。",
          "covers": "い形去い＋かったり い形去い＋かったりする"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "たり列举代表项，通常不声称列完，也不规定先后。末尾する承担时态与礼貌；只有一项たり也可以成立。",
      "category": "举例・交替",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vた＋り、Vた＋りする；形容词过去普通形＋りする",
      "formationRows": [
        {
          "label": "动词列举",
          "form": "た形＋り",
          "derivation": "読む→読んだり；する→したり"
        },
        {
          "label": "状态交替",
          "form": "過去普通形＋り",
          "derivation": "暑かったり寒かったりする"
        }
      ],
      "usages": [
        {
          "title": "举例活动",
          "explanation": "只列休息日活动的一部分。",
          "examples": [
            {
              "jp": "日曜日は本を読んだり、映画を見たりします。",
              "zh": "星期天读读书、看看电影等。",
              "focus": "読んだり、映画を見たりします",
              "note": "没有限定先读书再看电影。",
              "covers": "Vた り Vた りする"
            }
          ]
        },
        {
          "title": "状态来回变化",
          "explanation": "可以描述互相交替的状态。",
          "examples": [
            {
              "jp": "最近は暑かったり寒かったりします。",
              "zh": "最近时热时冷。",
              "focus": "暑かったり寒かったりします",
              "note": "不是同时又热又冷。",
              "covers": "い形去い＋かったり い形去い＋かったりする"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "整句时态由句尾体现",
          "explanation": "たり来自た形，但不自动表示过去。",
          "examples": [
            {
              "jp": "昨日は掃除をしたり、洗濯をしたりしました。",
              "zh": "昨天打扫、洗衣服等。",
              "focus": "したりしました",
              "note": "しました表过去。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-012"
    ],
    "card": {
      "meaning": "同一主体一边做A，一边做B。",
      "connection": "Vます去ます＋ながら",
      "examples": [
        {
          "jp": "音楽を聞きながら勉強します。",
          "zh": "一边听音乐一边学习。",
          "covers": "Vます去ます + ながら"
        },
        {
          "jp": "二人は歩きながら話しました。",
          "zh": "两人边走边聊。",
          "covers": "Vます去ます + ながら"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ながら前是伴随动作，后面通常是主要动作。两项需要在同一时段由同一主体进行；高阶的逆接ながら另有接续与意义。",
      "category": "同时进行",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vます去ます＋ながら",
      "formationRows": [
        {
          "label": "同时进行",
          "form": "ます去ます＋ながら",
          "derivation": "聞く→聞きながら"
        }
      ],
      "usages": [
        {
          "title": "背景动作伴随主要动作",
          "explanation": "学习是主要动作。",
          "examples": [
            {
              "jp": "音楽を聞きながら勉強します。",
              "zh": "一边听音乐一边学习。",
              "focus": "聞きながら",
              "note": "听与学是同一个人做。",
              "covers": "Vます去ます + ながら"
            }
          ]
        },
        {
          "title": "进行中的伴随",
          "explanation": "两动作时间重叠。",
          "examples": [
            {
              "jp": "二人は歩きながら話しました。",
              "zh": "两人边走边聊。",
              "focus": "歩きながら",
              "note": "边走边做主要动作“聊”。",
              "covers": "Vます去ます + ながら"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不同主体用其他连接",
          "explanation": "两个不同的人各做一件事不宜套本用法。",
          "examples": [
            {
              "jp": "母が料理をしている間、私は宿題をしました。",
              "zh": "妈妈做饭时，我做了作业。",
              "focus": "料理をしている間",
              "note": "用間连接两个主体的活动。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-013",
      "gx-n4-1h2cra1"
    ],
    "card": {
      "meaning": "列举理由或特点，常暗示还有其他原因。",
      "connection": "普通形＋し（N・な形现在肯定保留だ）；礼貌形＋し",
      "examples": [
        {
          "jp": "この店は安いし、おいしいし、よく来ます。",
          "zh": "这家店又便宜又好吃，所以我常来。",
          "covers": "い形 + し"
        },
        {
          "jp": "明日は休みだし、少し遠くへ行こう。",
          "zh": "明天也休息，我们去远一点的地方吧。",
          "covers": "N だ + し"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "し前接完整普通形，也可接礼貌形。与单纯并列不同，常用来累计理由，支持后面的评价或决定；只有一个し也自然。",
      "category": "理由列举",
      "register": {
        "label": "日常常用"
      },
      "formation": "普通形＋し（N・な形现在肯定保留だ）；礼貌形＋し",
      "formationRows": [
        {
          "label": "普通体理由",
          "form": "安いし／便利だし／学生だし",
          "derivation": "N・な形不能直接去だ"
        },
        {
          "label": "礼貌体",
          "form": "ですし／ますし",
          "derivation": "便利ですし"
        }
      ],
      "usages": [
        {
          "title": "累积理由",
          "explanation": "两个优点共同支持选择。",
          "examples": [
            {
              "jp": "この店は安いし、おいしいし、よく来ます。",
              "zh": "这家店又便宜又好吃，所以我常来。",
              "focus": "安いし、おいしいし",
              "note": "暗示理由不限这两项。",
              "covers": "い形 + し"
            }
          ]
        },
        {
          "title": "单项理由",
          "explanation": "一个し也带有“而且还有”的余味。",
          "examples": [
            {
              "jp": "明日は休みだし、少し遠くへ行こう。",
              "zh": "明天也休息，我们去远一点的地方吧。",
              "focus": "休みだし",
              "note": "休み后保留だ。",
              "covers": "N だ + し"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "な形容词接だし",
          "explanation": "し前是完整判断，不是连体形。",
          "examples": [
            {
              "jp": "この町は静かだし、交通も便利です。",
              "zh": "这个镇子很安静，交通也方便。",
              "focus": "静かだし",
              "note": "不是静かなし。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-014"
    ],
    "card": {
      "meaning": "说明原因或理由：因为……。",
      "connection": "普通形＋ので（N・な形现在肯定：なので）",
      "examples": [
        {
          "jp": "雨が降っているので、タクシーで帰ります。",
          "zh": "因为正在下雨，所以坐出租车回去。",
          "covers": "V普通形 + ので"
        },
        {
          "jp": "道が分からないので、教えていただけますか。",
          "zh": "因为不认识路，能请您告诉我吗？",
          "covers": "Vない + ので"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ので把前项作为后项的背景原因，通常比から更偏向说明情况，但并不自动变得礼貌。名词和な形容词现在肯定用なので，也可接です・ます形。",
      "category": "原因・理由",
      "register": {
        "label": "日常常用"
      },
      "formation": "普通形＋ので（N・な形现在肯定：なので）",
      "formationRows": [
        {
          "label": "普通形",
          "form": "降る／寒い＋ので",
          "derivation": "雨が降るので"
        },
        {
          "label": "名词与な形容词",
          "form": "N／な形＋なので",
          "derivation": "雨なので；静かなので"
        }
      ],
      "usages": [
        {
          "title": "说明决定的原因",
          "explanation": "用客观情况解释安排。",
          "examples": [
            {
              "jp": "雨が降っているので、タクシーで帰ります。",
              "zh": "因为正在下雨，所以坐出租车回去。",
              "focus": "降っているので",
              "note": "正在下雨是决定的背景。",
              "covers": "V普通形 + ので"
            }
          ]
        },
        {
          "title": "解释请求",
          "explanation": "礼貌请求前先说明情况。",
          "examples": [
            {
              "jp": "道が分からないので、教えていただけますか。",
              "zh": "因为不认识路，能请您告诉我吗？",
              "focus": "分からないので",
              "note": "ので可以用于请求前的理由说明。",
              "covers": "Vない + ので"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不是名词＋だので",
          "explanation": "名词现在肯定用な连接。",
          "examples": [
            {
              "jp": "明日は休みなので、家にいます。",
              "zh": "因为明天休息，所以待在家。",
              "focus": "休みなので",
              "note": "不说休みだので。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-015"
    ],
    "card": {
      "meaning": "表示结果违背预期：明明……却……。",
      "connection": "普通形＋のに（N・な形现在肯定：なのに）",
      "examples": [
        {
          "jp": "一生懸命勉強したのに、試験に落ちました。",
          "zh": "明明努力学了，却没考过。",
          "covers": "V普通形 + のに"
        },
        {
          "jp": "日曜日なのに、会社へ行かなければなりません。",
          "zh": "明明是星期天，却还得去公司。",
          "covers": "N なのに"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "のに指出按前项本应有另一种结果，却出现实际后项，常含意外或不满。与单纯转折が相比，更强调落差。",
      "category": "逆预期转折",
      "register": {
        "label": "日常常用"
      },
      "formation": "普通形＋のに（N・な形现在肯定：なのに）",
      "formationRows": [
        {
          "label": "动词与い形容词",
          "form": "普通形＋のに",
          "derivation": "勉強したのに；高いのに"
        },
        {
          "label": "名词与な形容词",
          "form": "N／な形＋なのに",
          "derivation": "日曜日なのに；静かなのに"
        }
      ],
      "usages": [
        {
          "title": "努力未有预期结果",
          "explanation": "后项让说话人感到失望。",
          "examples": [
            {
              "jp": "一生懸命勉強したのに、試験に落ちました。",
              "zh": "明明努力学了，却没考过。",
              "focus": "勉強したのに",
              "note": "努力与失败形成落差。",
              "covers": "V普通形 + のに"
            }
          ]
        },
        {
          "title": "情况出乎意料",
          "explanation": "预期假日人应当少或无需工作等，由语境决定。",
          "examples": [
            {
              "jp": "日曜日なのに、会社へ行かなければなりません。",
              "zh": "明明是星期天，却还得去公司。",
              "focus": "日曜日なのに",
              "note": "星期天与上班要求不合预期。",
              "covers": "N なのに"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "普通建议不套这种落差",
          "explanation": "直接条件建议用たら等。",
          "examples": [
            {
              "jp": "寒かったら、窓を閉めてください。",
              "zh": "如果冷，请关窗。",
              "focus": "寒かったら",
              "note": "没有“明明冷却……”的逆预期关系。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-016"
    ],
    "card": {
      "meaning": "表示即使……也……，或实际虽然……仍……。",
      "connection": "Vて＋も；い形去い＋くても；な形／N＋でも",
      "examples": [
        {
          "jp": "雨が降っても、試合は行われます。",
          "zh": "即使下雨，比赛也会举行。",
          "covers": "Vて + も"
        },
        {
          "jp": "予約しなくても入れます。",
          "zh": "不预约也能进去。",
          "covers": "Vなくても"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ても说明前项不能改变后项。既可是假设让步，也可是已经成立的事实；名词与な形容词用でも，い形容词用くても。",
      "category": "让步条件",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vて＋も；い形去い＋くても；な形／N＋でも",
      "formationRows": [
        {
          "label": "动词",
          "form": "て形＋も",
          "derivation": "降る→降っても；読む→読んでも"
        },
        {
          "label": "形容词与名词",
          "form": "くても／でも",
          "derivation": "高くても；静かでも；雨でも"
        }
      ],
      "usages": [
        {
          "title": "假设让步",
          "explanation": "即便条件出现，决定仍不变。",
          "examples": [
            {
              "jp": "雨が降っても、試合は行われます。",
              "zh": "即使下雨，比赛也会举行。",
              "focus": "降っても",
              "note": "下雨不改变安排。",
              "covers": "Vて + も"
            }
          ]
        },
        {
          "title": "否定让步",
          "explanation": "前项不发生也不影响后项。",
          "examples": [
            {
              "jp": "予約しなくても入れます。",
              "zh": "不预约也能进去。",
              "focus": "予約しなくても",
              "note": "不是禁止预约。",
              "covers": "Vなくても"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "ても不等于普通如果",
          "explanation": "仅说明某条件下的选择时用たら等。",
          "examples": [
            {
              "jp": "雨が降ったら、家にいます。",
              "zh": "如果下雨，就待在家。",
              "focus": "降ったら",
              "note": "此处下雨会决定行动。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-017"
    ],
    "card": {
      "meaning": "表示如果……，或完成前项之后……。",
      "connection": "普通形过去＋ら",
      "examples": [
        {
          "jp": "明日晴れたら、公園へ行きましょう。",
          "zh": "明天晴天的话，去公园吧。",
          "covers": "Vた + ら"
        },
        {
          "jp": "家に着いたら、電話してください。",
          "zh": "到家后请给我打电话。",
          "covers": "Vた + ら"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "普通形过去＋ら构成。可用于假设、动作完成后的安排，也可叙述做了前项后发现某事。过去形式是构造的一部分，不代表整句一定过去。",
      "category": "条件・发现",
      "register": {
        "label": "日常常用"
      },
      "formation": "普通形过去＋ら",
      "formationRows": [
        {
          "label": "动词与い形容词",
          "form": "たら／かったら",
          "derivation": "着く→着いたら；安い→安かったら"
        },
        {
          "label": "名词与な形容词",
          "form": "だったら",
          "derivation": "休みだったら；暇だったら"
        },
        {
          "label": "否定",
          "form": "なかったら",
          "derivation": "行かなかったら"
        }
      ],
      "usages": [
        {
          "title": "假设条件",
          "explanation": "条件成立才执行后项。",
          "examples": [
            {
              "jp": "明日晴れたら、公園へ行きましょう。",
              "zh": "明天晴天的话，去公园吧。",
              "focus": "晴れたら",
              "note": "可以接邀请、请求等意志表达。",
              "covers": "Vた + ら"
            }
          ]
        },
        {
          "title": "完成后再做",
          "explanation": "前项完成是后项的时间起点。",
          "examples": [
            {
              "jp": "家に着いたら、電話してください。",
              "zh": "到家后请给我打电话。",
              "focus": "着いたら",
              "note": "要求到家以后打。",
              "covers": "Vた + ら"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不能只按汉语“如果”理解",
          "explanation": "过去叙述也可表示意外发现。",
          "examples": [
            {
              "jp": "窓を開けたら、雪が降っていました。",
              "zh": "打开窗户一看，外面在下雪。",
              "focus": "開けたら",
              "note": "实际发生过，并非假设。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-018"
    ],
    "card": {
      "meaning": "表示一旦……就自然／通常会……。",
      "connection": "V普通形非过去／い形／な形だ／Nだ＋と",
      "examples": [
        {
          "jp": "このボタンを押すと、ドアが開きます。",
          "zh": "按这个按钮，门就会打开。",
          "covers": "V辞书形 + と"
        },
        {
          "jp": "この道を歩くと、いつも先生に会います。",
          "zh": "走这条路时，总会遇到老师。",
          "covers": "V辞书形 + と"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "条件と常连接规律、设备反应、习惯结果，也可叙述一做前项便发现后项。条件用法通常不直接接说话人的命令、请求或临时意志。",
      "category": "规律条件",
      "register": {
        "label": "日常常用"
      },
      "formation": "V普通形非过去／い形／な形だ／Nだ＋と",
      "formationRows": [
        {
          "label": "肯定与否定条件",
          "form": "押すと／押さないと",
          "derivation": "動かないと困る"
        },
        {
          "label": "状态判断",
          "form": "高いと／静かだと／雨だと",
          "derivation": "名词与な形容词保留だ"
        }
      ],
      "usages": [
        {
          "title": "必然或设备反应",
          "explanation": "结果通常自动出现。",
          "examples": [
            {
              "jp": "このボタンを押すと、ドアが開きます。",
              "zh": "按这个按钮，门就会打开。",
              "focus": "押すと",
              "note": "解释装置的反应。",
              "covers": "V辞书形 + と"
            }
          ]
        },
        {
          "title": "习惯性结果",
          "explanation": "经常在该条件下发生。",
          "examples": [
            {
              "jp": "この道を歩くと、いつも先生に会います。",
              "zh": "走这条路时，总会遇到老师。",
              "focus": "歩くと",
              "note": "いつも明确反复情形。",
              "covers": "V辞书形 + と"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "请求通常换たら",
          "explanation": "临时请人行动不属于自然结果。",
          "examples": [
            {
              "jp": "駅に着いたら、電話してください。",
              "zh": "到车站后请给我打电话。",
              "focus": "着いたら",
              "note": "不把着くと、電話してください作为条件请求模式。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-019"
    ],
    "card": {
      "meaning": "以已提及或假定的情况为前提，提出判断、建议。",
      "connection": "V普通形／い形＋なら；な形词干／N＋なら",
      "examples": [
        {
          "jp": "京都へ行くなら、早めにホテルを予約したほうがいいです。",
          "zh": "如果要去京都，最好早点订酒店。",
          "covers": "V普通形 + なら"
        },
        {
          "jp": "日本料理なら、この店がおすすめです。",
          "zh": "说到日本料理，推荐这家店。",
          "covers": "N + なら"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "なら常承接对方的信息，相当于“既然你说……／如果是……”。后项可发生在前项之前，区别于要求先完成前项的たら。",
      "category": "前提条件",
      "register": {
        "label": "日常常用"
      },
      "formation": "V普通形／い形＋なら；な形词干／N＋なら",
      "formationRows": [
        {
          "label": "动词与状态",
          "form": "行くなら；高いなら",
          "derivation": "名词、な形容词现在肯定不加だ"
        },
        {
          "label": "主题前提",
          "form": "Nなら",
          "derivation": "京都なら；静かなら"
        }
      ],
      "usages": [
        {
          "title": "根据计划给建议",
          "explanation": "建议可在所说行动之前完成。",
          "examples": [
            {
              "jp": "京都へ行くなら、早めにホテルを予約したほうがいいです。",
              "zh": "如果要去京都，最好早点订酒店。",
              "focus": "行くなら",
              "note": "订酒店早于去京都。",
              "covers": "V普通形 + なら"
            }
          ]
        },
        {
          "title": "限定话题",
          "explanation": "针对对方提出的类别作回答。",
          "examples": [
            {
              "jp": "日本料理なら、この店がおすすめです。",
              "zh": "说到日本料理，推荐这家店。",
              "focus": "日本料理なら",
              "note": "把建议限定在日本料理这个前提下。",
              "covers": "N + なら"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不表达普通的自动触发",
          "explanation": "机器反应用と更合适。",
          "examples": [
            {
              "jp": "ここを押すと、電気がつきます。",
              "zh": "按这里，灯就亮。",
              "focus": "押すと",
              "note": "是在说明固定操作结果。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-020",
      "gx-n4-1gfr88v"
    ],
    "card": {
      "meaning": "表示必须做某事。",
      "connection": "Vない去い＋ければならない",
      "examples": [
        {
          "jp": "明日までに書類を出さなければなりません。",
          "zh": "必须在明天之前提交材料。",
          "covers": "Vなければなりません"
        },
        {
          "jp": "もう遅いので、帰らなければなりません。",
          "zh": "已经很晚了，必须回去了。",
          "covers": "Vなければなりません"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "字面是“不做就不行”，整体肯定行动义务。动词ない形去い接ければならない；礼貌形为なければなりません。",
      "category": "义务",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vない去い＋ければならない",
      "formationRows": [
        {
          "label": "义务",
          "form": "ない→なければならない",
          "derivation": "行かない→行かなければならない；する→しなければならない"
        }
      ],
      "usages": [
        {
          "title": "外在规定",
          "explanation": "说明制度或要求。",
          "examples": [
            {
              "jp": "明日までに書類を出さなければなりません。",
              "zh": "必须在明天之前提交材料。",
              "focus": "出さなければなりません",
              "note": "最终意思是需要提交。",
              "covers": "Vなければなりません"
            }
          ]
        },
        {
          "title": "现实需要",
          "explanation": "不一定来自法律或规则。",
          "examples": [
            {
              "jp": "もう遅いので、帰らなければなりません。",
              "zh": "已经很晚了，必须回去了。",
              "focus": "帰らなければなりません",
              "note": "当前情况使回去成为必要。",
              "covers": "Vなければなりません"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "别与不必混淆",
          "explanation": "なくてもいい表达没有必要。",
          "examples": [
            {
              "jp": "今日は来なくてもいいです。",
              "zh": "今天不来也可以。",
              "focus": "来なくてもいいです",
              "note": "不要求来，也不禁止来。"
            }
          ]
        }
      ],
      "specialCases": [
        {
          "title": "口语省略",
          "explanation": "熟人间常用なきゃ，句末省略后半仍含义务。",
          "examples": [
            {
              "jp": "もう帰らなきゃ。",
              "zh": "我得回去了。",
              "focus": "帰らなきゃ",
              "note": "较随意，正式书写用完整形式。"
            }
          ]
        }
      ],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-021",
      "gx-n4-1lo6ncy"
    ],
    "card": {
      "meaning": "表示不做也可以，没有必要做。",
      "connection": "Vない去い＋くてもいい",
      "examples": [
        {
          "jp": "名前は書かなくてもいいです。",
          "zh": "姓名不写也可以。",
          "covers": "Vなくてもいい"
        },
        {
          "jp": "明日は来なくてもいいですか。",
          "zh": "明天不来也可以吗？",
          "covers": "Vなくてもいいですか"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "なくてもいい取消义务，不是禁止。如果要说“不许做”，应用てはいけない等。いい可改为かまわない，表达允许不做。",
      "category": "无需・许可",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vない去い＋くてもいい",
      "formationRows": [
        {
          "label": "不必",
          "form": "ない→なくてもいい",
          "derivation": "行かない→行かなくてもいい"
        }
      ],
      "usages": [
        {
          "title": "免除某项要求",
          "explanation": "行动可以省略。",
          "examples": [
            {
              "jp": "名前は書かなくてもいいです。",
              "zh": "姓名不写也可以。",
              "focus": "書かなくてもいいです",
              "note": "想写通常也可以。",
              "covers": "Vなくてもいい"
            }
          ]
        },
        {
          "title": "询问是否可不做",
          "explanation": "征求免做的许可。",
          "examples": [
            {
              "jp": "明日は来なくてもいいですか。",
              "zh": "明天不来也可以吗？",
              "focus": "来なくてもいいですか",
              "note": "问的是能否免于到场。",
              "covers": "Vなくてもいいですか"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "禁止用てはいけない",
          "explanation": "无义务与不允许不同。",
          "examples": [
            {
              "jp": "ここに名前を書いてはいけません。",
              "zh": "不能在这里写姓名。",
              "focus": "書いてはいけません",
              "note": "明确不允许写。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-022",
      "gx-n4-1tnhlhg"
    ],
    "card": {
      "meaning": "提出建议：最好做／最好别做……。",
      "connection": "Vた＋ほうがいい；Vない＋ほうがいい",
      "examples": [
        {
          "jp": "熱があるなら、休んだほうがいいです。",
          "zh": "如果发烧，最好休息。",
          "covers": "Vた + ほうがいい"
        },
        {
          "jp": "今日は無理をしないほうがいいです。",
          "zh": "今天最好别勉强。",
          "covers": "Vない + ほうがいい"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "具体劝告常用た形＋ほうがいい，否定建议用ない形＋ほうがいい。た形在这里不表示已经做过；语气仍可能较强，不宜处处当礼貌请求。",
      "category": "建议",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vた＋ほうがいい；Vない＋ほうがいい",
      "formationRows": [
        {
          "label": "肯定建议",
          "form": "た形＋ほうがいい",
          "derivation": "休む→休んだほうがいい"
        },
        {
          "label": "否定建议",
          "form": "ない形＋ほうがいい",
          "derivation": "無理しないほうがいい"
        }
      ],
      "usages": [
        {
          "title": "劝对方采取行动",
          "explanation": "给出针对当前情况的建议。",
          "examples": [
            {
              "jp": "熱があるなら、休んだほうがいいです。",
              "zh": "如果发烧，最好休息。",
              "focus": "休んだほうがいいです",
              "note": "建议现在或之后休息。",
              "covers": "Vた + ほうがいい"
            }
          ]
        },
        {
          "title": "劝避免行动",
          "explanation": "否定直接放在ほう前。",
          "examples": [
            {
              "jp": "今日は無理をしないほうがいいです。",
              "zh": "今天最好别勉强。",
              "focus": "しないほうがいいです",
              "note": "不是しなかったほうがいい。",
              "covers": "Vない + ほうがいい"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "与一般选择比较区别",
          "explanation": "辞书形＋ほうがいい也可比较方法。",
          "examples": [
            {
              "jp": "ここからは歩くほうがいいと思います。",
              "zh": "我觉得从这里走路更合适。",
              "focus": "歩くほうがいい",
              "note": "侧重在交通方式间作选择。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-023",
      "gx-n4-inhc57"
    ],
    "card": {
      "meaning": "表示动作或程度超过合适限度：太……。",
      "connection": "Vます去ます／い形去い／な形词干＋すぎる",
      "examples": [
        {
          "jp": "昨日は食べすぎて、お腹が痛くなりました。",
          "zh": "昨天吃多了，肚子疼了起来。",
          "covers": "Vます去ます + すぎる"
        },
        {
          "jp": "この靴は大きすぎます。",
          "zh": "这双鞋太大了。",
          "covers": "い形去い + すぎる"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "すぎる接动词ます词干、い形容词去い部分、な形容词词干。常含过量造成问题的评价；活用的是すぎる本身。",
      "category": "过度",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vます去ます／い形去い／な形词干＋すぎる",
      "formationRows": [
        {
          "label": "动作过量",
          "form": "ます去ます＋すぎる",
          "derivation": "食べる→食べすぎる"
        },
        {
          "label": "程度过高",
          "form": "词干＋すぎる",
          "derivation": "高い→高すぎる；静か→静かすぎる；いい→よすぎる"
        }
      ],
      "usages": [
        {
          "title": "做得过量",
          "explanation": "超过合适的数量或次数。",
          "examples": [
            {
              "jp": "昨日は食べすぎて、お腹が痛くなりました。",
              "zh": "昨天吃多了，肚子疼了起来。",
              "focus": "食べすぎて",
              "note": "食べすぎる再变て形。",
              "covers": "Vます去ます + すぎる"
            }
          ]
        },
        {
          "title": "程度不合适",
          "explanation": "即便是好性质也可能过头。",
          "examples": [
            {
              "jp": "この靴は大きすぎます。",
              "zh": "这双鞋太大了。",
              "focus": "大きすぎます",
              "note": "大きい去い；暗示不合脚。",
              "covers": "い形去い + すぎる"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "いい的词干用よ",
          "explanation": "不按表面形式写いすぎる。",
          "examples": [
            {
              "jp": "条件がよすぎて、少し心配です。",
              "zh": "条件好得过头，反而有点担心。",
              "focus": "よすぎて",
              "note": "いい以よい为活用基础。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-024"
    ],
    "card": {
      "meaning": "表示容易／难以进行某个动作，或容易发生某种变化。",
      "connection": "Vます去ます＋やすい／にくい",
      "examples": [
        {
          "jp": "この本は字が大きくて、読みやすいです。",
          "zh": "这本书字大，容易阅读。",
          "covers": "Vます去ます + やすい"
        },
        {
          "jp": "このコップは割れにくいです。",
          "zh": "这个杯子不容易碎。",
          "covers": "Vます去ます + にくい"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ます词干＋やすい・にくい后按い形容词活用。既可评价使用难度，也可描述物品的性质；にくい不等于完全不可能。",
      "category": "难易・倾向",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vます去ます＋やすい／にくい",
      "formationRows": [
        {
          "label": "难易",
          "form": "ます去ます＋やすい／にくい",
          "derivation": "読む→読みやすい；割れる→割れにくい"
        }
      ],
      "usages": [
        {
          "title": "操作或理解难易",
          "explanation": "使用者容易完成动作。",
          "examples": [
            {
              "jp": "この本は字が大きくて、読みやすいです。",
              "zh": "这本书字大，容易阅读。",
              "focus": "読みやすいです",
              "note": "说明阅读负担小。",
              "covers": "Vます去ます + やすい"
            }
          ]
        },
        {
          "title": "性质上的不易发生",
          "explanation": "不一定有人主动做动作。",
          "examples": [
            {
              "jp": "このコップは割れにくいです。",
              "zh": "这个杯子不容易碎。",
              "focus": "割れにくいです",
              "note": "不是保证永远不碎。",
              "covers": "Vます去ます + にくい"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "否定和过去按い形容词变化",
          "explanation": "接续后整体是形容词。",
          "examples": [
            {
              "jp": "前の説明は分かりにくかったです。",
              "zh": "之前的说明很难懂。",
              "focus": "分かりにくかったです",
              "note": "にくい→にくかった。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-025",
      "gx-n4-1txwdhb"
    ],
    "card": {
      "meaning": "尝试做某事，看看结果如何。",
      "connection": "Vて＋みる",
      "examples": [
        {
          "jp": "この服を着てみてもいいですか。",
          "zh": "可以试穿这件衣服吗？",
          "covers": "Vて + みる"
        },
        {
          "jp": "何度か電話してみましたが、誰も出ませんでした。",
          "zh": "试着打了几次电话，但没人接。",
          "covers": "Vて + みました"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "てみる强调通过实际行动获得体验或确认。后面的みる是辅助动词，不表示用眼睛看；过去式表示尝试确实进行过，但不保证成功。",
      "category": "尝试",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vて＋みる",
      "formationRows": [
        {
          "label": "尝试",
          "form": "て形＋みる",
          "derivation": "着る→着てみる；飲む→飲んでみる"
        }
      ],
      "usages": [
        {
          "title": "亲自体验",
          "explanation": "通过做来判断是否合适。",
          "examples": [
            {
              "jp": "この服を着てみてもいいですか。",
              "zh": "可以试穿这件衣服吗？",
              "focus": "着てみてもいいですか",
              "note": "试穿是实际穿上看看。",
              "covers": "Vて + みる"
            }
          ]
        },
        {
          "title": "试一种办法",
          "explanation": "尝试了但未必得到期望结果。",
          "examples": [
            {
              "jp": "何度か電話してみましたが、誰も出ませんでした。",
              "zh": "试着打了几次电话，但没人接。",
              "focus": "電話してみました",
              "note": "尝试已发生，结果未如愿。",
              "covers": "Vて + みました"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "区别正要尝试的ようとする",
          "explanation": "ようとした可只到准备阶段。",
          "examples": [
            {
              "jp": "電話しようとしたとき、電池が切れました。",
              "zh": "正要打电话时，电池没电了。",
              "focus": "電話しようとした",
              "note": "这里并没有成功开始通话。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-026",
      "gx-n4-1k4b94m"
    ],
    "card": {
      "meaning": "事先做准备，或有意保持某种状态。",
      "connection": "Vて＋おく",
      "examples": [
        {
          "jp": "旅行の前に、ホテルを予約しておきます。",
          "zh": "旅行前先把酒店订好。",
          "covers": "Vて + おく"
        },
        {
          "jp": "暑いので、窓を開けておいてください。",
          "zh": "很热，请让窗户开着。",
          "covers": "Vて + おいてください"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ておく可表示为之后预先安排，也可表示做完后让状态保持下去。重点是后续需要，不只是动作发生在过去。",
      "category": "准备・保持",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vて＋おく",
      "formationRows": [
        {
          "label": "准备与保持",
          "form": "て形＋おく",
          "derivation": "予約しておく；開けておく"
        },
        {
          "label": "否定准备",
          "form": "ないでおく",
          "derivation": "今は言わないでおく"
        }
      ],
      "usages": [
        {
          "title": "提前准备",
          "explanation": "为了将来的活动先做。",
          "examples": [
            {
              "jp": "旅行の前に、ホテルを予約しておきます。",
              "zh": "旅行前先把酒店订好。",
              "focus": "予約しておきます",
              "note": "为旅行预先安排。",
              "covers": "Vて + おく"
            }
          ]
        },
        {
          "title": "保持状态",
          "explanation": "希望动作后的状态继续。",
          "examples": [
            {
              "jp": "暑いので、窓を開けておいてください。",
              "zh": "很热，请让窗户开着。",
              "focus": "開けておいてください",
              "note": "不只是开一下，还要保持打开。",
              "covers": "Vて + おいてください"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不是每个过去动作都用ておく",
          "explanation": "缺少准备或保持意图时，单纯过去式即可。",
          "examples": [
            {
              "jp": "昨日、友達に会いました。",
              "zh": "昨天见了朋友。",
              "focus": "会いました",
              "note": "只叙述事件，没有预先安排的含义。"
            }
          ]
        }
      ],
      "specialCases": [
        {
          "title": "口语缩约",
          "explanation": "ておく常缩为とく，でおく可缩为どく。",
          "examples": [
            {
              "jp": "資料は読んどきます。",
              "zh": "资料我会事先读一下。",
              "focus": "読んどきます",
              "note": "口语，完整形式为読んでおきます。"
            }
          ]
        }
      ],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-027",
      "gx-n4-1p254l6"
    ],
    "card": {
      "meaning": "表示动作彻底完成，或发生了遗憾、意外的事。",
      "connection": "Vて＋しまう",
      "examples": [
        {
          "jp": "今日中にこの仕事を終えてしまいましょう。",
          "zh": "今天之内把这项工作彻底做完吧。",
          "covers": "Vて + しまう"
        },
        {
          "jp": "電車に傘を忘れてしまいました。",
          "zh": "把伞忘在电车上了。",
          "covers": "Vて + しまいました"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "てしまう有完成和说话人评价两条常见意义，不能一律译成“糟了”。完成用法可表达主动收尾；遗憾用法常说非本意的结果。",
      "category": "完成・遗憾",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vて＋しまう",
      "formationRows": [
        {
          "label": "完成／遗憾",
          "form": "て形＋しまう",
          "derivation": "読む→読んでしまう；忘れる→忘れてしまう"
        }
      ],
      "usages": [
        {
          "title": "全部做完",
          "explanation": "可以是有意完成。",
          "examples": [
            {
              "jp": "今日中にこの仕事を終えてしまいましょう。",
              "zh": "今天之内把这项工作彻底做完吧。",
              "focus": "終えてしまいましょう",
              "note": "强调收尾，不一定有后悔。",
              "covers": "Vて + しまう"
            }
          ]
        },
        {
          "title": "不如意的结果",
          "explanation": "说话人对此感到遗憾。",
          "examples": [
            {
              "jp": "電車に傘を忘れてしまいました。",
              "zh": "把伞忘在电车上了。",
              "focus": "忘れてしまいました",
              "note": "突出疏忽造成的结果。",
              "covers": "Vて + しまいました"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "仅凭形式不能判断后悔",
          "explanation": "完成义与遗憾义由内容、语境决定。",
          "examples": [
            {
              "jp": "好きな本なので、一日で読んでしまいました。",
              "zh": "因为很喜欢这本书，一天就读完了。",
              "focus": "読んでしまいました",
              "note": "可以带意外之快，并非后悔读完。"
            }
          ]
        }
      ],
      "specialCases": [
        {
          "title": "口语缩约",
          "explanation": "てしまう→ちゃう；でしまう→じゃう。",
          "examples": [
            {
              "jp": "財布を忘れちゃった。",
              "zh": "把钱包忘了。",
              "focus": "忘れちゃった",
              "note": "较随意，正式表达用忘れてしまった。"
            }
          ]
        }
      ],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-028"
    ],
    "card": {
      "meaning": "从给予或接受帮助的角度叙述动作。",
      "connection": "Vて＋あげる／くれる／もらう",
      "examples": [
        {
          "jp": "私は弟に漢字を教えてあげました。",
          "zh": "我教了弟弟汉字。",
          "covers": "Vて + あげる"
        },
        {
          "jp": "友達が私の荷物を運んでくれました。",
          "zh": "朋友帮我搬了行李。",
          "covers": "Vて + くれる"
        },
        {
          "jp": "私は友達に荷物を運んでもらいました。",
          "zh": "我请朋友帮忙搬了行李。",
          "covers": "Vて + もらう"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "てあげる看向受益者，てくれる从我方角度看他人给予的帮助，てもらう以接受帮助的人为主语。选择时先确定谁做动作、谁受益。",
      "category": "授受・受益",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vて＋あげる／くれる／もらう",
      "formationRows": [
        {
          "label": "给予",
          "form": "AがBにVてあげる",
          "derivation": "A做，B受益"
        },
        {
          "label": "我方受惠",
          "form": "Aが私にVてくれる",
          "derivation": "A做，我受益"
        },
        {
          "label": "接受帮助",
          "form": "私がAにVてもらう",
          "derivation": "A做，我接受帮助"
        }
      ],
      "usages": [
        {
          "title": "为别人做",
          "explanation": "主语是动作执行者。",
          "examples": [
            {
              "jp": "私は弟に漢字を教えてあげました。",
              "zh": "我教了弟弟汉字。",
              "focus": "教えてあげました",
              "note": "我教，弟弟受益。",
              "covers": "Vて + あげる"
            }
          ]
        },
        {
          "title": "别人为我方做",
          "explanation": "くれる把帮助朝向说话人一方。",
          "examples": [
            {
              "jp": "友達が私の荷物を運んでくれました。",
              "zh": "朋友帮我搬了行李。",
              "focus": "運んでくれました",
              "note": "动作主语是朋友。",
              "covers": "Vて + くれる"
            }
          ]
        },
        {
          "title": "接受别人帮助",
          "explanation": "主语变为接受帮助的人。",
          "examples": [
            {
              "jp": "私は友達に荷物を運んでもらいました。",
              "zh": "我请朋友帮忙搬了行李。",
              "focus": "運んでもらいました",
              "note": "朋友由に标出，是实际搬的人。",
              "covers": "Vて + もらう"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "直接对上级说てあげる可能失礼",
          "explanation": "可能带“我施惠于你”的感觉，提供帮助可直接用ましょうか。",
          "examples": [
            {
              "jp": "お荷物をお持ちしましょうか。",
              "zh": "要我帮您拿行李吗？",
              "focus": "お持ちしましょうか",
              "note": "用礼貌提议避免强调施惠。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-029",
      "gx-n4-1u35ii2"
    ],
    "card": {
      "meaning": "表示有人有意做过某动作后留下的状态。",
      "connection": "他动词Vて＋ある（结果Nが；准备Nを也可）",
      "examples": [
        {
          "jp": "机の上に資料が置いてあります。",
          "zh": "桌上放着准备好的资料。",
          "covers": "他动词Vて + あります"
        },
        {
          "jp": "ホテルはもう予約してあります。",
          "zh": "酒店已经预订好了。",
          "covers": "他动词Vて + あります"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "典型为他动词て形＋ある，隐含行为者的安排。NがVてある突出结果状态，NをVてある可突出为后续已做好准备。不要与单纯自动词ている混用。",
      "category": "有意动作的结果",
      "register": {
        "label": "日常常用"
      },
      "formation": "他动词Vて＋ある（结果Nが；准备Nを也可）",
      "formationRows": [
        {
          "label": "结果状态",
          "form": "Nが＋他动词てある",
          "derivation": "窓が開けてある"
        },
        {
          "label": "准备完成",
          "form": "Nを＋他动词てある",
          "derivation": "資料を用意してある"
        }
      ],
      "usages": [
        {
          "title": "有意留下的状态",
          "explanation": "看得到行为者安排的结果。",
          "examples": [
            {
              "jp": "机の上に資料が置いてあります。",
              "zh": "桌上放着准备好的资料。",
              "focus": "置いてあります",
              "note": "隐含有人把资料放在这里。",
              "covers": "他动词Vて + あります"
            }
          ]
        },
        {
          "title": "已做好准备",
          "explanation": "强调准备动作已完成。",
          "examples": [
            {
              "jp": "ホテルはもう予約してあります。",
              "zh": "酒店已经预订好了。",
              "focus": "予約してあります",
              "note": "为后续行程做好安排。",
              "covers": "他动词Vて + あります"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "区别自动词ている",
          "explanation": "自动词侧重状态本身，不突出人为安排。",
          "examples": [
            {
              "jp": "窓が開いています。",
              "zh": "窗户开着。",
              "focus": "開いています",
              "note": "不说明是谁或为何打开；開いてある不是此处标准搭配。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-030",
      "gx-n4-17ugzj7"
    ],
    "card": {
      "meaning": "表示能力、习惯或状态发生了变化。",
      "connection": "V辞书形／可能形／Vない＋ようになる",
      "examples": [
        {
          "jp": "ひらがなが読めるようになりました。",
          "zh": "已经能读平假名了。",
          "covers": "V可能形 + ようになる"
        },
        {
          "jp": "最近、毎朝走るようになりました。",
          "zh": "最近开始每天早晨跑步了。",
          "covers": "V辞书形 + ようになる"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ようになる关注变化后的结果：以前不会而现在会，或以前不做而现在常做。不是“决定要做”；能力变化通常用可能形。",
      "category": "能力・习惯变化",
      "register": {
        "label": "日常常用"
      },
      "formation": "V辞书形／可能形／Vない＋ようになる",
      "formationRows": [
        {
          "label": "能力形成",
          "form": "可能形＋ようになる",
          "derivation": "読めるようになる"
        },
        {
          "label": "习惯变化",
          "form": "辞书形／ない形＋ようになる",
          "derivation": "走るようになる；遅れないようになる"
        }
      ],
      "usages": [
        {
          "title": "学会能力",
          "explanation": "可能形表示已能做到。",
          "examples": [
            {
              "jp": "ひらがなが読めるようになりました。",
              "zh": "已经能读平假名了。",
              "focus": "読めるようになりました",
              "note": "从不能读到能读。",
              "covers": "V可能形 + ようになる"
            }
          ]
        },
        {
          "title": "形成习惯",
          "explanation": "原本没有的行为变得经常发生。",
          "examples": [
            {
              "jp": "最近、毎朝走るようになりました。",
              "zh": "最近开始每天早晨跑步了。",
              "focus": "走るようになりました",
              "note": "强调实际习惯的变化。",
              "covers": "V辞书形 + ようになる"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "主动努力用ようにする",
          "explanation": "努力不保证已经形成结果。",
          "examples": [
            {
              "jp": "毎朝走るようにしています。",
              "zh": "我尽量每天早晨跑步。",
              "focus": "走るようにしています",
              "note": "说明持续努力或实行的方针。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-031",
      "gx-n4-1rt5btg"
    ],
    "card": {
      "meaning": "有意识地争取做到，或避免做某事。",
      "connection": "V辞书形／Vない＋ようにする",
      "examples": [
        {
          "jp": "毎日、野菜を食べるようにしています。",
          "zh": "我平时尽量每天吃蔬菜。",
          "covers": "V辞书形 + ようにしている"
        },
        {
          "jp": "同じ間違いをしないようにします。",
          "zh": "我会注意不再犯同样的错误。",
          "covers": "Vない + ようにする"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ようにする强调行动方针和注意，ようにしている常说长期坚持的习惯；没有保证每次都达成。对方的提醒可用ようにしてください。",
      "category": "努力・习惯方针",
      "register": {
        "label": "日常常用"
      },
      "formation": "V辞书形／Vない＋ようにする",
      "formationRows": [
        {
          "label": "努力方向",
          "form": "辞书形＋ようにする",
          "derivation": "歩くようにする"
        },
        {
          "label": "避免行为",
          "form": "ない形＋ようにする",
          "derivation": "忘れないようにする"
        }
      ],
      "usages": [
        {
          "title": "维持习惯",
          "explanation": "把某事作为日常努力目标。",
          "examples": [
            {
              "jp": "毎日、野菜を食べるようにしています。",
              "zh": "我平时尽量每天吃蔬菜。",
              "focus": "食べるようにしています",
              "note": "强调有意识地坚持。",
              "covers": "V辞书形 + ようにしている"
            }
          ]
        },
        {
          "title": "注意避免",
          "explanation": "设法不出现不希望的行为。",
          "examples": [
            {
              "jp": "同じ間違いをしないようにします。",
              "zh": "我会注意不再犯同样的错误。",
              "focus": "しないようにします",
              "note": "表达今后的行动方针。",
              "covers": "Vない + ようにする"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "区别结果变化",
          "explanation": "ようになる陈述已经出现的变化。",
          "examples": [
            {
              "jp": "毎日野菜を食べるようになりました。",
              "zh": "已经变成每天吃蔬菜了。",
              "focus": "食べるようになりました",
              "note": "焦点是实际习惯改变。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-032",
      "gx-n4-1rw2wad"
    ],
    "card": {
      "meaning": "表达自己已有的打算。",
      "connection": "V辞书形／Vない＋つもりだ",
      "examples": [
        {
          "jp": "来年、日本へ留学するつもりです。",
          "zh": "我打算明年去日本留学。",
          "covers": "V辞书形 + つもり"
        },
        {
          "jp": "今年は車を買わないつもりです。",
          "zh": "我打算今年不买车。",
          "covers": "Vない + つもり"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "つもりだ表示说话人心里决定或计划的行动，尚未保证实际实现。肯定用辞书形，明确打算不做用ないつもり；つもりはない通常强调没有那个意图。",
      "category": "打算・意图",
      "register": {
        "label": "日常常用"
      },
      "formation": "V辞书形／Vない＋つもりだ",
      "formationRows": [
        {
          "label": "肯定计划",
          "form": "辞书形＋つもり",
          "derivation": "留学するつもり"
        },
        {
          "label": "否定计划",
          "form": "ない形＋つもり",
          "derivation": "買わないつもり"
        }
      ],
      "usages": [
        {
          "title": "已有打算",
          "explanation": "比当场随口想想更像已有计划。",
          "examples": [
            {
              "jp": "来年、日本へ留学するつもりです。",
              "zh": "我打算明年去日本留学。",
              "focus": "留学するつもりです",
              "note": "计划尚不等于实际成行。",
              "covers": "V辞书形 + つもり"
            }
          ]
        },
        {
          "title": "打算不做",
          "explanation": "否定放在动词上。",
          "examples": [
            {
              "jp": "今年は車を買わないつもりです。",
              "zh": "我打算今年不买车。",
              "focus": "買わないつもりです",
              "note": "有意识地不购买。",
              "covers": "Vない + つもり"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "没有意图与计划不做",
          "explanation": "つもりはない常用于否认某意图。",
          "examples": [
            {
              "jp": "あなたを責めるつもりはありません。",
              "zh": "我没有责备你的意思。",
              "focus": "責めるつもりはありません",
              "note": "否认意图，不一定是在讲一项日程计划。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-033",
      "gx-n4-1szlw1l"
    ],
    "card": {
      "meaning": "表示已有安排或预定日程。",
      "connection": "V辞书形／Nの＋予定だ",
      "examples": [
        {
          "jp": "明日の九時に出発する予定です。",
          "zh": "预定明天九点出发。",
          "covers": "V辞书形 + 予定"
        },
        {
          "jp": "明日の午後は会議の予定です。",
          "zh": "明天下午安排有会议。",
          "covers": "N の + 予定"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "予定だ常用于时间、行程、会议等已有安排，比个人心愿更接近日程。并不保证不会改变；动词用辞书形，名词用の连接。",
      "category": "日程・预定",
      "register": {
        "label": "日常常用"
      },
      "formation": "V辞书形／Nの＋予定だ",
      "formationRows": [
        {
          "label": "动作安排",
          "form": "辞书形＋予定",
          "derivation": "出発する予定"
        },
        {
          "label": "事件名词",
          "form": "Nの＋予定",
          "derivation": "会議の予定"
        }
      ],
      "usages": [
        {
          "title": "行程安排",
          "explanation": "说明已经计划好的时间。",
          "examples": [
            {
              "jp": "明日の九時に出発する予定です。",
              "zh": "预定明天九点出发。",
              "focus": "出発する予定です",
              "note": "这是日程安排。",
              "covers": "V辞书形 + 予定"
            }
          ]
        },
        {
          "title": "事件排期",
          "explanation": "名词前须加の。",
          "examples": [
            {
              "jp": "明日の午後は会議の予定です。",
              "zh": "明天下午安排有会议。",
              "focus": "会議の予定です",
              "note": "会議是名词。",
              "covers": "N の + 予定"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "仅有愿望时不宜直接等同予定",
          "explanation": "想做不代表已经安排。",
          "examples": [
            {
              "jp": "いつか日本へ行きたいです。",
              "zh": "希望有一天去日本。",
              "focus": "行きたいです",
              "note": "尚未提供具体预定安排。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-034",
      "gx-n4-1x5zmu7"
    ],
    "card": {
      "meaning": "表示由自己决定做或不做某事。",
      "connection": "V辞书形／Vない＋ことにする",
      "examples": [
        {
          "jp": "来月から日本語を習うことにしました。",
          "zh": "我决定从下个月开始学日语。",
          "covers": "V辞书形 + ことにした"
        },
        {
          "jp": "今日は外出しないことにしました。",
          "zh": "我决定今天不出门。",
          "covers": "Vない + ことにした"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ことにする把行动作为个人选择。ことにした说决定已作出，动作本身可以仍在未来；ことにしている常表示自己定下并持续实行的规则。",
      "category": "个人决定",
      "register": {
        "label": "日常常用"
      },
      "formation": "V辞书形／Vない＋ことにする",
      "formationRows": [
        {
          "label": "作出决定",
          "form": "辞书形／ない形＋ことにする",
          "derivation": "行くことにする；行かないことにする"
        }
      ],
      "usages": [
        {
          "title": "决定做",
          "explanation": "突出自己的选择。",
          "examples": [
            {
              "jp": "来月から日本語を習うことにしました。",
              "zh": "我决定从下个月开始学日语。",
              "focus": "習うことにしました",
              "note": "决定已作出，学习尚未开始。",
              "covers": "V辞书形 + ことにした"
            }
          ]
        },
        {
          "title": "决定不做",
          "explanation": "否定的是所选行动。",
          "examples": [
            {
              "jp": "今日は外出しないことにしました。",
              "zh": "我决定今天不出门。",
              "focus": "外出しないことにしました",
              "note": "不是说做决定这件事失败。",
              "covers": "Vない + ことにした"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "外部决定常用ことになる",
          "explanation": "区别突出哪一方作出安排。",
          "examples": [
            {
              "jp": "会社の決定で、大阪へ転勤することになりました。",
              "zh": "按公司决定，我将调往大阪。",
              "focus": "転勤することになりました",
              "note": "把决定呈现为外部安排。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n4-035",
      "gx-n4-1d3yty8"
    ],
    "card": {
      "meaning": "表示事情决定下来或形成了某种安排。",
      "connection": "V辞书形／Vない＋ことになる",
      "examples": [
        {
          "jp": "来月から大阪で働くことになりました。",
          "zh": "已经安排我从下个月起在大阪工作。",
          "covers": "V辞书形 + ことになった"
        },
        {
          "jp": "雨のため、試合は行わないことになりました。",
          "zh": "因为下雨，决定不举行比赛了。",
          "covers": "Vない + ことになった"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ことになる突出结果或安排本身，常用于外部决定；也可委婉报告包含本人参与的决定，不能机械理解为绝对与本人意志无关。",
      "category": "决定结果・安排",
      "register": {
        "label": "日常常用"
      },
      "formation": "V辞书形／Vない＋ことになる",
      "formationRows": [
        {
          "label": "确定安排",
          "form": "辞书形／ない形＋ことになる",
          "derivation": "出張することになる；行わないことになる"
        }
      ],
      "usages": [
        {
          "title": "机构安排",
          "explanation": "决定源于组织。",
          "examples": [
            {
              "jp": "来月から大阪で働くことになりました。",
              "zh": "已经安排我从下个月起在大阪工作。",
              "focus": "働くことになりました",
              "note": "突出确定下来的工作安排。",
              "covers": "V辞书形 + ことになった"
            }
          ]
        },
        {
          "title": "决定取消",
          "explanation": "说明某事最终不做。",
          "examples": [
            {
              "jp": "雨のため、試合は行わないことになりました。",
              "zh": "因为下雨，决定不举行比赛了。",
              "focus": "行わないことになりました",
              "note": "是取消的安排。",
              "covers": "Vない + ことになった"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不必断言完全没有个人意志",
          "explanation": "报告婚事等也可这样委婉表述。",
          "examples": [
            {
              "jp": "来年、結婚することになりました。",
              "zh": "我们定下来明年结婚。",
              "focus": "結婚することになりました",
              "note": "通常不能据此推断婚事是被迫安排的。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-w6hht8"
    ],
    "card": {
      "meaning": "表示必须做，与なければならない近义。",
      "connection": "Vない去い＋くてはいけない",
      "examples": [
        {
          "jp": "今日中に家賃を払わなくてはいけません。",
          "zh": "必须今天之内付房租。",
          "covers": "Vなくてはいけない"
        },
        {
          "jp": "明日は早く起きなくてはいけません。",
          "zh": "明天必须早起。",
          "covers": "Vなくてはいけない"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "なくてはいけない由否定条件构成，整体表示不做不行。用于义务或当前需要；口语常缩为なくちゃ（いけない）。",
      "category": "义务",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vない去い＋くてはいけない",
      "formationRows": [
        {
          "label": "义务",
          "form": "ない→なくてはいけない",
          "derivation": "払わない→払わなくてはいけない"
        }
      ],
      "usages": [
        {
          "title": "需要完成的事",
          "explanation": "指出必须履行的行动。",
          "examples": [
            {
              "jp": "今日中に家賃を払わなくてはいけません。",
              "zh": "必须今天之内付房租。",
              "focus": "払わなくてはいけません",
              "note": "整体意思是必须付。",
              "covers": "Vなくてはいけない"
            }
          ]
        },
        {
          "title": "现实中的必要",
          "explanation": "个人处境也可构成义务。",
          "examples": [
            {
              "jp": "明日は早く起きなくてはいけません。",
              "zh": "明天必须早起。",
              "focus": "起きなくてはいけません",
              "note": "可以因为工作或出行等安排。",
              "covers": "Vなくてはいけない"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不要看见ない就译成禁止",
          "explanation": "禁止则是てはいけない。",
          "examples": [
            {
              "jp": "ここで写真を撮ってはいけません。",
              "zh": "这里不许拍照。",
              "focus": "撮ってはいけません",
              "note": "撮らなくてはいけない反而是必须拍。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-19pnc0y"
    ],
    "card": {
      "meaning": "说明动作开始、结束或持续。",
      "connection": "Vます去ます＋始める／終わる／続ける",
      "examples": [
        {
          "jp": "子どもが泣き始めました。",
          "zh": "孩子开始哭了。",
          "covers": "Vます去ます + 始める"
        },
        {
          "jp": "やっとこの本を読み終わりました。",
          "zh": "终于把这本书读完了。",
          "covers": "Vます去ます + 終わる"
        },
        {
          "jp": "彼は三時間走り続けました。",
          "zh": "他连续跑了三小时。",
          "covers": "Vます去ます + 続ける"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ます词干接始める、終わる、続ける，构成复合动词。始める也可接雨が降る等自然变化；終わる常用于有明确终点的活动。",
      "category": "动作阶段",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vます去ます＋始める／終わる／続ける",
      "formationRows": [
        {
          "label": "动作阶段",
          "form": "ます去ます＋阶段动词",
          "derivation": "読み始める；読み終わる；読み続ける"
        }
      ],
      "usages": [
        {
          "title": "开始",
          "explanation": "标出动作起点。",
          "examples": [
            {
              "jp": "子どもが泣き始めました。",
              "zh": "孩子开始哭了。",
              "focus": "泣き始めました",
              "note": "不要求动作出于意志。",
              "covers": "Vます去ます + 始める"
            }
          ]
        },
        {
          "title": "结束",
          "explanation": "活动完成至终点。",
          "examples": [
            {
              "jp": "やっとこの本を読み終わりました。",
              "zh": "终于把这本书读完了。",
              "focus": "読み終わりました",
              "note": "不是只停止阅读。",
              "covers": "Vます去ます + 終わる"
            }
          ]
        },
        {
          "title": "持续",
          "explanation": "动作继续，不因时间或困难中止。",
          "examples": [
            {
              "jp": "彼は三時間走り続けました。",
              "zh": "他连续跑了三小时。",
              "focus": "走り続けました",
              "note": "强调持续进行。",
              "covers": "Vます去ます + 続ける"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不能用辞书形直接拼接",
          "explanation": "先取ます词干。",
          "examples": [
            {
              "jp": "雨が降り始めました。",
              "zh": "开始下雨了。",
              "focus": "降り始めました",
              "note": "降る→降ります→降り始める。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-gwbrlm"
    ],
    "card": {
      "meaning": "从施惠者角度说为别人做某事。",
      "connection": "Vて＋あげる",
      "examples": [
        {
          "jp": "私は弟に宿題を教えてあげました。",
          "zh": "我辅导了弟弟的作业。",
          "covers": "Vて + あげる"
        },
        {
          "jp": "姉は友達に駅までの道を教えてあげました。",
          "zh": "姐姐告诉了朋友去车站的路。",
          "covers": "Vて + あげる"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "主语是动作执行者，受益者常由に等助词标出。てあげる带“对对方有帮助”的看法，直接对上级说可能显得居高临下。",
      "category": "给予帮助",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vて＋あげる",
      "formationRows": [
        {
          "label": "给予帮助",
          "form": "AがBにVてあげる",
          "derivation": "私は弟に教えてあげる"
        }
      ],
      "usages": [
        {
          "title": "提供具体帮助",
          "explanation": "说话人做，别人受益。",
          "examples": [
            {
              "jp": "私は弟に宿題を教えてあげました。",
              "zh": "我辅导了弟弟的作业。",
              "focus": "教えてあげました",
              "note": "弟弟是受益者。",
              "covers": "Vて + あげる"
            }
          ]
        },
        {
          "title": "第三者之间的帮助",
          "explanation": "叙述者把动作看作帮助。",
          "examples": [
            {
              "jp": "姉は友達に駅までの道を教えてあげました。",
              "zh": "姐姐告诉了朋友去车站的路。",
              "focus": "教えてあげました",
              "note": "姐姐做，朋友受益。",
              "covers": "Vて + あげる"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "提供帮助不必强调施惠",
          "explanation": "对上级可直接用谦让表达提议。",
          "examples": [
            {
              "jp": "駅までご案内しましょうか。",
              "zh": "要我带您去车站吗？",
              "focus": "ご案内しましょうか",
              "note": "比直接说案内してあげます得体。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-ckqp3"
    ],
    "card": {
      "meaning": "从我方受益角度说别人为我方做某事。",
      "connection": "Vて＋くれる",
      "examples": [
        {
          "jp": "友達が駅まで迎えに来てくれました。",
          "zh": "朋友来车站接我了。",
          "covers": "Vて + くれる"
        },
        {
          "jp": "先生が弟に日本語を教えてくれました。",
          "zh": "老师教了我弟弟日语。",
          "covers": "Vて + くれる"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "主语是做动作的人，受益者是说话人或与其立场相关的人。常含感谢，主语不能误当作接受帮助的人。",
      "category": "我方受惠",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vて＋くれる",
      "formationRows": [
        {
          "label": "他人给予我方",
          "form": "Aが私にVてくれる",
          "derivation": "友達が教えてくれる"
        }
      ],
      "usages": [
        {
          "title": "别人帮助我",
          "explanation": "动作由朋友完成。",
          "examples": [
            {
              "jp": "友達が駅まで迎えに来てくれました。",
              "zh": "朋友来车站接我了。",
              "focus": "迎えに来てくれました",
              "note": "我方是受益者。",
              "covers": "Vて + くれる"
            }
          ]
        },
        {
          "title": "为我方的人做事",
          "explanation": "受益对象可为说话人的家人。",
          "examples": [
            {
              "jp": "先生が弟に日本語を教えてくれました。",
              "zh": "老师教了我弟弟日语。",
              "focus": "教えてくれました",
              "note": "说话人站在弟弟这一方。",
              "covers": "Vて + くれる"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "说我请别人帮忙改用もらう",
          "explanation": "主语随叙述视角而变化。",
          "examples": [
            {
              "jp": "私は友達に迎えに来てもらいました。",
              "zh": "我请朋友来接我了。",
              "focus": "迎えに来てもらいました",
              "note": "实际来接的仍是朋友。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-1slh5nq"
    ],
    "card": {
      "meaning": "以接受者为主语，表示得到别人做某事的帮助。",
      "connection": "受益者は／が＋执行者に＋Vて＋もらう",
      "examples": [
        {
          "jp": "私は先生に作文を直してもらいました。",
          "zh": "我请老师修改了作文。",
          "covers": "Vて + もらう"
        },
        {
          "jp": "ここに名前を書いてもらえますか。",
          "zh": "可以请你在这里写上姓名吗？",
          "covers": "Vて + もらえる"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "てもらう的主语接受帮助，实际执行者常用に标记。可能是主动请求，也可能是安排或接受好意，不能一律断言事先开口请求。",
      "category": "接受帮助",
      "register": {
        "label": "日常常用"
      },
      "formation": "受益者は／が＋执行者に＋Vて＋もらう",
      "formationRows": [
        {
          "label": "接受动作帮助",
          "form": "AがBにVてもらう",
          "derivation": "私が先生に直してもらう"
        }
      ],
      "usages": [
        {
          "title": "接受指导",
          "explanation": "执行者由に标出。",
          "examples": [
            {
              "jp": "私は先生に作文を直してもらいました。",
              "zh": "我请老师修改了作文。",
              "focus": "直してもらいました",
              "note": "修改的人是老师。",
              "covers": "Vて + もらう"
            }
          ]
        },
        {
          "title": "希望获得许可或帮助",
          "explanation": "问能否接受对方的行动。",
          "examples": [
            {
              "jp": "ここに名前を書いてもらえますか。",
              "zh": "可以请你在这里写上姓名吗？",
              "focus": "書いてもらえますか",
              "note": "もらえる是可能形，用于请求。",
              "covers": "Vて + もらえる"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不要把主语看作动作执行者",
          "explanation": "把句子换为くれる可看清角色。",
          "examples": [
            {
              "jp": "先生が私の作文を直してくれました。",
              "zh": "老师帮我改了作文。",
              "focus": "直してくれました",
              "note": "老师成为主语，动作关系未改变。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-v3eo1c"
    ],
    "card": {
      "meaning": "自动词说发生或状态；他动词说主体对对象施加动作。",
      "connection": "事物が＋自动词；人が＋对象を＋他动词",
      "examples": [
        {
          "jp": "ドアが開きました。",
          "zh": "门开了。",
          "covers": "N が + 自动词"
        },
        {
          "jp": "私がドアを開けました。",
          "zh": "是我打开了门。",
          "covers": "N を + 他动词"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "常见成对动词如開く／開ける、消える／消す需连同助词记忆。が和を是重要线索，但并非所有带を的动词都是他动词：を也能表示经过点、离开点。",
      "category": "自动词・他动词",
      "register": {
        "label": "日常常用"
      },
      "formation": "事物が＋自动词；人が＋对象を＋他动词",
      "formationRows": [
        {
          "label": "常见成对形式",
          "form": "開く／開ける；消える／消す",
          "derivation": "ドアが開く；ドアを開ける"
        },
        {
          "label": "结果状态",
          "form": "自动词ている",
          "derivation": "電気が消えている"
        }
      ],
      "usages": [
        {
          "title": "说明发生了什么",
          "explanation": "不把注意力放在行为者。",
          "examples": [
            {
              "jp": "ドアが開きました。",
              "zh": "门开了。",
              "focus": "ドアが開きました",
              "note": "重点是门发生的变化。",
              "covers": "N が + 自动词"
            }
          ]
        },
        {
          "title": "说明谁操作对象",
          "explanation": "对象由を标记。",
          "examples": [
            {
              "jp": "私がドアを開けました。",
              "zh": "是我打开了门。",
              "focus": "ドアを開けました",
              "note": "明确有人施加开门动作。",
              "covers": "N を + 他动词"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "看到を不能机械分类",
          "explanation": "移动动词的を可表示路径或起点。",
          "examples": [
            {
              "jp": "毎朝、公園を走ります。",
              "zh": "每天早晨在公园跑步。",
              "focus": "公園を走ります",
              "note": "公園是经过的空间，不是被改变的对象。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-1ah05kx"
    ],
    "card": {
      "meaning": "表示从会做／常做变成不做或不能做。",
      "connection": "Vない去い＋くなる",
      "examples": [
        {
          "jp": "最近、テレビを見なくなりました。",
          "zh": "最近不再看电视了。",
          "covers": "Vなくなる"
        },
        {
          "jp": "眼鏡がないと、小さい字が読めなくなりました。",
          "zh": "现在不戴眼镜就看不清小字了。",
          "covers": "V可能否定 + くなる"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "动词ない形去い接くなる，表示否定状态的形成。能否做的变化应使用可能动词的否定，区别于单纯不再做。",
      "category": "否定变化",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vない去い＋くなる",
      "formationRows": [
        {
          "label": "行为消失",
          "form": "ない→なくなる",
          "derivation": "行かない→行かなくなる"
        },
        {
          "label": "能力或条件丧失",
          "form": "可能否定＋くなる",
          "derivation": "読めない→読めなくなる"
        }
      ],
      "usages": [
        {
          "title": "不再做",
          "explanation": "习惯或行为发生变化。",
          "examples": [
            {
              "jp": "最近、テレビを見なくなりました。",
              "zh": "最近不再看电视了。",
              "focus": "見なくなりました",
              "note": "不表示失去视力或设备故障。",
              "covers": "Vなくなる"
            }
          ]
        },
        {
          "title": "变得不能做",
          "explanation": "能力或条件不再允许。",
          "examples": [
            {
              "jp": "眼鏡がないと、小さい字が読めなくなりました。",
              "zh": "现在不戴眼镜就看不清小字了。",
              "focus": "読めなくなりました",
              "note": "読む→読める→読めない→読めなくなる。",
              "covers": "V可能否定 + くなる"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "区别没做某一次",
          "explanation": "单次未发生不一定是状态变化。",
          "examples": [
            {
              "jp": "昨日はテレビを見ませんでした。",
              "zh": "昨天没看电视。",
              "focus": "見ませんでした",
              "note": "未表示此后都不看。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-e4tr6"
    ],
    "card": {
      "meaning": "表示性质、身份等发生变化：变得／成为……。",
      "connection": "い形去い＋くなる；な形词干／N＋になる",
      "examples": [
        {
          "jp": "だんだん寒くなってきました。",
          "zh": "天气渐渐冷起来了。",
          "covers": "い形去い + くなる"
        },
        {
          "jp": "姉は去年、医者になりました。",
          "zh": "姐姐去年成为了医生。",
          "covers": "N + になる"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "い形容词用くなる，な形容词和名词用になる。なる陈述变化结果，不强调是谁主动使它变化。",
      "category": "状态变化",
      "register": {
        "label": "日常常用"
      },
      "formation": "い形去い＋くなる；な形词干／N＋になる",
      "formationRows": [
        {
          "label": "い形容词变化",
          "form": "去い＋くなる",
          "derivation": "寒い→寒くなる；いい→よくなる"
        },
        {
          "label": "性质与身份",
          "form": "な形／N＋になる",
          "derivation": "静かになる；先生になる"
        }
      ],
      "usages": [
        {
          "title": "性质变化",
          "explanation": "描述天气或状态变化。",
          "examples": [
            {
              "jp": "だんだん寒くなってきました。",
              "zh": "天气渐渐冷起来了。",
              "focus": "寒くなってきました",
              "note": "寒い去い加く。",
              "covers": "い形去い + くなる"
            }
          ]
        },
        {
          "title": "身份变化",
          "explanation": "说明成为某种身份。",
          "examples": [
            {
              "jp": "姉は去年、医者になりました。",
              "zh": "姐姐去年成为了医生。",
              "focus": "医者になりました",
              "note": "名词用に。",
              "covers": "N + になる"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "主动改变用する",
          "explanation": "改变者做操作时用くする／にする。",
          "examples": [
            {
              "jp": "音を小さくしてください。",
              "zh": "请把声音调小。",
              "focus": "小さくしてください",
              "note": "请求对方主动改变音量。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-jim7yk"
    ],
    "card": {
      "meaning": "主动使性质改变，或选定某项。",
      "connection": "い形去い＋くする；な形词干／N＋にする",
      "examples": [
        {
          "jp": "髪を短くしました。",
          "zh": "把头发剪短了。",
          "covers": "い形去い + くする"
        },
        {
          "jp": "飲み物はお茶にします。",
          "zh": "饮料我要茶。",
          "covers": "N + にする"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "くする／にする强调人为操作；Nにする还常表示点餐、选择。い形容词去い加く，な形容词词干和名词用に。",
      "category": "主动改变・选择",
      "register": {
        "label": "日常常用"
      },
      "formation": "い形去い＋くする；な形词干／N＋にする",
      "formationRows": [
        {
          "label": "改变程度",
          "form": "去い＋くする",
          "derivation": "短い→短くする"
        },
        {
          "label": "改变状态／选择",
          "form": "な形／N＋にする",
          "derivation": "静かにする；コーヒーにする"
        }
      ],
      "usages": [
        {
          "title": "主动改变",
          "explanation": "使对象达到某种状态。",
          "examples": [
            {
              "jp": "髪を短くしました。",
              "zh": "把头发剪短了。",
              "focus": "短くしました",
              "note": "突出主动改变发长。",
              "covers": "い形去い + くする"
            }
          ]
        },
        {
          "title": "选定项目",
          "explanation": "在备选项中决定要哪一个。",
          "examples": [
            {
              "jp": "飲み物はお茶にします。",
              "zh": "饮料我要茶。",
              "focus": "お茶にします",
              "note": "这里是选择茶，不是把东西变成茶。",
              "covers": "N + にする"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "自发变化用なる",
          "explanation": "要区分改变者和变化对象。",
          "examples": [
            {
              "jp": "夜になると、町が静かになります。",
              "zh": "到了夜里，镇子就安静下来。",
              "focus": "静かになります",
              "note": "只陈述状态的变化。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-ny2tya"
    ],
    "card": {
      "meaning": "表示正在考虑或打算做某事。",
      "connection": "V意向形＋と思う",
      "examples": [
        {
          "jp": "今日は早く寝ようと思います。",
          "zh": "我想今天早点睡。",
          "covers": "V意向形 + と思う"
        },
        {
          "jp": "来年、留学しようと思っています。",
          "zh": "我一直打算明年留学。",
          "covers": "V意向形 + と思っている"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "意向形＋と思う表达意图；と思っている常说此前已有、仍持续的打算。谈他人的意图时需上下文或消息依据。",
      "category": "行动意图",
      "register": {
        "label": "日常常用"
      },
      "formation": "V意向形＋と思う",
      "formationRows": [
        {
          "label": "意向形接想法",
          "form": "行こう／食べよう＋と思う",
          "derivation": "する→しようと思う；来る→来ようと思う"
        }
      ],
      "usages": [
        {
          "title": "当前意图",
          "explanation": "说自己准备采取的行动。",
          "examples": [
            {
              "jp": "今日は早く寝ようと思います。",
              "zh": "我想今天早点睡。",
              "focus": "寝ようと思います",
              "note": "寝る→寝よう。",
              "covers": "V意向形 + と思う"
            }
          ]
        },
        {
          "title": "持续打算",
          "explanation": "此前已在考虑该计划。",
          "examples": [
            {
              "jp": "来年、留学しようと思っています。",
              "zh": "我一直打算明年留学。",
              "focus": "留学しようと思っています",
              "note": "没有保证手续已安排完成。",
              "covers": "V意向形 + と思っている"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "与普通形＋と思う不同",
          "explanation": "普通形可以是预测，不一定是意图。",
          "examples": [
            {
              "jp": "彼は明日来ると思います。",
              "zh": "我想他明天会来。",
              "focus": "来ると思います",
              "note": "说话人预测他来，并非打算让他来。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-liltal"
    ],
    "card": {
      "meaning": "表达意志或邀请：做吧／我要做。",
      "connection": "五段お段＋う；一段去る＋よう；しよう；来よう",
      "examples": [
        {
          "jp": "一緒に帰ろう。",
          "zh": "一起回去吧。",
          "covers": "V意向形"
        },
        {
          "jp": "明日は早く起きよう。",
          "zh": "明天早点起吧。",
          "covers": "V意向形"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "五段末音改お段加う，一段去る加よう。する→しよう，来る→来よう（こよう）。单独作句末较随意；礼貌邀请常用ましょう。",
      "category": "意志・邀请",
      "register": {
        "label": "日常常用"
      },
      "formation": "五段お段＋う；一段去る＋よう；しよう；来よう",
      "formationRows": [
        {
          "label": "五段与一段",
          "form": "お段＋う；去る＋よう",
          "derivation": "行く→行こう；食べる→食べよう"
        },
        {
          "label": "不规则",
          "form": "する→しよう；来る→来よう",
          "derivation": "来よう读こよう"
        }
      ],
      "usages": [
        {
          "title": "熟人邀请",
          "explanation": "邀请双方共同行动。",
          "examples": [
            {
              "jp": "一緒に帰ろう。",
              "zh": "一起回去吧。",
              "focus": "帰ろう",
              "note": "帰る是五段，不能变帰よう。",
              "covers": "V意向形"
            }
          ]
        },
        {
          "title": "自己的意志",
          "explanation": "自言自语决定下一步。",
          "examples": [
            {
              "jp": "明日は早く起きよう。",
              "zh": "明天早点起吧。",
              "focus": "起きよう",
              "note": "可以只指自己的行动。",
              "covers": "V意向形"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "面对正式对象用礼貌形式",
          "explanation": "意向形本身不带礼貌。",
          "examples": [
            {
              "jp": "一緒に帰りましょう。",
              "zh": "一起回去吧。",
              "focus": "帰りましょう",
              "note": "ます词干＋ましょう。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-1h7lvw"
    ],
    "card": {
      "meaning": "以承受动作的人或物为主语。",
      "connection": "五段あ段＋れる；一段去る＋られる；される；来られる",
      "examples": [
        {
          "jp": "私は先生に褒められました。",
          "zh": "我受到了老师表扬。",
          "covers": "一段被动形"
        },
        {
          "jp": "この本は多くの国で読まれています。",
          "zh": "这本书在很多国家被阅读。",
          "covers": "五段被动形"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "五段变あ段加れる（う→われる），一段去る加られる；する→される，来る→来られる（こられる）。被动可客观叙述事件，并不总表示受害。",
      "category": "被动",
      "register": {
        "label": "日常常用"
      },
      "formation": "五段あ段＋れる；一段去る＋られる；される；来られる",
      "formationRows": [
        {
          "label": "形式",
          "form": "あ段＋れる／去る＋られる",
          "derivation": "書く→書かれる；買う→買われる；褒める→褒められる"
        },
        {
          "label": "基本角色",
          "form": "受事は＋行为者に＋被动",
          "derivation": "私は先生に褒められる"
        }
      ],
      "usages": [
        {
          "title": "承受他人动作",
          "explanation": "原来的动作对象成为主语。",
          "examples": [
            {
              "jp": "私は先生に褒められました。",
              "zh": "我受到了老师表扬。",
              "focus": "褒められました",
              "note": "被动也可表达好事。",
              "covers": "一段被动形"
            }
          ]
        },
        {
          "title": "客观说明事物",
          "explanation": "不一定交代具体行为者。",
          "examples": [
            {
              "jp": "この本は多くの国で読まれています。",
              "zh": "这本书在很多国家被阅读。",
              "focus": "読まれています",
              "note": "本是阅读对象。",
              "covers": "五段被动形"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "られる也可表示可能或尊敬",
          "explanation": "必须结合主语、助词和语境判断。",
          "examples": [
            {
              "jp": "私は納豆が食べられます。",
              "zh": "我能吃纳豆。",
              "focus": "食べられます",
              "note": "这里说能力，不是“被吃”。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-ijame"
    ],
    "card": {
      "meaning": "用被动表达受他人行为或事件影响而困扰。",
      "connection": "受影响者は＋人・事件主体に＋V被动",
      "examples": [
        {
          "jp": "夜中に子どもに泣かれて、眠れませんでした。",
          "zh": "半夜孩子哭，害得我没睡成。",
          "covers": "人に + 自动词被动"
        },
        {
          "jp": "私は弟にパソコンを壊されました。",
          "zh": "我的电脑被弟弟弄坏了。",
          "covers": "人に Nを + 被动"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "受影响者作主语，事件主体用に。可由自动词构成，原主动句中不一定有这个受影响者；也可说自己的物品被别人损坏。",
      "category": "受影响的被动",
      "register": {
        "label": "日常常用"
      },
      "formation": "受影响者は＋人・事件主体に＋V被动",
      "formationRows": [
        {
          "label": "间接影响",
          "form": "AはBに＋自动词被动",
          "derivation": "私は子どもに泣かれる"
        },
        {
          "label": "所有物受损",
          "form": "AはBにNを＋被动",
          "derivation": "私は弟にパソコンを壊される"
        }
      ],
      "usages": [
        {
          "title": "他人的动作带来困扰",
          "explanation": "哭的人是孩子，受影响的是说话人。",
          "examples": [
            {
              "jp": "夜中に子どもに泣かれて、眠れませんでした。",
              "zh": "半夜孩子哭，害得我没睡成。",
              "focus": "子どもに泣かれて",
              "note": "不是说“我被孩子哭”这种直接动作关系。",
              "covers": "人に + 自动词被动"
            }
          ]
        },
        {
          "title": "物品受损",
          "explanation": "受影响者的物品仍用を。",
          "examples": [
            {
              "jp": "私は弟にパソコンを壊されました。",
              "zh": "我的电脑被弟弟弄坏了。",
              "focus": "パソコンを壊されました",
              "note": "我受影响；电脑是被弄坏的对象。",
              "covers": "人に Nを + 被动"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不能认为所有被动都带抱怨",
          "explanation": "客观事实的被动通常没有这种主观受害意味。",
          "examples": [
            {
              "jp": "この橋は百年前に建てられました。",
              "zh": "这座桥建于一百年前。",
              "focus": "建てられました",
              "note": "介绍建造事实。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-1gaad79"
    ],
    "card": {
      "meaning": "表示让、使或允许别人做某事。",
      "connection": "五段あ段＋せる；一段去る＋させる；させる；来させる",
      "examples": [
        {
          "jp": "母は子どもに野菜を食べさせました。",
          "zh": "妈妈让孩子吃了蔬菜。",
          "covers": "一段使役形"
        },
        {
          "jp": "子どもが行きたがったので、一人で行かせました。",
          "zh": "孩子想去，所以让他一个人去了。",
          "covers": "五段使役形"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "五段变あ段加せる（う→わせる），一段去る加させる；する→させる，来る→来させる。强制还是许可取决于关系和上下文。",
      "category": "使役・许可",
      "register": {
        "label": "日常常用"
      },
      "formation": "五段あ段＋せる；一段去る＋させる；させる；来させる",
      "formationRows": [
        {
          "label": "活用",
          "form": "あ段＋せる／去る＋させる",
          "derivation": "書く→書かせる；食べる→食べさせる"
        },
        {
          "label": "执行者",
          "form": "他动词句常用人に＋对象を",
          "derivation": "子どもに野菜を食べさせる"
        }
      ],
      "usages": [
        {
          "title": "要求他人做",
          "explanation": "行为者与发出要求者不同。",
          "examples": [
            {
              "jp": "母は子どもに野菜を食べさせました。",
              "zh": "妈妈让孩子吃了蔬菜。",
              "focus": "食べさせました",
              "note": "妈妈使役，孩子吃。",
              "covers": "一段使役形"
            }
          ]
        },
        {
          "title": "允许他人实现愿望",
          "explanation": "使役也可表示许可。",
          "examples": [
            {
              "jp": "子どもが行きたがったので、一人で行かせました。",
              "zh": "孩子想去，所以让他一个人去了。",
              "focus": "行かせました",
              "note": "语境表明是允许，不是强迫。",
              "covers": "五段使役形"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "注意を的重复",
          "explanation": "他动词已有动作对象を时，执行者通常用に。",
          "examples": [
            {
              "jp": "先生は学生に作文を書かせました。",
              "zh": "老师让学生写了作文。",
              "focus": "学生に作文を書かせました",
              "note": "避免把学生和作文都标成を。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-1jho9hy"
    ],
    "card": {
      "meaning": "命令形要求行动；辞书形＋な表示禁止。",
      "connection": "命令：五段え段／一段ろ；禁止：V辞书形＋な",
      "examples": [
        {
          "jp": "危ない！止まれ！",
          "zh": "危险！停下！",
          "covers": "V命令形"
        },
        {
          "jp": "このボタンに触るな。",
          "zh": "不许碰这个按钮。",
          "covers": "V辞书形 + な"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "命令形语气强，常见于紧急警告、训练口令、标语等。五段末音改え段，一段去る加ろ（书面也用よ）；する→しろ／せよ，来る→来い（こい）。",
      "category": "命令・禁止",
      "register": {
        "label": "强硬口语・标语"
      },
      "formation": "命令：五段え段／一段ろ；禁止：V辞书形＋な",
      "formationRows": [
        {
          "label": "命令",
          "form": "え段／去る＋ろ",
          "derivation": "止まる→止まれ；見る→見ろ；来る→来い"
        },
        {
          "label": "禁止",
          "form": "辞书形＋な",
          "derivation": "入るな；触るな"
        }
      ],
      "usages": [
        {
          "title": "紧急命令",
          "explanation": "短促强制，适合危险提示等场景。",
          "examples": [
            {
              "jp": "危ない！止まれ！",
              "zh": "危险！停下！",
              "focus": "止まれ",
              "note": "不是平常礼貌请求的说法。",
              "covers": "V命令形"
            }
          ]
        },
        {
          "title": "直接禁止",
          "explanation": "禁止形不改变动词辞书形。",
          "examples": [
            {
              "jp": "このボタンに触るな。",
              "zh": "不许碰这个按钮。",
              "focus": "触るな",
              "note": "语气强硬。",
              "covers": "V辞书形 + な"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "日常请求用礼貌形式",
          "explanation": "对不熟的人一般避免直接命令。",
          "examples": [
            {
              "jp": "ここで待ってください。",
              "zh": "请在这里等。",
              "focus": "待ってください",
              "note": "比待て更适合一般服务与说明场景。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-r0xcu0"
    ],
    "card": {
      "meaning": "带指令意味地要求对方做某事。",
      "connection": "Vます去ます＋なさい",
      "examples": [
        {
          "jp": "もう遅いから、早く寝なさい。",
          "zh": "已经晚了，快睡吧。",
          "covers": "Vます去ます + なさい"
        },
        {
          "jp": "次の質問に答えなさい。",
          "zh": "请回答下列问题。",
          "covers": "Vます去ます + なさい"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ます词干＋なさい常由家长、教师等对晚辈使用，也见于题目要求。虽比裸命令形缓和，仍不是对上级通用的礼貌请求。",
      "category": "指示",
      "register": {
        "label": "对晚辈・题目指令"
      },
      "formation": "Vます去ます＋なさい",
      "formationRows": [
        {
          "label": "指令",
          "form": "ます去ます＋なさい",
          "derivation": "寝る→寝なさい；読む→読みなさい"
        }
      ],
      "usages": [
        {
          "title": "家长指示",
          "explanation": "带教育或督促意味。",
          "examples": [
            {
              "jp": "もう遅いから、早く寝なさい。",
              "zh": "已经晚了，快睡吧。",
              "focus": "寝なさい",
              "note": "家长对孩子的指示。",
              "covers": "Vます去ます + なさい"
            }
          ]
        },
        {
          "title": "书面题目",
          "explanation": "说明学生应完成的任务。",
          "examples": [
            {
              "jp": "次の質問に答えなさい。",
              "zh": "请回答下列问题。",
              "focus": "答えなさい",
              "note": "常见考试说明用语。",
              "covers": "Vます去ます + なさい"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不要用作对上级的请求",
          "explanation": "服务或求助场景选择ください等。",
          "examples": [
            {
              "jp": "もう一度説明してください。",
              "zh": "请再说明一次。",
              "focus": "説明してください",
              "note": "不说説明しなさい来请求老师。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-1yv6geh"
    ],
    "card": {
      "meaning": "表示某个尚未确定的人、物、地点或时间。",
      "connection": "疑问词＋か（再按需接助词）",
      "examples": [
        {
          "jp": "外に誰かいます。",
          "zh": "外面有人。",
          "covers": "誰か"
        },
        {
          "jp": "週末、どこかへ行きたいです。",
          "zh": "周末想去个什么地方。",
          "covers": "どこか + へ"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "誰か、何か、どこか、いつか不是完整疑问句，而是不特定项。需要的地点助词等放在か后；何か中的が、を在口语常省略。",
      "category": "不定表达",
      "register": {
        "label": "日常常用"
      },
      "formation": "疑问词＋か（再按需接助词）",
      "formationRows": [
        {
          "label": "不定项",
          "form": "誰か；何か；どこか；いつか",
          "derivation": "どこかへ行く；誰かに聞く"
        }
      ],
      "usages": [
        {
          "title": "不确定的人",
          "explanation": "不问是谁，只说有人。",
          "examples": [
            {
              "jp": "外に誰かいます。",
              "zh": "外面有人。",
              "focus": "誰かいます",
              "note": "人物身份未确定。",
              "covers": "誰か"
            }
          ]
        },
        {
          "title": "不确定的地点",
          "explanation": "地点关系仍由へ表示。",
          "examples": [
            {
              "jp": "週末、どこかへ行きたいです。",
              "zh": "周末想去个什么地方。",
              "focus": "どこかへ",
              "note": "か之后保留方向助词。",
              "covers": "どこか + へ"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不是问句的か",
          "explanation": "询问谁在外面需要另一个句式。",
          "examples": [
            {
              "jp": "外に誰がいますか。",
              "zh": "外面有谁？",
              "focus": "誰がいますか",
              "note": "句末か构成问句，誰か则是“某人”。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-am01r9"
    ],
    "card": {
      "meaning": "配合否定，表示谁也不、什么也不、哪里也不。",
      "connection": "疑问词（＋に／へ／で等）＋も＋否定",
      "examples": [
        {
          "jp": "教室には誰もいません。",
          "zh": "教室里一个人也没有。",
          "covers": "誰も + 否定"
        },
        {
          "jp": "このことは誰にも話していません。",
          "zh": "这件事我谁也没告诉。",
          "covers": "誰にも + 否定"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "疑问词＋も与否定谓语呼应。に、で等关系助词通常放在も前；どこへも和どこにも常用于不去任何地方。",
      "category": "全面否定",
      "register": {
        "label": "日常常用"
      },
      "formation": "疑问词（＋に／へ／で等）＋も＋否定",
      "formationRows": [
        {
          "label": "人和物",
          "form": "誰も／何も＋否定",
          "derivation": "誰もいない；何も食べない"
        },
        {
          "label": "保留关系助词",
          "form": "誰にも；どこへも",
          "derivation": "誰にも話さない"
        }
      ],
      "usages": [
        {
          "title": "全面否定事物",
          "explanation": "表示不存在任何该项。",
          "examples": [
            {
              "jp": "教室には誰もいません。",
              "zh": "教室里一个人也没有。",
              "focus": "誰もいません",
              "note": "谓语为否定。",
              "covers": "誰も + 否定"
            }
          ]
        },
        {
          "title": "否定任何对象",
          "explanation": "对谁都没有做该动作。",
          "examples": [
            {
              "jp": "このことは誰にも話していません。",
              "zh": "这件事我谁也没告诉。",
              "focus": "誰にも話していません",
              "note": "に标记告知对象，不能漏掉。",
              "covers": "誰にも + 否定"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "も本身不保证全面否定",
          "explanation": "这里必须与否定谓语配合；肯定全称另有表达。",
          "examples": [
            {
              "jp": "誰でも参加できます。",
              "zh": "谁都可以参加。",
              "focus": "誰でも参加できます",
              "note": "用でも表达不限制参加者。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-9uupzx"
    ],
    "card": {
      "meaning": "表示不限制选择：谁都／什么都／无论哪里。",
      "connection": "疑问词＋でも",
      "examples": [
        {
          "jp": "このイベントは誰でも参加できます。",
          "zh": "这个活动谁都能参加。",
          "covers": "誰でも"
        },
        {
          "jp": "分からないことがあれば、いつでも聞いてください。",
          "zh": "有不懂的地方，随时都可以问。",
          "covers": "いつでも"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "疑问词＋でも强调任意一个都可以。常与许可、能力、普遍性判断搭配；不是在报告某个具体未确定的人实际做过动作。",
      "category": "任意选择",
      "register": {
        "label": "日常常用"
      },
      "formation": "疑问词＋でも",
      "formationRows": [
        {
          "label": "任意选择",
          "form": "誰でも；何でも；どこでも；いつでも",
          "derivation": "誰でもできる；いつでも来てください"
        }
      ],
      "usages": [
        {
          "title": "不限制人选",
          "explanation": "每个人都有资格。",
          "examples": [
            {
              "jp": "このイベントは誰でも参加できます。",
              "zh": "这个活动谁都能参加。",
              "focus": "誰でも参加できます",
              "note": "没有限定身份。",
              "covers": "誰でも"
            }
          ]
        },
        {
          "title": "不限制时间",
          "explanation": "让对方自由选择时间。",
          "examples": [
            {
              "jp": "分からないことがあれば、いつでも聞いてください。",
              "zh": "有不懂的地方，随时都可以问。",
              "focus": "いつでも",
              "note": "强调时间不限。",
              "covers": "いつでも"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "与誰か不同",
          "explanation": "誰か是身份未知的某人，不是任意人。",
          "examples": [
            {
              "jp": "誰かがドアをたたいています。",
              "zh": "有人在敲门。",
              "focus": "誰かが",
              "note": "说的是实际某个人。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-1mch6ue"
    ],
    "card": {
      "meaning": "把“是否……”嵌入更大的句子。",
      "connection": "普通形＋かどうか（N・な形现在肯定去だ）",
      "examples": [
        {
          "jp": "彼が来るかどうか、まだ分かりません。",
          "zh": "还不知道他来不来。",
          "covers": "V普通形 + かどうか"
        },
        {
          "jp": "この店が日曜日も開いているかどうか、調べます。",
          "zh": "查一下这家店星期天是否也营业。",
          "covers": "V普通形 + かどうか"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "かどうか表示某一命题成立还是不成立，后接知道、确认、决定等。名词和な形容词现在肯定不加だ。若已有何、誰等疑问词，通常直接用か。",
      "category": "是否疑问嵌入",
      "register": {
        "label": "日常常用"
      },
      "formation": "普通形＋かどうか（N・な形现在肯定去だ）",
      "formationRows": [
        {
          "label": "是否",
          "form": "来る／高い／静か／学生＋かどうか",
          "derivation": "学生かどうか；静かかどうか"
        }
      ],
      "usages": [
        {
          "title": "尚不知道是否发生",
          "explanation": "嵌入问题没有疑问词。",
          "examples": [
            {
              "jp": "彼が来るかどうか、まだ分かりません。",
              "zh": "还不知道他来不来。",
              "focus": "来るかどうか",
              "note": "疑问范围是来与不来。",
              "covers": "V普通形 + かどうか"
            }
          ]
        },
        {
          "title": "检查属性是否成立",
          "explanation": "否定可能与肯定可能并列考虑。",
          "examples": [
            {
              "jp": "この店が日曜日も開いているかどうか、調べます。",
              "zh": "查一下这家店星期天是否也营业。",
              "focus": "開いているかどうか",
              "note": "调查的是营业与否。",
              "covers": "V普通形 + かどうか"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "有疑问词通常用か",
          "explanation": "问何时与问是否不是同一个问题。",
          "examples": [
            {
              "jp": "何時に開くか、調べます。",
              "zh": "查一下几点开门。",
              "focus": "何時に開くか",
              "note": "不需要かどうか。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-3dbp00"
    ],
    "card": {
      "meaning": "把谁、什么、何时等问题作为句子的内容。",
      "connection": "疑问词＋普通形＋か（N・な形现在肯定去だ）",
      "examples": [
        {
          "jp": "鍵がどこにあるか分かりません。",
          "zh": "不知道钥匙在哪里。",
          "covers": "疑问词 V普通形 + か"
        },
        {
          "jp": "電車が何時に出るか教えてください。",
          "zh": "请告诉我电车几点发车。",
          "covers": "疑问词 V普通形 + か"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "疑问词所在的小句用普通形，在末尾加か，再接分かる、知る、教える等。名词和な形容词现在肯定通常去だ。",
      "category": "间接疑问",
      "register": {
        "label": "日常常用"
      },
      "formation": "疑问词＋普通形＋か（N・な形现在肯定去だ）",
      "formationRows": [
        {
          "label": "嵌入问句",
          "form": "いつ来るか；どこにあるか",
          "derivation": "小句内部保留に、を等助词"
        },
        {
          "label": "名词判断",
          "form": "誰が先生か",
          "derivation": "不加です"
        }
      ],
      "usages": [
        {
          "title": "知道或不知道问题答案",
          "explanation": "把问题作为分かる的内容。",
          "examples": [
            {
              "jp": "鍵がどこにあるか分かりません。",
              "zh": "不知道钥匙在哪里。",
              "focus": "どこにあるか",
              "note": "どこに保留存在地点的に。",
              "covers": "疑问词 V普通形 + か"
            }
          ]
        },
        {
          "title": "请求告知信息",
          "explanation": "大句礼貌即可，内句用普通形。",
          "examples": [
            {
              "jp": "電車が何時に出るか教えてください。",
              "zh": "请告诉我电车几点发车。",
              "focus": "何時に出るか",
              "note": "不用何時に出ますか教えてください。",
              "covers": "疑问词 V普通形 + か"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "没有疑问词时考虑かどうか",
          "explanation": "是否来与什么时候来是不同问题。",
          "examples": [
            {
              "jp": "彼が来るかどうか、確認してください。",
              "zh": "请确认他来不来。",
              "focus": "来るかどうか",
              "note": "是非问题用かどうか更明确。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-jxbjxd"
    ],
    "card": {
      "meaning": "表示仅有……，常带不足或限制感。",
      "connection": "N（＋关系助词）＋しか＋否定",
      "examples": [
        {
          "jp": "財布には百円しかありません。",
          "zh": "钱包里只有一百日元。",
          "covers": "数量N しか + 否定"
        },
        {
          "jp": "このお菓子はここでしか買えません。",
          "zh": "这种点心只有这里买得到。",
          "covers": "N でしか + 否定"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "しか与否定谓语呼应，但整句肯定しか前这一项存在。时间、地点等关系助词必要时保留，如にしか、でしか。",
      "category": "排他限定",
      "register": {
        "label": "日常常用"
      },
      "formation": "N（＋关系助词）＋しか＋否定",
      "formationRows": [
        {
          "label": "数量限定",
          "form": "数量＋しか＋否定",
          "derivation": "百円しかない"
        },
        {
          "label": "地点限定",
          "form": "Nでしか＋否定",
          "derivation": "ここでしか買えない"
        }
      ],
      "usages": [
        {
          "title": "数量少",
          "explanation": "用否定排除其他数量。",
          "examples": [
            {
              "jp": "財布には百円しかありません。",
              "zh": "钱包里只有一百日元。",
              "focus": "百円しかありません",
              "note": "实际有一百日元，不是连一百也没有。",
              "covers": "数量N しか + 否定"
            }
          ]
        },
        {
          "title": "限定条件",
          "explanation": "排除其他购买地点。",
          "examples": [
            {
              "jp": "このお菓子はここでしか買えません。",
              "zh": "这种点心只有这里买得到。",
              "focus": "ここでしか買えません",
              "note": "で表示购买地点，不能漏掉。",
              "covers": "N でしか + 否定"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "だけ无需配否定",
          "explanation": "だけ可以中性陈述数量。",
          "examples": [
            {
              "jp": "百円だけあります。",
              "zh": "只有一百日元。",
              "focus": "百円だけあります",
              "note": "だけ不要求ありません。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-1j3qgna"
    ],
    "card": {
      "meaning": "限定范围：只有／仅仅……。",
      "connection": "N／V普通形／い形／な形な＋だけ",
      "examples": [
        {
          "jp": "今日は三人だけ来ました。",
          "zh": "今天只来了三个人。",
          "covers": "N + だけ"
        },
        {
          "jp": "見るだけで、買いません。",
          "zh": "只看看，不买。",
          "covers": "V辞书形 + だけ"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "だけ可接名词、动词普通形等，通常不要求否定。限定的是紧邻的成分，助词的位置会影响理解；Aだけで可表示仅凭A就足够。",
      "category": "范围限定",
      "register": {
        "label": "日常常用"
      },
      "formation": "N／V普通形／い形／な形な＋だけ",
      "formationRows": [
        {
          "label": "名词与动词",
          "form": "Nだけ；V普通形＋だけ",
          "derivation": "一人だけ；見るだけ"
        },
        {
          "label": "状态",
          "form": "い形／な形な＋だけ",
          "derivation": "安いだけ；静かなだけ"
        }
      ],
      "usages": [
        {
          "title": "限定数量",
          "explanation": "中性说明人数。",
          "examples": [
            {
              "jp": "今日は三人だけ来ました。",
              "zh": "今天只来了三个人。",
              "focus": "三人だけ",
              "note": "不强制表达失望。",
              "covers": "N + だけ"
            }
          ]
        },
        {
          "title": "只做某个动作",
          "explanation": "不包含其他后续行为。",
          "examples": [
            {
              "jp": "見るだけで、買いません。",
              "zh": "只看看，不买。",
              "focus": "見るだけ",
              "note": "限定到看这一步。",
              "covers": "V辞书形 + だけ"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不要默认等于しかない的句尾",
          "explanation": "だけ本身不要求否定。",
          "examples": [
            {
              "jp": "このボタンを押すだけで、予約できます。",
              "zh": "只按这个按钮就能预约。",
              "focus": "押すだけで",
              "note": "后面是肯定的可能表达。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-zsnqhb"
    ],
    "card": {
      "meaning": "表示完成期限：最迟在……之前。",
      "connection": "时间词／V辞书形＋までに",
      "examples": [
        {
          "jp": "金曜日までにレポートを出してください。",
          "zh": "请最迟在星期五提交报告。",
          "covers": "时间N + までに"
        },
        {
          "jp": "寝るまでに、宿題を終わらせます。",
          "zh": "睡觉前把作业做完。",
          "covers": "V辞书形 + までに"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "までに给动作设定完成时限；まで表示状态或动作持续到某时。截止时点是否包含当日等由具体安排决定，不应仅据中文“之前”推断排除当天。",
      "category": "期限",
      "register": {
        "label": "日常常用"
      },
      "formation": "时间词／V辞书形＋までに",
      "formationRows": [
        {
          "label": "时点期限",
          "form": "时间＋までに",
          "derivation": "五時までに"
        },
        {
          "label": "事件前完成",
          "form": "V辞书形＋までに",
          "derivation": "寝るまでに"
        }
      ],
      "usages": [
        {
          "title": "提交期限",
          "explanation": "在期限到来前完成一次动作。",
          "examples": [
            {
              "jp": "金曜日までにレポートを出してください。",
              "zh": "请最迟在星期五提交报告。",
              "focus": "金曜日までに",
              "note": "不是连续提交到星期五。",
              "covers": "时间N + までに"
            }
          ]
        },
        {
          "title": "另一动作作为时限",
          "explanation": "在睡觉之前完成任务。",
          "examples": [
            {
              "jp": "寝るまでに、宿題を終わらせます。",
              "zh": "睡觉前把作业做完。",
              "focus": "寝るまでに",
              "note": "睡觉构成完成期限。",
              "covers": "V辞书形 + までに"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "持续到某时用まで",
          "explanation": "等待属于持续状态。",
          "examples": [
            {
              "jp": "五時まで待ちます。",
              "zh": "等到五点。",
              "focus": "五時まで",
              "note": "不是在五点前某刻完成“等”。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-1lvpd1l"
    ],
    "card": {
      "meaning": "像……那样的／像……那样地。",
      "connection": "Nの／V普通形＋ようなN・ようにV",
      "examples": [
        {
          "jp": "夢のような一日でした。",
          "zh": "那是如梦一般的一天。",
          "covers": "N のような N"
        },
        {
          "jp": "鳥のように空を飛びたいです。",
          "zh": "想像鸟一样在天空飞翔。",
          "covers": "N のように V"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ような修饰名词，ように修饰动作或状态。比喻前名词用の；动词可直接用普通形。也可用NのようなN举出有代表性的实例。",
      "category": "比喻・举例",
      "register": {
        "label": "日常常用"
      },
      "formation": "Nの／V普通形＋ようなN・ようにV",
      "formationRows": [
        {
          "label": "修饰名词",
          "form": "Nのような＋名词",
          "derivation": "夢のような話"
        },
        {
          "label": "修饰谓语",
          "form": "Nのように＋V／形容词",
          "derivation": "鳥のように飛ぶ"
        }
      ],
      "usages": [
        {
          "title": "比喻事物",
          "explanation": "ような后接所描述的名词。",
          "examples": [
            {
              "jp": "夢のような一日でした。",
              "zh": "那是如梦一般的一天。",
              "focus": "夢のような一日",
              "note": "一天被比作梦。",
              "covers": "N のような N"
            }
          ]
        },
        {
          "title": "比喻方式",
          "explanation": "ように后接动作。",
          "examples": [
            {
              "jp": "鳥のように空を飛びたいです。",
              "zh": "想像鸟一样在天空飞翔。",
              "focus": "鳥のように",
              "note": "说明飞翔的方式或形象。",
              "covers": "N のように V"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "な与に按后面词类选择",
          "explanation": "名词前不使用ように直接连接。",
          "examples": [
            {
              "jp": "田中さんのような先生になりたいです。",
              "zh": "想成为像田中那样的老师。",
              "focus": "田中さんのような先生",
              "note": "也有把田中作为代表例子的意思。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-1lax0rv"
    ],
    "card": {
      "meaning": "把样态そうだ用于修饰名词或动作。",
      "connection": "Vます词干／い形去い／な形词干＋そうなN・そうにV",
      "examples": [
        {
          "jp": "おいしそうなケーキを買いました。",
          "zh": "买了看起来很好吃的蛋糕。",
          "covers": "い形词干 + そうな N"
        },
        {
          "jp": "子どもたちが楽しそうに遊んでいます。",
          "zh": "孩子们看起来玩得很开心。",
          "covers": "い形词干 + そうに V"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "そうな后接名词，そうに后接动词等，表示外观印象。接续沿用样态规则；传闻そうだ不能直接当作此处そうな／そうに来变形。",
      "category": "样态修饰",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vます词干／い形去い／な形词干＋そうなN・そうにV",
      "formationRows": [
        {
          "label": "样态接续",
          "form": "おいしそう；元気そう",
          "derivation": "いい→よさそう；ない→なさそう"
        },
        {
          "label": "修饰形式",
          "form": "そうな＋N；そうに＋V",
          "derivation": "おいしそうな料理；楽しそうに笑う"
        }
      ],
      "usages": [
        {
          "title": "修饰物品",
          "explanation": "外观印象限定名词。",
          "examples": [
            {
              "jp": "おいしそうなケーキを買いました。",
              "zh": "买了看起来很好吃的蛋糕。",
              "focus": "おいしそうなケーキ",
              "note": "是否真的好吃尚未由外观保证。",
              "covers": "い形词干 + そうな N"
            }
          ]
        },
        {
          "title": "修饰行为",
          "explanation": "表示做动作时呈现的样子。",
          "examples": [
            {
              "jp": "子どもたちが楽しそうに遊んでいます。",
              "zh": "孩子们看起来玩得很开心。",
              "focus": "楽しそうに遊んでいます",
              "note": "从孩子们的表现判断。",
              "covers": "い形词干 + そうに V"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不要混用传闻接续",
          "explanation": "おいしいそうだ是“听说好吃”。",
          "examples": [
            {
              "jp": "この店のケーキはおいしいそうです。",
              "zh": "听说这家店的蛋糕好吃。",
              "focus": "おいしいそうです",
              "note": "保留い，不能直接变おいしいそうなケーキ作为本条样态用法。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-1tijt7r"
    ],
    "card": {
      "meaning": "正式地说明原因：由于……。",
      "connection": "普通形＋ため（に）（Nの・な形な）",
      "examples": [
        {
          "jp": "大雨のため、試合は中止になりました。",
          "zh": "由于大雨，比赛取消了。",
          "covers": "N の + ため"
        },
        {
          "jp": "電車が遅れたため、会議に間に合いませんでした。",
          "zh": "由于电车晚点，没赶上会议。",
          "covers": "Vた + ため"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "原因ため（に）常用于通知、报道等，对后项事件作说明。与目的ために同形，应根据前后项关系判断；状态、过去事实和名词尤其常见。",
      "category": "正式原因说明",
      "register": {
        "label": "书面・通知常用"
      },
      "formation": "普通形＋ため（に）（Nの・な形な）",
      "formationRows": [
        {
          "label": "普通形原因",
          "form": "V普通形／い形＋ため",
          "derivation": "遅れたため；高いため"
        },
        {
          "label": "名词与な形容词",
          "form": "Nの／な形な＋ため",
          "derivation": "雨のため；危険なため"
        }
      ],
      "usages": [
        {
          "title": "通知中的原因",
          "explanation": "解释安排变化。",
          "examples": [
            {
              "jp": "大雨のため、試合は中止になりました。",
              "zh": "由于大雨，比赛取消了。",
              "focus": "大雨のため",
              "note": "大雨不是比赛取消的目的。",
              "covers": "N の + ため"
            }
          ]
        },
        {
          "title": "过去事实导致结果",
          "explanation": "原因已实际发生。",
          "examples": [
            {
              "jp": "電車が遅れたため、会議に間に合いませんでした。",
              "zh": "由于电车晚点，没赶上会议。",
              "focus": "遅れたため",
              "note": "用た形说明已发生的原因。",
              "covers": "Vた + ため"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "与目的用法区分",
          "explanation": "前项若是追求的目标，可表示为了。",
          "examples": [
            {
              "jp": "留学するために、お金をためています。",
              "zh": "为了留学，正在存钱。",
              "focus": "留学するために",
              "note": "留学是目标，不是已发生的原因。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-tf0317"
    ],
    "card": {
      "meaning": "表示大约的数量，或用具体情形说明程度。",
      "connection": "数量＋くらい／ぐらい；V普通形等＋くらい",
      "examples": [
        {
          "jp": "駅まで十分くらいかかります。",
          "zh": "到车站大约要十分钟。",
          "covers": "数量 + くらい"
        },
        {
          "jp": "泣きたいくらいうれしかったです。",
          "zh": "高兴得都想哭了。",
          "covers": "V普通形 + くらい"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "くらい与ぐらい大多可以互换。数量后表示大约；动词等后可表示“达到……程度”，不是只用于数字。",
      "category": "概数・程度",
      "register": {
        "label": "日常常用"
      },
      "formation": "数量＋くらい／ぐらい；V普通形等＋くらい",
      "formationRows": [
        {
          "label": "近似数量",
          "form": "数量＋くらい",
          "derivation": "三十分くらい；五人ぐらい"
        },
        {
          "label": "程度",
          "form": "V普通形＋くらい",
          "derivation": "泣きたいくらい"
        }
      ],
      "usages": [
        {
          "title": "大约数量",
          "explanation": "不追求精确数值。",
          "examples": [
            {
              "jp": "駅まで十分くらいかかります。",
              "zh": "到车站大约要十分钟。",
              "focus": "十分くらい",
              "note": "十分读じゅっぷん或じっぷん。",
              "covers": "数量 + くらい"
            }
          ]
        },
        {
          "title": "程度描述",
          "explanation": "用某种反应说明程度。",
          "examples": [
            {
              "jp": "泣きたいくらいうれしかったです。",
              "zh": "高兴得都想哭了。",
              "focus": "泣きたいくらい",
              "note": "不保证真的哭了。",
              "covers": "V普通形 + くらい"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "大约时刻常用ごろ",
          "explanation": "时长与时点先分清。",
          "examples": [
            {
              "jp": "三時ごろ帰ります。",
              "zh": "三点左右回去。",
              "focus": "三時ごろ",
              "note": "三時間ぐらい则是约三小时的时长。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-163mrsv"
    ],
    "card": {
      "meaning": "表示均等分配，或以相同小份量反复进行。",
      "connection": "数量词／少し＋ずつ",
      "examples": [
        {
          "jp": "子どもにお菓子を二つずつ配りました。",
          "zh": "给每个孩子分了两个点心。",
          "covers": "数量词 + ずつ"
        },
        {
          "jp": "毎日、漢字を五つずつ覚えます。",
          "zh": "每天记五个汉字。",
          "covers": "数量词 + ずつ"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "数量词＋ずつ可说每个人得到同样数量，也可说每次增加或进行同样数量。少しずつ是逐渐、一点一点。",
      "category": "均分・渐进",
      "register": {
        "label": "日常常用"
      },
      "formation": "数量词／少し＋ずつ",
      "formationRows": [
        {
          "label": "分配与重复",
          "form": "一人に二つずつ；一日一ページずつ",
          "derivation": "ずつ本身不代替量词"
        }
      ],
      "usages": [
        {
          "title": "平均分配",
          "explanation": "每一对象分到相同数量。",
          "examples": [
            {
              "jp": "子どもにお菓子を二つずつ配りました。",
              "zh": "给每个孩子分了两个点心。",
              "focus": "二つずつ",
              "note": "不是两个孩子合起来分两个。",
              "covers": "数量词 + ずつ"
            }
          ]
        },
        {
          "title": "按固定份量推进",
          "explanation": "每次或每天执行同样一份。",
          "examples": [
            {
              "jp": "毎日、漢字を五つずつ覚えます。",
              "zh": "每天记五个汉字。",
              "focus": "五つずつ",
              "note": "毎日说明分配到每一天。",
              "covers": "数量词 + ずつ"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "少しずつ侧重渐进",
          "explanation": "无需精确量化每次的份量。",
          "examples": [
            {
              "jp": "少しずつ日本語が分かるようになりました。",
              "zh": "渐渐能听懂一些日语了。",
              "focus": "少しずつ",
              "note": "表示变化逐步推进。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n4-12hozl3"
    ],
    "card": {
      "meaning": "口语中举出几个代表项：……啦……之类。",
      "connection": "N／普通形＋とか（重复列举）",
      "examples": [
        {
          "jp": "パンとか卵とかを買ってきてください。",
          "zh": "请买些面包、鸡蛋之类回来。",
          "covers": "N とか N とか"
        },
        {
          "jp": "休みの日は、本を読むとか、散歩するとかして過ごします。",
          "zh": "休息日会读书、散步之类。",
          "covers": "V普通形 + とか"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "とか可连接名词，也可在普通形句子后列举活动、理由等。通常暗示未列完，语气较随意；句末单独とか还可表示不确定传闻。",
      "category": "口语列举",
      "register": {
        "label": "口语常用"
      },
      "formation": "N／普通形＋とか（重复列举）",
      "formationRows": [
        {
          "label": "名词列举",
          "form": "NとかNとか",
          "derivation": "パンとか卵とか"
        },
        {
          "label": "活动举例",
          "form": "V辞书形＋とか",
          "derivation": "本を読むとか映画を見るとか"
        }
      ],
      "usages": [
        {
          "title": "物品举例",
          "explanation": "随口列出几类东西。",
          "examples": [
            {
              "jp": "パンとか卵とかを買ってきてください。",
              "zh": "请买些面包、鸡蛋之类回来。",
              "focus": "パンとか卵とか",
              "note": "不是完整精确的采购明细。",
              "covers": "N とか N とか"
            }
          ]
        },
        {
          "title": "活动建议",
          "explanation": "列出可选活动而非命令全做。",
          "examples": [
            {
              "jp": "休みの日は、本を読むとか、散歩するとかして過ごします。",
              "zh": "休息日会读书、散步之类。",
              "focus": "本を読むとか、散歩するとか",
              "note": "不规定先后。",
              "covers": "V普通形 + とか"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "正式清单少用随意列举",
          "explanation": "明确列全的要求可使用と。",
          "examples": [
            {
              "jp": "申込書と写真を提出してください。",
              "zh": "请提交申请表和照片。",
              "focus": "申込書と写真",
              "note": "明确两项都需要。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "日本語教師のための教案：初級文型一覧",
          "url": "https://kyoan.u-biq.org/bunke.html"
        }
      ]
    }
  }
]);
