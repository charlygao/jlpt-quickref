// Explicitly authored lessons. Edit this file; do not generate examples at runtime.
// The first ID determines this source file; aliases may belong to another level.
window.JLPT_GRAMMAR_LESSONS = window.JLPT_GRAMMAR_LESSONS || [];
window.JLPT_GRAMMAR_LESSONS.push(...[
  {
    "ids": [
      "g-n5-001"
    ],
    "card": {
      "meaning": "用は提出话题，用です礼貌地说明身份或性质。",
      "connection": "Nは N／形容词＋です",
      "examples": [
        {
          "jp": "私は学生です。",
          "zh": "我是学生。",
          "covers": "N は N です"
        },
        {
          "jp": "この部屋は静かです。",
          "zh": "这个房间很安静。",
          "covers": "な形 + です"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "先说谈论谁或什么，再说明它是什么或怎么样。「は」读作わ。名词和な形容词可接です；い形容词保留词尾い再接です。",
      "category": "判断・描写",
      "register": {
        "label": "日常常用"
      },
      "formation": "Nは N／形容词＋です",
      "formationRows": [
        {
          "label": "名词判断",
          "form": "N は N です",
          "derivation": "私＋は＋学生＋です → 私は学生です"
        },
        {
          "label": "性质描写",
          "form": "い形＋です／な形词干＋です",
          "derivation": "高い→高いです；静か→静かです"
        }
      ],
      "usages": [
        {
          "title": "说明身份",
          "explanation": "用后面的名词介绍话题的身份。",
          "examples": [
            {
              "jp": "私は学生です。",
              "zh": "我是学生。",
              "focus": "学生です",
              "note": "「私」是话题，「学生」说明身份。",
              "covers": "N は N です"
            }
          ]
        },
        {
          "title": "说明性质",
          "explanation": "形容词也可放在です前，但不能把な放在句末。",
          "examples": [
            {
              "jp": "この部屋は静かです。",
              "zh": "这个房间很安静。",
              "focus": "静かです",
              "note": "な形容词作句末谓语时不用な。",
              "covers": "な形 + です"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不要给い形容词加だ",
          "explanation": "「です」可接在い形容词后表示礼貌；「だ」不能这样接。",
          "examples": [
            {
              "jp": "この本は高いです。",
              "zh": "这本书很贵。",
              "focus": "高いです",
              "note": "保留い；不说「高いだです」。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-002"
    ],
    "card": {
      "meaning": "名词、な形容词的礼貌否定：不是……／不……。",
      "connection": "N／な形 + ではありません",
      "examples": [
        {
          "jp": "私は先生ではありません。",
          "zh": "我不是老师。",
          "covers": "N + ではありません"
        },
        {
          "jp": "この町は静かではありません。",
          "zh": "这个城镇不安静。",
          "covers": "な形 + ではありません"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "否定名词判断或な形容词状态时，用「ではありません」。会话中也常说「じゃありません」「じゃないです」。い形容词的否定另有变形。",
      "category": "否定",
      "register": {
        "label": "日常常用"
      },
      "formation": "N／な形 + ではありません",
      "formationRows": [
        {
          "label": "名词与な形容词",
          "form": "词干＋ではありません",
          "derivation": "学生です→学生ではありません；静かです→静かではありません"
        }
      ],
      "usages": [
        {
          "title": "否定身份",
          "explanation": "对“是什么”作否定判断。",
          "examples": [
            {
              "jp": "私は先生ではありません。",
              "zh": "我不是老师。",
              "focus": "先生ではありません",
              "note": "否定的是老师这一身份。",
              "covers": "N + ではありません"
            }
          ]
        },
        {
          "title": "否定性质",
          "explanation": "な形容词用同样的结尾。",
          "examples": [
            {
              "jp": "この町は静かではありません。",
              "zh": "这个城镇不安静。",
              "focus": "静かではありません",
              "note": "静か后直接接ではありません。",
              "covers": "な形 + ではありません"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "い形容词不能直接套用",
          "explanation": "高い、寒い等先变为くない，再接です；较正式时用くありません。",
          "examples": [
            {
              "jp": "今日は寒くありません。",
              "zh": "今天不冷。",
              "focus": "寒くありません",
              "note": "寒い→寒くありません，不说寒いではありません。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-003"
    ],
    "card": {
      "meaning": "动词礼貌体：做了……／没有做……。",
      "connection": "Vます去ます + ました／ませんでした",
      "examples": [
        {
          "jp": "昨日、映画を見ました。",
          "zh": "昨天看了电影。",
          "covers": "Vます去ます + ました"
        },
        {
          "jp": "昨日は学校へ行きませんでした。",
          "zh": "昨天没有去学校。",
          "covers": "Vます去ます + ませんでした"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "把动词ます形的句尾改成ました或ませんでした，说明过去发生或没有发生的动作。动作词干保持不变，不是在辞书形后直接添加。",
      "category": "时态・礼貌体",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vます去ます + ました／ませんでした",
      "formationRows": [
        {
          "label": "过去肯定",
          "form": "ます→ました",
          "derivation": "食べます→食べました；行きます→行きました"
        },
        {
          "label": "过去否定",
          "form": "ます→ませんでした",
          "derivation": "食べます→食べませんでした"
        }
      ],
      "usages": [
        {
          "title": "过去做了",
          "explanation": "说明某个过去时间发生的动作。",
          "examples": [
            {
              "jp": "昨日、映画を見ました。",
              "zh": "昨天看了电影。",
              "focus": "見ました",
              "note": "見る→見ます→見ました。",
              "covers": "Vます去ます + ました"
            }
          ]
        },
        {
          "title": "过去没有做",
          "explanation": "说明原本可能做、但实际上没做的动作。",
          "examples": [
            {
              "jp": "昨日は学校へ行きませんでした。",
              "zh": "昨天没有去学校。",
              "focus": "行きませんでした",
              "note": "行く→行きます→行きませんでした。",
              "covers": "Vます去ます + ませんでした"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不要和普通体的た形混接",
          "explanation": "礼貌体与普通体是两套结尾，不能说「行ったました」。",
          "examples": [
            {
              "jp": "昨日は学校へ行った。",
              "zh": "昨天去了学校。",
              "focus": "行った",
              "note": "这是普通体；对应礼貌体是行きました。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-004"
    ],
    "card": {
      "meaning": "标记主语；也用于好き、分かる等表达的对象。",
      "connection": "N + が",
      "examples": [
        {
          "jp": "田中さんが来ました。",
          "zh": "田中来了。",
          "covers": "N + が"
        },
        {
          "jp": "私は猫が好きです。",
          "zh": "我喜欢猫。",
          "covers": "N が 好きです"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "「が」常指出发生动作或呈现状态的人、物，尤其适合回答“谁／什么”。在喜欢、理解、能力等表达中，也常用が标记涉及的对象，不能机械对应中文主语。",
      "category": "助词・主语",
      "register": {
        "label": "日常常用"
      },
      "formation": "N + が",
      "formationRows": [
        {
          "label": "主语",
          "form": "N が＋谓语",
          "derivation": "雨＋が＋降る→雨が降る"
        },
        {
          "label": "常见搭配",
          "form": "N が 好き／分かる",
          "derivation": "日本語＋が＋分かる→日本語が分かる"
        }
      ],
      "usages": [
        {
          "title": "指出是谁或是什么",
          "explanation": "回答谁来了时，が直接标出答案。",
          "examples": [
            {
              "jp": "田中さんが来ました。",
              "zh": "田中来了。",
              "focus": "田中さんが",
              "note": "可回答「誰が来ましたか」。",
              "covers": "N + が"
            }
          ]
        },
        {
          "title": "喜欢或理解的对象",
          "explanation": "好き和分かる常与が搭配。",
          "examples": [
            {
              "jp": "私は猫が好きです。",
              "zh": "我喜欢猫。",
              "focus": "猫が好き",
              "note": "猫是喜欢的对象，不是猫在喜欢。",
              "covers": "N が 好きです"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "は与が的信息作用不同",
          "explanation": "は先提出话题，が可突出答案；同一句不能只按中文“是”来选择。",
          "examples": [
            {
              "jp": "この本は私が書きました。",
              "zh": "这本书是我写的。",
              "focus": "私が",
              "note": "本是话题，が突出作者是我。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-005"
    ],
    "card": {
      "meaning": "标记动作的对象，也可标记经过或离开的地点。",
      "connection": "N + を + V",
      "examples": [
        {
          "jp": "毎晩、本を読みます。",
          "zh": "每天晚上读书。",
          "covers": "N を + 他动词"
        },
        {
          "jp": "毎朝、七時に家を出ます。",
          "zh": "每天早上七点离开家。",
          "covers": "地点 を + 出る"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "「を」通常读作お。它最常标出他动词的对象；与通る、出る等移动动词搭配时，还能表示经过的空间或离开的地方。",
      "category": "助词・对象",
      "register": {
        "label": "日常常用"
      },
      "formation": "N + を + V",
      "formationRows": [
        {
          "label": "动作对象",
          "form": "N を＋他动词",
          "derivation": "本＋を＋読む→本を読む"
        },
        {
          "label": "移动路线或起点",
          "form": "地点＋を＋通る／出る",
          "derivation": "公園を通る；家を出る"
        }
      ],
      "usages": [
        {
          "title": "动作作用于什么",
          "explanation": "読む、食べる、買う等常用を标记对象。",
          "examples": [
            {
              "jp": "毎晩、本を読みます。",
              "zh": "每天晚上读书。",
              "focus": "本を読みます",
              "note": "本是阅读的对象。",
              "covers": "N を + 他动词"
            }
          ]
        },
        {
          "title": "经过或离开哪里",
          "explanation": "移动动词与を搭配，地点不一定是被作用的对象。",
          "examples": [
            {
              "jp": "毎朝、七時に家を出ます。",
              "zh": "每天早上七点离开家。",
              "focus": "家を出ます",
              "note": "家是离开的起点。",
              "covers": "地点 を + 出る"
            },
            {
              "jp": "毎朝、公園を通って学校へ行きます。",
              "zh": "每天早上穿过公园去学校。",
              "focus": "公園を通って",
              "note": "公園是移动经过的地方；这里的を不表示动作对象。"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "动作地点一般用で",
          "explanation": "在图书馆读书时，图书馆是动作场所，书才是对象。",
          "examples": [
            {
              "jp": "図書館で本を読みます。",
              "zh": "在图书馆读书。",
              "focus": "図書館で",
              "note": "で标地点，を标阅读对象。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-006"
    ],
    "card": {
      "meaning": "标记具体时间、到达点、存在地点或动作对象。",
      "connection": "时间／地点／对象 + に",
      "examples": [
        {
          "jp": "毎朝七時に起きます。",
          "zh": "每天早上七点起床。",
          "covers": "时间 + に"
        },
        {
          "jp": "駅の前に友達がいます。",
          "zh": "车站前面有朋友。",
          "covers": "地点 + に"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "「に」的意义由后面的动词和名词共同决定。先判断是在说几点、去哪里、在哪里存在，还是向谁做某事，再选择用法。",
      "category": "助词・时间地点",
      "register": {
        "label": "日常常用"
      },
      "formation": "时间／地点／对象 + に",
      "formationRows": [
        {
          "label": "时间与到达点",
          "form": "七時に／駅に",
          "derivation": "七時に起きる；駅に着く"
        },
        {
          "label": "存在与对象",
          "form": "場所に／人に",
          "derivation": "庭にいる；先生に聞く"
        }
      ],
      "usages": [
        {
          "title": "具体时间",
          "explanation": "说明动作在几点等具体时点发生。",
          "examples": [
            {
              "jp": "毎朝七時に起きます。",
              "zh": "每天早上七点起床。",
              "focus": "七時に",
              "note": "七時是具体时刻。",
              "covers": "时间 + に"
            }
          ]
        },
        {
          "title": "到达点或存在地点",
          "explanation": "移动的目的地和人、物存在的地方都常用に。",
          "examples": [
            {
              "jp": "駅の前に友達がいます。",
              "zh": "车站前面有朋友。",
              "focus": "駅の前に",
              "note": "いる表示存在，地点用に。",
              "covers": "地点 + に"
            },
            {
              "jp": "電車は九時に駅に着きます。",
              "zh": "电车九点到站。",
              "focus": "駅に着きます",
              "note": "駅に标记到达点；同句的九時に标记到达时间。"
            }
          ]
        },
        {
          "title": "动作的对象",
          "explanation": "问谁、给谁等要看具体动词搭配。",
          "examples": [
            {
              "jp": "先生に質問しました。",
              "zh": "向老师提了问题。",
              "focus": "先生に",
              "note": "先生是提问的对象。"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "今日、明日通常不加に",
          "explanation": "相对日期作时间副词时通常直接放在句中。",
          "examples": [
            {
              "jp": "明日、東京へ行きます。",
              "zh": "明天去东京。",
              "focus": "明日",
              "note": "普通时间用法不说明日に行きます。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-007"
    ],
    "card": {
      "meaning": "标记动作场所、手段或材料，也可说明原因、参与人数。",
      "connection": "地点／手段／材料／原因／人数 + で",
      "examples": [
        {
          "jp": "図書館で勉強します。",
          "zh": "在图书馆学习。",
          "covers": "地点 + で"
        },
        {
          "jp": "電車で会社へ行きます。",
          "zh": "坐电车去公司。",
          "covers": "交通手段 + で"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "「で」常回答“在哪里做”“用什么做”，也能说明原因或有几个人一起做。先看后面的谓语，再判断で的作用；表示人或物静态存在的地点一般用に。",
      "category": "助词・场所手段",
      "register": {
        "label": "日常常用"
      },
      "formation": "地点／手段／材料／原因／人数 + で",
      "formationRows": [
        {
          "label": "动作地点",
          "form": "地点＋で＋动作",
          "derivation": "図書館で勉強する"
        },
        {
          "label": "工具或交通手段",
          "form": "Nで＋动作",
          "derivation": "ペンで書く；電車で行く"
        }
      ],
      "usages": [
        {
          "title": "在哪里做",
          "explanation": "强调动作发生的场所。",
          "examples": [
            {
              "jp": "図書館で勉強します。",
              "zh": "在图书馆学习。",
              "focus": "図書館で",
              "note": "勉強する是动作，不是单纯存在。",
              "covers": "地点 + で"
            }
          ]
        },
        {
          "title": "用什么做",
          "explanation": "交通工具、语言和工具等可作手段。",
          "examples": [
            {
              "jp": "電車で会社へ行きます。",
              "zh": "坐电车去公司。",
              "focus": "電車で",
              "note": "で标出交通手段。",
              "covers": "交通手段 + で"
            }
          ]
        },
        {
          "title": "由于什么原因",
          "explanation": "名词可用で说明生病等原因。",
          "examples": [
            {
              "jp": "風邪で学校を休みました。",
              "zh": "因为感冒没去上学。",
              "focus": "風邪で",
              "note": "風邪是请假的原因；这里的で不是地点或工具。"
            }
          ]
        },
        {
          "title": "几个人一起做",
          "explanation": "人数后加で，说明共同参与动作的人员规模。",
          "examples": [
            {
              "jp": "三人でこの仕事をしました。",
              "zh": "三个人一起做了这项工作。",
              "focus": "三人で",
              "note": "强调三人共同完成，不是各自单独做三次。"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "存在地点用に",
          "explanation": "比较“在教室学习”和“人在教室”。",
          "examples": [
            {
              "jp": "教室に学生がいます。",
              "zh": "教室里有学生。",
              "focus": "教室に",
              "note": "いる说明存在；不说教室で学生がいます。"
            }
          ]
        }
      ],
      "specialCases": [
        {
          "title": "材料与原料",
          "explanation": "看得出材料时常用で；强调原料经过变化时也常用から。",
          "examples": [
            {
              "jp": "この机は木でできています。",
              "zh": "这张桌子是木头做的。",
              "focus": "木で",
              "note": "这里说明桌子的材料。"
            }
          ]
        }
      ],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-008"
    ],
    "card": {
      "meaning": "表示和、共同做事，或引用说话内容。",
      "connection": "NとN／人とV／引用＋と",
      "examples": [
        {
          "jp": "パンと卵を買いました。",
          "zh": "买了面包和鸡蛋。",
          "covers": "N と N"
        },
        {
          "jp": "友達と映画を見ました。",
          "zh": "和朋友看了电影。",
          "covers": "人 と + V"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "名词之间的と把项目并列；人后面的と可表示一起行动的对象。引用时，把原话或内容放在と前，再接言う、思う等。",
      "category": "助词・并列引用",
      "register": {
        "label": "日常常用"
      },
      "formation": "NとN／人とV／引用＋と",
      "formationRows": [
        {
          "label": "并列与同伴",
          "form": "NとN／人とV",
          "derivation": "パンと卵；友達と行く"
        },
        {
          "label": "引用",
          "form": "「原话」と言う",
          "derivation": "「ありがとう」と言う"
        }
      ],
      "usages": [
        {
          "title": "列出项目",
          "explanation": "把当前要说的项目明确并列。",
          "examples": [
            {
              "jp": "パンと卵を買いました。",
              "zh": "买了面包和鸡蛋。",
              "focus": "パンと卵",
              "note": "列出这句话中购买的两个项目。",
              "covers": "N と N"
            }
          ]
        },
        {
          "title": "与谁一起",
          "explanation": "と标记共同参与动作的人。",
          "examples": [
            {
              "jp": "友達と映画を見ました。",
              "zh": "和朋友看了电影。",
              "focus": "友達と",
              "note": "朋友是一起看电影的人。",
              "covers": "人 と + V"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "引用的と不表示和",
          "explanation": "引用部分整体作为说话内容。",
          "examples": [
            {
              "jp": "店員は「ありがとうございます」と言いました。",
              "zh": "店员说了“谢谢”。",
              "focus": "「ありがとうございます」と",
              "note": "と标引用；原话可以保留礼貌体。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-009"
    ],
    "card": {
      "meaning": "连接两个名词，表示所属、属性等关系。",
      "connection": "N + の + N",
      "examples": [
        {
          "jp": "これは妹の本です。",
          "zh": "这是妹妹的书。",
          "covers": "N の N"
        },
        {
          "jp": "日本語の先生に会いました。",
          "zh": "见了日语老师。",
          "covers": "N の N"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "「AのB」以B为中心，A说明B是谁的、什么方面的、什么材料的等。中文不一定每次都译成“的”，但日语的名词之间常需要の。",
      "category": "助词・名词修饰",
      "register": {
        "label": "日常常用"
      },
      "formation": "N + の + N",
      "formationRows": [
        {
          "label": "名词修饰名词",
          "form": "AのB",
          "derivation": "私＋の＋本→私の本；日本語＋の＋先生→日本語の先生"
        }
      ],
      "usages": [
        {
          "title": "所属关系",
          "explanation": "说明东西属于谁。",
          "examples": [
            {
              "jp": "これは妹の本です。",
              "zh": "这是妹妹的书。",
              "focus": "妹の本",
              "note": "本是中心名词。",
              "covers": "N の N"
            }
          ]
        },
        {
          "title": "内容或属性",
          "explanation": "说明职业、用途等，不一定表示拥有。",
          "examples": [
            {
              "jp": "日本語の先生に会いました。",
              "zh": "见了日语老师。",
              "focus": "日本語の先生",
              "note": "日本語说明所教的科目。",
              "covers": "N の N"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "い形容词修饰名词不加の",
          "explanation": "高い、新しい等直接放在名词前；な形容词则用な。",
          "examples": [
            {
              "jp": "新しい本を買いました。",
              "zh": "买了一本新书。",
              "focus": "新しい本",
              "note": "不说新しいの本。"
            }
          ]
        }
      ],
      "specialCases": [
        {
          "title": "已知名词可省略",
          "explanation": "双方清楚所指的东西时，の可以代替后面的名词。",
          "examples": [
            {
              "jp": "この傘は私のです。",
              "zh": "这把伞是我的。",
              "focus": "私のです",
              "note": "相当于私の傘です。"
            }
          ]
        }
      ],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-010"
    ],
    "card": {
      "meaning": "表示时间或空间的起点和终点：从……到……。",
      "connection": "Nから／Nまで",
      "examples": [
        {
          "jp": "授業は九時から十二時までです。",
          "zh": "上课时间是九点到十二点。",
          "covers": "时间 から 时间 まで"
        },
        {
          "jp": "駅から学校まで歩きます。",
          "zh": "从车站步行到学校。",
          "covers": "地点 から 地点 まで"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "から标起点，まで标到达的界限，可以一起用，也可只说其中一个。表示“最迟在某时完成”时要用までに，不能与持续到某时的まで混淆。",
      "category": "时间・范围",
      "register": {
        "label": "日常常用"
      },
      "formation": "Nから／Nまで",
      "formationRows": [
        {
          "label": "起点与界限",
          "form": "NからNまで",
          "derivation": "九時から五時まで；東京から大阪まで"
        }
      ],
      "usages": [
        {
          "title": "时间范围",
          "explanation": "说明工作、营业等持续多久。",
          "examples": [
            {
              "jp": "授業は九時から十二時までです。",
              "zh": "上课时间是九点到十二点。",
              "focus": "九時から十二時まで",
              "note": "从开始时刻到结束时刻。",
              "covers": "时间 から 时间 まで"
            }
          ]
        },
        {
          "title": "空间范围",
          "explanation": "说明移动从哪里开始、到哪里结束。",
          "examples": [
            {
              "jp": "駅から学校まで歩きます。",
              "zh": "从车站步行到学校。",
              "focus": "駅から学校まで",
              "note": "から为起点，まで为终点。",
              "covers": "地点 から 地点 まで"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "まで与までに",
          "explanation": "まで是持续的界限；までに是完成的期限。",
          "examples": [
            {
              "jp": "五時までに宿題を出してください。",
              "zh": "请最迟在五点交作业。",
              "focus": "五時までに",
              "note": "交作业在期限内完成，不是一直交到五点。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-011"
    ],
    "card": {
      "meaning": "说明某处有什么或有谁：ある用于物、植物等，いる用于人和动物。",
      "connection": "場所に Nが ある／いる",
      "examples": [
        {
          "jp": "庭に大きな木があります。",
          "zh": "院子里有一棵大树。",
          "covers": "N が あります"
        },
        {
          "jp": "庭に猫がいます。",
          "zh": "院子里有猫。",
          "covers": "N が います"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "典型句型是“地点に＋人或物が＋ある／いる”。植物通常用ある；选择依据是日语表达习惯，不能只按生物学上是否有生命判断。",
      "category": "存在",
      "register": {
        "label": "日常常用"
      },
      "formation": "場所に Nが ある／いる",
      "formationRows": [
        {
          "label": "物、植物",
          "form": "Nがある",
          "derivation": "机の上に本がある；庭に木がある"
        },
        {
          "label": "人、动物",
          "form": "Nがいる",
          "derivation": "庭に猫がいる"
        }
      ],
      "usages": [
        {
          "title": "某处有什么",
          "explanation": "用ある说明物品或植物存在。",
          "examples": [
            {
              "jp": "庭に大きな木があります。",
              "zh": "院子里有一棵大树。",
              "focus": "木があります",
              "note": "树虽然有生命，日语仍通常用ある。",
              "covers": "N が あります"
            }
          ]
        },
        {
          "title": "某处有谁",
          "explanation": "人和动物通常用いる。",
          "examples": [
            {
              "jp": "庭に猫がいます。",
              "zh": "院子里有猫。",
              "focus": "猫がいます",
              "note": "地点に、存在者が。",
              "covers": "N が います"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "已知对象在哪里",
          "explanation": "话题已确定时，常把该对象放到は前。",
          "examples": [
            {
              "jp": "先生は教室にいます。",
              "zh": "老师在教室里。",
              "focus": "教室にいます",
              "note": "回答老师在哪里，不是在介绍教室里有谁。"
            }
          ]
        }
      ],
      "specialCases": [
        {
          "title": "活动发生用で",
          "explanation": "ある表示举行活动时，地点常用で。",
          "examples": [
            {
              "jp": "明日、学校で試験があります。",
              "zh": "明天学校举行考试。",
              "focus": "学校で試験があります",
              "note": "这里是活动举行地点，与静态存在句区分。"
            }
          ]
        }
      ],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-012"
    ],
    "card": {
      "meaning": "い形容词通过词尾变化表达否定和过去。",
      "connection": "い→くない／かった／くなかった",
      "examples": [
        {
          "jp": "この店は高くないです。",
          "zh": "这家店不贵。",
          "covers": "い形去い + くないです"
        },
        {
          "jp": "昨日は寒かったです。",
          "zh": "昨天很冷。",
          "covers": "い形去い + かったです"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "い形容词通常保留词干，把最后的い换成くない、かった、くなかった。礼貌表达可在这些形式后加です；「いい」的活用采用よい的词干。",
      "category": "形容词活用",
      "register": {
        "label": "日常常用"
      },
      "formation": "い→くない／かった／くなかった",
      "formationRows": [
        {
          "label": "否定",
          "form": "高い→高くない",
          "derivation": "高いです→高くないです"
        },
        {
          "label": "过去与过去否定",
          "form": "高い→高かった／高くなかった",
          "derivation": "高かったです；高くなかったです"
        },
        {
          "label": "いい的特殊变化",
          "form": "いい→よくない／よかった",
          "derivation": "いいです→よかったです"
        }
      ],
      "usages": [
        {
          "title": "描述现在与否定",
          "explanation": "否定时改词尾，不使用名词的ではない。",
          "examples": [
            {
              "jp": "この店は高くないです。",
              "zh": "这家店不贵。",
              "focus": "高くないです",
              "note": "高い→高くない＋です。",
              "covers": "い形去い + くないです"
            }
          ]
        },
        {
          "title": "描述过去",
          "explanation": "过去时用かった，不在い后加でした。",
          "examples": [
            {
              "jp": "昨日は寒かったです。",
              "zh": "昨天很冷。",
              "focus": "寒かったです",
              "note": "寒い→寒かった＋です。",
              "covers": "い形去い + かったです"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "好用よかった，不用いかった",
          "explanation": "いい的变化从よい出发。",
          "examples": [
            {
              "jp": "昨日の天気はよかったです。",
              "zh": "昨天天气很好。",
              "focus": "よかったです",
              "note": "いい→よかった，属于需要单记的变化。"
            }
          ]
        }
      ],
      "specialCases": [
        {
          "title": "过去否定",
          "explanation": "先理解否定词尾くない，再把ない变成なかった。",
          "examples": [
            {
              "jp": "昨日は暑くなかったです。",
              "zh": "昨天不热。",
              "focus": "暑くなかったです",
              "note": "暑い→暑くない→暑くなかった。"
            }
          ]
        }
      ],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-013"
    ],
    "card": {
      "meaning": "な形容词作谓语时用だ／です，修饰名词时用な。",
      "connection": "な形＋だ／です；な形＋な＋N",
      "examples": [
        {
          "jp": "この町は静かです。",
          "zh": "这个城镇很安静。",
          "covers": "な形 + です"
        },
        {
          "jp": "静かな部屋で勉強します。",
          "zh": "在安静的房间学习。",
          "covers": "な形 な N"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "静か、便利等既能在句末描写状态，也能修饰名词。否定和过去结尾与名词判断句相似；只有修饰名词等特定位置才出现な。",
      "category": "形容词活用",
      "register": {
        "label": "日常常用"
      },
      "formation": "な形＋だ／です；な形＋な＋N",
      "formationRows": [
        {
          "label": "句末与修饰",
          "form": "静かです／静かな町",
          "derivation": "静か＋です；静か＋な＋町"
        },
        {
          "label": "否定、过去",
          "form": "静かではない／静かだった",
          "derivation": "静かではありません；静かでした"
        }
      ],
      "usages": [
        {
          "title": "句末说明状态",
          "explanation": "礼貌体直接在词干后接です。",
          "examples": [
            {
              "jp": "この町は静かです。",
              "zh": "这个城镇很安静。",
              "focus": "静かです",
              "note": "句末不用静かなです。",
              "covers": "な形 + です"
            }
          ]
        },
        {
          "title": "修饰名词",
          "explanation": "名词前需要な。",
          "examples": [
            {
              "jp": "静かな部屋で勉強します。",
              "zh": "在安静的房间学习。",
              "focus": "静かな部屋",
              "note": "静か＋な＋部屋。",
              "covers": "な形 な N"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "以い结尾的不一定是い形容词",
          "explanation": "きれい、嫌い是な形容词，不能只看最后一个假名分类。",
          "examples": [
            {
              "jp": "きれいな花ですね。",
              "zh": "花真漂亮啊。",
              "focus": "きれいな花",
              "note": "きれい修饰名词时加な。"
            }
          ]
        }
      ],
      "specialCases": [
        {
          "title": "否定、过去与连接",
          "explanation": "过去否定用ではなかった，连接另一个性质常用で。",
          "examples": [
            {
              "jp": "この店は便利で、静かです。",
              "zh": "这家店既方便又安静。",
              "focus": "便利で",
              "note": "便利＋で；不说便利くて。"
            },
            {
              "jp": "昨日は暇ではありませんでした。",
              "zh": "昨天没有空。",
              "focus": "暇ではありませんでした",
              "note": "礼貌体的过去否定。"
            }
          ]
        }
      ],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-014"
    ],
    "card": {
      "meaning": "请对方做某事；也用于指示。表达礼貌，但语气较直接。",
      "connection": "Vて + ください",
      "examples": [
        {
          "jp": "ここに名前を書いてください。",
          "zh": "请在这里写上名字。",
          "covers": "Vて + ください"
        },
        {
          "jp": "もう一度説明してください。",
          "zh": "请再说明一次。",
          "covers": "Vて + ください"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "请听话人做某个动作。常见于请求、课堂指示、办事指引等场景。虽然使用了礼貌表达「ください」，仍是直接告诉对方该做什么；向上级提出有负担的请求时，通常换成询问对方能否帮忙的说法。",
      "category": "请求・指示",
      "register": {
        "label": "礼貌但较直接",
        "note": "是否显得客气，还取决于请求内容、双方关系和语气。"
      },
      "formation": "动词て形 + ください",
      "formationRows": [
        {
          "label": "五段动词",
          "form": "書いて + ください",
          "derivation": "書く → 書いて → 書いてください"
        },
        {
          "label": "一段动词",
          "form": "食べて + ください",
          "derivation": "食べる → 食べて → 食べてください"
        },
        {
          "label": "する／来る",
          "form": "して／来て + ください",
          "derivation": "する → して → してください；来る（くる）→ 来て（きて）→ 来てください"
        }
      ],
      "usages": [
        {
          "title": "请对方帮忙或配合",
          "explanation": "动作由听话人完成。需要对方再做一次、写下信息等，都可以这样请求。",
          "examples": [
            {
              "jp": "すみません、もう一度説明してください。",
              "zh": "不好意思，请再说明一次。",
              "focus": "説明してください",
              "note": "说话人请对方重新说明；「すみません」能缓和语气。"
            }
          ]
        },
        {
          "title": "给出操作或课堂指示",
          "explanation": "在办手续、课堂或操作说明中，直接说明下一步该做什么。",
          "examples": [
            {
              "jp": "ここに名前を書いてください。",
              "zh": "请在这里写上名字。",
              "focus": "書いてください",
              "note": "例如工作人员指着表格，请办事的人填写姓名。"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "先变て形，不能直接接辞书形",
          "explanation": "「ください」前需要完整的て形；て形也可能以「で」结尾。",
          "examples": [
            {
              "jp": "ここに名前を書くください。",
              "zh": "想表达：请在这里写上名字。",
              "focus": "書くください",
              "verdict": "incorrect",
              "note": "错误在于「書く」没有变成て形。"
            },
            {
              "jp": "この本を読んでください。",
              "zh": "请读这本书。",
              "focus": "読んでください",
              "note": "読む → 読んで；结尾是「で」也属于て形。"
            }
          ]
        },
        {
          "title": "区分请对方做，还是自己提出帮助",
          "explanation": "想说“要不要我来做”，通常用「～ましょうか」。两种句子都正确，但动作执行者不同。",
          "examples": [
            {
              "jp": "窓を開けてください。",
              "zh": "请你把窗户打开。",
              "focus": "開けてください",
              "note": "请求对方开窗。"
            },
            {
              "jp": "窓を開けましょうか。",
              "zh": "要不要我把窗户打开？",
              "focus": "開けましょうか",
              "note": "自己提出帮忙开窗。"
            }
          ]
        },
        {
          "title": "礼貌形式也可能显得直接",
          "explanation": "向老师或上级请求额外帮助时，可以询问“能否请您……”。这属于语境选择，不是说「～てください」在语法上错误。",
          "examples": [
            {
              "jp": "先生、この作文を見ていただけますか。",
              "zh": "老师，能否请您看一下这篇作文？",
              "focus": "見ていただけますか",
              "note": "给对方选择余地，比直接要求「見てください」更委婉。"
            }
          ]
        }
      ],
      "specialCases": [
        {
          "title": "请不要做：～ないでください",
          "explanation": "否定请求用“动词ない形＋でください”，不是把「ください」本身变为否定。",
          "examples": [
            {
              "jp": "ここで写真を撮らないでください。",
              "zh": "请不要在这里拍照。",
              "focus": "撮らないでください",
              "note": "撮る → 撮らない → 撮らないでください。"
            }
          ]
        }
      ],
      "references": [
        {
          "title": "国際交流基金：请求与主动提供帮助的教学区分",
          "url": "https://www.jpf.go.jp/j/project/japanese/teach/tsushin/report/201711.html"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-015"
    ],
    "card": {
      "meaning": "请对方不要做某事。",
      "connection": "Vない + でください",
      "examples": [
        {
          "jp": "ここで写真を撮らないでください。",
          "zh": "请不要在这里拍照。",
          "covers": "Vない + でください"
        },
        {
          "jp": "明日の約束を忘れないでください。",
          "zh": "请不要忘记明天的约定。",
          "covers": "Vない + でください"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "动词ない形加でください表示否定请求，要求对方避免某个动作；与“不做也可以”的なくてもいい不同。",
      "category": "否定请求",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vない + でください",
      "formationRows": [
        {
          "label": "否定请求",
          "form": "ない形＋でください",
          "derivation": "撮る→撮らない→撮らないでください；する→しないでください"
        }
      ],
      "usages": [
        {
          "title": "提醒遵守要求",
          "explanation": "明确希望对方避免的行为。",
          "examples": [
            {
              "jp": "ここで写真を撮らないでください。",
              "zh": "请不要在这里拍照。",
              "focus": "撮らないでください",
              "note": "撮る先变为撮らない。",
              "covers": "Vない + でください"
            }
          ]
        },
        {
          "title": "请求不要忘记",
          "explanation": "提醒对方记住安排。",
          "examples": [
            {
              "jp": "明日の約束を忘れないでください。",
              "zh": "请不要忘记明天的约定。",
              "focus": "忘れないでください",
              "note": "希望对方记住，不是允许忘记。",
              "covers": "Vない + でください"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不必做与请别做不同",
          "explanation": "なくてもいい允许不做，但没有禁止做。",
          "examples": [
            {
              "jp": "明日は来なくてもいいです。",
              "zh": "明天不来也可以。",
              "focus": "来なくてもいいです",
              "note": "不来被允许，来并未被禁止。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-016"
    ],
    "card": {
      "meaning": "允许做某事；问句表示征求许可。",
      "connection": "Vて + もいい",
      "examples": [
        {
          "jp": "ここに座ってもいいですか。",
          "zh": "可以坐在这里吗？",
          "covers": "Vて + もいいですか"
        },
        {
          "jp": "この辞書を使ってもいいです。",
          "zh": "可以使用这本词典。",
          "covers": "Vて + もいいです"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "て形加もいい说明某行为被允许。てもいいですか是在问是否允许，不是在询问有没有能力。",
      "category": "许可",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vて + もいい",
      "formationRows": [
        {
          "label": "许可",
          "form": "て形＋もいい",
          "derivation": "座る→座って→座ってもいい"
        }
      ],
      "usages": [
        {
          "title": "征求许可",
          "explanation": "行动前询问是否允许。",
          "examples": [
            {
              "jp": "ここに座ってもいいですか。",
              "zh": "可以坐在这里吗？",
              "focus": "座ってもいいですか",
              "note": "问许可，而非能否坐得下。",
              "covers": "Vて + もいいですか"
            }
          ]
        },
        {
          "title": "给予许可",
          "explanation": "告诉对方可以做。",
          "examples": [
            {
              "jp": "この辞書を使ってもいいです。",
              "zh": "可以使用这本词典。",
              "focus": "使ってもいいです",
              "note": "使う→使って。",
              "covers": "Vて + もいいです"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "拒绝许可注意语气",
          "explanation": "直接说てはいけません可能显得严厉，也可解释不方便的原因。",
          "examples": [
            {
              "jp": "すみません、今使っています。",
              "zh": "不好意思，我现在正在用。",
              "focus": "今使っています",
              "note": "借东西的语境中，可委婉说明暂时不能借。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-017"
    ],
    "card": {
      "meaning": "表示规定或要求：不许……。",
      "connection": "Vて + はいけない",
      "examples": [
        {
          "jp": "ここに入ってはいけません。",
          "zh": "不可以进入这里。",
          "covers": "Vて + はいけません"
        },
        {
          "jp": "試験中は話してはいけません。",
          "zh": "考试期间不许说话。",
          "covers": "Vて + はいけません"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "てはいけない禁止某个行为，礼貌体为てはいけません。它有明确指示性，常用于规则说明，并不是“不需要做”的意思。",
      "category": "禁止",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vて + はいけない",
      "formationRows": [
        {
          "label": "禁止",
          "form": "て形＋はいけない",
          "derivation": "入る→入って→入ってはいけない"
        }
      ],
      "usages": [
        {
          "title": "场所规则",
          "explanation": "明确禁止的行为。",
          "examples": [
            {
              "jp": "ここに入ってはいけません。",
              "zh": "不可以进入这里。",
              "focus": "入ってはいけません",
              "note": "入る先变成入って。",
              "covers": "Vて + はいけません"
            }
          ]
        },
        {
          "title": "行为要求",
          "explanation": "说明某段时间内的规则。",
          "examples": [
            {
              "jp": "試験中は話してはいけません。",
              "zh": "考试期间不许说话。",
              "focus": "話してはいけません",
              "note": "表示规则上的禁止。",
              "covers": "Vて + はいけません"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不必做不等于禁止做",
          "explanation": "不需要来应说来なくてもいい。",
          "examples": [
            {
              "jp": "明日は来なくてもいいです。",
              "zh": "明天可以不来。",
              "focus": "来なくてもいいです",
              "note": "没有禁止对方来。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-018"
    ],
    "card": {
      "meaning": "表示进行中的动作、动作后的状态或反复习惯。",
      "connection": "Vて + いる",
      "examples": [
        {
          "jp": "今、本を読んでいます。",
          "zh": "现在正在读书。",
          "covers": "Vて + います"
        },
        {
          "jp": "姉は結婚しています。",
          "zh": "姐姐已经结婚了。",
          "covers": "Vて + います"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ている不只对应“正在”。持续动作可表示进行；結婚する等常表示变化后的状态。解释时要结合动词和时间语境。",
      "category": "进行・状态",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vて + いる",
      "formationRows": [
        {
          "label": "基本与礼貌体",
          "form": "ている／ています",
          "derivation": "読む→読んでいる；結婚する→結婚している"
        }
      ],
      "usages": [
        {
          "title": "进行中的动作",
          "explanation": "描述仍在持续的动作。",
          "examples": [
            {
              "jp": "今、本を読んでいます。",
              "zh": "现在正在读书。",
              "focus": "読んでいます",
              "note": "阅读正在进行。",
              "covers": "Vて + います"
            }
          ]
        },
        {
          "title": "变化后的状态",
          "explanation": "动作已发生，结果仍存在。",
          "examples": [
            {
              "jp": "姉は結婚しています。",
              "zh": "姐姐已经结婚了。",
              "focus": "結婚しています",
              "note": "通常表示已婚，不是在举行婚礼。",
              "covers": "Vて + います"
            }
          ]
        },
        {
          "title": "日常习惯",
          "explanation": "与毎日等搭配可表示反复进行。",
          "examples": [
            {
              "jp": "毎朝走っています。",
              "zh": "每天早晨都跑步。",
              "focus": "走っています",
              "note": "不保证说话此刻正在跑。"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不知道通常说知らない",
          "explanation": "肯定用知っています，一般否定用知りません。",
          "examples": [
            {
              "jp": "その人は知りません。",
              "zh": "我不认识那个人。",
              "focus": "知りません",
              "note": "一般回答不用知っていません。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-019"
    ],
    "card": {
      "meaning": "委婉邀请：要不要一起……？",
      "connection": "Vます去ます + ませんか",
      "examples": [
        {
          "jp": "一緒に昼ご飯を食べませんか。",
          "zh": "要不要一起吃午饭？",
          "covers": "Vます去ます + ませんか"
        },
        {
          "jp": "日曜日に映画を見に行きませんか。",
          "zh": "周日要不要一起去看电影？",
          "covers": "Vます去ます + ませんか"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ませんか给对方选择余地，常用来邀请共同活动。虽然形式是否定疑问，不能在邀请语境中只译为“你不做吗”。",
      "category": "邀请",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vます去ます + ませんか",
      "formationRows": [
        {
          "label": "邀请",
          "form": "ます→ませんか",
          "derivation": "食べます→食べませんか"
        }
      ],
      "usages": [
        {
          "title": "共同用餐",
          "explanation": "邀请参加尚未决定的活动。",
          "examples": [
            {
              "jp": "一緒に昼ご飯を食べませんか。",
              "zh": "要不要一起吃午饭？",
              "focus": "食べませんか",
              "note": "一緒に明确包括说话人。",
              "covers": "Vます去ます + ませんか"
            }
          ]
        },
        {
          "title": "约定出行",
          "explanation": "可加具体时间与活动。",
          "examples": [
            {
              "jp": "日曜日に映画を見に行きませんか。",
              "zh": "周日要不要一起去看电影？",
              "focus": "行きませんか",
              "note": "邀请一起去看电影。",
              "covers": "Vます去ます + ませんか"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "接受邀请可用ましょう",
          "explanation": "不要把邀请机械当作否定事实来回答。",
          "examples": [
            {
              "jp": "いいですね。一緒に行きましょう。",
              "zh": "好啊，一起去吧。",
              "focus": "行きましょう",
              "note": "表示接受并共同决定。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-020"
    ],
    "card": {
      "meaning": "提议一起行动，也可表示自己主动承担。",
      "connection": "Vます去ます + ましょう",
      "examples": [
        {
          "jp": "少し休みましょう。",
          "zh": "稍微休息一下吧。",
          "covers": "Vます去ます + ましょう"
        },
        {
          "jp": "その仕事は私がやりましょう。",
          "zh": "那项工作由我来做吧。",
          "covers": "Vます去ます + ましょう"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ましょう常用于共同做事的提议；根据主语和语境，也能表示“我来做”。初次询问对方是否愿意参加时，ませんか往往更留有余地。",
      "category": "提议・意志",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vます去ます + ましょう",
      "formationRows": [
        {
          "label": "提议",
          "form": "ます→ましょう",
          "derivation": "休みます→休みましょう"
        }
      ],
      "usages": [
        {
          "title": "共同做事",
          "explanation": "双方准备行动时提出建议。",
          "examples": [
            {
              "jp": "少し休みましょう。",
              "zh": "稍微休息一下吧。",
              "focus": "休みましょう",
              "note": "提议包括自己在内的人休息。",
              "covers": "Vます去ます + ましょう"
            }
          ]
        },
        {
          "title": "自己承担",
          "explanation": "明确说私が时，可以是主动承担。",
          "examples": [
            {
              "jp": "その仕事は私がやりましょう。",
              "zh": "那项工作由我来做吧。",
              "focus": "やりましょう",
              "note": "并非一定是大家一起做。",
              "covers": "Vます去ます + ましょう"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "询问是否需要帮助用ましょうか",
          "explanation": "加か后可让对方决定是否接受。",
          "examples": [
            {
              "jp": "荷物を持ちましょうか。",
              "zh": "需要我帮您拿行李吗？",
              "focus": "持ちましょうか",
              "note": "询问对方是否需要帮助。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-021"
    ],
    "card": {
      "meaning": "表达想做某事的愿望。",
      "connection": "Vます去ます + たい",
      "examples": [
        {
          "jp": "日本へ行きたいです。",
          "zh": "我想去日本。",
          "covers": "Vます去ます + たいです"
        },
        {
          "jp": "昨日は早く帰りたかったです。",
          "zh": "昨天想早点回去。",
          "covers": "Vます去ます + たかったです"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "动词ます形去ます后接たい。たい按い形容词变化，否定为たくない，过去为たかった。直接陈述通常表达自己的愿望；他人的愿望应结合观察或转述。",
      "category": "愿望",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vます去ます + たい",
      "formationRows": [
        {
          "label": "愿望与否定",
          "form": "ます去ます＋たい",
          "derivation": "行く→行きます→行きたい→行きたくない"
        }
      ],
      "usages": [
        {
          "title": "当前愿望",
          "explanation": "说明自己想做什么。",
          "examples": [
            {
              "jp": "日本へ行きたいです。",
              "zh": "我想去日本。",
              "focus": "行きたいです",
              "note": "行き＋たい。",
              "covers": "Vます去ます + たいです"
            }
          ]
        },
        {
          "title": "过去愿望",
          "explanation": "たかった说明当时想做。",
          "examples": [
            {
              "jp": "昨日は早く帰りたかったです。",
              "zh": "昨天想早点回去。",
              "focus": "帰りたかったです",
              "note": "不保证实际回去了。",
              "covers": "Vます去ます + たかったです"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "转述他人的愿望",
          "explanation": "用本人所说的话说明愿望来源。",
          "examples": [
            {
              "jp": "妹は日本へ行きたいと言っています。",
              "zh": "妹妹说她想去日本。",
              "focus": "行きたいと言っています",
              "note": "没有直接断言别人的内心。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-022"
    ],
    "card": {
      "meaning": "表示想要某样东西。",
      "connection": "N + が欲しい",
      "examples": [
        {
          "jp": "新しい靴が欲しいです。",
          "zh": "我想要一双新鞋。",
          "covers": "N が欲しいです"
        },
        {
          "jp": "今は車が欲しくないです。",
          "zh": "我现在不想要车。",
          "covers": "N が欲しくないです"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "Nが欲しい表达希望获得某物。欲しい的否定、过去按い形容词变化；想进行动作则用动词たい，不把辞书形直接接在が欲しい前。",
      "category": "愿望",
      "register": {
        "label": "日常常用"
      },
      "formation": "N + が欲しい",
      "formationRows": [
        {
          "label": "物品愿望",
          "form": "Nが欲しい",
          "derivation": "靴が欲しい→靴が欲しくない"
        }
      ],
      "usages": [
        {
          "title": "想要物品",
          "explanation": "が前是想获得的对象。",
          "examples": [
            {
              "jp": "新しい靴が欲しいです。",
              "zh": "我想要一双新鞋。",
              "focus": "靴が欲しいです",
              "note": "对象是鞋。",
              "covers": "N が欲しいです"
            }
          ]
        },
        {
          "title": "否定愿望",
          "explanation": "否定为欲しくない。",
          "examples": [
            {
              "jp": "今は車が欲しくないです。",
              "zh": "我现在不想要车。",
              "focus": "欲しくないです",
              "note": "欲しい→欲しくない。",
              "covers": "N が欲しくないです"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "想做动作用たい",
          "explanation": "“想吃”不同于“想获得某物”。",
          "examples": [
            {
              "jp": "寿司を食べたいです。",
              "zh": "我想吃寿司。",
              "focus": "食べたいです",
              "note": "表达吃这个动作的愿望。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-023"
    ],
    "card": {
      "meaning": "表示移动的目的：去／来做……。",
      "connection": "Vます去ます／活动N + に行く／来る",
      "examples": [
        {
          "jp": "昼ご飯を食べに行きます。",
          "zh": "去吃午饭。",
          "covers": "Vます去ます + に行く"
        },
        {
          "jp": "友達が遊びに来ました。",
          "zh": "朋友来玩了。",
          "covers": "Vます去ます + に来る"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "に前用动词ます形去ます的部分，或買い物等活动名词。后面常接行く、来る、帰る，说明移动目的，不保证该目的已实现。",
      "category": "移动目的",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vます去ます／活动N + に行く／来る",
      "formationRows": [
        {
          "label": "动词目的",
          "form": "ます去ます＋に行く",
          "derivation": "食べる→食べに行く；見る→見に来る"
        },
        {
          "label": "活动名词",
          "form": "活动N＋に行く",
          "derivation": "買い物に行く"
        }
      ],
      "usages": [
        {
          "title": "去做",
          "explanation": "说明外出的目的。",
          "examples": [
            {
              "jp": "昼ご飯を食べに行きます。",
              "zh": "去吃午饭。",
              "focus": "食べに行きます",
              "note": "食べます去ます。",
              "covers": "Vます去ます + に行く"
            }
          ]
        },
        {
          "title": "来做",
          "explanation": "来る以说话人所在处等为参照点。",
          "examples": [
            {
              "jp": "友達が遊びに来ました。",
              "zh": "朋友来玩了。",
              "focus": "遊びに来ました",
              "note": "遊ぶ→遊びます→遊びに来る。",
              "covers": "Vます去ます + に来る"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不直接接辞书形",
          "explanation": "去看说見に行く，不说見るに行く。",
          "examples": [
            {
              "jp": "映画を見に行きました。",
              "zh": "去看电影了。",
              "focus": "見に行きました",
              "note": "不能仅据此断言已看完电影。"
            }
          ]
        }
      ],
      "specialCases": [
        {
          "title": "活动名词也可表示目的",
          "explanation": "買い物、散歩等活动名词可直接放在に前。",
          "examples": [
            {
              "jp": "日曜日、母と買い物に行きます。",
              "zh": "星期天和妈妈去买东西。",
              "focus": "買い物に行きます",
              "note": "買い物是活动名词，直接接に行きます。"
            }
          ]
        }
      ],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-024"
    ],
    "card": {
      "meaning": "先完成前项，再进行后项。",
      "connection": "Vて + から",
      "examples": [
        {
          "jp": "手を洗ってから、ご飯を食べます。",
          "zh": "先洗手再吃饭。",
          "covers": "Vて + から"
        },
        {
          "jp": "宿題をしてから、寝ました。",
          "zh": "做完作业后睡觉了。",
          "covers": "Vて + から"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "てから明确动作先后，前项常是后项的准备步骤。整句谈过去还是未来，主要看句末和时间语境。",
      "category": "动作先后",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vて + から",
      "formationRows": [
        {
          "label": "先后",
          "form": "て形＋から",
          "derivation": "洗う→洗ってから"
        }
      ],
      "usages": [
        {
          "title": "操作顺序",
          "explanation": "先完成准备再行动。",
          "examples": [
            {
              "jp": "手を洗ってから、ご飯を食べます。",
              "zh": "先洗手再吃饭。",
              "focus": "洗ってから",
              "note": "洗手先于吃饭。",
              "covers": "Vて + から"
            }
          ]
        },
        {
          "title": "过去的顺序",
          "explanation": "て形不变，句末可用过去式。",
          "examples": [
            {
              "jp": "宿題をしてから、寝ました。",
              "zh": "做完作业后睡觉了。",
              "focus": "してから",
              "note": "过去时间由寝ました体现。",
              "covers": "Vて + から"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "区别表示原因的から",
          "explanation": "原因から前面是完整判断，不是本条的动作て形。",
          "examples": [
            {
              "jp": "疲れたから、早く寝ました。",
              "zh": "因为累了，所以早睡了。",
              "focus": "疲れたから",
              "note": "说明原因而非先后步骤。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-025"
    ],
    "card": {
      "meaning": "在动作之前／之后。",
      "connection": "V辞书形＋前に／Vた＋後で／Nの＋前に・後で",
      "examples": [
        {
          "jp": "寝る前に、歯を磨きます。",
          "zh": "睡前刷牙。",
          "covers": "V辞书形 + 前に"
        },
        {
          "jp": "ご飯を食べた後で、薬を飲みます。",
          "zh": "吃完饭后吃药。",
          "covers": "Vた + 後で"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "前に前面用辞书形，後で前面用た形，表示相对先后。即使整句在过去，前に也用辞书形；谈未来安排时，後で仍用た形。",
      "category": "动作先后",
      "register": {
        "label": "日常常用"
      },
      "formation": "V辞书形＋前に／Vた＋後で／Nの＋前に・後で",
      "formationRows": [
        {
          "label": "之前",
          "form": "辞书形＋前に",
          "derivation": "寝る→寝る前に"
        },
        {
          "label": "之后",
          "form": "た形＋後で",
          "derivation": "食べる→食べた後で"
        },
        {
          "label": "名词",
          "form": "Nの前に／後で",
          "derivation": "食事の前に；会議の後で"
        }
      ],
      "usages": [
        {
          "title": "动作之前",
          "explanation": "后项先发生。",
          "examples": [
            {
              "jp": "寝る前に、歯を磨きます。",
              "zh": "睡前刷牙。",
              "focus": "寝る前に",
              "note": "刷牙先于睡觉。",
              "covers": "V辞书形 + 前に"
            }
          ]
        },
        {
          "title": "动作之后",
          "explanation": "先完成た形表示的动作。",
          "examples": [
            {
              "jp": "ご飯を食べた後で、薬を飲みます。",
              "zh": "吃完饭后吃药。",
              "focus": "食べた後で",
              "note": "未来安排也用食べた。",
              "covers": "Vた + 後で"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "区别相对时间与整句时间",
          "explanation": "辞书形不一定指将来。",
          "examples": [
            {
              "jp": "昨日、寝る前に本を読みました。",
              "zh": "昨天睡前读了书。",
              "focus": "寝る前に",
              "note": "整句过去，睡觉仍在读书之后。"
            }
          ]
        }
      ],
      "specialCases": [
        {
          "title": "名词后需要の",
          "explanation": "前に、後で前面是会議、食事等名词时，用の连接。",
          "examples": [
            {
              "jp": "会議の後で、昼ご飯を食べましょう。",
              "zh": "开完会再吃午饭吧。",
              "focus": "会議の後で",
              "note": "会議＋の＋後で；不要套用动词的た形接法。"
            }
          ]
        }
      ],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "g-n5-026"
    ],
    "card": {
      "meaning": "表示有能力或条件做某事。",
      "connection": "V辞书形 + ことができる",
      "examples": [
        {
          "jp": "私は日本語で手紙を書くことができます。",
          "zh": "我能用日语写信。",
          "covers": "V辞书形 + ことができます"
        },
        {
          "jp": "ここで写真を撮ることができます。",
          "zh": "这里可以拍照。",
          "covers": "V辞书形 + ことができます"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "辞书形＋こと把动作作为整体，再用できる表示可能。既可说明个人能力，也可说明场所、制度等条件允许。",
      "category": "能力・可能",
      "register": {
        "label": "日常常用"
      },
      "formation": "V辞书形 + ことができる",
      "formationRows": [
        {
          "label": "能力表达",
          "form": "辞书形＋ことができる",
          "derivation": "泳ぐ→泳ぐことができる；できる→できない"
        }
      ],
      "usages": [
        {
          "title": "个人能力",
          "explanation": "说明会做什么。",
          "examples": [
            {
              "jp": "私は日本語で手紙を書くことができます。",
              "zh": "我能用日语写信。",
              "focus": "書くことができます",
              "note": "書く保持辞书形。",
              "covers": "V辞书形 + ことができます"
            }
          ]
        },
        {
          "title": "条件允许",
          "explanation": "说明地点或设备支持的活动。",
          "examples": [
            {
              "jp": "ここで写真を撮ることができます。",
              "zh": "这里可以拍照。",
              "focus": "撮ることができます",
              "note": "条件或规定允许。",
              "covers": "V辞书形 + ことができます"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "こと前不接ます形",
          "explanation": "礼貌程度由句尾できます表达。",
          "examples": [
            {
              "jp": "一人で行くことができません。",
              "zh": "不能一个人去。",
              "focus": "行くことができません",
              "note": "不说行きますことができません。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-1ijb8s9"
    ],
    "card": {
      "meaning": "表示“也”；疑问词配否定可表示全面否定。",
      "connection": "Nも；疑问词＋も＋否定",
      "examples": [
        {
          "jp": "姉は学生です。私も学生です。",
          "zh": "姐姐是学生。我也是学生。",
          "covers": "N + も"
        },
        {
          "jp": "朝から何も食べていません。",
          "zh": "从早上起什么也没吃。",
          "covers": "何も + 否定"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "も把当前对象加入同类，也可替换は、が、を。地点、对象等关系需要的に、で等通常保留，成为にも、でも。",
      "category": "添加・全面否定",
      "register": {
        "label": "日常常用"
      },
      "formation": "Nも；疑问词＋も＋否定",
      "formationRows": [
        {
          "label": "添加同类",
          "form": "Nも",
          "derivation": "私も学生です"
        },
        {
          "label": "保留关系助词",
          "form": "Nにも／でも",
          "derivation": "学校でも"
        }
      ],
      "usages": [
        {
          "title": "也一样",
          "explanation": "前文已经有同类的人或事物。",
          "examples": [
            {
              "jp": "姉は学生です。私も学生です。",
              "zh": "姐姐是学生。我也是学生。",
              "focus": "私も",
              "note": "我与姐姐同属学生。",
              "covers": "N + も"
            }
          ]
        },
        {
          "title": "全面否定",
          "explanation": "何も、誰も等与否定呼应。",
          "examples": [
            {
              "jp": "朝から何も食べていません。",
              "zh": "从早上起什么也没吃。",
              "focus": "何も",
              "note": "句末否定，表示没有吃任何东西。",
              "covers": "何も + 否定"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不是所有助词都删掉",
          "explanation": "动作地点的で保留。",
          "examples": [
            {
              "jp": "学校でも日本語を話します。",
              "zh": "在学校也说日语。",
              "focus": "学校でも",
              "note": "でも＝で＋も，此处不是“但是”。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-1frf7uj"
    ],
    "card": {
      "meaning": "表示移动方向，读作え。",
      "connection": "地点N + へ + 移动动词",
      "examples": [
        {
          "jp": "来週、東京へ行きます。",
          "zh": "下周去东京。",
          "covers": "地点N + へ"
        },
        {
          "jp": "六時に家へ帰ります。",
          "zh": "六点回家。",
          "covers": "地点N + へ"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "へ接在地点后，提示朝哪里移动。和表示到达点的に常可互换；へ本身不表示动作发生的地点。",
      "category": "移动方向",
      "register": {
        "label": "日常常用"
      },
      "formation": "地点N + へ + 移动动词",
      "formationRows": [
        {
          "label": "方向",
          "form": "場所＋へ",
          "derivation": "東京へ行く；家へ帰る"
        }
      ],
      "usages": [
        {
          "title": "去某处",
          "explanation": "へ关注移动朝向。",
          "examples": [
            {
              "jp": "来週、東京へ行きます。",
              "zh": "下周去东京。",
              "focus": "東京へ",
              "note": "作为助词读とうきょうえ。",
              "covers": "地点N + へ"
            }
          ]
        },
        {
          "title": "返回",
          "explanation": "帰る也可以接へ。",
          "examples": [
            {
              "jp": "六時に家へ帰ります。",
              "zh": "六点回家。",
              "focus": "家へ",
              "note": "家是返回的方向。",
              "covers": "地点N + へ"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "动作场所用で",
          "explanation": "在某处吃饭不属于朝该处移动。",
          "examples": [
            {
              "jp": "家で晩ご飯を食べます。",
              "zh": "在家吃晚饭。",
              "focus": "家で",
              "note": "此处不能把で换成へ。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-1mjj0eu"
    ],
    "card": {
      "meaning": "列举一部分事物：……和……等。",
      "connection": "NやN（など）",
      "examples": [
        {
          "jp": "パンや卵などを買いました。",
          "zh": "买了面包、鸡蛋等。",
          "covers": "N や N など"
        },
        {
          "jp": "休みの日は本や雑誌を読みます。",
          "zh": "休息日读书、杂志之类。",
          "covers": "N や N"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "や连接同一层次的名词，暗示还可能有其他同类项。など可接在最后，明确表示“等等”；不要求每次都加など。",
      "category": "举例列举",
      "register": {
        "label": "日常常用"
      },
      "formation": "NやN（など）",
      "formationRows": [
        {
          "label": "非穷尽列举",
          "form": "NやNなど",
          "derivation": "パンや卵など"
        },
        {
          "label": "继续接助词",
          "form": "列举整体＋を／が等",
          "derivation": "本や雑誌を読む"
        }
      ],
      "usages": [
        {
          "title": "举出代表",
          "explanation": "只列购买清单的一部分。",
          "examples": [
            {
              "jp": "パンや卵などを買いました。",
              "zh": "买了面包、鸡蛋等。",
              "focus": "パンや卵など",
              "note": "还可能买了其他东西。",
              "covers": "N や N など"
            }
          ]
        },
        {
          "title": "省略など",
          "explanation": "や已经带有举例意味。",
          "examples": [
            {
              "jp": "休みの日は本や雑誌を読みます。",
              "zh": "休息日读书、杂志之类。",
              "focus": "本や雑誌",
              "note": "など不是必需。",
              "covers": "N や N"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "与と区别",
          "explanation": "と把列出的项作为一个确定组合，や侧重举例。",
          "examples": [
            {
              "jp": "父と母が来ました。",
              "zh": "父亲和母亲来了。",
              "focus": "父と母",
              "note": "明确说这两个人，不用や表达含糊的人选。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-12pxw8u"
    ],
    "card": {
      "meaning": "句末表示疑问；名词之间表示选择。",
      "connection": "句子＋か；NかN；疑问词＋か",
      "examples": [
        {
          "jp": "これはあなたの傘ですか。",
          "zh": "这是你的伞吗？",
          "covers": "句子 + か"
        },
        {
          "jp": "お茶か水をください。",
          "zh": "请给我茶或水。",
          "covers": "N か N"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "礼貌问句常在です、ます后加か。NかN列出备选项；疑问词加か还可表示不确定的人、物、地点。",
      "category": "疑问・选择",
      "register": {
        "label": "日常常用"
      },
      "formation": "句子＋か；NかN；疑问词＋か",
      "formationRows": [
        {
          "label": "问句",
          "form": "です／ます＋か",
          "derivation": "学生ですか"
        },
        {
          "label": "选择与不定",
          "form": "NかN；何か",
          "derivation": "お茶か水；何か食べる"
        }
      ],
      "usages": [
        {
          "title": "提问",
          "explanation": "か放在完整礼貌句之后。",
          "examples": [
            {
              "jp": "これはあなたの傘ですか。",
              "zh": "这是你的伞吗？",
              "focus": "傘ですか",
              "note": "询问判断是否成立。",
              "covers": "句子 + か"
            }
          ]
        },
        {
          "title": "列出选项",
          "explanation": "两个名词是备选项。",
          "examples": [
            {
              "jp": "お茶か水をください。",
              "zh": "请给我茶或水。",
              "focus": "お茶か水",
              "note": "通常希望得到其中一种。",
              "covers": "N か N"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "普通体问句的语气",
          "explanation": "直接说行くか可能显得生硬；熟人日常提问常用升调的行く？。",
          "examples": [
            {
              "jp": "明日、行く？",
              "zh": "明天去吗？",
              "focus": "行く",
              "note": "口语用上升语调提问。"
            }
          ]
        }
      ],
      "specialCases": [
        {
          "title": "疑问词加か",
          "explanation": "何か不再询问“什么”，而指某种东西。",
          "examples": [
            {
              "jp": "何か食べたいです。",
              "zh": "想吃点什么。",
              "focus": "何か",
              "note": "对象尚未确定。"
            }
          ]
        }
      ],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-1c5kdtw"
    ],
    "card": {
      "meaning": "寻求确认或与对方分享感受。",
      "connection": "句子 + ね",
      "examples": [
        {
          "jp": "今日は寒いですね。",
          "zh": "今天真冷啊。",
          "covers": "句子 + ね"
        },
        {
          "jp": "会議は三時からですね。",
          "zh": "会议是三点开始，对吧？",
          "covers": "句子 + ね"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ね常用于双方能共同确认的信息，或邀请对方认同。不是中文“呢”的固定对应；未知信息的直接提问通常用か或疑问语调。",
      "category": "句末语气",
      "register": {
        "label": "日常常用"
      },
      "formation": "句子 + ね",
      "formationRows": [
        {
          "label": "句末",
          "form": "です／ます／普通体＋ね",
          "derivation": "寒いですね；また会おうね"
        }
      ],
      "usages": [
        {
          "title": "分享感受",
          "explanation": "双方都感受到的情况容易用ね。",
          "examples": [
            {
              "jp": "今日は寒いですね。",
              "zh": "今天真冷啊。",
              "focus": "寒いですね",
              "note": "期待对方表示同感。",
              "covers": "句子 + ね"
            }
          ]
        },
        {
          "title": "核实已知信息",
          "explanation": "说话人已有预期，请对方确认。",
          "examples": [
            {
              "jp": "会議は三時からですね。",
              "zh": "会议是三点开始，对吧？",
              "focus": "三時からですね",
              "note": "对开始时间进行确认。",
              "covers": "句子 + ね"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "未知问题不硬加ね",
          "explanation": "不知道名字时直接提问。",
          "examples": [
            {
              "jp": "お名前は何ですか。",
              "zh": "请问您叫什么名字？",
              "focus": "何ですか",
              "note": "不是在确认已知姓名。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-1k78uy3"
    ],
    "card": {
      "meaning": "向对方告知、提醒或强调信息。",
      "connection": "句子 + よ",
      "examples": [
        {
          "jp": "この店のパンはおいしいですよ。",
          "zh": "这家店的面包很好吃哦。",
          "covers": "句子 + よ"
        },
        {
          "jp": "危ないですよ。気をつけてください。",
          "zh": "危险哦，请小心。",
          "covers": "句子 + よ"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "よ提示“这件事请你知道”。语气取决于内容、音调和关系；直接纠正对方时可能显得强，不是任何句末都应加よ。",
      "category": "句末语气",
      "register": {
        "label": "日常常用"
      },
      "formation": "句子 + よ",
      "formationRows": [
        {
          "label": "句末",
          "form": "です／ます／普通体＋よ",
          "derivation": "便利ですよ；来たよ"
        }
      ],
      "usages": [
        {
          "title": "提供新信息",
          "explanation": "告诉对方可能不知道的情况。",
          "examples": [
            {
              "jp": "この店のパンはおいしいですよ。",
              "zh": "这家店的面包很好吃哦。",
              "focus": "おいしいですよ",
              "note": "带有推荐意味。",
              "covers": "句子 + よ"
            }
          ]
        },
        {
          "title": "提醒注意",
          "explanation": "把当前危险提示给对方。",
          "examples": [
            {
              "jp": "危ないですよ。気をつけてください。",
              "zh": "危险哦，请小心。",
              "focus": "危ないですよ",
              "note": "促使对方注意。",
              "covers": "句子 + よ"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "与ね的视角不同",
          "explanation": "ね邀请共同认同，よ偏向告知。",
          "examples": [
            {
              "jp": "この景色はきれいですね。",
              "zh": "这里的景色真美啊。",
              "focus": "きれいですね",
              "note": "两人同看景色时分享感受。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-1atxtlv"
    ],
    "card": {
      "meaning": "指代事物：这个／那个／远处那个／哪一个。",
      "connection": "これ／それ／あれ／どれ＋助词・判断句",
      "examples": [
        {
          "jp": "これは私のかばんです。",
          "zh": "这是我的包。",
          "covers": "これ + は"
        },
        {
          "jp": "どれがあなたの傘ですか。",
          "zh": "哪一把是你的伞？",
          "covers": "どれ + が"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "これ等可独立充当名词。现场指示中，こ靠近说话人，そ靠近听话人，あ离双方较远；ど用来提问。",
      "category": "指示词",
      "register": {
        "label": "日常常用"
      },
      "formation": "これ／それ／あれ／どれ＋助词・判断句",
      "formationRows": [
        {
          "label": "独立指代",
          "form": "これ＋は／が／を等",
          "derivation": "これは本です"
        },
        {
          "label": "疑问主语",
          "form": "どれが",
          "derivation": "どれがあなたの傘ですか"
        }
      ],
      "usages": [
        {
          "title": "指物",
          "explanation": "不在これ后直接接物品名。",
          "examples": [
            {
              "jp": "これは私のかばんです。",
              "zh": "这是我的包。",
              "focus": "これは",
              "note": "これ自身代指一件东西。",
              "covers": "これ + は"
            }
          ]
        },
        {
          "title": "从若干项选择",
          "explanation": "询问哪一个符合条件。",
          "examples": [
            {
              "jp": "どれがあなたの傘ですか。",
              "zh": "哪一把是你的伞？",
              "focus": "どれが",
              "note": "未知的主语用が。",
              "covers": "どれ + が"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "后接名词改用この等",
          "explanation": "これ本不能表示“这本书”。",
          "examples": [
            {
              "jp": "この本はおもしろいです。",
              "zh": "这本书很有意思。",
              "focus": "この本",
              "note": "この必须与后面的名词一起用。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-1cjs22f"
    ],
    "card": {
      "meaning": "修饰名词：这……／那……／哪……。",
      "connection": "この／その／あの／どの + N",
      "examples": [
        {
          "jp": "この本をください。",
          "zh": "请给我这本书。",
          "covers": "この + N"
        },
        {
          "jp": "どの電車が東京へ行きますか。",
          "zh": "哪趟电车去东京？",
          "covers": "どの + N"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "この、その、あの、どの不能单独代替名词，后面要接所指的人或物。现场距离的区分与これ等相同；その还可指对方刚提到的事物。",
      "category": "指示词",
      "register": {
        "label": "日常常用"
      },
      "formation": "この／その／あの／どの + N",
      "formationRows": [
        {
          "label": "连体修饰",
          "form": "指示词＋名词",
          "derivation": "この本；あの人"
        },
        {
          "label": "选择提问",
          "form": "どのNが",
          "derivation": "どの傘が"
        }
      ],
      "usages": [
        {
          "title": "指明事物",
          "explanation": "この与本一起组成名词短语。",
          "examples": [
            {
              "jp": "この本をください。",
              "zh": "请给我这本书。",
              "focus": "この本",
              "note": "を接在整个名词短语之后。",
              "covers": "この + N"
            }
          ]
        },
        {
          "title": "确定选择范围",
          "explanation": "明确是在问哪一种物品。",
          "examples": [
            {
              "jp": "どの電車が東京へ行きますか。",
              "zh": "哪趟电车去东京？",
              "focus": "どの電車が",
              "note": "どの后必须有電車。",
              "covers": "どの + N"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "独立指代用これ等",
          "explanation": "不说このをください。",
          "examples": [
            {
              "jp": "これをください。",
              "zh": "请给我这个。",
              "focus": "これを",
              "note": "不说物品名时用これ。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-dki11q"
    ],
    "card": {
      "meaning": "指地点：这里／那里／远处那里／哪里。",
      "connection": "ここ／そこ／あそこ／どこ + 地点相关助词",
      "examples": [
        {
          "jp": "ここは図書館です。",
          "zh": "这里是图书馆。",
          "covers": "ここ + は"
        },
        {
          "jp": "トイレはどこですか。",
          "zh": "洗手间在哪里？",
          "covers": "どこ + ですか"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ここ等代指地点，后面仍按句子关系选择に、で、へ等助词。こ靠近说话人，そ靠近听话人，あ离双方较远。",
      "category": "地点指示",
      "register": {
        "label": "日常常用"
      },
      "formation": "ここ／そこ／あそこ／どこ + 地点相关助词",
      "formationRows": [
        {
          "label": "存在与动作",
          "form": "ここに／ここで",
          "derivation": "ここにある；ここで待つ"
        },
        {
          "label": "询问地点",
          "form": "どこですか",
          "derivation": "駅はどこですか"
        }
      ],
      "usages": [
        {
          "title": "说明所在",
          "explanation": "用判断句标出当前位置。",
          "examples": [
            {
              "jp": "ここは図書館です。",
              "zh": "这里是图书馆。",
              "focus": "ここは",
              "note": "ここ代指现在这个地方。",
              "covers": "ここ + は"
            }
          ]
        },
        {
          "title": "询问位置",
          "explanation": "どこ询问地点。",
          "examples": [
            {
              "jp": "トイレはどこですか。",
              "zh": "洗手间在哪里？",
              "focus": "どこですか",
              "note": "礼貌询问位置。",
              "covers": "どこ + ですか"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "动作地点用で",
          "explanation": "地点指示词不决定后面的助词。",
          "examples": [
            {
              "jp": "ここで待ってください。",
              "zh": "请在这里等。",
              "focus": "ここで",
              "note": "等待发生的地点用で。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-1j76xzu"
    ],
    "card": {
      "meaning": "比较两者：比起A，B更……。",
      "connection": "AよりBのほうが＋形容词",
      "examples": [
        {
          "jp": "この町は夏より冬のほうが静かです。",
          "zh": "这个镇子冬天比夏天安静。",
          "covers": "A より B のほうが"
        },
        {
          "jp": "歩くより、自転車で行くほうが速いです。",
          "zh": "骑自行车去比走路快。",
          "covers": "V辞书形 + ほうが"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "より前是比较基准，のほうが前是被突出的一方。形容词说明比较维度，不能只根据汉语词序判断谁更高。",
      "category": "比较",
      "register": {
        "label": "日常常用"
      },
      "formation": "AよりBのほうが＋形容词",
      "formationRows": [
        {
          "label": "名词比较",
          "form": "AよりBのほうが",
          "derivation": "犬より猫のほうが"
        },
        {
          "label": "动词比较",
          "form": "V辞书形＋ほうが",
          "derivation": "歩くより自転車で行くほうが"
        }
      ],
      "usages": [
        {
          "title": "比较属性",
          "explanation": "B是程度较高的一方。",
          "examples": [
            {
              "jp": "この町は夏より冬のほうが静かです。",
              "zh": "这个镇子冬天比夏天安静。",
              "focus": "夏より冬のほうが",
              "note": "冬天更安静。",
              "covers": "A より B のほうが"
            }
          ]
        },
        {
          "title": "比较方式",
          "explanation": "动作短语后不加の。",
          "examples": [
            {
              "jp": "歩くより、自転車で行くほうが速いです。",
              "zh": "骑自行车去比走路快。",
              "focus": "自転車で行くほうが",
              "note": "行く直接修饰ほう。",
              "covers": "V辞书形 + ほうが"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "别颠倒比较基准",
          "explanation": "より前是被拿来作参照的一方。",
          "examples": [
            {
              "jp": "兄は私より背が高いです。",
              "zh": "哥哥比我高。",
              "focus": "私より",
              "note": "高的是哥哥。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-1a5otf8"
    ],
    "card": {
      "meaning": "表示在某个范围内最……。",
      "connection": "范围N＋で＋Nが一番＋形容词",
      "examples": [
        {
          "jp": "クラスで田中さんが一番背が高いです。",
          "zh": "班里田中最高。",
          "covers": "范围N で 一番"
        },
        {
          "jp": "果物の中で何が一番好きですか。",
          "zh": "水果中你最喜欢什么？",
          "covers": "N の中で 一番"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "で指出比较范围，一番指出最高程度。疑问句根据对象选择何、誰、どこ等，回答用具体对象加が。",
      "category": "最高级",
      "register": {
        "label": "日常常用"
      },
      "formation": "范围N＋で＋Nが一番＋形容词",
      "formationRows": [
        {
          "label": "范围与最高级",
          "form": "NでNが一番",
          "derivation": "クラスで田中さんが一番"
        },
        {
          "label": "范围表达",
          "form": "Nの中で",
          "derivation": "この三つの中で"
        }
      ],
      "usages": [
        {
          "title": "范围中的最高程度",
          "explanation": "必须知道是在什么范围中比较。",
          "examples": [
            {
              "jp": "クラスで田中さんが一番背が高いです。",
              "zh": "班里田中最高。",
              "focus": "クラスで田中さんが一番",
              "note": "比较范围是班级。",
              "covers": "范围N で 一番"
            }
          ]
        },
        {
          "title": "询问最喜欢的对象",
          "explanation": "好き也可以作为比较维度。",
          "examples": [
            {
              "jp": "果物の中で何が一番好きですか。",
              "zh": "水果中你最喜欢什么？",
              "focus": "何が一番好きですか",
              "note": "回答可说りんごが一番好きです。",
              "covers": "N の中で 一番"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "で不一定表示动作地点",
          "explanation": "这里的で限定比较集合。",
          "examples": [
            {
              "jp": "この三つの中で、これが一番安いです。",
              "zh": "这三个里，这个最便宜。",
              "focus": "この三つの中で",
              "note": "不是说价格发生在某个地点。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-1rn5c93"
    ],
    "card": {
      "meaning": "表示某事已经完成。",
      "connection": "もう + Vました",
      "examples": [
        {
          "jp": "もう昼ご飯を食べましたか。",
          "zh": "你已经吃过午饭了吗？",
          "covers": "もう + Vましたか"
        },
        {
          "jp": "宿題はもう終わりました。",
          "zh": "作业已经做完了。",
          "covers": "もう + Vました"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "もう与过去式呼应，强调到当前参考时点事情已发生。问句常确认是否完成；尚未完成的回答通常用まだ。",
      "category": "完成状态",
      "register": {
        "label": "日常常用"
      },
      "formation": "もう + Vました",
      "formationRows": [
        {
          "label": "完成与提问",
          "form": "もう＋ました／ましたか",
          "derivation": "もう食べましたか"
        }
      ],
      "usages": [
        {
          "title": "确认是否完成",
          "explanation": "问到现在做了没有。",
          "examples": [
            {
              "jp": "もう昼ご飯を食べましたか。",
              "zh": "你已经吃过午饭了吗？",
              "focus": "もう昼ご飯を食べましたか",
              "note": "关注完成情况。",
              "covers": "もう + Vましたか"
            }
          ]
        },
        {
          "title": "说明已完成",
          "explanation": "报告事情已经做完。",
          "examples": [
            {
              "jp": "宿題はもう終わりました。",
              "zh": "作业已经做完了。",
              "focus": "もう終わりました",
              "note": "不是“还会结束”。",
              "covers": "もう + Vました"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "否定回答用まだ",
          "explanation": "尚未发生不同于もう＋否定的“不再”。",
          "examples": [
            {
              "jp": "いいえ、まだ食べていません。",
              "zh": "没有，还没吃。",
              "focus": "まだ食べていません",
              "note": "“不再吃”则可说もう食べません。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-xpfeuf"
    ],
    "card": {
      "meaning": "表示到现在还没有做某事。",
      "connection": "まだ + Vていません",
      "examples": [
        {
          "jp": "この本はまだ読んでいません。",
          "zh": "这本书我还没读。",
          "covers": "まだ + Vていません"
        },
        {
          "jp": "父はまだ帰っていません。",
          "zh": "父亲还没回来。",
          "covers": "まだ + Vていません"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "まだ＋ていません说明预期或相关动作尚未发生，往往暗示之后可能会做。ていない是否表示“没在做”仍需看时间和动词。",
      "category": "尚未完成",
      "register": {
        "label": "日常常用"
      },
      "formation": "まだ + Vていません",
      "formationRows": [
        {
          "label": "尚未完成",
          "form": "て形＋いません",
          "derivation": "読む→まだ読んでいません"
        }
      ],
      "usages": [
        {
          "title": "还未着手或完成",
          "explanation": "到当前为止没有完成该动作。",
          "examples": [
            {
              "jp": "この本はまだ読んでいません。",
              "zh": "这本书我还没读。",
              "focus": "まだ読んでいません",
              "note": "不等于以后也不读。",
              "covers": "まだ + Vていません"
            }
          ]
        },
        {
          "title": "期待的变化未发生",
          "explanation": "适用于到达、回来等事件。",
          "examples": [
            {
              "jp": "父はまだ帰っていません。",
              "zh": "父亲还没回来。",
              "focus": "まだ帰っていません",
              "note": "当前仍未回来。",
              "covers": "まだ + Vていません"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "已完成用もう",
          "explanation": "把“尚未”与“已经”配对记忆。",
          "examples": [
            {
              "jp": "父はもう帰りました。",
              "zh": "父亲已经回来了。",
              "focus": "もう帰りました",
              "note": "到当前时点已发生。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-1x4e5gj"
    ],
    "card": {
      "meaning": "配合否定，表示不太……。",
      "connection": "あまり + 否定谓语",
      "examples": [
        {
          "jp": "この料理はあまり辛くないです。",
          "zh": "这道菜不太辣。",
          "covers": "あまり + い形去い＋くない"
        },
        {
          "jp": "私はあまりテレビを見ません。",
          "zh": "我不太看电视。",
          "covers": "あまり + Vません"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "あまり＋否定减弱程度或频率，通常不是“完全不”。要根据谓语译成“不太”“不常”等。",
      "category": "程度・频率",
      "register": {
        "label": "日常常用"
      },
      "formation": "あまり + 否定谓语",
      "formationRows": [
        {
          "label": "形容词否定",
          "form": "あまり＋くない／ではない",
          "derivation": "あまり高くない；あまり静かではない"
        },
        {
          "label": "动词否定",
          "form": "あまり＋ません／ない",
          "derivation": "あまり行きません"
        }
      ],
      "usages": [
        {
          "title": "程度不高",
          "explanation": "否定的是高程度。",
          "examples": [
            {
              "jp": "この料理はあまり辛くないです。",
              "zh": "这道菜不太辣。",
              "focus": "あまり辛くないです",
              "note": "可能有一点辣。",
              "covers": "あまり + い形去い＋くない"
            }
          ]
        },
        {
          "title": "频率不高",
          "explanation": "不常做，仍可能偶尔做。",
          "examples": [
            {
              "jp": "私はあまりテレビを見ません。",
              "zh": "我不太看电视。",
              "focus": "あまりテレビを見ません",
              "note": "不是断言一次也不看。",
              "covers": "あまり + Vません"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不要与完全否定混淆",
          "explanation": "全然更接近“一点也不”。",
          "examples": [
            {
              "jp": "この料理は全然辛くないです。",
              "zh": "这道菜一点也不辣。",
              "focus": "全然辛くないです",
              "note": "比あまり辛くない否定得更彻底。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-z3uq7t"
    ],
    "card": {
      "meaning": "配合否定，表示完全不／一点也不。",
      "connection": "全然 + 否定谓语",
      "examples": [
        {
          "jp": "この問題は全然分かりません。",
          "zh": "这道题我完全不懂。",
          "covers": "全然 + Vません"
        },
        {
          "jp": "今日は全然寒くないです。",
          "zh": "今天一点也不冷。",
          "covers": "全然 + い形去い＋くない"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "基础用法是全然＋否定，强调程度为零。口语也存在全然大丈夫等肯定搭配，但不能据此把全然当作所有形容词前的“非常”。",
      "category": "强调否定",
      "register": {
        "label": "日常常用"
      },
      "formation": "全然 + 否定谓语",
      "formationRows": [
        {
          "label": "全面否定",
          "form": "全然＋ない／ません",
          "derivation": "全然分かりません；全然寒くない"
        }
      ],
      "usages": [
        {
          "title": "完全不理解",
          "explanation": "对否定结果加强语气。",
          "examples": [
            {
              "jp": "この問題は全然分かりません。",
              "zh": "这道题我完全不懂。",
              "focus": "全然分かりません",
              "note": "不只是“不太懂”。",
              "covers": "全然 + Vません"
            }
          ]
        },
        {
          "title": "程度为零",
          "explanation": "否认有某种程度。",
          "examples": [
            {
              "jp": "今日は全然寒くないです。",
              "zh": "今天一点也不冷。",
              "focus": "全然寒くないです",
              "note": "强调不冷。",
              "covers": "全然 + い形去い＋くない"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "口语中的肯定搭配",
          "explanation": "常见于消除顾虑，不宜机械推广。",
          "examples": [
            {
              "jp": "少し遅れます。—全然大丈夫ですよ。",
              "zh": "我会晚一点。——完全没关系。",
              "focus": "全然大丈夫ですよ",
              "note": "口语中表示丝毫没有问题。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-1jwsaac"
    ],
    "card": {
      "meaning": "主动提议为对方做事，或商量一起做。",
      "connection": "Vます去ます + ましょうか",
      "examples": [
        {
          "jp": "荷物を持ちましょうか。",
          "zh": "要我帮你拿行李吗？",
          "covers": "Vます去ます + ましょうか"
        },
        {
          "jp": "そろそろ帰りましょうか。",
          "zh": "我们差不多该回去了吧？",
          "covers": "Vます去ます + ましょうか"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "ましょうか既可问“要不要我来……”，也可问“我们……好吗”。由动作及双方处境判断是谁做；不要一律译成一起。",
      "category": "提议・帮助",
      "register": {
        "label": "日常常用"
      },
      "formation": "Vます去ます + ましょうか",
      "formationRows": [
        {
          "label": "提议",
          "form": "ます去ます＋ましょうか",
          "derivation": "持ちます→持ちましょうか"
        }
      ],
      "usages": [
        {
          "title": "提供帮助",
          "explanation": "通常由说话人承担动作。",
          "examples": [
            {
              "jp": "荷物を持ちましょうか。",
              "zh": "要我帮你拿行李吗？",
              "focus": "持ちましょうか",
              "note": "不是邀请对方共同拿自己的行李。",
              "covers": "Vます去ます + ましょうか"
            }
          ]
        },
        {
          "title": "共同商量",
          "explanation": "双方都将参加该动作。",
          "examples": [
            {
              "jp": "そろそろ帰りましょうか。",
              "zh": "我们差不多该回去了吧？",
              "focus": "帰りましょうか",
              "note": "征询对共同安排的意见。",
              "covers": "Vます去ます + ましょうか"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "请对方做事需换表达",
          "explanation": "ましょうか不是直接要求对方行动。",
          "examples": [
            {
              "jp": "窓を開けてください。",
              "zh": "请打开窗户。",
              "focus": "開けてください",
              "note": "动作执行者是听话人。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-10x1zzt"
    ],
    "card": {
      "meaning": "表示某种状态或动作发生的时候。",
      "connection": "V普通形／い形＋とき；な形な／Nの＋とき",
      "examples": [
        {
          "jp": "学生のとき、京都に住んでいました。",
          "zh": "学生时代住在京都。",
          "covers": "N の + とき"
        },
        {
          "jp": "家を出るとき、電気を消します。",
          "zh": "出门时关灯。",
          "covers": "V辞书形 + とき"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "とき前像修饰名词一样接续。动词辞书形常着眼于动作之前或一般情形，た形常着眼于已发生之后；具体时间仍由整句判断。",
      "category": "时间场景",
      "register": {
        "label": "日常常用"
      },
      "formation": "V普通形／い形＋とき；な形な／Nの＋とき",
      "formationRows": [
        {
          "label": "动词与い形容词",
          "form": "普通形＋とき",
          "derivation": "行くとき；行ったとき；忙しいとき"
        },
        {
          "label": "な形容词与名词",
          "form": "な／の＋とき",
          "derivation": "暇なとき；学生のとき"
        }
      ],
      "usages": [
        {
          "title": "某种状态时",
          "explanation": "名词前需要の。",
          "examples": [
            {
              "jp": "学生のとき、京都に住んでいました。",
              "zh": "学生时代住在京都。",
              "focus": "学生のとき",
              "note": "不是学生なとき。",
              "covers": "N の + とき"
            }
          ]
        },
        {
          "title": "动作前的场景",
          "explanation": "到达目的地前采取行动。",
          "examples": [
            {
              "jp": "家を出るとき、電気を消します。",
              "zh": "出门时关灯。",
              "focus": "家を出るとき",
              "note": "通常在出门前关灯。",
              "covers": "V辞书形 + とき"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "辞书形与た形改变参照点",
          "explanation": "た形表示所说动作已经发生。",
          "examples": [
            {
              "jp": "家に帰ったとき、誰もいませんでした。",
              "zh": "回到家时，一个人也没有。",
              "focus": "帰ったとき",
              "note": "观察是在到家之后。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-1aw2p7r",
      "g-n4-002"
    ],
    "card": {
      "meaning": "表达自己的想法、判断或推测。",
      "connection": "普通形＋と思う（N・な形现在肯定用だ）",
      "examples": [
        {
          "jp": "この辞書は便利だと思います。",
          "zh": "我觉得这本词典很方便。",
          "covers": "な形 だ + と思います"
        },
        {
          "jp": "明日は雨が降ると思います。",
          "zh": "我想明天会下雨。",
          "covers": "V普通形 + と思います"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "と前放想法的具体内容，使用普通形；名词和な形容词现在肯定须保留だ。思います说明当前判断，と思っています可表达持续持有的想法。",
      "category": "想法・推测",
      "register": {
        "label": "日常常用"
      },
      "formation": "普通形＋と思う（N・な形现在肯定用だ）",
      "formationRows": [
        {
          "label": "动词与い形容词",
          "form": "普通形＋と思う",
          "derivation": "来ると思う；高いと思う"
        },
        {
          "label": "名词与な形容词",
          "form": "Nだ／な形だ＋と思う",
          "derivation": "学生だと思う；便利だと思う"
        }
      ],
      "usages": [
        {
          "title": "个人评价",
          "explanation": "将评价作为自己的观点。",
          "examples": [
            {
              "jp": "この辞書は便利だと思います。",
              "zh": "我觉得这本词典很方便。",
              "focus": "便利だと思います",
              "note": "便利是な形容词，需要だ。",
              "covers": "な形 だ + と思います"
            }
          ]
        },
        {
          "title": "推测未来",
          "explanation": "内容是尚未证实的预测。",
          "examples": [
            {
              "jp": "明日は雨が降ると思います。",
              "zh": "我想明天会下雨。",
              "focus": "降ると思います",
              "note": "降る不用降ります。",
              "covers": "V普通形 + と思います"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "他人的想法要有依据",
          "explanation": "转述对方说过的看法，避免把自己的判断当作他人内心。",
          "examples": [
            {
              "jp": "田中さんも便利だと思っているそうです。",
              "zh": "听说田中也觉得很方便。",
              "focus": "思っているそうです",
              "note": "そうです标出消息来源。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-y2g13i",
      "g-n4-003"
    ],
    "card": {
      "meaning": "引用说话内容，或说明名称。",
      "connection": "引用内容＋と言う；N＋と言う",
      "examples": [
        {
          "jp": "先生は「明日は休みです」と言いました。",
          "zh": "老师说：“明天休息。”",
          "covers": "「引用」 + と言いました"
        },
        {
          "jp": "私は田中と言います。",
          "zh": "我叫田中。",
          "covers": "N + と言います"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "と标出所说内容。直接引用可保留原话的礼貌体；间接概括通常用普通形。Nと言います还常用于自我介绍或给事物命名。",
      "category": "引用・名称",
      "register": {
        "label": "日常常用"
      },
      "formation": "引用内容＋と言う；N＋と言う",
      "formationRows": [
        {
          "label": "直接引用",
          "form": "「原话」＋と言う",
          "derivation": "「ありがとう」と言う"
        },
        {
          "label": "间接转述与名称",
          "form": "普通形＋と言う；Nと言う",
          "derivation": "来ると言う；田中と言います"
        }
      ],
      "usages": [
        {
          "title": "引用原话",
          "explanation": "引号中的话保留原说法。",
          "examples": [
            {
              "jp": "先生は「明日は休みです」と言いました。",
              "zh": "老师说：“明天休息。”",
              "focus": "「明日は休みです」と言いました",
              "note": "直接引用可用です。",
              "covers": "「引用」 + と言いました"
            }
          ]
        },
        {
          "title": "介绍姓名",
          "explanation": "说明自己叫什么。",
          "examples": [
            {
              "jp": "私は田中と言います。",
              "zh": "我叫田中。",
              "focus": "田中と言います",
              "note": "名称前不需要だ。",
              "covers": "N + と言います"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "间接引语的名词判断保留だ",
          "explanation": "名称与“说某人是学生”是不同结构。",
          "examples": [
            {
              "jp": "彼は学生だと言いました。",
              "zh": "他说自己是学生。",
              "focus": "学生だと言いました",
              "note": "学生だ是被引用的判断内容。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-1kgof7u"
    ],
    "card": {
      "meaning": "表达推测；也可寻求对方确认。",
      "connection": "V普通形／い形／な形词干／N＋でしょう",
      "examples": [
        {
          "jp": "明日は晴れるでしょう。",
          "zh": "明天大概会放晴。",
          "covers": "V普通形 + でしょう"
        },
        {
          "jp": "このかばん、重いでしょう。",
          "zh": "这个包很重吧？",
          "covers": "い形 + でしょう"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "でしょう是だろう的礼貌形式。根据证据推测时常为平调，确认时常带升调；名词和な形容词现在肯定前不加だ。",
      "category": "推测・确认",
      "register": {
        "label": "日常常用"
      },
      "formation": "V普通形／い形／な形词干／N＋でしょう",
      "formationRows": [
        {
          "label": "现在肯定",
          "form": "降る／寒い／静か／雨＋でしょう",
          "derivation": "静かでしょう，不是静かだでしょう"
        },
        {
          "label": "过去与否定",
          "form": "普通形＋でしょう",
          "derivation": "来なかったでしょう"
        }
      ],
      "usages": [
        {
          "title": "有根据的预测",
          "explanation": "天气预报等常用。",
          "examples": [
            {
              "jp": "明日は晴れるでしょう。",
              "zh": "明天大概会放晴。",
              "focus": "晴れるでしょう",
              "note": "预测而非保证。",
              "covers": "V普通形 + でしょう"
            }
          ]
        },
        {
          "title": "求证预期",
          "explanation": "期待对方确认自己猜想。",
          "examples": [
            {
              "jp": "このかばん、重いでしょう。",
              "zh": "这个包很重吧？",
              "focus": "重いでしょう",
              "note": "此处通常带确认语调。",
              "covers": "い形 + でしょう"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不要保留现在肯定的だ",
          "explanation": "名词直接接でしょう。",
          "examples": [
            {
              "jp": "あの人は先生でしょう。",
              "zh": "那个人大概是老师吧。",
              "focus": "先生でしょう",
              "note": "不说先生だでしょう。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-o5j05w"
    ],
    "card": {
      "meaning": "用句子修饰名词：……的人／物／事。",
      "connection": "动词普通形＋N；い形＋N；な形な＋N",
      "examples": [
        {
          "jp": "昨日買った本を読みます。",
          "zh": "读昨天买的书。",
          "covers": "Vた + N"
        },
        {
          "jp": "母が作った料理はおいしいです。",
          "zh": "妈妈做的菜很好吃。",
          "covers": "N が V普通形 + N"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "把说明内容放在名词前，不额外加中文“的”对应的の。修饰句内部保持所需助词，主语常用が；动词使用普通形。",
      "category": "名词修饰",
      "register": {
        "label": "日常常用"
      },
      "formation": "动词普通形＋N；い形＋N；な形な＋N",
      "formationRows": [
        {
          "label": "动作修饰名词",
          "form": "V普通形＋N",
          "derivation": "昨日買った本；日本へ行く人"
        },
        {
          "label": "修饰句主语",
          "form": "Nが＋V普通形＋名词",
          "derivation": "母が作った料理"
        }
      ],
      "usages": [
        {
          "title": "说明是哪件东西",
          "explanation": "修饰部分紧贴所说明的名词。",
          "examples": [
            {
              "jp": "昨日買った本を読みます。",
              "zh": "读昨天买的书。",
              "focus": "昨日買った本",
              "note": "买的对象是后面的本。",
              "covers": "Vた + N"
            }
          ]
        },
        {
          "title": "说明动作执行者",
          "explanation": "修饰句中的主语用が。",
          "examples": [
            {
              "jp": "母が作った料理はおいしいです。",
              "zh": "妈妈做的菜很好吃。",
              "focus": "母が作った料理",
              "note": "母是作った的主语。",
              "covers": "N が V普通形 + N"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "不额外插入の",
          "explanation": "动词可以直接修饰名词。",
          "examples": [
            {
              "jp": "日本語を勉強している人です。",
              "zh": "是正在学日语的人。",
              "focus": "勉強している人",
              "note": "不说勉強しているの人。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-1dktwcs"
    ],
    "card": {
      "meaning": "把动作作为喜欢、擅长或不擅长的对象。",
      "connection": "V辞书形＋のが＋好き／上手／下手",
      "examples": [
        {
          "jp": "私は本を読むのが好きです。",
          "zh": "我喜欢读书。",
          "covers": "V辞书形 + のが好き"
        },
        {
          "jp": "妹は歌うのが上手です。",
          "zh": "妹妹很会唱歌。",
          "covers": "V辞书形 + のが上手"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "辞书形＋の把动作名词化，再接が好き、が上手、が下手。の前不加ます；上手侧重表现好，谈自己的能力时得意常更自然。",
      "category": "名词化・爱好技能",
      "register": {
        "label": "日常常用"
      },
      "formation": "V辞书形＋のが＋好き／上手／下手",
      "formationRows": [
        {
          "label": "动作名词化",
          "form": "辞书形＋のが",
          "derivation": "泳ぐのが好き；歌うのが上手"
        }
      ],
      "usages": [
        {
          "title": "喜欢做某事",
          "explanation": "喜欢的是动作，不只是有关物品。",
          "examples": [
            {
              "jp": "私は本を読むのが好きです。",
              "zh": "我喜欢读书。",
              "focus": "読むのが好きです",
              "note": "読む＋の把读书当作对象。",
              "covers": "V辞书形 + のが好き"
            }
          ]
        },
        {
          "title": "评价技能",
          "explanation": "说明某人某方面做得好。",
          "examples": [
            {
              "jp": "妹は歌うのが上手です。",
              "zh": "妹妹很会唱歌。",
              "focus": "歌うのが上手です",
              "note": "评价唱歌的表现。",
              "covers": "V辞书形 + のが上手"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "自述强项常用得意",
          "explanation": "上手用于自夸可能不够得体。",
          "examples": [
            {
              "jp": "私は泳ぐのが得意です。",
              "zh": "我擅长游泳。",
              "focus": "泳ぐのが得意です",
              "note": "自然介绍自己的强项。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-1l8ue6l"
    ],
    "card": {
      "meaning": "用数量词说明有多少人、物，或做几次、多久。",
      "connection": "N＋助词＋数量词＋V；时长＋V",
      "examples": [
        {
          "jp": "りんごを三つ買いました。",
          "zh": "买了三个苹果。",
          "covers": "N を 数量词 + V"
        },
        {
          "jp": "毎日二時間勉強します。",
          "zh": "每天学习两小时。",
          "covers": "时长 + V"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "数词需搭配适当量词，并注意音变。数量词可放在带助词的名词后、动词前；时长通常直接修饰动词，区别于带に的时刻。",
      "category": "数量・时长",
      "register": {
        "label": "日常常用"
      },
      "formation": "N＋助词＋数量词＋V；时长＋V",
      "formationRows": [
        {
          "label": "数量",
          "form": "Nを／が＋数量词",
          "derivation": "りんごを三つ；学生が二人"
        },
        {
          "label": "时长",
          "form": "数量＋時間／分等",
          "derivation": "二時間勉強する"
        }
      ],
      "usages": [
        {
          "title": "物品数量",
          "explanation": "数量词跟随已标明关系的名词。",
          "examples": [
            {
              "jp": "りんごを三つ買いました。",
              "zh": "买了三个苹果。",
              "focus": "りんごを三つ",
              "note": "也可说三つのりんごを買いました。数量词的位置不止一种。",
              "covers": "N を 数量词 + V"
            }
          ]
        },
        {
          "title": "持续时间",
          "explanation": "说明做了多久。",
          "examples": [
            {
              "jp": "毎日二時間勉強します。",
              "zh": "每天学习两小时。",
              "focus": "二時間勉強します",
              "note": "二時間是时长，不加表示时点的に。",
              "covers": "时长 + V"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "注意不规则读音",
          "explanation": "人数一、二人有专用读法。",
          "examples": [
            {
              "jp": "教室に学生が二人います。",
              "zh": "教室里有两名学生。",
              "focus": "二人",
              "note": "二人读ふたり；一人读ひとり。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  },
  {
    "ids": [
      "gx-n5-1oe8uw4"
    ],
    "card": {
      "meaning": "连接形容词描述，也可表达原因。",
      "connection": "い形去い＋くて；な形词干＋で",
      "examples": [
        {
          "jp": "この部屋は広くて、明るいです。",
          "zh": "这个房间宽敞又明亮。",
          "covers": "い形去い + くて"
        },
        {
          "jp": "この町は静かで、住みやすいです。",
          "zh": "这个镇子很安静，适合居住。",
          "covers": "な形词干 + で"
        }
      ]
    },
    "detail": {
      "version": 2,
      "overview": "い形容词去い加くて，な形容词词干加で。可把同一对象的特征连起来，也可连接引起后项感受或结果的状态；时态主要放句末。",
      "category": "形容词连接",
      "register": {
        "label": "日常常用"
      },
      "formation": "い形去い＋くて；な形词干＋で",
      "formationRows": [
        {
          "label": "い形容词",
          "form": "去い＋くて",
          "derivation": "安い→安くて；いい→よくて"
        },
        {
          "label": "な形容词",
          "form": "词干＋で",
          "derivation": "静か→静かで"
        }
      ],
      "usages": [
        {
          "title": "并列特征",
          "explanation": "两个描述同时成立。",
          "examples": [
            {
              "jp": "この部屋は広くて、明るいです。",
              "zh": "这个房间宽敞又明亮。",
              "focus": "広くて",
              "note": "不是広いくて。",
              "covers": "い形去い + くて"
            }
          ]
        },
        {
          "title": "な形容词连接",
          "explanation": "で把评价与后文连接。",
          "examples": [
            {
              "jp": "この町は静かで、住みやすいです。",
              "zh": "这个镇子很安静，适合居住。",
              "focus": "静かで",
              "note": "静か后不加な或だ。",
              "covers": "な形词干 + で"
            }
          ]
        }
      ],
      "cautions": [
        {
          "title": "いい要用よくて",
          "explanation": "活用以よい为基础。",
          "examples": [
            {
              "jp": "天気がよくて、気持ちがいいです。",
              "zh": "天气好，心情很舒畅。",
              "focus": "よくて",
              "note": "不说いくて；这里还有原因关系。"
            }
          ]
        }
      ],
      "specialCases": [],
      "references": [
        {
          "title": "東京外国語大学：初级文法课程与接续参考",
          "url": "https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/"
        }
      ]
    }
  }
]);
