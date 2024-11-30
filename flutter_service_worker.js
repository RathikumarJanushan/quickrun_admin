'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "dab7fcd37bea49a8777fcf8fdb66d19c",
".git/config": "81e6e832c95b2286d892687b45f63f08",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e6ffd2906f3edc23860e8863c629bf73",
".git/HEAD": "2d7a2142ea166794c1f062640de702cb",
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
".git/index": "407a6505cefabe6f9c9901d35e0e9c00",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5f11dab9982892f9db53729a84345a23",
".git/logs/refs/heads/janu": "498b6e429c23c0c063763ae25bc7ae5f",
".git/logs/refs/remotes/origin/janu": "24c95ce66d2dc900ba850cdf85e92e60",
".git/logs/refs/remotes/origin/main": "984eca88cca146a5ca318689441c84b5",
".git/objects/00/056dff87b5e6b7bc4e6879c3562df8c3f6e731": "64febb616dee59aa314c28de5f417b9b",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/cb4e93264ec54448e9bb253c5cc33893035692": "8482b6e7480061dc1743ba178063d089",
".git/objects/09/d4f3c361cf3c91d59af2b12893d8898950fa2e": "a62b29917c35ea048af49f67f0016133",
".git/objects/0a/03411cb77f99f379fa7637686bfad390f0582c": "80af6009d5f928fbe6c9c4fb2e16cb06",
".git/objects/10/2a3d2ce59c4e46da801f91aab02645a975721d": "d4df8a1a663b6e47c0978a055588dba0",
".git/objects/10/6d258cbde849e2058e87489239a705530b3098": "fe158125a11f57beb28c9ad6c637f7fc",
".git/objects/11/00a3a52a10e56cce2cada6564a6491bea9eb16": "0bacf78399e43cecc9ba7b1ca9a61c80",
".git/objects/12/a7c29a7de23d6cfb8843c08bebefd181109a31": "8989ff2c85d575048df55317344fb954",
".git/objects/13/bb44259ea81d2fa4cc312c774d7ab301c96fcb": "de84ec8c47bcfe2a8653d7b98340dd6c",
".git/objects/1c/5941e4ef2f8aea0f38a72b921dd8b8de4448fc": "4f0253b3c19cee2511e0ac42d17ef862",
".git/objects/1c/a1b6e659d5af87b24629fd5c8a1077f8549af5": "d7172bf83ba494e3aebc9768baa93e7c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/bf3fe407d4c5724bdc7e3495c08ac06357b627": "5510b86765d8a5d35fff174cc8e0123d",
".git/objects/20/41cb7e81b6916169570ed42efadfe5e8dfaf54": "ef3ac766f9511721be2af3b2d0d43ab8",
".git/objects/22/4694227bc188c2ac34df90f1805c075c89caad": "f3d9ad3ae6b1c8940efb4ca07e43bd16",
".git/objects/23/9d69dc23299efaf89c57c0879b9c18a56919ed": "dbb7f0b3fc967e97fc8a17984de7c584",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/05b29de641745def12cfccde6c8112b393e224": "f90d7d6b586a4b25776d85e594b4bce7",
".git/objects/27/5105421755ee375b9036cbcdc8850f79b7c5b0": "2b707700cf33f2a6b89be44a94553aeb",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/39/02d65389b583a158b77ee1c234f57abcc88288": "b6bce40698d6125a7d62aad51a808a88",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/c8467c856a2f9934dfa0e9cc1a975bcd5d8400": "03e55963ce3f909a049b1d51dbc8e940",
".git/objects/3e/2ffe5a594353274d77ff3ed051b94572954796": "349516495cc80f166cd99bb9be4b476b",
".git/objects/3e/7dbc818018aad3a04d6ee17be7f53dad00a1c4": "f5e660eb228ad3f1f267b7878e946cd3",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/f09533e507631e66459cc08048ea8a52523d32": "f4c209276459e14100b5c78f02653f61",
".git/objects/43/83c9def79b89c86e6125ad89d70a425ba782e9": "0d6cfca2039ea3af0f8fe5092e4cbad1",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/0025b5deff335970d5ef8933f7a321d8e007fc": "9b8879e7de299c5fead3b6243e1a6d7f",
".git/objects/45/696d6a8a67f7faab05584a6c86c591a4213e1c": "9fe7d613ebf4c698b285554d7efaf18a",
".git/objects/46/1c381be2a69348fdec3966ae706121f5c1afd2": "5881fd7f50b6dbed485168af575eda87",
".git/objects/48/9d491ff5034d2e3302c732a34b8accbbd08734": "fd856ac01169adb3a241cdc9c125195e",
".git/objects/4b/01f9ae88c6158997d0ba0ea46b4e153d1ad315": "f27857f2bb2097c80b3fb288271097ce",
".git/objects/4f/54f6f7dd43dd11f102601be769c8448318cee5": "bfae2c93167facb51c4050ac9c4b73cc",
".git/objects/52/2944072d7eca7a5214ddde2f744bf4d69ded25": "f9eedce35824dc431da5b77f71536083",
".git/objects/52/5a2b10077b52e4ef715b08352de1ffdfebe507": "fd2c67c96572d893ef1bea1533e883d7",
".git/objects/54/49aedad6ab2732bd97ade781d1a346dce94c35": "6f2c8d2e725c5a73f888cce605952cb0",
".git/objects/56/a358560fbfd59dc48d569b7bf0ba2b8b7cc296": "e1e7bad153e22c81af56b3e5b5339353",
".git/objects/62/afb00941e5f8f67f1fe80ec40f64cd21a9a34e": "95c13e29749ab24e9b6e117359752f25",
".git/objects/67/744e5813b9caa1c08eef8471a23282b8c8c7c6": "a934fc15910335a506e83a3c26568a0b",
".git/objects/68/6f1c261f189b2cf524385d18f2d41e461affc1": "6c963fa53302ae5f74bbe558222be41c",
".git/objects/6b/86831ba34aa28d94cc8ce073b3cb4467062490": "6d68a722c2476896cddf4ca703f1b0c4",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/1be2d6c266a11ef8d25464f45bf454e8632f1f": "4d379c8bde5c5b27bcd5562648ebca81",
".git/objects/6f/836b55c73dbbd320a6a811f5db575d717fc035": "75165b5663718d4d53dfd14694a92c46",
".git/objects/70/50eddbdd06c1ab7a0187fb9e54fb687ab2893e": "1b0fedefa86ced3849ae903e7a013952",
".git/objects/71/6118c27aff96f43ec2293abe5e36631cf9bd40": "6c188a876b676d55be1b5d4320785415",
".git/objects/73/7760b5df73bf4e48e8d17146a574e8deabc80d": "13d16aef91d25b6dde089b816cc1d6a7",
".git/objects/73/fa580e6fbce3b02d0b65ef2164334b7f207002": "fcbdcd3471f62462a016ce58b16aa742",
".git/objects/75/8f0027f1ff7e0637f0ed8b35ce3b54806d8032": "3ca247265075d23619060ac3bb82c5d2",
".git/objects/78/d5a0b2578958af46bbff5d187beab5e421713d": "30a42e158804bc59aa3825d51a40d1d8",
".git/objects/78/e6a5121ea18bc491117788d4224f21cc88ade1": "b4d02896e1b167aeb2f18970edadf1fd",
".git/objects/79/1fec66ced8c6fc058eb2bbf190c0e411880caa": "f9096f6da7777505987f473ebde54006",
".git/objects/7a/52d77646a1230a1d9011e868ee8161b67fb4eb": "c3af6146fa55596914a84a65464230e8",
".git/objects/7b/d8210ecd6046004899d9c2dcbef6ca401748f2": "46ad035a9aa1d471e46f7d0b44923177",
".git/objects/7d/cc289b645400fbb4bc96e9e77c40051d6403d4": "0f92c2d268c556bb9ae5bcccba22b0b7",
".git/objects/7e/68e43ffe427b8c1beb26965edbfeacf225692b": "88c6082b1bcd06f12efd93b47800f02a",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/d8e768c8413a2cadfc74a3dfbf105ca2f1bdef": "b5572d366020671c87e9b9d62b3fc6a2",
".git/objects/90/87a9b89379e2f04fd01a32c78c035f83caf8d7": "f184797291924d8046cf1dfb5e2b11a6",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/6df9bd058fc84d3c8acc7bc71661af64d8e9a4": "a2bffce9274e5588008a862f4c8b4d77",
".git/objects/9c/0a237eebd38a5e05c1aaf48becc5439bf46da6": "e580c093a691a0948343706925a96352",
".git/objects/9c/30a59d508947a31c72db83caa9539ff415df51": "aab3aef03429f589c381b7f7c3e0cabd",
".git/objects/9d/49bb110f79c22579abe3537629ba50880fbf5b": "18fa7b937562e5e6de81657ef75f3e49",
".git/objects/9f/88aa56b47acc9f44dbb46c4e512e4b60e97d51": "f3638686889d9c4275744b239d814295",
".git/objects/a1/8c7060260a5a5723ba7eb5f1e720a818ff5ed4": "0dbc284a5bfcafa70edd4df7f4a6809b",
".git/objects/a4/2b9410fc295d09056573a49358cc9851b28602": "329166fac88929464eeb15da0759f5a6",
".git/objects/a4/2ccaa51c54d3313bd15a511dcad687706f1965": "ef18d92331220d6516063878820076c6",
".git/objects/a9/05726081f7e2197d7a3b4d123e4e6d3240f119": "e2c92862c45715ff67689f2b63e290d0",
".git/objects/ac/d0ea9d8736045e9d8ed26469c3fc64b7e787d4": "574d7fd3515c596dcb7a9ece81e179ab",
".git/objects/ad/e4954ff7dbc953243c02121e06b66870899af0": "335da4d2f6d37a86d4296a0e0c197c7f",
".git/objects/af/70ee174238ce7fe8f7266522d0a780443d2180": "e732eff3a2285cd6e9603b51e09b5308",
".git/objects/b1/269bc53e1b762c3d0fedaa0a8769a0da6d57ad": "04949904b21261e14b17ab8f556d65ca",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/ba1ce5a2a705cdac9fbeb02750b35f631f9dda": "83cdf4df199563d00d652f658ea51871",
".git/objects/b2/ef052376e0ffac99c81b2bc0e5ba9dc7044252": "c71090ddeacc5b3834e6838324c0639b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e0987745e2f0a418f03b20d284e27dda5f30a1": "d45c49bdcc11c66bc523b5df27a6de56",
".git/objects/ba/339c2e80e993086e4d6162a6ae9715ee8df861": "9eb5f6cfa06e42734fa20ba1e85c475c",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/678e9bb161fb97eddad7c09f21fdf365958cc7": "cd803df946eab4ed443be453f10628f4",
".git/objects/be/45d946c07f8230e2b947232daa0e40ab2751c8": "1a5f0611778eaa49bb28818ac77d255c",
".git/objects/c1/f8bcd19d8e72be188f6c188212dd003b8ad36a": "b19a644dbc18678363157a84400b0129",
".git/objects/c5/f50a526f8db42c7f4d26272c4f48945b5fdd10": "960f934ab12d71b8c7b04eb874acb147",
".git/objects/c7/a2a9bc441cafd91db622f52551323dbf74ba41": "ecf9faaf16988fe6f10621abef1b6fd7",
".git/objects/c9/331b711f95c5cc3796a14b811f5eba6accc694": "b537195044e86fb819182f92195c3226",
".git/objects/c9/d6d048294d37d7541fd20782e0baee059641fb": "80f46b0b79980eae68716ac3ca27fd72",
".git/objects/ca/0b9ecf126179568ef206a6e176732d7c87defd": "8d109fc6d7ff1090e6734d0980fcc80a",
".git/objects/ca/cc79262d40c450bf8c739a5586ef2aa482c107": "40c29ee2bab1b9111ee39d9a6c736f13",
".git/objects/cd/0d5d759fb2cdc028f5c1e7713a3802496b45c8": "396051be194469647449c8e84b3f322e",
".git/objects/cf/381de59a3f611290bf3e8c0b7a71bc9836adb3": "c90f791d38b5ce41c5bf1832495630a3",
".git/objects/d0/0b8c1eeae8991eceea3bc15c39360ab41083f3": "c58686b2a34a339e8f35bf9c117732c3",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/ce50823e80fab32759f43bebff15387c24a948": "a7553fa859cb54b63d5425057221c674",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/bd3299d6dcc558de0304917ec80a21c0a0b4f8": "cff811f013c44a2c03c6e7cd311c7660",
".git/objects/d6/5beb46f69d458c1fde93c1e6f88529ca0f3ec0": "266ba8f7b3a3e0fd9a97acb4161f2a30",
".git/objects/d6/5cab8c8ac2edc6905256d8c406794b25bed64a": "739b20dba60f17703c927c67fdfd994b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a131a4110ffe795755402986e083dcecb74fb5": "f3b22ecf2efff41ef01c74951e427177",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/de/420be8bbeaf51bc8714fa35009c01f0d8a948f": "bf4f0d0a6348bfd7cdfe726f31d8c504",
".git/objects/df/8e5dd0a37e2041026b7754bcac77387a0d2e64": "3829096bc27436ca82db78d78d6bc48e",
".git/objects/e1/09890c14d72aaf3621d6a1c7cc1b907ae9b0c6": "8df81f3800def833448aab222480b7fd",
".git/objects/e3/649909157414b93ab3b57a4b610b0ca8682532": "f8120619bb61cb869fd16f73565abd77",
".git/objects/ea/5ce68d3af0f5bd176a3669d65f866525a8a81d": "ede0797cc0a5a41a0b0948c421e83cb4",
".git/objects/eb/42c3d69684b0b92933bfe0c2d99a7187278da1": "c4147a992823e7052508ee5eb6f067d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/0c3114a75979559ecd28e1f5e85a0ec854f19c": "a84352ecee45e8a5c4c95cfa1f7f669e",
".git/objects/ed/9dda2dbad75833e61f4e412c63196d9a428be3": "a78164c98394cbea072b910bee8a5939",
".git/objects/ee/59422b7d44465c571a90db05abbb1eb74375df": "ea7c4c44cd87e1dc0a347917ccbc46b5",
".git/objects/ef/9150917c24c3576e8e4b1289e6b1eee3a3e35e": "ab31cf6ecbafaf0781d3d49911d400ea",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/889d0a16ede57dd48a1e868ec2782f9d65fbf5": "7e8598b283b35fbb4390e7dbebac368d",
".git/objects/fc/c27c1f4b8ffdeefc4d5362c62445fbb060ee23": "5d045fff833c1bf4896f8b0af60afa10",
".git/objects/pack/pack-0aa5aed9a68c8901cbc6df7329a33c26230c6b90.idx": "6ad53ae0405bff2d2f2f0ce29342361b",
".git/objects/pack/pack-0aa5aed9a68c8901cbc6df7329a33c26230c6b90.pack": "6d1ca423323e94a5558135f09d373f5b",
".git/objects/pack/pack-0aa5aed9a68c8901cbc6df7329a33c26230c6b90.rev": "ee18c7d9a52ad8b08932e4e8751b4541",
".git/ORIG_HEAD": "aa1ec428d635c786ddbca45d4e1b2c6c",
".git/refs/heads/janu": "8b674a9fc73b75172c4bdf414ed39046",
".git/refs/remotes/origin/janu": "8b674a9fc73b75172c4bdf414ed39046",
".git/refs/remotes/origin/main": "63b3c5bf805c6c6274ba36a5b0cc79a6",
"assets/AssetManifest.bin": "8b334aa69b56bf474394f066a4d5a486",
"assets/AssetManifest.bin.json": "faa019efbf84b02bb6c133b2301f3e2c",
"assets/AssetManifest.json": "f33a71d8b6a24389d30741e074f2042b",
"assets/assets/font/Metropolis-Bold.otf": "dea4998b081c6c1133a3b5b08ff2218c",
"assets/assets/font/Metropolis-ExtraBold.otf": "d7eaa8ab58ec03f16c8d08389711f553",
"assets/assets/font/Metropolis-Medium.otf": "f4bca87fd0d19e61c27dc96299c75f8c",
"assets/assets/font/Metropolis-Regular.otf": "f7b5e589f88206b4bd5cb1408c5362e6",
"assets/assets/font/Metropolis-SemiBold.otf": "2556a4f74e2c523893e6928d6e300f1c",
"assets/assets/img/add.png": "30050b9e7d1342d3e70710a01c90276e",
"assets/assets/img/app.png": "f305703f92319bdcc7429f7aae49e062",
"assets/assets/img/AppIcon.png": "f305703f92319bdcc7429f7aae49e062",
"assets/assets/img/btn_back.png": "d5d051d62d275e26c5d8e9623a945bb7",
"assets/assets/img/btn_next.png": "50dda2a8413e43d80bb202c7740dce0a",
"assets/assets/img/busy.png": "25a0dfd7237b6d966003ad6ab18beaad",
"assets/assets/img/cash.png": "1f953031db18576610af7e8b09b4b361",
"assets/assets/img/check.png": "8eedeb57cb76dd63a10eaef427bc2c16",
"assets/assets/img/dropdown.png": "f0cd9937947a5be83d9e3690b6f9694c",
"assets/assets/img/end.png": "4bdbdaf172add5fdd81279f30519afe3",
"assets/assets/img/facebook_logo.png": "38202a021ac69951688cb61c6b669cc1",
"assets/assets/img/favorites_btn.png": "b6cce0c82b80619b432f7baf08f5e2c7",
"assets/assets/img/favorites_btn_2.png": "18038c4ef8cef8aeff5dc345f2e8d850",
"assets/assets/img/fav_icon.png": "9330377d64d94e291bb4e5343a385f46",
"assets/assets/img/google_logo.png": "adf58f1117060bc2ee5f7e676b57e2e3",
"assets/assets/img/image.png": "b11ff6cbbdd5ed890a5df698c93a0022",
"assets/assets/img/item_2.png": "87cb7a81906bff21669c7cc498708936",
"assets/assets/img/location-pin.png": "edde02cc535c74f423497db7368316b2",
"assets/assets/img/map_pin.png": "6f2dde54c401296d3b836230b5b06eb5",
"assets/assets/img/menu_1.png": "34ffb6b9bd0c4d16eabe91d0b0abb4c3",
"assets/assets/img/menu_2.png": "e456f6b030f23adf92540cf5b5bd6161",
"assets/assets/img/menu_3.png": "d3f186bd5704103fc7ca8db74cd9a687",
"assets/assets/img/menu_4.png": "0c4d6d79e88aed0ad4f11fab0bc3a63c",
"assets/assets/img/more_inbox.png": "95abf30ae25ac6b0682b6d23ea71885f",
"assets/assets/img/more_info.png": "4e0179efe80f77cb061e2702390561d6",
"assets/assets/img/more_my_order.png": "47aa32d5cdcfe6ad4dccdb1cbf571b17",
"assets/assets/img/more_notification.png": "84a4acaf149d46beb62fc6c4b210c02a",
"assets/assets/img/more_payment.png": "a7ee42cfee46384d3c753fa68e98d288",
"assets/assets/img/on_boarding_2.png": "5ed08e841fd3a2cac39aeea92f23a51f",
"assets/assets/img/on_boarding_3.png": "60b14f09f936fdc6ca5f44c05b29252c",
"assets/assets/img/paypal.png": "b6d2295455327bf89aaa6105fa928db6",
"assets/assets/img/quickadd.png": "292a7d603cfe7482391057f48426646e",
"assets/assets/img/quickrun.jpeg": "6fcc53f0f2cdc8cdcfd641fdaec1b9df",
"assets/assets/img/rate.png": "e04aec629a857f3b0faf5e70f5b0f614",
"assets/assets/img/search.png": "6c5c30445169b17a6145fe20433c9175",
"assets/assets/img/shopping_add.png": "a25c987e9914a2ec862085b8b5797b33",
"assets/assets/img/shopping_cart.png": "71f26b74b0c34dc1deb2a08480f65a64",
"assets/assets/img/splash_bg.png": "212076bd598ba266747bc232c72063a8",
"assets/assets/img/start.png": "6d927c47a4216970da26f03c1361bb35",
"assets/assets/img/start.svg": "33ac5de5e10eda9bc0dd02cb6c6fe2ec",
"assets/assets/img/tab_home.png": "13017c54f3129efff3e1e78a57061ffa",
"assets/assets/img/tab_menu.png": "4341761a3a5ca774f1f0459cbdea8789",
"assets/assets/img/tab_more.png": "acd25cfece38c9e1b42c57e6fa5b04e0",
"assets/assets/img/tab_offer.png": "90ff0160e579a241e3110bd2e64863a5",
"assets/assets/img/tab_order.png": "90ff0160e579a241e3110bd2e64863a5",
"assets/assets/img/tab_profile.png": "f81546c894288017a0a79c06a8e4ed04",
"assets/assets/img/visa_icon.png": "b14f44ca7530d28165d68c62e25ac110",
"assets/FontManifest.json": "eb38a8cb5d0f0c5acfbb632278ac6630",
"assets/fonts/MaterialIcons-Regular.otf": "3ca01651389b75a78d2864c2be4fc0a1",
"assets/NOTICES": "244eee90745699767377165decb1cc42",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "1516c9ebad5383299f2c1b768dd3975a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7085bb7f9e3265bd4cf097360be25fa8",
"/": "7085bb7f9e3265bd4cf097360be25fa8",
"main.dart.js": "3c025fe7bed8eef6633732749e5ede46",
"manifest.json": "c7cf728c9af2091f6b99eff454696ae6",
"version.json": "b5ca3808dd9a1baa96fd2359d08117b7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
