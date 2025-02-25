addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

const gifs = [
    {
        keywords: ['dipper', 'muppet', 'grunting', 'angry'],
        url: 'https://media.giphy.com/media/Z641q9fXIA5La/giphy.gif'
    },
    {
        keywords: ['mabel', 'woo', 'crazy'],
        url: 'https://media.giphy.com/media/13fzafz9Qp264M/giphy.gif'
    },
    {
        keywords: ['mabel', 'heart', 'love', 'ba', 'bump'],
        url: 'https://media.giphy.com/media/jd0pCZmSnK1bi/giphy.gif'
    },
    {
        keywords: ['soos', 'total', 'hunk', 'perfect', 'man'],
        url: 'https://media.giphy.com/media/PuAqqSQZZQLfi/giphy.gif'
    },
    {
        keywords: ['dipper', 'beaver', 'ouch'],
        url: 'https://media.giphy.com/media/2V04ngYdkVpnO/giphy.gif'
    },
    {
        keywords: ['waddles', 'pig', 'emergancy', 'hug'],
        url: 'https://media.giphy.com/media/TzBM1nJmLFmJq/giphy.gif'
    },
    {
        keywords: ['gideon', 'shades', 'deal', 'with', 'it'],
        url: 'https://media.giphy.com/media/l4bqBzHdkBSCY/giphy.gif'
    },
    {
        keywords: ['dipper', 'woodpecker', 'thinking'],
        url: 'https://media.giphy.com/media/PS8CcBeOJnprW/giphy.gif'
    },
    {
        keywords: ['mermando', 'yay', 'ouch'],
        url: 'https://media.giphy.com/media/14wze0IIQ7UA9i/giphy.gif'
    },
    {
        keywords: ['mabel', 'dipper', 'scared'],
        url: 'https://media.giphy.com/media/zu2xMWRIsv2ec/giphy.gif'
    },
    {
        keywords: ['mabel', 'dipper', 'awkward', 'sibling', 'hug', 'pat'],
        url: 'https://media.giphy.com/media/W4NKtcOqK2kYo/giphy.gif'
    },
    {
        keywords: ['dipper', 'excited', 'yay', 'excitement'],
        url: 'https://media.giphy.com/media/3jJEr6TfuoI9y/giphy.gif'
    },
    {
        keywords: ['dipper', 'angry'],
        url: 'https://media.giphy.com/media/12aZlLvMQtb9e0/giphy.gif'
    },
    {
        keywords: ['mabel', 'irresistible'],
        url: 'https://media.giphy.com/media/YAGVuGdqnmLiE/giphy.gif'
    },
    {
        keywords: ['mabel', 'irresistible', 'original'],
        url: 'https://media.giphy.com/media/spKsRjElv67OE/giphy.gif'
    },
    {
        keywords: ['stan', 'uncle', 'grunkle', 'hat', 'hats', 'off', 'fez'],
        url: 'https://media.giphy.com/media/b2RK5cacc6BVe/giphy.gif'
    },
    {
        keywords: ['mabel', 'wave', 'hey'],
        url: 'https://media.giphy.com/media/v5Ft07MeQXBSM/giphy.gif'
    },
    {
        keywords: ['mabel', 'cat', 'kitten', 'paw', 'paws', 'fist', 'fists'],
        url: 'https://media.giphy.com/media/xbLDF5x8FnjgY/giphy.gif'
    },
    {
        keywords: ['mabel', 'dipper', 'sibling', 'fist', 'bump'],
        url: 'https://media.giphy.com/media/L0Ggb3P3FJ9sc/giphy.gif'
    },
    {
        keywords: ['mabel', 'grapling', 'hook'],
        url: 'https://media.giphy.com/media/cZOZoSVwlqapa/giphy.gif'
    },
    {
        keywords: ['soos', 'go', 'on'],
        url: 'https://media.giphy.com/media/w8hOFauLtF6jC/giphy.gif'
    },
    {
        keywords: ['bear', 'hug'],
        url: 'https://media.giphy.com/media/ATRkaDwGZSgGQ/giphy.gif'
    },
    {
        keywords: [
            'mabel',
            'cat',
            'kitten',
            'paw',
            'paws',
            'fist',
            'fists',
            'attack',
            'fire'
        ],
        url: 'https://media.giphy.com/media/2xyxTO3LpheZq/giphy.gif'
    },
    {
        keywords: ['gnome', 'puke', 'throw', 'up'],
        url: 'https://media.giphy.com/media/AGY8p0HH50mcg/giphy.gif'
    },
    {
        keywords: ['mabel', 'smile', 'dip'],
        url: 'https://media.giphy.com/media/HljbcDPfIiTiU/giphy.gif'
    },
    {
        keywords: ['mabel', 'dolphin', 'fists', 'attack'],
        url:
            'https://66.media.tumblr.com/00efddbe712bdec32e905acc418fd68f/tumblr_nl51peyuZt1ry54jto3_500.gif'
    },
    {
        keywords: ['blendin', 'blandin', 'memory', 'wipe'],
        url: 'https://media.giphy.com/media/107Sgi8Zc03T68/giphy.gif'
    },
    {
        keywords: ['mabel', 'serious', 'candy'],
        url: 'https://media.giphy.com/media/l1FcQk31ZsInK/giphy.gif'
    },
    {
        keywords: ['giffany', 'compliments', 'stars'],
        url: 'https://media.giphy.com/media/l0HlVthOAmFseR1sY/giphy.gif'
    },
    {
        keywords: ['mabel', 'smile', 'dip', 'tripping', 'balls'],
        url: 'https://media.giphy.com/media/l0HlGKtsb8khMnGOk/giphy.gif'
    },
    {
        keywords: ['dipper', 'note', 'writting', 'nod'],
        url:
            'https://66.media.tumblr.com/c6c9ad7eefd1f48c983c68e0bc879a2c/tumblr_o2f6dvPicy1ukf98oo1_500.gif'
    },
    {
        keywords: ['mabel', 'cops', 'welcome', 'party', 'dreams'],
        url:
            'https://66.media.tumblr.com/bc9f3cb9274050b254b2ac9df37e0ca4/tumblr_inline_nzsqbnlCAJ1rpokue_500.gif'
    },
    {
        keywords: ['mabel', 'dipper', 'chip', 'nom'],
        url:
            'https://67.media.tumblr.com/5d2859f29768a36a685a9821151cfd32/tumblr_nzqunsyNoZ1tryt2io1_500.gif'
    },
    {
        keywords: ['dipper', 'wendy', 'mums', 'word', 'toss', 'key'],
        url:
            'https://67.media.tumblr.com/a92d2bfc3422dc7143a3c53c98fa74da/tumblr_nxmf4nWeu11sg9gi2o1_540.gif'
    },
    {
        keywords: [
            'preston',
            'northwest',
            'bill',
            'rearrange',
            'face',
            'horrifying',
            'scary'
        ],
        url:
            'https://66.media.tumblr.com/4d62ca23cb62aa28f6f0f2588686b614/tumblr_nx4vtvJHCh1ry54jto1_500.gif'
    },
    {
        keywords: ['mabel', 'monkeys', 'cards', 'poker'],
        url:
            'https://67.media.tumblr.com/cfb7088b221077a3ce4c7642bb9da8c8/tumblr_nwf1y4fqmS1ropifdo2_540.gif'
    },
    {
        keywords: ['mabel', 'waddles', 'pig', 'cuddle'],
        url:
            'https://67.media.tumblr.com/ba4e8574c3dda9936df18caae955611b/tumblr_nvuscl6KZv1sqgl63o1_1280.gif'
    },
    {
        keywords: ['mabel', 'stare', 'eyes', 'sparkles'],
        url:
            'https://67.media.tumblr.com/5cafc050db804a271c6f3ef2dcb1c0c7/tumblr_inline_nv9kawGPS11qltj5u_500.gif'
    },
    {
        keywords: ['mabel', 'dipper', 'disapprove', 'disapproving'],
        url:
            'https://67.media.tumblr.com/7db4c4dc7387c9996180a8cb3825204c/tumblr_nukr30tXDf1tio8xjo1_1280.gif'
    },
    {
        keywords: ['dipper', 'bill', 'fall', 'stairs'],
        url:
            'https://67.media.tumblr.com/d0a3a67d05f4c9994b9b9fbf0e3f0fda/tumblr_nbpj9aFkPc1ri5hrko1_500.gif'
    },
    {
        keywords: ['soos', 'erase', 'mind', 'blind', 'eye'],
        url:
            'https://66.media.tumblr.com/ec4bf79fd694e1b283b798d4a4b2a4ec/tumblr_nt9hm2mFwc1uu28i6o1_500.gif'
    },
    {
        keywords: ['grunkle', 'stan', 'run', 'running', 'money'],
        url:
            'https://66.media.tumblr.com/b331751e3362d2437e4b10afa1ba1b6e/tumblr_mpovo3fRzs1rlcqmwo1_500.gif'
    },
    {
        keywords: ['mabel', 'kiss', 'kissing', 'practice', 'leaf', 'blower'],
        url:
            'https://66.media.tumblr.com/27cc63066c0ec59190815d735b791d29/tumblr_nrwf3pYTP81uyybyao1_500.gif'
    },
    {
        keywords: ['gideon', 'laugh', 'laughing', 'tickle', 'tickled'],
        url:
            'https://67.media.tumblr.com/d1973ad28d1d3c405e1dd48d3a165ca8/tumblr_nrlw6pQ31j1u9pvz6o3_500.gif'
    },
    {
        keywords: ['mabel', 'dipper', 'poke', 'small', 'shrink'],
        url:
            'https://66.media.tumblr.com/965cf31a06a748eefe19bf7a1bd84552/tumblr_npof35cpOT1ry54jto2_500.gif'
    },
    {
        keywords: ['gnomes', 'falling'],
        url:
            'https://67.media.tumblr.com/d75f63744b56122f31132278da60c034/tumblr_nn8uachgIl1u8hdlfo1_540.gif'
    },
    {
        keywords: ['soos', 'needed', 'elsewhere'],
        url:
            'https://66.media.tumblr.com/155111dd78581674037682fd4fbdfc6c/tumblr_nn8sxaBKmk1u8hdlfo1_540.gif'
    },
    {
        keywords: ['stanford', 'ford', 'badass', 'cool', 'portal'],
        url:
            'https://66.media.tumblr.com/a45a316b3c4545053cf70f93fba3fade/tumblr_nlblcmDOJD1rvkkvxo1_500.gif'
    },
    {
        keywords: ['mcgucket', 'old', 'man', 'jig', 'dance'],
        url:
            'https://67.media.tumblr.com/bfcd8feb6e5af7a241b8dd0f054c4012/tumblr_nkusmhf3YF1u8c822o1_500.gif'
    },
    {
        keywords: ['sevral', 'timez', 'boy', 'band', 'drink', 'water'],
        url:
            'https://66.media.tumblr.com/47bae8f5d02150e07fdda6540c2eaa8b/tumblr_ng3jfyvROr1tpiiw5o1_1280.gif'
    },
    {
        keywords: ['dipper', 'lamby', 'lamby', 'dance', 'smile'],
        url:
            'https://67.media.tumblr.com/1967ed9a3c0b0edbb5d477b0f2211894/tumblr_nfc6mdB43a1qjzijvo1_500.gif'
    },
    {
        keywords: [
            'mabel',
            'xyler',
            'craz',
            'high',
            'five',
            'yeah',
            'little',
            'girl',
            'burned',
            'burn',
            'zing',
            'oh',
            'snap'
        ],
        url:
            'https://66.media.tumblr.com/98c9ddb382a3cf5aadddfab8c9ba5db5/tumblr_inline_nelgkb0eYs1r6l3xh.gif'
    },
    {
        keywords: ['unicorn', 'hair', 'rainbow'],
        url:
            'https://67.media.tumblr.com/f0b2216834b247509bfd474f8336bd35/tumblr_nuc2dxURCj1rz6w0do1_500.gif'
    },
    {
        keywords: ['dipper', 'deer', 'nod', 'man', 'manly'],
        url:
            'http://66.media.tumblr.com/461637dde8af0d72b5eb1ed79c926564/tumblr_mixyxnZN611s5p5xno1_400.gif'
    },
    {
        keywords: ['unicorn', 'punch', 'grenda', 'candy', 'fight', 'bad'],
        url:
            'http://67.media.tumblr.com/a95a27fa8e2737ef6c1e1e2338e64fe1/tumblr_nwg6bfTVgy1uq3ynzo1_400.gif'
    },
    {
        keywords: ['mabel', 'cry', 'crying', 'sad', 'tears'],
        url:
            'https://49.media.tumblr.com/154535756b8021e720504ee2e9d019ce/tumblr_ny52dy8y601ukvvcqo1_500.gif'
    },
    {
        keywords: ['mabel', 'dipper', 'bar', 'dead'],
        url: 'https://media.giphy.com/media/mrKYeGxCYuUV2/giphy.gif'
    },
    {
        keywords: ['dipper', 'grunkle', 'stan', 'bodies', 'change'],
        url: 'https://media.giphy.com/media/UpeImNZ5e658I/giphy.gif'
    },
    {
        keywords: ['grunkle', 'stan', 'eye', 'patch'],
        url: 'https://media.giphy.com/media/bG4ncuGJAwmPK/giphy.gif'
    },
    {
        keywords: ['mabel', 'dipper', 'cat', 'video', 'game'],
        url: 'https://media.giphy.com/media/VK1SrLNTKj92U/giphy.gif'
    },
    {
        keywords: ['mabel', 'tongue', 'cray', 'eyes'],
        url: 'https://media.giphy.com/media/sLDnOjPgz1HwI/giphy.gif'
    },
    {
        keywords: [
            'soos',
            'mabel',
            'dipper',
            'new',
            'voice',
            'kill',
            'fire',
            'broom',
            'attack'
        ],
        url: 'https://media.giphy.com/media/7j4qO6lUqpNK/giphy.gif'
    },
    {
        keywords: [
            'grenda',
            'dipper',
            'help',
            'trouble',
            'halloween',
            'costume',
            'summerween',
            'trickster'
        ],
        url: 'https://media.giphy.com/media/Cm6CEjCPjI8a4/giphy.gif'
    },
    {
        keywords: ['mabel', 'rigged', 'quiz', 'romance'],
        url: 'https://media.giphy.com/media/WULQcOq1dfxnO/giphy.gif'
    },
    {
        keywords: ['dipper', 'scare', 'scared', 'yell'],
        url: 'https://media.giphy.com/media/CMscIr7DoAe8o/giphy.gif'
    },
    {
        keywords: ['mabel', 'what', 'yell'],
        url: 'https://media.giphy.com/media/Pf56jfkPZrefe/giphy.gif'
    },
    {
        keywords: ['mabel', 'waddles', 'pig', 'hug'],
        url: 'https://media.giphy.com/media/14motCtkDvt8WI/giphy.gif'
    },
    {
        keywords: ['mabel', 'grenda', 'candy', 'dance'],
        url: 'https://media.giphy.com/media/A3EsZfo1cebBK/giphy.gif'
    },
    {
        keywords: ['mabel', 'dumb', 'idea', 'poophead', 'poopheads'],
        url: 'https://media.giphy.com/media/yvxzNCqsgDrIA/giphy.gif'
    },
    {
        keywords: ['rumble', 'mcskirmish', 'robbie', 'jump', 'barrels', 'game'],
        url: 'https://media.giphy.com/media/UmJd0BkiKV7PO/giphy.gif'
    },
    {
        keywords: [
            'grunkle',
            'stan',
            'mabel',
            'dipper',
            'fat',
            'body',
            'bodies'
        ],
        url: 'https://media.giphy.com/media/T0X2Ao7h0B89W/giphy.gif'
    },
    {
        keywords: ['mabel', 'what'],
        url: 'https://media.giphy.com/media/xoCN53MxJdSqk/giphy.gif'
    },
    {
        keywords: ['dipper', 'uh', 'oh', 'love', 'wendy'],
        url: 'https://media.giphy.com/media/10UK6fOOzGX5kI/giphy.gif'
    },
    {
        keywords: ['rap', 'rapping', 'teen', 'teens'],
        url: 'https://media.giphy.com/media/v4KuKXHaHUqaY/giphy.gif'
    },
    {
        keywords: ['waddles', 'pig', 'blink'],
        url: 'https://media.giphy.com/media/SwWrhzXVM7NdK/giphy.gif'
    },
    {
        keywords: ['waddles', 'pig', 'gompers', 'goat', 'attack'],
        url: 'https://media.giphy.com/media/S8IhATPdRUyGs/giphy.gif'
    },
    {
        keywords: [
            'waddles',
            'pig',
            'halloween',
            'candy',
            'nom',
            'eat',
            'summerween'
        ],
        url: 'https://media.giphy.com/media/L89WZ8ZyvcJbi/giphy.gif'
    },
    {
        keywords: ['mabel', 'dipper', 'creepy', 'internet', 'history'],
        url: 'https://media.giphy.com/media/BNUVxdLKFY57a/giphy.gif'
    },
    {
        keywords: ['mabel', 'smile', 'sweater', 'rainbow'],
        url: 'https://media.giphy.com/media/q5rdBcMxU5gPK/giphy.gif'
    },
    {
        keywords: ['dipper', 'noodle', 'arms'],
        url: 'https://media.giphy.com/media/PHzLNthI3tA7S/giphy.gif'
    },
    {
        keywords: ['mabel', 'grappling', 'hook'],
        url: 'https://media.giphy.com/media/fiYHn29ICGmEE/giphy.gif'
    },
    {
        keywords: ['mabel', 'grappling', 'hook'],
        url: 'https://media.giphy.com/media/bjKId2XQ4HPW/giphy.gif'
    },
    {
        keywords: ['mabel', 'sweater', 'town'],
        url: 'https://media.giphy.com/media/bajhzhgTy8K7m/giphy.gif'
    },
    {
        keywords: ['cray', 'cray'],
        url: 'https://media.giphy.com/media/jTLe3FwijfzPy/giphy.gif'
    },
    {
        keywords: ['mabel', 'dance', 'dancing'],
        url: 'https://media.giphy.com/media/FToqMRvnLbhbq/giphy.gif'
    },
    {
        keywords: [
            'mabel',
            'normal',
            'man',
            'norman',
            'run',
            'frolic',
            'happy'
        ],
        url: 'https://media.giphy.com/media/c8wBx6l8s1DCU/giphy.gif'
    },
    {
        keywords: ['grunkle', 'stan', 'coffee', 'sass', 'sassy'],
        url: 'https://media.giphy.com/media/DzshSf6bt84Eg/giphy.gif'
    },
    {
        keywords: ['mabel', 'spin', 'globe'],
        url: 'https://media.giphy.com/media/Ko7rDlfsdB0re/giphy.gif'
    },
    {
        keywords: ['dipper', 'push-up', 'push', 'up', 'strong'],
        url: 'https://media.giphy.com/media/sTm3FmD7knvO0/giphy.gif'
    },
    {
        keywords: ['pool', 'jail', 'sad', 'sadness', 'rain'],
        url: 'https://media.giphy.com/media/WbIIXE4MzaBaw/giphy.gif'
    },
    {
        keywords: ['wendy', 'nod', 'music', 'dance'],
        url: 'https://media.giphy.com/media/GZwVq5W8ehSZa/giphy.gif'
    },
    {
        keywords: ['mabel', 'grunkle', 'stan', 'power', 'love'],
        url: 'https://media.giphy.com/media/m3U0ZlubVdGaA/giphy.gif'
    },
    {
        keywords: ['mabel', 'dipper', 'waddles', 'pig'],
        url: 'https://media.giphy.com/media/OsRpq6Th4Z9Zu/giphy.gif'
    },
    {
        keywords: ['toby', 'determined', 'mask', 'face'],
        url: 'https://media.giphy.com/media/RJvGYD45d6qpa/giphy.gif'
    },
    {
        keywords: ['dipper', 'push', 'sup', 'nervous'],
        url: 'https://media.giphy.com/media/sDNZ6J38x3W3C/giphy.gif'
    },
    {
        keywords: ['dipper', 'nervous', 'werewolf'],
        url: 'https://media.giphy.com/media/xguIA30EAmW08/giphy.gif'
    },
    {
        keywords: ['grunkle', 'stan', 'laugh', 'laughing'],
        url: 'https://media.giphy.com/media/1JHDM61wtiKbu/giphy.gif'
    },
    {
        keywords: ['soos', 'dance', 'music', 'dj'],
        url: 'https://media.giphy.com/media/10dnvjN0xil5Bu/giphy.gif'
    },
    {
        keywords: ['mabel', 'excited', 'excitement', 'whooo', 'yay'],
        url: 'https://media.giphy.com/media/C6IUvhjTYteeI/giphy.gif'
    },
    {
        keywords: ['xyler', 'craz', 'wow', 'shades'],
        url: 'https://media.giphy.com/media/11iUpC0HW1FePC/giphy.gif'
    },
    {
        keywords: ['dipper', 'blink', 'stare'],
        url: 'https://media.giphy.com/media/agUebC3gIV98Q/giphy.gif'
    },
    {
        keywords: ['grunkle', 'stan', 'angry', 'tv', 'duchess', 'approves'],
        url:
            'http://65.media.tumblr.com/2b98d39a52690437c83fea4f6fc4d90b/tumblr_inline_nlx42pWkVr1t0gjep.gif'
    },
    {
        keywords: ['duchess', 'approves', 'woman'],
        url: 'http://i.imgur.com/c1qLYrw.gif'
    },
    {
        keywords: [
            'duchess',
            'approves',
            'grunkle',
            'stan',
            'in',
            'your',
            'face'
        ],
        url: 'http://24.media.tumblr.com/tumblr_mctyxwHfGI1rghkxeo6_250.gif'
    },
    {
        keywords: ['duchess', 'approves', 'grunkle', 'stan', 'ice', 'cream'],
        url:
            'https://65.media.tumblr.com/ee88e69a38e80a8a0f6829f363157433/tumblr_inline_oaskzsVSBt1sxm30f_500.gif'
    },
    {
        keywords: ['grunkle', 'stan'],
        url:
            'https://33.media.tumblr.com/231c572e541022e9219e19b3bc4df6f2/tumblr_nh0u1odUfi1sty0eko1_500.gif'
    },
    {
        keywords: ['mabel', 'found', 'people'],
        url:
            'http://ak-hdl.buzzfed.com/static/2014-06/17/13/enhanced/webdr07/anigif_enhanced-28635-1403027031-1.gif'
    },
    {
        keywords: ['waddles', 'pig', 'yummy', 'fat', 'tummy'],
        url:
            'http://67.media.tumblr.com/042da1115b37ef6613be5cdd0c4a6354/tumblr_o5i4pfgsox1sbqrlmo1_500.gif'
    },
    {
        keywords: ['waddles', 'pig', 'gompers', 'goat', 'power', 'couple'],
        url:
            'http://66.media.tumblr.com/7caefac8a77998f2d8fd933d807432b2/tumblr_nfmbpi2AUm1rz6w0do1_500.gif'
    },
    {
        keywords: ['robbie', 'tambry'],
        url:
            'http://65.media.tumblr.com/b1e9d69ecfb5b4d0173b324652d8a079/tumblr_nfkbh3gBuU1r45g3go1_500.gif'
    },
    {
        keywords: ['soos', 'undo'],
        url:
            'http://67.media.tumblr.com/d18cb724a9648af96750977fad2ef397/tumblr_ncc18be0Nd1tmozg3o2_500.gif'
    },
    {
        keywords: ['soos', 'yes'],
        url:
            'http://31.media.tumblr.com/da643df31b09602572fe9b6fe9bd7b71/tumblr_na7ijiLnQL1tyic61o1_400.gif'
    },
    {
        keywords: ['soos', 'pizza'],
        url: 'https://media.giphy.com/media/l3vR58ElS88MMviYE/giphy.gif'
    }
];

async function handleRequest(request) {
    const init = {
        status: 200,
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        }
    };

    const url = new URL(request.url);

    const searchText = url.searchParams.get('text');

    if (searchText) {
        const searchKeywords = searchText.split(' ');

        const images = gifs.filter(
            ({ keywords }) =>
                searchKeywords.filter(value => keywords.includes(value)).length
        );

        if (images.length === 0) {
            return new Response(
                JSON.stringify({
                    text: `No gifs found for the keywords ${searchText}`,
                    response_type: 'ephemeral'
                }),
                init
            );
        }

        return new Response(
            JSON.stringify({
                attachments: [
                    {
                        image_url:
                            images[Math.floor(Math.random() * images.length)]
                                .url
                    }
                ],
                response_type: 'in_channel'
            }),
            init
        );
    }

    return new Response(
        JSON.stringify({
            attachments: [
                {
                    image_url: gifs[Math.floor(Math.random() * gifs.length)].url
                }
            ],
            response_type: 'in_channel'
        }),
        init
    );
}
