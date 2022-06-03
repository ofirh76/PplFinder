import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    // const response = {data: userData};
    setIsLoading(false);
    setUsers(response.data.results);
  }

  async function fetchUsersConcat() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    // const response = {data: userData};
    setIsLoading(false);
    setUsers(users => {
      users = users.concat(response.data.results);
      return users;
    });
  }

  return { users, isLoading, fetchUsers, fetchUsersConcat };
};

const userData = {"results":[{"gender":"female","name":{"title":"Ms","first":"Jessica","last":"Ellis"},"location":{"street":{"number":5849,"name":"School Lane"},"city":"Preston","state":"Hampshire","country":"United Kingdom","postcode":"UQ1T 0LX","coordinates":{"latitude":"14.6050","longitude":"58.6129"},"timezone":{"offset":"-9:00","description":"Alaska"}},"email":"jessica.ellis@example.com","login":{"uuid":"73e19bb7-bf6d-4076-9f31-57ba7cb8a7e8","username":"beautifulgoose505","password":"casey1","salt":"9xZaBzg8","md5":"9c09b11f9786bcf02ef0b8677cb66ef6","sha1":"d924d755226739fdea3970e8f87840d5228657dc","sha256":"1272a436890343b35f1ea244d81bfdc354b1290abf90866d2ed2e335d36c90d3"},"dob":{"date":"1982-12-20T03:15:37.195Z","age":40},"registered":{"date":"2013-08-15T20:18:19.290Z","age":9},"phone":"016974 17145","cell":"0785-663-293","id":{"name":"NINO","value":"SA 15 33 35 J"},"picture":{"large":"https://randomuser.me/api/portraits/women/47.jpg","medium":"https://randomuser.me/api/portraits/med/women/47.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/47.jpg"},"nat":"GB"},{"gender":"male","name":{"title":"Mr","first":"Oscar","last":"Moore"},"location":{"street":{"number":3726,"name":"Park Road"},"city":"Stevenage","state":"Oxfordshire","country":"United Kingdom","postcode":"TF4 1YU","coordinates":{"latitude":"73.2466","longitude":"9.5679"},"timezone":{"offset":"-8:00","description":"Pacific Time (US & Canada)"}},"email":"oscar.moore@example.com","login":{"uuid":"02eb4578-1f8b-4e18-b5c5-3f4782b11318","username":"angrygoose379","password":"velvet","salt":"NEYTcAUD","md5":"1dcae8de3a4e6bb3617b549647e24ac9","sha1":"d42fc429cfe0639fd44b363811f0f9dd32f52995","sha256":"957aba62f807d49d2fbb630a79bf58cf625ec34c495478daf82a44c9e3e6353b"},"dob":{"date":"1958-10-12T14:37:31.726Z","age":64},"registered":{"date":"2011-10-10T22:18:25.123Z","age":11},"phone":"019467 76188","cell":"0712-265-458","id":{"name":"NINO","value":"NC 94 95 78 Z"},"picture":{"large":"https://randomuser.me/api/portraits/men/93.jpg","medium":"https://randomuser.me/api/portraits/med/men/93.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/93.jpg"},"nat":"GB"},{"gender":"female","name":{"title":"Ms","first":"Layla","last":"Edwards"},"location":{"street":{"number":2905,"name":"Maunganui Road"},"city":"Napier","state":"Wellington","country":"New Zealand","postcode":44448,"coordinates":{"latitude":"-51.3088","longitude":"37.8935"},"timezone":{"offset":"+2:00","description":"Kaliningrad, South Africa"}},"email":"layla.edwards@example.com","login":{"uuid":"00260951-03e7-4d48-b367-ac6222c179fa","username":"bluetiger382","password":"bubba123","salt":"P3iLtkir","md5":"9f956c4a247b769f2608001589a7c8a5","sha1":"d0fa12e5c0cb7068bd7ecba8aa9721cdda8ea3bb","sha256":"4c298d6ef3ee57afb3a7d485a75f65126d6ffcc8a5b96c458e6ef2d1a3e4f514"},"dob":{"date":"1948-03-09T04:24:02.126Z","age":74},"registered":{"date":"2018-03-05T10:14:52.967Z","age":4},"phone":"(790)-027-9935","cell":"(323)-418-1177","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/58.jpg","medium":"https://randomuser.me/api/portraits/med/women/58.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/58.jpg"},"nat":"NZ"},{"gender":"male","name":{"title":"Mr","first":"Connor","last":"Hudson"},"location":{"street":{"number":9043,"name":"Dublin Road"},"city":"Ballinasloe","state":"Laois","country":"Ireland","postcode":62009,"coordinates":{"latitude":"82.7346","longitude":"-6.7539"},"timezone":{"offset":"+3:00","description":"Baghdad, Riyadh, Moscow, St. Petersburg"}},"email":"connor.hudson@example.com","login":{"uuid":"b1a1856e-88eb-4bbc-afba-46ce0f28ac34","username":"greenbear101","password":"beautifu","salt":"gSScmbnV","md5":"3853a23de5635f0100e28e637625a67f","sha1":"3fcf090c4ff4431c1a73ad897d4fd8a73f6c944e","sha256":"bfc9fe7ae5c94639fa9fa240b9c94b8426691158f4cf917e334807c099fc4f24"},"dob":{"date":"1965-08-15T21:28:53.105Z","age":57},"registered":{"date":"2003-02-10T15:58:47.494Z","age":19},"phone":"061-989-9892","cell":"081-523-2604","id":{"name":"PPS","value":"3747031T"},"picture":{"large":"https://randomuser.me/api/portraits/men/57.jpg","medium":"https://randomuser.me/api/portraits/med/men/57.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/57.jpg"},"nat":"IE"},{"gender":"male","name":{"title":"Mr","first":"Timmothy","last":"Weaver"},"location":{"street":{"number":90,"name":"Cackson St"},"city":"Bunbury","state":"New South Wales","country":"Australia","postcode":1319,"coordinates":{"latitude":"-9.0336","longitude":"121.8489"},"timezone":{"offset":"-4:00","description":"Atlantic Time (Canada), Caracas, La Paz"}},"email":"timmothy.weaver@example.com","login":{"uuid":"79d8aa53-e5a9-4f84-803c-d541451ab8c2","username":"sadrabbit574","password":"123123123","salt":"xhztA6rI","md5":"ce845b9987b35b2bc76a3b1f1dde96bd","sha1":"e10ac94c4fc68252d8cca3a5855ea3c0e1efe13c","sha256":"4bd718557066cac8b9a42c53f7b6e15c2b7df32f55581f6e1b2195dac7d08dfc"},"dob":{"date":"1961-03-09T02:10:04.871Z","age":61},"registered":{"date":"2013-10-16T05:30:31.302Z","age":9},"phone":"00-3422-6982","cell":"0481-634-192","id":{"name":"TFN","value":"011155308"},"picture":{"large":"https://randomuser.me/api/portraits/men/91.jpg","medium":"https://randomuser.me/api/portraits/med/men/91.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/91.jpg"},"nat":"AU"},{"gender":"male","name":{"title":"Mr","first":"Diotil","last":"Melo"},"location":{"street":{"number":6332,"name":"Rua São Paulo "},"city":"Macapá","state":"Ceará","country":"Brazil","postcode":19506,"coordinates":{"latitude":"-46.3190","longitude":"-162.6496"},"timezone":{"offset":"-3:30","description":"Newfoundland"}},"email":"diotil.melo@example.com","login":{"uuid":"6ca2c06e-de38-469c-b019-6558593b9259","username":"yellowswan269","password":"lover1","salt":"6UccC1c1","md5":"4dede089f67a9334b2f08fc060987cae","sha1":"5cd837ed29d3a237fb9630aac0ca0bbcf14ff2a1","sha256":"e03fa2fbbc768fdd966dff88d3d650dc6a533bd37654b4a7ea1e39146f25b6db"},"dob":{"date":"1969-04-05T20:22:16.750Z","age":53},"registered":{"date":"2016-05-11T01:35:04.201Z","age":6},"phone":"(96) 9098-5241","cell":"(30) 4096-2678","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/41.jpg","medium":"https://randomuser.me/api/portraits/med/men/41.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/41.jpg"},"nat":"BR"},{"gender":"male","name":{"title":"Mr","first":"Gamaliel","last":"Porto"},"location":{"street":{"number":2774,"name":"Rua São Pedro "},"city":"Teixeira de Freitas","state":"Rondônia","country":"Brazil","postcode":11794,"coordinates":{"latitude":"49.5975","longitude":"81.3594"},"timezone":{"offset":"-3:30","description":"Newfoundland"}},"email":"gamaliel.porto@example.com","login":{"uuid":"fa7cb06b-7f05-4448-afc5-af58311cb78a","username":"heavybird287","password":"weekend","salt":"IPRFeity","md5":"01c66e14bce33f14ed2fffad689cb36c","sha1":"9f08f46b5df54e99ce2121df4f33b50e7609a69d","sha256":"894d2716a3961719766cbd64e7545b627ca440744db3ea07a4b137e947f773ea"},"dob":{"date":"1971-01-11T17:18:52.352Z","age":51},"registered":{"date":"2007-11-15T08:24:32.209Z","age":15},"phone":"(98) 7499-3014","cell":"(57) 6904-7995","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/32.jpg","medium":"https://randomuser.me/api/portraits/med/men/32.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/32.jpg"},"nat":"BR"},{"gender":"female","name":{"title":"Ms","first":"Ece","last":"Erginsoy"},"location":{"street":{"number":9455,"name":"Bağdat Cd"},"city":"Muş","state":"Afyonkarahisar","country":"Turkey","postcode":43135,"coordinates":{"latitude":"-14.4262","longitude":"41.7249"},"timezone":{"offset":"+9:30","description":"Adelaide, Darwin"}},"email":"ece.erginsoy@example.com","login":{"uuid":"4f228f68-b3e0-4a1b-863a-c81a91f2d85d","username":"heavylion902","password":"azerty","salt":"kQRu3lnQ","md5":"9d8cc254162989a580026921aba27c71","sha1":"519c0703eac7dc61ac196e9315903e310735f9ae","sha256":"b21dfd1bb3c4c8ba2538512b02adbb5d8874601b837fbda1d1aa62a01270ec11"},"dob":{"date":"1962-04-15T12:39:12.622Z","age":60},"registered":{"date":"2002-11-05T02:04:21.060Z","age":20},"phone":"(051)-713-1324","cell":"(356)-649-6589","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/14.jpg","medium":"https://randomuser.me/api/portraits/med/women/14.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/14.jpg"},"nat":"TR"},{"gender":"female","name":{"title":"Madame","first":"Hélène","last":"Garnier"},"location":{"street":{"number":8672,"name":"Rue Barrème"},"city":"Oberwil im Simmental","state":"Schwyz","country":"Switzerland","postcode":2063,"coordinates":{"latitude":"42.9111","longitude":"-53.6983"},"timezone":{"offset":"+2:00","description":"Kaliningrad, South Africa"}},"email":"helene.garnier@example.com","login":{"uuid":"09a6ecb3-34a7-4517-afcf-2e9e4000d8da","username":"happyostrich471","password":"rrrr","salt":"9UbroHm2","md5":"fa1f0d75757ac4923ab59e0e41057b21","sha1":"a19acce7cff987fbf4d6ac82d17a30f01f62e054","sha256":"516778fef3ee5f996b14b993dd2f3b091c76eee0772af5f97472a453404792e1"},"dob":{"date":"1970-02-05T01:41:38.331Z","age":52},"registered":{"date":"2003-03-22T02:13:19.590Z","age":19},"phone":"076 022 77 90","cell":"076 608 72 23","id":{"name":"AVS","value":"756.8441.8491.00"},"picture":{"large":"https://randomuser.me/api/portraits/women/68.jpg","medium":"https://randomuser.me/api/portraits/med/women/68.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/68.jpg"},"nat":"CH"},{"gender":"female","name":{"title":"Miss","first":"Eugenia","last":"Muñoz"},"location":{"street":{"number":6662,"name":"Avenida de La Albufera"},"city":"Orihuela","state":"Galicia","country":"Spain","postcode":14619,"coordinates":{"latitude":"-37.2256","longitude":"48.6178"},"timezone":{"offset":"-7:00","description":"Mountain Time (US & Canada)"}},"email":"eugenia.munoz@example.com","login":{"uuid":"17421d12-c19a-4ca2-9d57-ac60432e243a","username":"angrypanda423","password":"greg","salt":"ssHHd2FE","md5":"544a4784a93fb59df13d6028aa97eb90","sha1":"4c7a27f7f0553ab3adc2fdcc37f3c14dec3a84c3","sha256":"95ee3d1441ea0d8a01850ed6f15b2afeec5c4d37a18cacc1f53e7cceb397bbc9"},"dob":{"date":"1955-02-02T19:20:56.997Z","age":67},"registered":{"date":"2010-07-09T22:38:02.685Z","age":12},"phone":"956-468-947","cell":"699-206-904","id":{"name":"DNI","value":"16009497-J"},"picture":{"large":"https://randomuser.me/api/portraits/women/96.jpg","medium":"https://randomuser.me/api/portraits/med/women/96.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/96.jpg"},"nat":"ES"},{"gender":"female","name":{"title":"Ms","first":"Dörte","last":"Siegel"},"location":{"street":{"number":5650,"name":"Heideweg"},"city":"Neuruppin","state":"Saarland","country":"Germany","postcode":99535,"coordinates":{"latitude":"13.6050","longitude":"-16.1610"},"timezone":{"offset":"+4:00","description":"Abu Dhabi, Muscat, Baku, Tbilisi"}},"email":"dorte.siegel@example.com","login":{"uuid":"8eba342b-373e-4c08-8550-427e0c69f612","username":"heavysnake665","password":"boytoy","salt":"FqGdiLr0","md5":"a7d827bfc1efa70a61cd165cb451fc75","sha1":"605dec940d0961b9602a5509b38a79b0921ab34b","sha256":"2eed48725328fd0aae6ae79f76fdcffdba4cb31a340f4d0e78dc62a46a2fe892"},"dob":{"date":"1951-08-23T20:15:09.703Z","age":71},"registered":{"date":"2002-07-06T09:34:31.242Z","age":20},"phone":"0189-0042027","cell":"0172-7669915","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/69.jpg","medium":"https://randomuser.me/api/portraits/med/women/69.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/69.jpg"},"nat":"DE"},{"gender":"female","name":{"title":"Miss","first":"Thea","last":"Rasmussen"},"location":{"street":{"number":5636,"name":"Pilestien"},"city":"Hornbæk","state":"Syddanmark","country":"Denmark","postcode":83465,"coordinates":{"latitude":"-64.9604","longitude":"38.5402"},"timezone":{"offset":"+5:30","description":"Bombay, Calcutta, Madras, New Delhi"}},"email":"thea.rasmussen@example.com","login":{"uuid":"d3595d58-2e7f-48cd-bda8-2c8487e6ae29","username":"redmeercat527","password":"mental","salt":"WVBU9JrJ","md5":"c81d07eb726efe7788894f729b43ba40","sha1":"79002d8f56bd35740557daae4ae950f8bb702738","sha256":"f9611f267354c5b986b750f11300de95d4d04629f2420965e4c5775131511bc3"},"dob":{"date":"1961-06-23T00:21:37.038Z","age":61},"registered":{"date":"2002-07-17T00:33:11.714Z","age":20},"phone":"60545672","cell":"87217168","id":{"name":"CPR","value":"230661-7682"},"picture":{"large":"https://randomuser.me/api/portraits/women/41.jpg","medium":"https://randomuser.me/api/portraits/med/women/41.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/41.jpg"},"nat":"DK"},{"gender":"female","name":{"title":"Ms","first":"Neea","last":"Juntunen"},"location":{"street":{"number":8511,"name":"Itsenäisyydenkatu"},"city":"Sonkajärvi","state":"Southern Savonia","country":"Finland","postcode":12664,"coordinates":{"latitude":"-33.5398","longitude":"-119.4141"},"timezone":{"offset":"-6:00","description":"Central Time (US & Canada), Mexico City"}},"email":"neea.juntunen@example.com","login":{"uuid":"2422e51e-9bf0-413c-af48-54561d11bb93","username":"goldenpeacock198","password":"arianna","salt":"tKPy0GIy","md5":"b0e86ecc87475b86151a176a7f7167f2","sha1":"a2237026450345cd635cbde8210497d41d6c9925","sha256":"375153e1813bbe40c9ad532c20d5063fdc8da659cfb8d07ccbce2a9c8c6fd8b2"},"dob":{"date":"1946-04-23T14:51:14.602Z","age":76},"registered":{"date":"2011-08-04T03:43:22.249Z","age":11},"phone":"04-404-865","cell":"046-311-01-98","id":{"name":"HETU","value":"NaNNA508undefined"},"picture":{"large":"https://randomuser.me/api/portraits/women/89.jpg","medium":"https://randomuser.me/api/portraits/med/women/89.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/89.jpg"},"nat":"FI"},{"gender":"female","name":{"title":"Miss","first":"Leandra","last":"Boerboom"},"location":{"street":{"number":9730,"name":"Dieterenstraat"},"city":"Veulen","state":"Flevoland","country":"Netherlands","postcode":25345,"coordinates":{"latitude":"-56.1592","longitude":"-21.7763"},"timezone":{"offset":"0:00","description":"Western Europe Time, London, Lisbon, Casablanca"}},"email":"leandra.boerboom@example.com","login":{"uuid":"8e21791b-b030-43c1-9006-09bedffcf383","username":"bigladybug220","password":"pang","salt":"mCeZUGKK","md5":"b67ac026a174e9138b07bcdde0f7b212","sha1":"413b65b9db6cf22ae303e9285b8325b504a1fe3a","sha256":"dbf41b626aa31ddf1fd1fb07318f2751fd2cf58cf8cd5ab0156755b08bd5ea90"},"dob":{"date":"1993-05-30T19:51:12.441Z","age":29},"registered":{"date":"2017-11-01T00:12:11.740Z","age":5},"phone":"(792)-752-9453","cell":"(858)-774-2099","id":{"name":"BSN","value":"07837380"},"picture":{"large":"https://randomuser.me/api/portraits/women/83.jpg","medium":"https://randomuser.me/api/portraits/med/women/83.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/83.jpg"},"nat":"NL"},{"gender":"female","name":{"title":"Mrs","first":"Bärbel","last":"Laumann"},"location":{"street":{"number":6924,"name":"Meisenweg"},"city":"Moosburg an der Isar","state":"Sachsen","country":"Germany","postcode":81412,"coordinates":{"latitude":"-33.5016","longitude":"-79.6707"},"timezone":{"offset":"-10:00","description":"Hawaii"}},"email":"barbel.laumann@example.com","login":{"uuid":"a065b7b0-5104-4ef4-8133-762656e480bc","username":"brownduck398","password":"rrrrr","salt":"CCAgwMj8","md5":"adb3f4689a1776d3bf4d8a63b0269264","sha1":"d3c457c30ec605feeae4ad00099068a033e715b9","sha256":"34e1864022d8686e3901bc89eec8ce26fb14a87f443d15a95477614ced13c014"},"dob":{"date":"1984-04-27T20:45:57.299Z","age":38},"registered":{"date":"2018-09-01T01:54:30.485Z","age":4},"phone":"0116-0801702","cell":"0177-5408643","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/71.jpg","medium":"https://randomuser.me/api/portraits/med/women/71.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/71.jpg"},"nat":"DE"},{"gender":"male","name":{"title":"Mr","first":"Edvin","last":"Plassen"},"location":{"street":{"number":7744,"name":"Granveien"},"city":"Ringstad","state":"Akershus","country":"Norway","postcode":"6009","coordinates":{"latitude":"4.8298","longitude":"-69.9668"},"timezone":{"offset":"-8:00","description":"Pacific Time (US & Canada)"}},"email":"edvin.plassen@example.com","login":{"uuid":"ae05744a-ed3e-42a5-b2f4-02119850c116","username":"whitezebra275","password":"springer","salt":"iS5b3L29","md5":"8853f234e9497eae0ede18e49aa756ce","sha1":"a62a810f7516e69d41aa7ad7da5813d769525663","sha256":"d44851eb4b07f4bbfc7968e107b181daf96638e66293cb0aa71474b0d5aa4245"},"dob":{"date":"1975-02-20T09:02:41.029Z","age":47},"registered":{"date":"2005-07-11T23:57:50.539Z","age":17},"phone":"80847352","cell":"47273206","id":{"name":"FN","value":"20027509194"},"picture":{"large":"https://randomuser.me/api/portraits/men/31.jpg","medium":"https://randomuser.me/api/portraits/med/men/31.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/31.jpg"},"nat":"NO"},{"gender":"male","name":{"title":"Mr","first":"Ferdinand","last":"Østerbø"},"location":{"street":{"number":167,"name":"Øysteins plass"},"city":"Snåsa","state":"Rogaland","country":"Norway","postcode":"0475","coordinates":{"latitude":"-38.6201","longitude":"26.4434"},"timezone":{"offset":"+9:30","description":"Adelaide, Darwin"}},"email":"ferdinand.osterbo@example.com","login":{"uuid":"5ac831ec-007d-40d8-bd37-c6fae1ed8372","username":"greenduck959","password":"gman","salt":"96tlqAGO","md5":"e6ff6f60b802f4c0fb20d581400eb2fe","sha1":"461072378ab64abd2e7f8bd53dda285980cb3264","sha256":"6a76373cabe85a80f73e72232b766ac05837b94e31ab112f643d8aac88998e52"},"dob":{"date":"1986-11-09T09:27:07.033Z","age":36},"registered":{"date":"2016-09-02T03:05:57.491Z","age":6},"phone":"25899206","cell":"48217925","id":{"name":"FN","value":"09118609171"},"picture":{"large":"https://randomuser.me/api/portraits/men/23.jpg","medium":"https://randomuser.me/api/portraits/med/men/23.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/23.jpg"},"nat":"NO"},{"gender":"male","name":{"title":"Mr","first":"Joel","last":"Huhtala"},"location":{"street":{"number":6949,"name":"Suvantokatu"},"city":"Jämsä","state":"Kymenlaakso","country":"Finland","postcode":31968,"coordinates":{"latitude":"-23.2099","longitude":"-165.5553"},"timezone":{"offset":"+5:00","description":"Ekaterinburg, Islamabad, Karachi, Tashkent"}},"email":"joel.huhtala@example.com","login":{"uuid":"61ea4abe-126c-454d-ac08-ab81246f7037","username":"organicduck694","password":"fashion","salt":"FUmjWarX","md5":"224009821e26ec2cd6c28df1e6900834","sha1":"6271e9aea5412638d3a8c0ea6691556eacde3cd2","sha256":"8f986e42594964ad2a5a786a23b407f4dd7cfc242c779f9fe89013d4a961bf1d"},"dob":{"date":"1978-06-27T20:02:38.835Z","age":44},"registered":{"date":"2006-12-07T09:21:59.900Z","age":16},"phone":"02-383-926","cell":"049-686-18-35","id":{"name":"HETU","value":"NaNNA663undefined"},"picture":{"large":"https://randomuser.me/api/portraits/men/66.jpg","medium":"https://randomuser.me/api/portraits/med/men/66.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/66.jpg"},"nat":"FI"},{"gender":"female","name":{"title":"Mrs","first":"Jade","last":"Dias"},"location":{"street":{"number":7794,"name":"Rua Vinte E Um"},"city":"Jaboatão dos Guararapes","state":"Minas Gerais","country":"Brazil","postcode":53903,"coordinates":{"latitude":"-31.8975","longitude":"-63.4631"},"timezone":{"offset":"+5:30","description":"Bombay, Calcutta, Madras, New Delhi"}},"email":"jade.dias@example.com","login":{"uuid":"fcb7ff50-268c-4ae0-bbee-8eb65defd905","username":"tinyrabbit679","password":"chilly","salt":"1r5j0Ewg","md5":"d71652beb2e03c67f9165b76b3179423","sha1":"127c208ae2daedc53064b44a99102816bf3b8832","sha256":"694ff0480f9a26a517c44ae8793fe92450310e392baea801838606cc54c19665"},"dob":{"date":"1989-12-08T16:59:36.910Z","age":33},"registered":{"date":"2013-01-05T01:08:16.186Z","age":9},"phone":"(97) 2897-8968","cell":"(72) 6828-3322","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/20.jpg","medium":"https://randomuser.me/api/portraits/med/women/20.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/20.jpg"},"nat":"BR"},{"gender":"male","name":{"title":"Mr","first":"Fidélio","last":"Almeida"},"location":{"street":{"number":4891,"name":"Rua São Francisco "},"city":"Rio das Ostras","state":"Rio Grande do Sul","country":"Brazil","postcode":99436,"coordinates":{"latitude":"-60.9256","longitude":"66.5123"},"timezone":{"offset":"-11:00","description":"Midway Island, Samoa"}},"email":"fidelio.almeida@example.com","login":{"uuid":"b5e33b17-8e50-4208-9c26-363669ba7ea9","username":"heavyfish713","password":"munch","salt":"JUjOkV1T","md5":"4fa2b063ef3e5e294acc7e1b8da772e4","sha1":"d9ab8112df796ccef91f69e7edbcf36317f82d24","sha256":"c7270cba4bcece0244a1815d68af04a41e7d03946d306ec07a875b93c44e9a1c"},"dob":{"date":"1992-02-27T14:59:25.162Z","age":30},"registered":{"date":"2005-03-06T04:59:20.997Z","age":17},"phone":"(17) 0254-3857","cell":"(69) 1227-6427","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/11.jpg","medium":"https://randomuser.me/api/portraits/med/men/11.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/11.jpg"},"nat":"BR"},{"gender":"female","name":{"title":"Ms","first":"Gonca","last":"Yeşilkaya"},"location":{"street":{"number":6385,"name":"Talak Göktepe Cd"},"city":"Bitlis","state":"Nevşehir","country":"Turkey","postcode":69067,"coordinates":{"latitude":"69.3612","longitude":"149.5957"},"timezone":{"offset":"+6:00","description":"Almaty, Dhaka, Colombo"}},"email":"gonca.yesilkaya@example.com","login":{"uuid":"3a6538d6-aabf-4c04-b83d-c6a670b81413","username":"whitecat727","password":"piggy","salt":"llOglhZD","md5":"641815d0d75d745517918d3a39f70b86","sha1":"a686fa1123517a81cf55a6c39e77140fd6905506","sha256":"4043174e4ba03864c0f2b47fbdf15e1fb33f66f1b585c866530ca9f08169328b"},"dob":{"date":"1966-03-18T06:53:57.493Z","age":56},"registered":{"date":"2015-02-28T05:35:52.240Z","age":7},"phone":"(001)-384-9087","cell":"(855)-799-2407","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/41.jpg","medium":"https://randomuser.me/api/portraits/med/women/41.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/41.jpg"},"nat":"TR"},{"gender":"male","name":{"title":"Mr","first":"Peter","last":"Otoole"},"location":{"street":{"number":726,"name":"Church Road"},"city":"Dublin","state":"Westmeath","country":"Ireland","postcode":89986,"coordinates":{"latitude":"-49.3839","longitude":"95.8963"},"timezone":{"offset":"+5:00","description":"Ekaterinburg, Islamabad, Karachi, Tashkent"}},"email":"peter.otoole@example.com","login":{"uuid":"bf03a0eb-336e-4772-97f2-005c5913a29a","username":"angrykoala583","password":"senior","salt":"wdNluW4c","md5":"c25bd0ae04bd762f0d6d8d04e7fc5ced","sha1":"3a264379f80e331b0b1fcf59bab6c3bcd6216627","sha256":"06869c8057dcb51e2b24647bed97ea9cb2e0d4f72581d7a803280a3e0c9f6650"},"dob":{"date":"1991-04-20T00:03:57.327Z","age":31},"registered":{"date":"2017-04-13T11:01:26.825Z","age":5},"phone":"041-596-8115","cell":"081-863-5877","id":{"name":"PPS","value":"4487251T"},"picture":{"large":"https://randomuser.me/api/portraits/men/20.jpg","medium":"https://randomuser.me/api/portraits/med/men/20.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/20.jpg"},"nat":"IE"},{"gender":"female","name":{"title":"Mrs","first":"Emilie","last":"Patel"},"location":{"street":{"number":4383,"name":"George St"},"city":"Belmont","state":"Alberta","country":"Canada","postcode":"S4I 7I6","coordinates":{"latitude":"-80.7613","longitude":"-74.2059"},"timezone":{"offset":"+5:45","description":"Kathmandu"}},"email":"emilie.patel@example.com","login":{"uuid":"4880d876-0b53-47f9-97ad-f6cfe40bf173","username":"organicbutterfly603","password":"jerkoff","salt":"SZpzQMT2","md5":"c7a9adea3194f2a1c348275b22d4dc2b","sha1":"864baebf10226fb9cb7d9671ce70462e514c83cd","sha256":"cb74ae1ff4c0d8aca9c726cf3b6dbb454a0d93323bb5c106d0d7f2c53571d726"},"dob":{"date":"1946-03-02T21:14:27.073Z","age":76},"registered":{"date":"2018-12-18T14:16:42.474Z","age":4},"phone":"097-504-4316","cell":"057-520-0472","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/8.jpg","medium":"https://randomuser.me/api/portraits/med/women/8.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/8.jpg"},"nat":"CA"},{"gender":"female","name":{"title":"Miss","first":"Monica","last":"West"},"location":{"street":{"number":2949,"name":"Blossom Hill Rd"},"city":"Warragul","state":"Australian Capital Territory","country":"Australia","postcode":7527,"coordinates":{"latitude":"24.6973","longitude":"-176.1330"},"timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},"email":"monica.west@example.com","login":{"uuid":"1e6ec64b-3dc9-4969-bf84-80294f27da20","username":"orangefish374","password":"birthday4","salt":"g3oCQnMl","md5":"0709f614282b87d13e073b1743db84d7","sha1":"f46ed773dfea066b7440ef735d7039fe6091d5b5","sha256":"2ed799382baf40681f71203a09057c9cc8475c4b7e5fb1f256195bf2eaeb6eba"},"dob":{"date":"1945-09-18T19:32:41.446Z","age":77},"registered":{"date":"2009-06-04T09:33:55.101Z","age":13},"phone":"07-4357-4009","cell":"0444-669-215","id":{"name":"TFN","value":"445214641"},"picture":{"large":"https://randomuser.me/api/portraits/women/51.jpg","medium":"https://randomuser.me/api/portraits/med/women/51.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/51.jpg"},"nat":"AU"},{"gender":"female","name":{"title":"Miss","first":"Maëline","last":"Bernard"},"location":{"street":{"number":9818,"name":"Rue Bataille"},"city":"Argenteuil","state":"Haute-Corse","country":"France","postcode":10634,"coordinates":{"latitude":"39.1469","longitude":"-114.0326"},"timezone":{"offset":"+5:45","description":"Kathmandu"}},"email":"maeline.bernard@example.com","login":{"uuid":"ef016304-c3ba-49fe-a85d-fe0b994ddcc7","username":"beautifulduck936","password":"pitbull","salt":"KPW1ei0j","md5":"b959de18a1f1d5a4a3fedd54684e4f3a","sha1":"9640aa12739dd3f0c005d3d701b4f6a47a61a1db","sha256":"a11f7bdbc50b4d3a89c4d204ac984faeb1891307138b7ed1c72136af602680e1"},"dob":{"date":"1957-11-08T01:49:16.304Z","age":65},"registered":{"date":"2014-03-14T00:02:27.888Z","age":8},"phone":"03-18-25-70-94","cell":"06-24-53-26-65","id":{"name":"INSEE","value":"2NNaN03102726 55"},"picture":{"large":"https://randomuser.me/api/portraits/women/87.jpg","medium":"https://randomuser.me/api/portraits/med/women/87.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/87.jpg"},"nat":"FR"}],"info":{"seed":"7fc9a1fd7b152986","results":25,"page":1,"version":"1.3"}}
