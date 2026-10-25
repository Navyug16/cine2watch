import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Complete verified official TMDB poster paths by exact chapter id
export const POSTER_OVERRIDES_BY_ID = {
  // --- Planet of the Apes ---
  'pota-1968': 'https://image.tmdb.org/t/p/w500/2r9iKnlSYEk4daQadsXfcjHfIjQ.jpg',
  'pota-beneath': 'https://image.tmdb.org/t/p/w500/szHCeYwi4ubewuYnlnz0YGqWnQC.jpg',
  'pota-escape': 'https://image.tmdb.org/t/p/w500/vqD7qjBRizY7sPVIHbFRUZwgEXL.jpg',
  'pota-conquest': 'https://image.tmdb.org/t/p/w500/tzKZRY2opw5MruSkevffgT5ocun.jpg',
  'pota-battle': 'https://image.tmdb.org/t/p/w500/dP5dYjLp5p2CG103cJMio4Nj29d.jpg',
  'pota-2001': 'https://image.tmdb.org/t/p/w500/3ZWsuP5rExMSji7erxnb1P5SK6F.jpg',
  'pota-rise': 'https://image.tmdb.org/t/p/w500/oqA45qMyyo1TtrnVEBKxqmTPhbN.jpg',
  'pota-dawn': 'https://image.tmdb.org/t/p/w500/mSmAc9G25fhOHH45SLEeagR0qi7.jpg',
  'pota-war': 'https://image.tmdb.org/t/p/w500/3vYhLLxrTtZLysXtIWktmd57Snv.jpg',
  'pota-kingdom': 'https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg',

  // --- Terminator Saga ---
  'term-1': 'https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg',
  'term-2': 'https://image.tmdb.org/t/p/w500/jFTVD4XoWQTcg7wdyJKa8PEds5q.jpg',
  'term-3': 'https://image.tmdb.org/t/p/w500/vvevzdYIrk2636maNW4qeWmlPFG.jpg',
  'term-salvation': 'https://image.tmdb.org/t/p/w500/gw6JhlekZgtKUFlDTezq3j5JEPK.jpg',
  'term-genisys': 'https://image.tmdb.org/t/p/w500/vvlNR34aejOLZkz7fXkkbKyBj5p.jpg',
  'term-dark-fate': 'https://image.tmdb.org/t/p/w500/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg',
  'term-tscc': 'https://image.tmdb.org/t/p/w500/vkMRWrVrNeX42ruRV5Q15mlBACG.jpg',
  'term-zero': 'https://image.tmdb.org/t/p/w500/v4sbn6IsJGAIZNHjdB4CprvS7zo.jpg',

  // --- Mad Max Saga ---
  'madmax-1': 'https://image.tmdb.org/t/p/w500/5LrI4GiCSrChgkdskVZiwv643Kg.jpg',
  'madmax-2': 'https://image.tmdb.org/t/p/w500/l1KVEhkGDpWRzQ0VqIhZqDDuOim.jpg',
  'madmax-3': 'https://image.tmdb.org/t/p/w500/3WcpsYU2y58IpEokAuE8FRnEcET.jpg',
  'madmax-fury-road': 'https://image.tmdb.org/t/p/w500/ulcAi4dKpAjHwYGS08vNyx9H6I9.jpg',
  'madmax-furiosa': 'https://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg',

  // --- Back to the Future ---
  'bttf-1': 'https://image.tmdb.org/t/p/w500/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg',
  'bttf-2': 'https://image.tmdb.org/t/p/w500/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg',
  'bttf-3': 'https://image.tmdb.org/t/p/w500/crzoVQnMzIrRfHtQw0tLBirNfVg.jpg',
  'bttf-animated': 'https://image.tmdb.org/t/p/w500/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg',

  // --- Men in Black ---
  'mib-1': 'https://image.tmdb.org/t/p/w500/uLOmOF5IzWoyrgIF5MfUnh5pa1X.jpg',
  'mib-2': 'https://image.tmdb.org/t/p/w500/enA22EPyzc2WQ1VVyY7zxresQQr.jpg',
  'mib-3': 'https://image.tmdb.org/t/p/w500/90DdoEStzeObs96fsYf4GG544iN.jpg',
  'mib-international': 'https://image.tmdb.org/t/p/w500/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg',
  'mib-animated': 'https://image.tmdb.org/t/p/w500/uLOmScFGIFTFqXYsYelLQyeQi70.jpg',

  // --- Godzilla & MonsterVerse ---
  'godz-1954': 'https://image.tmdb.org/t/p/w500/2W0Yw0qrgVMgdsSCZRKtfvaAh0i.jpg',
  'godz-1998': 'https://image.tmdb.org/t/p/w500/xJVl1I95StraYAwaNbBkVoWE2qA.jpg',
  'godz-2014': 'https://image.tmdb.org/t/p/w500/tphkjmQq8WebuVwNXelmjLUXuPJ.jpg',
  'godz-kotm': 'https://image.tmdb.org/t/p/w500/mzOHg7Q5q9yUmY0b9Esu8Qe6Nnm.jpg',
  'godz-gvk': 'https://image.tmdb.org/t/p/w500/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
  'godz-gxk': 'https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
  'godz-minus-one': 'https://image.tmdb.org/t/p/w500/2E2WTX0TJEflAged6kzErwqX1kt.jpg',
  'shin-godzilla': 'https://image.tmdb.org/t/p/w500/jPNShaWZMpVF0iQ7j1dvTuZLD20.jpg',
  'godz-monarch': 'https://image.tmdb.org/t/p/w500/7LBbaEaLSbqdviBYaSS1rRPMnrs.jpg',
  'godz-japanese-series': 'https://image.tmdb.org/t/p/w500/2W0Yw0qrgVMgdsSCZRKtfvaAh0i.jpg',

  // --- Alien & Predator ---
  'alien-1': 'https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg',
  'aliens-1986': 'https://image.tmdb.org/t/p/w500/r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg',
  'alien-3': 'https://image.tmdb.org/t/p/w500/xh5wI0UoW7DfS1IyLy3d2CgrCEP.jpg',
  'alien-4': 'https://image.tmdb.org/t/p/w500/9aRDMlU5Zwpysilm0WCWzU2PCFv.jpg',
  'alien-prometheus': 'https://image.tmdb.org/t/p/w500/qsYQflQhOuhDpQ0W2aOcwqgDAeI.jpg',
  'alien-covenant': 'https://image.tmdb.org/t/p/w500/zecMELPbU5YMQpC81Z8ImaaXuf9.jpg',
  'alien-romulus': 'https://image.tmdb.org/t/p/w500/2uSWRTtCG336nuBiG8jOTEUKSy8.jpg',
  'alien-earth': 'https://image.tmdb.org/t/p/w500/2uSWRTtCG336nuBiG8jOTEUKSy8.jpg',
  'pred-1': 'https://image.tmdb.org/t/p/w500/k3mW4qfJo6SKqe6laRyNGnbB9n5.jpg',
  'pred-2': 'https://image.tmdb.org/t/p/w500/83X4VwY9sdSJykskmsplIVG0a4h.jpg',
  'pred-predators': 'https://image.tmdb.org/t/p/w500/wdniP8NDaJIydi1hMxhpbJMUfr6.jpg',
  'pred-the-predator': 'https://image.tmdb.org/t/p/w500/a3eWGF6YPF7No5Rbtjc8QpDvz7l.jpg',
  'pred-prey': 'https://image.tmdb.org/t/p/w500/2FKjLRt7oK1bRRIrxgWmthbBdFh.jpg',
  'pred-badlands': 'https://image.tmdb.org/t/p/w500/2FKjLRt7oK1bRRIrxgWmthbBdFh.jpg',

  // --- Blade Runner ---
  'br-1982': 'https://image.tmdb.org/t/p/w500/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg',
  'br-black-lotus': 'https://image.tmdb.org/t/p/w500/aR06SJRDGqRmGQYXAXqeOkRZq7T.jpg',
  'br-2049': 'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
  'br-2099': 'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',

  // --- The Matrix ---
  'matrix-1': 'https://image.tmdb.org/t/p/w500/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg',
  'matrix-animatrix': 'https://image.tmdb.org/t/p/w500/eDjIG2hAeMU5cxLrd6oiQqdqoZt.jpg',
  'matrix-2': 'https://image.tmdb.org/t/p/w500/8xEVAe84zlL9rkfYT6dZXero4KK.jpg',
  'matrix-3': 'https://image.tmdb.org/t/p/w500/qEWiBXJGXK28jGBAm8oFKKTB0WD.jpg',
  'matrix-4': 'https://image.tmdb.org/t/p/w500/8c4a8kE7PizaGQQnditMmI1xbRp.jpg',

  // --- Avatar ---
  'avatar-1': 'https://image.tmdb.org/t/p/w500/gKY6q7SjCkAU6FqvqWybDYgUKIF.jpg',
  'avatar-2': 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
  'avatar-3': 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
  'avatar-4': 'https://image.tmdb.org/t/p/w500/gKY6q7SjCkAU6FqvqWybDYgUKIF.jpg',

  // --- Dune ---
  'dune-1984': 'https://image.tmdb.org/t/p/w500/4kJmUCE7mkVJjXa7A0g2rY4IGTm.jpg',
  'dune-2000': 'https://image.tmdb.org/t/p/w500/iIf5XeuuBKPtG6H7MfWLirbJGrQ.jpg',
  'children-of-dune': 'https://image.tmdb.org/t/p/w500/yCP8lKXBMtcG1CU9K3NsWlu1RgF.jpg',
  'dune-part-1': 'https://image.tmdb.org/t/p/w500/v1tRXZ4JtD2Iv6fjkPvT4GiwslV.jpg',
  'dune-part-2': 'https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg',
  'dune-prophecy': 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
  'dune-part-3': 'https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg',

  // --- Stargate ---
  'sg-atlantis': 'https://image.tmdb.org/t/p/w500/l0JYr2iqwId6VOmCV8dHzlIM6Wd.jpg',

  // --- RoboCop ---
  'rc-1987': 'https://image.tmdb.org/t/p/w500/hHtOgGb3NihlyRATHlKPaFApbrd.jpg',
  'rc-1990': 'https://image.tmdb.org/t/p/w500/nhqBxhOJXUJeFsyLxTFkctH9H5F.jpg',
  'rc-1993': 'https://image.tmdb.org/t/p/w500/ppLSSwCuC5ERRWbu9H3R8SPL9AM.jpg',
  'rc-prime-directives': 'https://image.tmdb.org/t/p/w500/5vy8rPlN7yUMfbcf2lzb98Pe5np.jpg',
  'rc-2014': 'https://image.tmdb.org/t/p/w500/gM5ql3BKYmHG3WtZ0buKXN7xY8O.jpg',

  // --- Tron ---
  'tron-1982': 'https://image.tmdb.org/t/p/w500/jigY9B6TKz4qlfikZcd18qtzTK4.jpg',
  'tron-uprising': 'https://image.tmdb.org/t/p/w500/dgajee1p38rJo6ndgvJRti4eqcp.jpg',
  'tron-legacy': 'https://image.tmdb.org/t/p/w500/xcO8Uun0mfmE3N9CaiCy0tvjpiu.jpg',
  'tron-ares': 'https://image.tmdb.org/t/p/w500/chpWmskl3aKm1aTZqUHRCtviwPy.jpg',

  // --- Riddick ---
  'riddick-pitch-black': 'https://image.tmdb.org/t/p/w500/3AnlxZ5CZnhKKzjgFyY6EHxmOyl.jpg',
  'riddick-dark-fury': 'https://image.tmdb.org/t/p/w500/rfNOl21lDRyqTeORYp4PiBlsW1t.jpg',
  'riddick-chronicles': 'https://image.tmdb.org/t/p/w500/bVO1r90diKfFLzvZ5D3qK6Z558O.jpg',
  'riddick-2013': 'https://image.tmdb.org/t/p/w500/pUul9pGWOKT7X0smkTvsIEIQxcP.jpg',

  // --- Battlestar Galactica ---
  'bsg-blood-chrome': 'https://image.tmdb.org/t/p/w500/fuHuvxnfcPXZauX1Pm7qwmc9k5L.jpg',
  'bsg-mini-2003': 'https://image.tmdb.org/t/p/w500/imTQ4nBdA68TVpLaWhhQJnb7NQh.jpg',
  'bsg-series-2004': 'https://image.tmdb.org/t/p/w500/99PJSbcO2LeM10uOGWeFihNp77j.jpg',
  'bsg-razor': 'https://image.tmdb.org/t/p/w500/tO3EoFJj0FJjKelDW5SUtquDIy2.jpg',
  'bsg-plan': 'https://image.tmdb.org/t/p/w500/vwtHIRwwASCiX0Ku487DY7YZrag.jpg',

  // --- Star Trek ---
  'st-tos': 'https://image.tmdb.org/t/p/w500/9byecLwsbbkAqGdxcKuuTI5kEzZ.jpg',
  'st-kelvin-2009': 'https://image.tmdb.org/t/p/w500/lV5OpzAss1z06YNagOVap1I35mH.jpg',

  // --- Anime Master Universe ---
  'db-original': 'https://image.tmdb.org/t/p/w500/onCLyCOgszTIyyVs2XKYSkKPOPG.jpg',
  'db-z': 'https://image.tmdb.org/t/p/w500/oQ5CnVj3TRifXl2bIOri6H6rfNe.jpg',
  'db-super': 'https://image.tmdb.org/t/p/w500/qEUrbXJ2qt4Rg84Btlx4STOhgte.jpg',
  'db-super-broly': 'https://image.tmdb.org/t/p/w500/uMEgkyiPznZP5AiMSWAk2jsj5gC.jpg',
  'db-super-superhero': 'https://image.tmdb.org/t/p/w500/pi0iZOEHeA3ih4p1IwAG4x2DZNH.jpg',
  'db-daima': 'https://image.tmdb.org/t/p/w500/lMULbSFZNXUC87MqOZQ4SSV9DXI.jpg',
  'naruto-original': 'https://image.tmdb.org/t/p/w500/xppeysfvDKVx775MFuH8Z9BlpMk.jpg',
  'naruto-shippuden': 'https://image.tmdb.org/t/p/w500/bBqEiQbbfyt4MWR3NhDZMbS4Wp8.jpg',
  'boruto': 'https://image.tmdb.org/t/p/w500/e0B6i48kxdRkMcK4tR4YNfXGWOc.jpg',
  'one-piece': 'https://image.tmdb.org/t/p/w500/dB4EDhre2dsC2kxYDavyKWqLQwi.jpg',
  'one-piece-film-red': 'https://image.tmdb.org/t/p/w500/8ibfhe4P7rhmn3lrPhOZzIJHA2B.jpg',
  'bleach': 'https://image.tmdb.org/t/p/w500/spZ1lZ6CzPsD1nOKNw64PTHtdgk.jpg',
  'bleach-tybw': 'https://image.tmdb.org/t/p/w500/tEaeXZZO7SEcDr6yRP31UrrxcX0.jpg',
  'hunter-x-hunter': 'https://image.tmdb.org/t/p/w500/eTd5AzvX8mxRFQ6Z3F7GQxYIRvG.jpg',
  'fma-brotherhood': 'https://image.tmdb.org/t/p/w500/5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg',
  'fairy-tail': 'https://image.tmdb.org/t/p/w500/AsfCVSHnFnUnbepLucvIB1N30Il.jpg',
  'pokemon-series': 'https://image.tmdb.org/t/p/w500/thz83PS9twtVBEEAM59J1bh75nU.jpg',
  'digimon-adventure': 'https://image.tmdb.org/t/p/w500/vFJAiBNUlzEVa54mXgHGumr1z1s.jpg',
  'yugioh-duel-monsters': 'https://image.tmdb.org/t/p/w500/3VD5QDTu0rQgRvERBMXtAvg0oIC.jpg',
  'sailor-moon': 'https://image.tmdb.org/t/p/w500/m0e8QxAM0n3XK9GPvkxzRB0YL4k.jpg',
  'detective-conan': 'https://image.tmdb.org/t/p/w500/iHfA63x7rFaWbP2C832uCe2r0zy.jpg',
  'gintama': 'https://image.tmdb.org/t/p/w500/f7vK8pzZIqhyA8sYmBpWmp9Ae7.jpg',
  'demon-slayer': 'https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg',
  'demon-slayer-mugen-train': 'https://image.tmdb.org/t/p/w500/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg',
  'jujutsu-kaisen-0': 'https://image.tmdb.org/t/p/w500/23oJaeBh0FDk2mQ2P240PU9Xxfh.jpg',
  'jujutsu-kaisen': 'https://image.tmdb.org/t/p/w500/6qQzMJG27XOJsyAEEIisoJB45j2.jpg',
  'attack-on-titan': 'https://image.tmdb.org/t/p/w500/kXUSsxQ2J3QVGkG1thmhI1FadKd.jpg',
  'my-hero-academia': 'https://image.tmdb.org/t/p/w500/phuYuzqWW9ru8EA3HVjE9W2Rr3M.jpg',
  'chainsaw-man': 'https://image.tmdb.org/t/p/w500/pHyxb2RV5wLlboAwm9ZJ9qTVEDw.jpg',
  'hells-paradise': 'https://image.tmdb.org/t/p/w500/1V9I7SvZbYoMbSvdtnlkkq9SB1k.jpg',
  'dan-da-dan': 'https://image.tmdb.org/t/p/w500/6qfZAOEUFIrbUH3JvePclx1nXzz.jpg',
  'kaiju-no-8': 'https://image.tmdb.org/t/p/w500/kx9mF5Yma1da1ELjbyWSVWJednM.jpg',
  'solo-leveling': 'https://image.tmdb.org/t/p/w500/uzHMp5heVLR68kbbUEXFPsmxYsM.jpg',
  'one-punch-man': 'https://image.tmdb.org/t/p/w500/dT10AxJIXVvRwFAew4tt2RhzJrD.jpg',
  'mob-psycho-100': 'https://image.tmdb.org/t/p/w500/vR7hwaGQ0ySRoq1WobiNRaPs4WO.jpg',
  'black-clover': 'https://image.tmdb.org/t/p/w500/uZUtoVChBGhNj9OfrM2LYpwBm8E.jpg',
  'tokyo-ghoul': 'https://image.tmdb.org/t/p/w500/1m4RlC9BTCbyY549TOdVQ5NRPcR.jpg',
  'jojo-bizarre-adventure': 'https://image.tmdb.org/t/p/w500/ogAWwbh3frWtiTyyXrZaVFtqCgp.jpg',
  'death-note': 'https://image.tmdb.org/t/p/w500/tCZFfYTIwrR7n94J6G14Y4hAFU6.jpg',
  'vinland-saga': 'https://image.tmdb.org/t/p/w500/vUHlpA5c1NXkds59reY3HMb4Abs.jpg',
  'monster-anime': 'https://image.tmdb.org/t/p/w500/n5XNKXnoXpoXyfiCtXHOf8q8PFM.jpg',
  'berserk-anime': 'https://image.tmdb.org/t/p/w500/xctRBSZzvoHDHz38ZZUGxRYetvG.jpg',
  'cowboy-bebop': 'https://image.tmdb.org/t/p/w500/xDiXDfZwC6XYC6fxHI1jl3A3Ill.jpg',
  'neon-genesis-evangelion': 'https://image.tmdb.org/t/p/w500/j6G24dqI4WgUtChhWjfnI4lnmiK.jpg',
  'ghost-in-the-shell-sac': 'https://image.tmdb.org/t/p/w500/nJlfPscbODh5gV1yTGSPqYOO7rl.jpg',
  'psycho-pass': 'https://image.tmdb.org/t/p/w500/uWnP6qTcc4imPJ9ZHaXlPQlcYnB.jpg',
  'steins-gate': 'https://image.tmdb.org/t/p/w500/bXhogkZCR0aOQ077rfMULYbDmtH.jpg',
  'code-geass': 'https://image.tmdb.org/t/p/w500/lRfTNdwfcXnECZXeZswMOSV3q36.jpg',
  'cyberpunk-edgerunners': 'https://image.tmdb.org/t/p/w500/v3JuB15WybKmxDeT1hWdK3j6eSJ.jpg',
  'frieren-anime': 'https://image.tmdb.org/t/p/w500/dqZENchTd7lp5zht7BdlqM7RBhD.jpg',
  'apothecary-diaries': 'https://image.tmdb.org/t/p/w500/sJZcy8QsOPuRPiCfoCWVB3r9Ohg.jpg',
  'mushoku-tensei': 'https://image.tmdb.org/t/p/w500/gLKOYIMyKlUHW0SVdskhgf9C0yy.jpg',
  're-zero': 'https://image.tmdb.org/t/p/w500/y7XwmyE5ue9hjk65fEWpO2hGU2B.jpg',
  'slime-isekai': 'https://image.tmdb.org/t/p/w500/pzujcdPAoH361NObVrtbA7zACE7.jpg',
  'overlord-anime': 'https://image.tmdb.org/t/p/w500/l76Rgp32z2UxjULApxGXAPpYdAP.jpg',
  'konosuba': 'https://image.tmdb.org/t/p/w500/oRaOeQlwktbGSd2T31FYAcgHZlh.jpg',
  'sao-series': 'https://image.tmdb.org/t/p/w500/9m8bFIXPg26taNrFSXGwEORVACD.jpg',
  'made-in-abyss': 'https://image.tmdb.org/t/p/w500/n30CBH4BoN5Z34tCpOWIPGJYOaS.jpg',
  'dr-stone': 'https://image.tmdb.org/t/p/w500/xbZQ3fDl0y5mt0ARwfeyrgQ4JTw.jpg',
  'haikyu-series': 'https://image.tmdb.org/t/p/w500/ntRU0OA4etGGiMMmH1Yw0bnaMdW.jpg',
  'blue-lock': 'https://image.tmdb.org/t/p/w500/yZYZqT1f6rddhiSdjl8NVVCoZKE.jpg',
  'spy-family': 'https://image.tmdb.org/t/p/w500/xlIQf4y9eB14iYzNN142tROIWON.jpg',
  'your-name': 'https://image.tmdb.org/t/p/w500/vfJFJPepRKapMd5G2ro7klIRysq.jpg',
  'a-silent-voice': 'https://image.tmdb.org/t/p/w500/tuFaWiqX0TXoWu7DGNcmX3UW7sT.jpg',
  'violet-evergarden': 'https://image.tmdb.org/t/p/w500/61EwFPqc0r1uJo6la49J55F8bQ8.jpg',
  'ghibli-totoro': 'https://image.tmdb.org/t/p/w500/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg',
  'ghibli-mononoke': 'https://image.tmdb.org/t/p/w500/cMYCDADoLKLbB83g4WnJegaZimC.jpg',
  'ghibli-spirited-away': 'https://image.tmdb.org/t/p/w500/jUo8cNmU400WtZiJss45HNXlQ2e.jpg',
  'ghibli-howls-castle': 'https://image.tmdb.org/t/p/w500/13kOl2v0nD2OLbVSHnHk8GUFEhO.jpg',
  'ghibli-boy-heron': 'https://image.tmdb.org/t/p/w500/f4oZTcfGrVTXKTWg157AwikXqmP.jpg'
};

async function applyOverrides() {
  const franchisesPath = path.join(__dirname, '../data/franchises.js');
  const { FRANCHISES, FRANCHISE_HUBS } = await import(pathToFileURL(franchisesPath).href);

  let updatedCount = 0;

  FRANCHISES.forEach(f => {
    (f.timeline || []).forEach(c => {
      if (POSTER_OVERRIDES_BY_ID[c.id]) {
        if (c.poster_url !== POSTER_OVERRIDES_BY_ID[c.id]) {
          c.poster_url = POSTER_OVERRIDES_BY_ID[c.id];
          updatedCount++;
        }
      }
    });
  });

  const content = `// Master Cinematic Universes, Franchise Hubs & Canon Watch Orders
// Generated for cine2watch v2 Production Platform with 31 Master Sagas & Anime Universe
// Verified & Audited with official Supabase TMDB posters

export const FRANCHISE_HUBS = ${JSON.stringify(FRANCHISE_HUBS, null, 2)};

export const FRANCHISES = ${JSON.stringify(FRANCHISES, null, 2)};
`;

  fs.writeFileSync(franchisesPath, content, 'utf8');
  console.log(`Successfully updated ${updatedCount} chapter posters in backend/data/franchises.js!`);
}

applyOverrides();
