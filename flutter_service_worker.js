'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8b38a18a805dcd31c6bd0057dc0e0c25",
".git/config": "48076fa8fa1f1732dd5401375628084d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cf4c283a50577bce3602a8d0cbec7a6f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ab2397634d70460e51436e4bf79e1134",
".git/logs/refs/heads/master": "ab2397634d70460e51436e4bf79e1134",
".git/logs/refs/remotes/origin/main": "c8ca61f619ef957261cb943607a4b8a9",
".git/logs/refs/remotes/origin/master": "dee7d840bb29b9c1e0b5927542ef4aba",
".git/objects/01/b9dcd27b28c9829cffcd1f99d73d3dc6b43d1a": "33552dc013e9f2a91d48a6561d1ccf94",
".git/objects/02/6d0acc3d90432070af628a2024177a3dbe641d": "f374886b9bfae5d207291f32a077a078",
".git/objects/03/a509cc37f80c51a1a595310349e2cf585086f5": "84f3586fbb4c7f44bc362e7bca504797",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/215b7d63df3abe6d202fd48847bf9584f5fab8": "b862e3983cf33d6abb8c79e41ecdce4b",
".git/objects/06/f4d8fc7afc4815faeca337480cd96379e3d6d9": "bae01d703243212f7fa40dd67d749f8a",
".git/objects/07/324bb0e269d1c08cf9af845a5164321f39b362": "a0a80110534ae4b05123aa53676a75e0",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/3b08bf871c570e2e569993370aafc85d8f9014": "6c1ea4399d10be259fce5e454910acd7",
".git/objects/0a/4eea24559b590230a9fea1875a8d1d55f4f0a7": "2c7f6d5b2aaab5c34d0879c010300076",
".git/objects/0c/759310e4ac5354eb5254f506b9ec3677c6b7a0": "aa01b9c5ee893a1c28e26822f40a02f8",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/13/5615064d53a9e70396df45fdb14ef119af848f": "90abbec1385ddde4dadff1ffe2f9e7b3",
".git/objects/15/bc917cb373cb0c12942dd3591ef0aa816fa2d5": "b2e10a0587927661308c038987cc3364",
".git/objects/16/16cac7e47d8dbc42da06bff8341c55cdb6667e": "74ea63fd0c27f3d378e5719d98c6073f",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/01917896aeb1f49be215ff46d0666509adb6f5": "29f9445dfe0b45c2c3cede54491c7d9e",
".git/objects/18/2e948fca6617b866c8b4f7861d3bc77abf9bae": "5da0be6feac142f9c707ceb5f6fa7df2",
".git/objects/1b/f3732d2db84ffbe3f47465a9bdca7285c913d1": "f57d2539d38ad54aeee5a2b317959c58",
".git/objects/1c/8d477965f63a40ed706ea5c22c482ed02c5a57": "28a0abe3c69166490a2bdcefeae6fbdb",
".git/objects/1c/aa15d8f7a55ad2939ce1d6c79f74d6ddcca0d2": "269dcc8fb13c81adf2d005c2cfa9b48b",
".git/objects/1d/7e342cee8a0d027a3b2aa8e43dd16455d67698": "ff1f798832069932cd4d4af749dd0989",
".git/objects/1d/cb353465ff151b253139803d4894944d127fff": "2b7f25aac0a81aad2ab19b40bf6e598f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/a8ff9c26a6c20dcb938c2d3abf688a2e2ba620": "bf2250f66d443007dfd4459f0f219345",
".git/objects/21/1de66af2cb1beb25fba73a5a92f3a50024372c": "c26f0db8f28817b9ace8e328ad00e792",
".git/objects/22/2b4207aef9538b85e1a4194c251904d7436b73": "da673b30fce714464d559bcced5cff62",
".git/objects/23/d1b2135d6aef1417e77627cff6f39c7c73723e": "e0577c21f5c55f6b2f2fd1d0b81a3dac",
".git/objects/24/20dd42b8e2ef085fda37c3815c24760e817580": "ed9af9da45b1a0936e4365cb9add6184",
".git/objects/28/64a95e7274adfa177571c0fd59146d4c3a1b37": "4ec4103be7018951d6eb547a269d0471",
".git/objects/2b/723a59db4637910a8a4b63b10215f2a882e12a": "4b65eba65375f2d2d530e78f2370e6d5",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/30/475420820e3a4bff1a381a91e060339aa24f79": "740984eaec225cb0dfc61fb0e1895cad",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/38/95a466070a01a5d0038e7b44f55816676fd1df": "e5de0a2a15f8483f423378277c20c53c",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/eb5af7d97a26200370bf1c02d045f5ae9c3bd0": "04e27883b77ab8c41d143a80dfd0f6af",
".git/objects/41/ae036ceee1e04cc63b45b4be12daee281b6d54": "297df37c10c019cd708d0aaac40ac525",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/d1514404dd24f24e352d89754fd705c7677489": "9371fe47050a6855ae8a86a71fe37eed",
".git/objects/45/9b429a0508a1719e43047b5fbf6710fde133a3": "eca74a863d1231da5b3d7f17ccef781c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/54/2759b687c8d3c5ade12f013f60c75e67ad5b66": "6a67454dc7ebc1ca1bde7b93f86807b6",
".git/objects/54/b074b80a95c9d72537583024ef41fb7f816324": "812af0e1c576b8139b7cd0527ef60044",
".git/objects/54/dd104062fd7f1cbbf968f407a2949267cd0a63": "f61e5ca410e12c3fce532b914458740c",
".git/objects/58/4b0a2158a33b983b403a5740a442ba77953ace": "83aabea69c802fd93cb2dc6d8702202b",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/266e20dfea324701bc2d2f80278e5de47b6df3": "b10666c4ed10ad2b2ee1d06cbcab937c",
".git/objects/5c/f7bb32a3d5d34a270d02b463c0bc7c3fe06007": "032a85e8a41aaf3876080158e1471f9c",
".git/objects/60/8497983133e701b2f66f684e8546a05c9b6233": "ae6ef0ca190cc74df7755644e9c2ee6d",
".git/objects/61/46c9b42cad4544456e46b0d976656a32dea9a5": "18487820667314381697bc05190c989f",
".git/objects/62/32e60c7ac741f09dd02fef857ffdbe4bb4eeed": "e512ea581768fbe9b6edbb741621a17f",
".git/objects/62/3b439fe1f02b646bd27df37fa15a7815da2d5c": "91c33ee4c253cdbac20ad5decb440b35",
".git/objects/62/57accac815b47cbded2627536d4469fe1564cf": "1da8835e59bff91063d6113ad369140e",
".git/objects/62/5aca93989a4a907bf3201323fe2a80e4753adb": "5170e6f4d9ee36c0623366865ed3a0d7",
".git/objects/63/e2184f7ba776cdc34a5067fc08af07557cbc4a": "8999a07ee1f665be50b6b59330f14d45",
".git/objects/63/e30d566f6e89f69222529e90c87aff52e024c5": "4982258026e147ff29a5da7e4d115eb3",
".git/objects/65/543603f08b5c139defd55057a7f406ff3ca691": "57b95ba7fbf0d33fd688da28f87b4aa4",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/2c731817d02f4a4828c79fa19cba724d1ed93f": "205a78b01f1f3fe97f5fe74b99d3ced7",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/6ca54bfed454b8030b6386a6e7f4db28e43ad1": "0d337f5177f84dde46ebc89b2b19c6ec",
".git/objects/77/afa8a736fd9f37d12b9d625257246cfa19b4b4": "1ba78a6be7b0ab117e043c6a741071e7",
".git/objects/77/df137ec1ca1eb6e4d89b9e8a35d61fc8d57f65": "618fa96e796893562134064f734390b9",
".git/objects/7b/156de8729c3c60bfb7a20b6960087fdf7bcdd5": "bd80067b598fd304a40ef46d0351f4b8",
".git/objects/7b/2dc0f1aee19c405828612b0d569d1a787340ad": "5cc30aec2bf1fa5b3eeb7d74e85d61e1",
".git/objects/80/e706a239ede1f49e353ef8d1fefdcfa8254b74": "5151e2154696f7fdee11e6c543eabaa7",
".git/objects/82/c560d9225620b6ca4ff70363b3c6b026f812c9": "c8a71ab21170510ba52b07fa7bd53389",
".git/objects/82/e6f220f3251c9868bf2430a4c91bc487ab8b06": "53c244092a896aa9c33fb31842baa1bf",
".git/objects/85/29252abd670caa62692f9abe8c4255d89e6266": "60b771cdf9c0e83546de20f119102ec7",
".git/objects/87/a3bf7f5fb68e4cdaaaf76012052e3083dc6ed5": "fd51d12447063ebb354794eccc204f54",
".git/objects/8a/5caa0b440930ce78cba032f19e16bf74ae852f": "b4b1151b262bb031d94e66ed82db5a25",
".git/objects/8b/275c5c8ef8d5f2c7484fe9dafd745a5ad5377c": "3f6c3e3a5c4b72cff78618ca160860d5",
".git/objects/8e/b36f1c96078c6d7ff71793c4bba25364ca4183": "70fa458087a63282fe4047562602db4b",
".git/objects/8f/3458765201aedbb969026fe1223b15cea6ea40": "add709918b8c941db9bcb0f7d5c5b571",
".git/objects/91/fb44f1d837646eb329ff58b3ec54b3fd9538f0": "e016422e03441148bdfa8237de628971",
".git/objects/93/fd43f092a33bcf2bef7eacdeaf1494ff8b8dd5": "00ee9c63e5a30e9eeacfe330b559b6c6",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/96/3229c677171674d3a2b09937c8e41361cc6594": "996f382cc5bba80a96396ae787b3239a",
".git/objects/96/394c97fb8bb1c74edd356f0aa866eedab78eac": "2d60b1a8dfee01a85e909dc7e3b8eb57",
".git/objects/97/10a02fef79feb77dd343097a647fe17dd39796": "afb6775c6abc7fa021550ced7e03d5c0",
".git/objects/99/64eb0cadc8398307496edd105876c0495decdc": "2fbdfaa850a9c4c0a4989443966647c1",
".git/objects/9a/308eb84b5a7284481057d6645bab6c9336a2fa": "dbb227a729b8d8d0885ac84223d6a506",
".git/objects/9b/a450fd3e2253852968536755cd8c37e72178ad": "2b9e9fbfe46ee2634e07521ced05aa2e",
".git/objects/9e/a5e7cd80e7bbdbca07cff0e5a9c9740cf8f54f": "f8e210741dc47af5ecc8e5f39383e318",
".git/objects/a2/86cc8609ac4fa68d2a0bb5f41db0ab8c2d3464": "d0d82136a70af73d7e5a0f6e830d22b1",
".git/objects/a4/6b06dbae827f3f51db55d9e6871aef1f6090a3": "11ec56e0020f999843c23dc24f230a25",
".git/objects/a5/1865943c69164f83514b54064f0ff6ab900fb0": "185cc803a24f10ce259f7b300d25b257",
".git/objects/a8/1e2f90e1be37cfd7cbd17f8df95e9c48542957": "dcfdd5cad7800c8fca330b4145b6d3be",
".git/objects/a8/2c6798d388e05652a22cfab4225627e8c11865": "bf3f1314e0b4e8e5e37e7fdd80d13280",
".git/objects/a9/55b6f76164f307dd1a873888f2d568aab5feb6": "c145dff6bfb858a36687b7c5f7ddf78e",
".git/objects/ab/2020bcac1c4df5ad20417028760d2121340a89": "53d6e43fd1161d7e1e0778b27a0f440a",
".git/objects/ae/6a8ae098a029b0cf9394fc02c1a5bbc0769000": "0e8f8aa82285ec8d05df319e2271e255",
".git/objects/ae/83ccd7b974e0240380fbbfdf773fca263ba7a9": "f497bc532b237b42e2aa84a71b8e85ec",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/27eef138150bd2d77d4ca8fe8a6e2565d4f911": "8384a7f4b29ad100415d2eccd25c192f",
".git/objects/b0/7bbae816f6df4c08f3d663388838a4ed1662ad": "b6c2e7f654979a7a61e17f1d7018645a",
".git/objects/b4/ee3ba44311ef44b0b659c702c826211cab8bef": "cb44f854e3b7b43261e717cfb3be9489",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/45de2107ec0ebe257b62d2428230a49a6ae826": "a2f33c625746706599c919bf1e613562",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bd/6b6685ee76fbc2e6165c327a0cc6030061ef9b": "656d7e32cd30596751450c697edd752f",
".git/objects/bd/debfa8c2beca2f2495c7e0b915e091c105fb23": "bc6b62fb95b563cfdf6b1c6deea86e3c",
".git/objects/c1/dc791d2af5a0b19f9d74a9f1ffdafddd2d2c52": "1e3df894e26141364ed6962f5b489525",
".git/objects/c2/88f9ad52f80b379d61037e5d0bc305168136f1": "312a6dc13fee7332c809852d0b2c5837",
".git/objects/c5/850b2dcab37630cfe3329f7521ad6c8d9a0353": "1af05b54523a943a6dc2ff4a58a23124",
".git/objects/c5/db2f4cb0d9437c73408ed138a36075ded0d3a1": "a9775feaac05d9113239121c2d20f8be",
".git/objects/c5/ec888d034b62cfc699453b97e948cc1596c22d": "1a36ba159bd84d561ef84d3019c8e854",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c9/ab116df752ff1e14fde04fff1fc95fbe215106": "2284adcfe977df4357bd9aba7f0f2a5b",
".git/objects/ca/c99d25237f4625d5df0e6c528f4851a1ccb477": "6f3440039dde9d4542f6f68b0dd1770f",
".git/objects/cd/8d08339d8cb07440acc4d6bcf22a9fe6c119fa": "b18462ac1260bc821c3faa01f4af6ae0",
".git/objects/cf/ef100e1563d407fc06b23b8e4f3760282bfe16": "26dffe52802c555794c80a0039bd1315",
".git/objects/d3/7887a5029c834ecd3f95fd330d3e797449495a": "6e8a6fa6684b863411044d11ec38786a",
".git/objects/d3/b964b8a417609fa8f96984e965ca6eb277f0eb": "fe38e00fbb9d51c1fce0c8813da2341d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d9/de34c500e3aff0960a1da0c064e9da2241c778": "1bca1177c0988ee2580c9052b77c214c",
".git/objects/db/465b8e42d010ee47db8be804b837ef0ddad5e0": "16f29ea83901e73c83f42a0c12083a27",
".git/objects/dc/42824b39b7c5170f94ac8b1da801ed6e94e8ed": "9923f5ab428a1599cbf742181aaa5480",
".git/objects/dd/651223b95c94ee91ba8f15238f3af9d1940eee": "39d1ef930ba784be573bc38c5ebe38f5",
".git/objects/df/e74705f60a4c919e2ffbd937fcbfa1a5ed2def": "2a27a2c26b723e7ce9c675c6c698e8e0",
".git/objects/e2/bcdd53d06f0d2f8060691042c4ebf916745cf3": "9295409893e3f3c9ad123fa1f6b24a14",
".git/objects/e3/3b2f929f49620a2562b232f0d09838ffe4ab6e": "ce53bb1cda80a3182205095ffafc68bf",
".git/objects/e3/fa5921dc066e022d74749ae2f56bfa327813bd": "987d59e4b88240c2503e3fe9297cd51d",
".git/objects/e5/0a17551a98ab3c6927b73a322354b4e821946a": "11ba8373fb75cfc89a1e18aa262a09d5",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/94431fb9b319c03629fa983eb04809b0b6f57a": "1d16254f778ce0a6b8d9b9ae531a6ced",
".git/objects/eb/721d404d03df4adc80f37b17caa63d14aaa2c9": "a1ea526cf96d35b0b7e49ad5f6ad1c30",
".git/objects/ee/bf0437638c2579ee3cd8f61461821ae3945dc4": "d2df56a054e274ee0b6350cd202b3eab",
".git/objects/ef/6de714b0751c65964226c2e4b0b2b90a0298c9": "4a58982da167ad321819c08ae80038f5",
".git/objects/f1/6fb433018972e18d99f4a872917730b828da64": "b13de6ccf7c312987ee4bff18fc80463",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/4af8bd533e2536c862b0bfc2f1fcec5421b340": "935396142af464f2443721eb27b0b68e",
".git/objects/f6/136c8fc43e889dcd6598534e6bd3493a6e4d9a": "454ff68f3986f3406b47a6faed909841",
".git/objects/f8/d2b060b37040029bbcbe1ea8475d660dfce43c": "c550b8fa74b5b57ef7fe885c8144949e",
".git/objects/f9/0f9557cefb4763bb947c76095e04d6cf979288": "4c6281ee92c86492db74ee6ec1445a1a",
".git/objects/f9/6ebff8de96b7262d357b7caf6e37ed2cb2e656": "d8defa21316a1cf9ac9f824ab87706cc",
".git/objects/f9/889a5ab1fd9941eceb168fd29d8c8b4c611d0f": "7eac29cd8e73aa0496a1cdf3144a3727",
".git/objects/fa/7e8fb7a9b13d66fffa7b77b3d204ef9a13d347": "c05bff38927345de714595862fab18b2",
".git/objects/fb/d6845cfcf4befb36f57075c83c72a960322435": "ca9d2557f01f9c01c21445ddfa3ae2e2",
".git/objects/fd/09ef9fc16a7818a3ef92511b0e7081c2cfc6a4": "52dd6c30883174acc5d63ac4a32bc308",
".git/objects/fe/5a0e338404ea420ca8564784af0920c53751d7": "e80a4f4fa6ce6e0964991067fc3a1aed",
".git/ORIG_HEAD": "397f6d7a121e245c089478b9a2138a8d",
".git/refs/heads/master": "9498d5bbaebbeae44ea47fcc0ba82632",
".git/refs/remotes/origin/main": "45da1731e1b2f18c0bf3b54af475978a",
".git/refs/remotes/origin/master": "9498d5bbaebbeae44ea47fcc0ba82632",
"assets/AssetManifest.bin": "11836db135af93cee36d27dacc5cf346",
"assets/AssetManifest.bin.json": "dfb3b116b3c109805f368ad3ee94926b",
"assets/AssetManifest.json": "976ea7f78836df561039a0ac4dc4fc03",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/images/logo/Logo.png": "01eb6773b7fe19ed75295b033f2c5f2b",
"assets/assets/images/logo/Logo.svg": "6c9850e66110e0921a08b0beac7f1e7b",
"assets/assets/images/logo/Logo_m.png": "08e6b8e1f5d03f8274bd2eacebb2771a",
"assets/assets/images/logo/Logo_m.svg": "8b5c5684dcb66e67cab4dbd69858913a",
"assets/assets/images/logo/m.svg": "a81b0d393ba4e606de46931e3b8535b2",
"assets/assets/images/svg/1.svg": "7e4a9ed41f742946dfd35d13c24ada78",
"assets/assets/images/svg/10.svg": "d90caed893e5e97118953dfe09a0e686",
"assets/assets/images/svg/12.svg": "0b3fe820326d2403fc593a39abf957ce",
"assets/assets/images/svg/13.svg": "d6bf3945e845c6ce0af7a9fbb30a631f",
"assets/assets/images/svg/14.svg": "29a47eb5bad72e5e7d406dea61652cc1",
"assets/assets/images/svg/15.svg": "66a11df4f88a08643652ba483c176864",
"assets/assets/images/svg/16.svg": "ff0e753344eb9bc4feb18be98357c6cd",
"assets/assets/images/svg/17.svg": "48d3dbcdacb1c20b21c14893b17d0abb",
"assets/assets/images/svg/18.svg": "a1669b9a564fc2c0505123afbaa62689",
"assets/assets/images/svg/19.svg": "39aca9db3eae0fcb12293b255a2de380",
"assets/assets/images/svg/2.svg": "2cd6015aa3f3889a3a74b1a0692f3ed4",
"assets/assets/images/svg/20.svg": "6ab725992d222e11803a4c850a9d56cd",
"assets/assets/images/svg/21.svg": "6ca94b892f652f903e449f8c398c10b7",
"assets/assets/images/svg/22.svg": "fb87cd6d506ebfb8ef59436ca436f6ed",
"assets/assets/images/svg/24.svg": "50cca7433d76794b0ae6601a89c3f67f",
"assets/assets/images/svg/25.svg": "244fddee256f4dd33dffcd3f71026c56",
"assets/assets/images/svg/26.svg": "b0aa5bebb2df001cad7f780fc797e920",
"assets/assets/images/svg/3.svg": "5ce6edeedd92e779a1792e24e631ad3c",
"assets/assets/images/svg/4.svg": "781d4787f3e852fb1589a52c0ad32d1e",
"assets/assets/images/svg/5.svg": "ab52fc02c0f101826afff976fc64919f",
"assets/assets/images/svg/6.svg": "162e1c93dc90dc108dd8527e3b21443c",
"assets/assets/images/svg/7.svg": "b9c7d55a0459f59f1cbca42a9946a9cb",
"assets/assets/images/svg/8.svg": "b076772094aa80169c7a6199624ce6f7",
"assets/assets/images/svg/9.svg": "88373faba8ecec38de020dae8e02f5a2",
"assets/assets/profile/1.jpg": "d719a45ac13bc980ab70c5568f532650",
"assets/assets/profile/2.jpg": "fcf802d2b5ff2f7994c8303a2c9a6272",
"assets/assets/profile/3.jpg": "11b50509b46f90af42ece4e7fc4a37ff",
"assets/assets/profile/4.jpg": "d25a5273c831def7e68709708571a141",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e75f50b8b3533f0bdcccb24f6635319",
"assets/NOTICES": "983aa80e6501d690d4c00e33fb3d832c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7c36d7595f3af06f8bb22fb0be38c7c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b392c64816c3c79d6e4b75fcf7396761",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "89883e763749bfc832ad46c02524cc1b",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ddcbafb60d7a327efdb1dacb49b0f52b",
"icons/Icon-512.png": "915e827c5eb5a7b1805835ac03fe813a",
"icons/Icon-maskable-192.png": "ddcbafb60d7a327efdb1dacb49b0f52b",
"icons/Icon-maskable-512.png": "915e827c5eb5a7b1805835ac03fe813a",
"index.html": "992023f2e172ddacefee66a85f17b1c4",
"/": "992023f2e172ddacefee66a85f17b1c4",
"main.dart.js": "3039f78c967d9b1f214f13f830ac1c70",
"manifest.json": "fee7f9242adef5a4cbde85fcd85453cb",
"README.me": "e22167a8c97104999789f21c2864aac6",
"version.json": "14f35ca75969cdf5175ba0aea5f8b81d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
