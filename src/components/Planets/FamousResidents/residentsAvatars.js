const residentsAvatars = [
  {
    name: "Luke Skywalker",
    url:
      "https://geekculture.co/wp-content/uploads/2020/05/mark-hamill-star-wars-luke-skywalker-1.jpg",
  },
  {
    name: "C-3PO",
    url:
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/46/1479397679-c-3po-see-threepio-68fe125c.jpeg",
  },
  {
    name: "Darth Vader",
    url: "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg",
  },
  {
    name: "Owen Lars",
    url: "https://i.ytimg.com/vi/5UW1PIplmlc/maxresdefault.jpg",
  },
  {
    name: "Beru Whitesun lars",
    url:
      "https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/10/star-wars-a-new-hope-aunt-beru-1.jpg",
  },
  {
    name: "R5-D4",
    url:
      "https://cdnb.artstation.com/p/assets/images/images/001/727/465/large/paul-beards-r5-d4-final-preview-01.jpg",
  },
  {
    name: "Biggs Darklighter",
    url: "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg",
  },
  {
    name: "Anakin Skywalker",
    url:
      "https://i0.wp.com/butwhythopodcast.com/wp-content/uploads/2019/12/anakin.jpg",
  },
  {
    name: "Shmi Skywalker",
    url:
      "https://i0.wp.com/haruspis.blog/wp-content/uploads/2018/02/shmi15.jpg",
  },
  {
    name: "Cliegg Lars",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_cliegglars_01_169_c2f0b9cb.jpeg",
  },
  {
    name: "Leia Organa",
    url:
      "https://am21.mediaite.com/tms/cnt/uploads/2018/06/leia-organa-star-wars-1200x669.png",
  },
  {
    name: "Bail Prestor Organa",
    url:
      "https://i.insider.com/5854052eaca05924008b4a36?width=1100&format=jpeg",
  },
  {
    name: "Raymus Antilles",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_captainantilles_01_169_75e05265.jpeg",
  },
  {
    name: "Lobot",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_lobot_01_169_8a50d7ae.jpeg",
  },
  {
    name: "Wicket Systri Warrick",
    url: "https://lumiere-a.akamaihd.net/v1/images/image_b392ae11.jpeg",
  },
  {
    name: "R2-D2",
    url: "https://nanojam.ru/pictures/product/big/6386_big.jpg",
  },
  {
    name: "Palpatine",
    url:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/emperor-palpatine-1555323736.jpg",
  },
  {
    name: "Padmé Amidala",
    url:
      "https://1.bp.blogspot.com/-5HEc0_ceYMY/XURSmvXhAMI/AAAAAAAAC2w/tlPwuiUkMa4pQ0edRk14KVoYaNXW2YT7QCLcBGAs/s1600/Reina_Amidala.jpg",
  },
  {
    name: "Jar Jar Binks",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_jarjarbinks_01_169_c70767ab.jpeg",
  },
  {
    name: "Roos Tarpals",
    url: "https://i.redd.it/ni2dqi0lm6dy.png",
  },
  {
    name: "Rugor Nass",
    url:
      "https://i.pinimg.com/600x315/57/65/bc/5765bcb1841be0d06ca97c3220409716.jpg",
  },
  {
    name: "Ric Olié",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_ricolie_01_169_f175f81b.jpeg",
  },
  {
    name: "Quarsh Panaka",
    url:
      "https://starwarsprequelappreciationsociety.files.wordpress.com/2017/12/databank_captainpanaka_01_169_6a3ccac5.jpeg",
  },
  {
    name: "Gregar Typho",
    url: "https://lumiere-a.akamaihd.net/v1/images/captain-typho_f9e8d7bd.jpeg",
  },
  {
    name: "Cordé",
    url:
      "https://i1.wp.com/starwarsinterviews.com/wp-content/uploads/2017/04/Veronica-Segura.jpg",
  },
  {
    name: "Dormé",
    url:
      "https://pm1.narvii.com/5979/4ab5f2df8d37661fc27f2fd5f34dc7f3b384f85c_00.jpg",
  },
  {
    name: "Finis Valorum",
    url:
      "https://qph.fs.quoracdn.net/main-qimg-078c308cd916d2440204151933d06aca",
  },
  {
    name: "Adi Gallia",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_adigallia_169_8b798f27.jpeg",
  },
  {
    name: "Jocasta Nu",
    url: "https://lumiere-a.akamaihd.net/v1/images/jocasta-nu_a3b32f08.jpeg",
  },
  {
    name: "Boba Fett",
    url: "https://www.serietotaal.nl/images/nieuws/t/se0gucd7hd6a-full.jpg",
  },
  {
    name: "Lama Su",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/kaminoan-main-image_40db5ba5.jpeg",
  },
  {
    name: "Taun We",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_taunwe_01_169_9b9e8eb9.jpeg",
  },
  {
    name: "Poggle the Lesser",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_pogglethelesser_01_169_7095ae3c.jpeg",
  },
  {
    name: "Tion Medon",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_tionmedon_01_169_bf78864d.jpeg",
  },
  {
    name: "Chewbacca",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/5e94826f7d7499000120d564-image_f9b9d30e.jpeg",
  },
  {
    name: "Tarfful",
    url: "https://lumiere-a.akamaihd.net/v1/images/tarrful_f20d3412.jpeg",
  },
  {
    name: "Nute Gunray",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_nutegunray_01_169_9d66ded2.jpeg",
  },
  {
    name: "Obi-Wan Kenobi",
    url: "https://fantlab.ru/blogfiles/b68534/img/1?r=1598728243",
  },
  {
    name: "Wilhuff Tarkin",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_tarkin_01_169_97d0a95c.jpeg",
  },
  {
    name: "Han Solo",
    url:
      "https://img.cinemablend.com/filter:scale/quill/f/4/1/d/9/e/f41d9e2650912a500713f96d0aab12a21eb81299.jpg",
  },
  {
    name: "Wedge Antilles",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_wedgeantilles_01_169_b8185dce.jpeg",
  },
  {
    name: "Greedo",
    url:
      "https://pyxis.nymag.com/v1/imgs/c20/4ac/55db7c77cf4a0ed214af58f3201f5281bf-12-greedo-star-wars.rsocial.w1200.jpg",
  },
  {
    name: "Jabba Desilijic Tiure",
    url:
      "https://lh3.googleusercontent.com/proxy/JxmO8YDWS3x7CEVhYzf9SH1_ir_G5cEZk50Zf_212UIFUoK0gg-Bm1d81pHzr3EhlPX9AGJZhWB4N0jCRPMUe7f-XYFxWUfYsjWyHnisqOKcBgJTM5PsciX7TRyAAjNtzxF_KKOPeaQe8AFqhlJxsIyvdEU4MXDuWECbjICHvUUn7EFgkmOMIunDn-tNZoKCOMSdqmRfIWImG2k_b5gHHAybqkPW5nLhz1j55KN8J6BaqFlcUJlvt4bD",
  },
  {
    name: "Jek Tono Porkins",
    url: "https://i.redd.it/kfvbjz2ootu41.jpg",
  },
  {
    name: "Yoda",
    url:
      "https://observer.com/wp-content/uploads/sites/2/2020/05/yoda-art-observer.jpg",
  },
  {
    name: "IG-88",
    url:
      "https://bbts1.azureedge.net/images/p/full/2019/10/0f0eabcc-5795-49ce-8c02-6d4d919ac44c.jpg",
  },
  {
    name: "Arvel Crynyd",
    url:
      "https://static.wikia.nocookie.net/starwars/images/d/de/Arvel-crynyd.jpg/revision/latest?cb=20120113223349",
  },
  {
    name: "Qui-Gon Jinn",
    url:
      "https://starwarsblog.starwars.com/wp-content/uploads/2020/05/qui-gon_TALL.jpg",
  },
  {
    name: "R4-P17",
    url: "https://lumiere-a.akamaihd.net/v1/images/r4-p17_19602f62.jpeg",
  },
  {
    name: "Bossk",
    url:
      "https://starwarsblog.starwars.com/wp-content/uploads/2018/04/Bossk-header.jpg",
  },
  {
    name: "Lando Calrissian",
    url:
      "https://theplaylist.net/wp-content/uploads/2017/12/Lando-Calrissian-Jedi-Billy-Dee-Williams.jpg",
  },
  {
    name: "Ackbar",
    url:
      "https://cosmicbook.news/sites/default/files/styles/image_header/public/star-wars-admiral-ackbar-disrespected.jpg",
  },
  {
    name: "Mon Mothma",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_monmothma_01_169_b62808e8.jpeg",
  },
  {
    name: "Nien Nunb",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/nien-nunb-main_1dbef681.jpeg",
  },
  {
    name: "Watto",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_watto_01_169_ecd563f1.jpeg",
  },
  {
    name: "Sebulba",
    url:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/06/sebulba-star-wars-episode-1-boonta-eve-classic.jpeg",
  },
  {
    name: "Darth Maul",
    url:
      "https://coffeewithkenobi.com/wp-content/uploads/2018/07/EP1_IA_72118-copy-1536x864-433723767381.jpg",
  },
  {
    name: "Bib Fortuna",
    url:
      "https://i.pinimg.com/originals/7f/7b/40/7f7b4075e7f4271497166c113cb8c6f4.jpg",
  },
  {
    name: "Ayla Secura",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_aaylasecura_01_169_39a65af2.jpeg",
  },
  {
    name: "Ratts Tyerel",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_rattstyerell_01_169_031aea6d.jpeg",
  },
  {
    name: "Dud Bolt",
    url: "https://i.redd.it/g7hfqk7sme851.jpg",
  },
  {
    name: "Gasgano",
    url: "https://lumiere-a.akamaihd.net/v1/images/gasgano_6f648f83.jpeg",
  },
  {
    name: "Ben Quadinaros",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_benquadinaros_01_169_0c77b6a0.jpeg",
  },
  {
    name: "Mace Windu",
    url: "https://lumiere-a.akamaihd.net/v1/images/Mace-Windu_b35242e5.jpeg",
  },
  {
    name: "Ki-Adi-Mundi",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_kiadimundi_01_169_0a8842d3.jpeg",
  },
  {
    name: "Kit Fisto",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_kitfisto_01_169_21517d01.jpeg",
  },
  {
    name: "Eeth Koth",
    url: "https://lumiere-a.akamaihd.net/v1/images/Eeth-Koth2_246ea172.jpeg",
  },
  {
    name: "Saesee Tiin",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_saeseetiin_01_169_c9a8a41c.jpeg",
  },
  {
    name: "Yarael Poof",
    url:
      "https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/08/yarael-poof-.jpg",
  },
  {
    name: "Plo Koon",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_plokoon_01_169_92e6679c.jpeg",
  },
  {
    name: "Mas Amedda",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/mas-amedda-main-image_756fa0ae.jpeg",
  },
  {
    name: "Luminara Unduli",
    url:
      "https://www.thathashtagshow.com/wp-content/uploads/2020/03/luminari-unduli-2.jpg",
  },
  {
    name: "Barriss Offee",
    url:
      "https://static.wikia.nocookie.net/swfanon/images/d/d2/Barriss-0.jpg/revision/latest?cb=20190505103342",
  },
  {
    name: "Dooku",
    url:
      "https://static2.srcdn.com/wordpress/wp-content/uploads/2020/04/Star-Wars-Count-Dooku-Darth-Tyrannus.jpg",
  },
  {
    name: "Jango Fett",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_jangofett_01_169_884cefab.jpeg",
  },
  {
    name: "Zam Wesell",
    url:
      "https://preview.redd.it/cp952uq38b711.png?auto=webp&s=a2222b30488277380b3347f4183435a22f914862",
  },
  {
    name: "Dexter Jettster",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/databank_dexterjettster_01_169_09c89b71.jpeg",
  },
  {
    name: "Wat Tambor",
    url:
      "https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2019/12/wat-tambor-attack-of-the-clones-header.jpg",
  },
  {
    name: "San Hill",
    url: "https://lumiere-a.akamaihd.net/v1/images/san-hill_852a226d.jpeg",
  },
  {
    name: "Shaak Ti",
    url:
      "https://static2.srcdn.com/wordpress/wp-content/uploads/2019/05/She-Sat-On-The-Jedi-Council-.png",
  },
  {
    name: "Grievous",
    url:
      "https://lumiere-a.akamaihd.net/v1/images/General-Grievous_c9df9cb5.jpeg",
  },
  {
    name: "Sly Moore",
    url: "https://lumiere-a.akamaihd.net/v1/images/sly-moore_6af90e66.jpeg",
  },
];

export default residentsAvatars;
