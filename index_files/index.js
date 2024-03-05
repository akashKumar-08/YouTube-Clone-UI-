const cardContainer = document.getElementById("main");
const sidebarSubscriptions = document.getElementById("subscription");

const cards = [
    {
        thumbnail : 'https://i.ytimg.com/vi/7h8lkEJQEBE/maxresdefault.jpg', 
        duration : '05:00', 
        profile: 'https://i.pinimg.com/originals/3b/92/35/3b9235b902cab472f8a8137debb5a27e.jpg',
        title : 'Superheroooo',
        channelName: 'Cartoon Tv',
        views: '637k',
        time : '1 year'
    },
    {
        thumbnail : 'https://i.ytimg.com/vi/JMSZKGfpxVk/maxresdefault.jpg', 
        duration : '20:00', 
        profile: 'https://i.pinimg.com/originals/3b/92/35/3b9235b902cab472f8a8137debb5a27e.jpg',
        title : 'Who gonna win ? any guess',
        channelName: 'Cartoon Tv',
        views: '11M',
        time : '2 years'
    },
    {
        thumbnail : 'https://th.bing.com/th/id/R.50554465251c081bc378d496b74f1c97?rik=mAhxQDL8DG%2bC0Q&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2013%2f10%2ffree-stock-technology-photos_377682.jpg&ehk=q2bprZP7UiAYr1gPQsYi8YEyChKLu7GBCKBcEwYmERY%3d&risl=&pid=ImgRaw&r=0', 
        duration : '37:45', 
        profile: 'https://static.vecteezy.com/system/resources/thumbnails/008/321/138/small/digital-futuristic-technology-logo-template-free-vector.jpg',
        title : 'Changing Technology',
        channelName: 'Web Dev Simplified',
        views: '1.2M',
        time : '2 years'
    },
    {
        thumbnail : 'https://i.pinimg.com/originals/db/87/e1/db87e1d8cd50d2359a0f80cd73a58144.jpg', 
        duration : '15:01', 
        profile: 'https://img.freepik.com/premium-vector/free-vector-growth-arrow-logo-template-design_634294-291.jpg',
        title : 'Which stock is Good ?',
        channelName: 'Stock Updates',
        views: '6.7k',
        time : '3 years'
    },
    {
        thumbnail : 'https://www.viaempresa.cat/uploads/s1/26/03/65/04/el-blockchain-segur-i-confiable-istock.jpeg', 
        duration : '4:39', 
        profile: 'https://www.creativefabrica.com/wp-content/uploads/2019/01/BlockChain-Logo-by-ashmbuhdsgn-580x386.png',
        title : 'How Blockchain Works | Incredible technology',
        channelName: 'Tech Info',
        views: '5.8M',
        time : '8 months'
    },
    {
        thumbnail : 'https://2.bp.blogspot.com/-bxmhBILCevA/WkKBBIUxefI/AAAAAAAAAu4/hhMRhDdmOq0ucUqP5NkvSwhN7sh2YnTlwCLcBGAs/s1600/parrot.jpg', 
        duration : '20:20', 
        profile: 'https://img.freepik.com/premium-vector/stay-wild-letter-with-pines-tree-forest-background-design-use-tshirt-sticker-other-use_370269-859.jpg',
        title : 'Meeting after a long time',
        channelName: 'WildLife',
        views: '460M',
        time : '1 year'
    },
    {
        thumbnail : 'https://pics.craiyon.com/2023-10-09/10af2c5bdd9048e5882e58c2afb1f0ba.webp', 
        duration : '30:00', 
        profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qCreqkTZL0F0bF9kZctFE1XVFocO__70kw&usqp=CAU',
        title : 'Evolutions of Robots',
        channelName: 'Robotic Intro',
        views: '2.7M',
        time : '2 weeks'
    },
    {
        thumbnail : 'https://cdna.artstation.com/p/assets/images/images/009/372/706/large/royy-_ledger-untitled-1.jpg?1518610660', 
        duration : '6:33', 
        profile: 'https://static.vecteezy.com/system/resources/thumbnails/005/076/592/small/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg',
        title : 'Bam Bhole | Har Har Mahadev',
        channelName: 'Bhakti Sagar',
        views: '350k',
        time : '8 days'
    },
    {
        thumbnail : 'https://i.ytimg.com/vi/CGjKO_F6y9g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIpcMuo9sN9S1rt0lU6on23YoPpw', 
        duration : '11:45', 
        profile: 'https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png',
        title : 'Can I Build a SHIPWRECK in ROBLOX?! | Theme Park Tycoon 2 • #38',
        channelName: "Benji's Adventures",
        views: '38k',
        time : '2 days'
    },
    {
        thumbnail : 'https://www.worldatlas.com/r/w1200/upload/b3/d8/55/shutterstock-726791473.jpg', 
        duration : '8:42', 
        profile: 'https://yt3.ggpht.com/9QBOD8JbiG7_HHZj7TUOtTriUcAefAWxtBRaun832mE4y_OCzIcLq8Lf_3yWshHiwPePhPznTQ=s88-c-k-c0x00ffffff-no-rj',
        title : 'How To Load | Plane',
        channelName: 'Plane Info',
        views: '5M',
        time : '2 years'
    },
    {
        thumbnail : 'https://i.ytimg.com/vi/h5TqZNiomvM/maxresdefault_live.jpg', 
        duration : '2:hours', 
        profile: 'https://i.pinimg.com/736x/53/6e/f7/536ef704d35845627b5667480b6a09b9.jpg',
        title : 'Avengers infinity War',
        channelName: 'XYZ Filmz',
        views: '2M',
        time : '1.5 years'
    },
    { 
        thumbnail : 'https://thumbs.dreamstime.com/b/web-virtual-socail-networks-social-network-concept-blog-social-online-shopping-email-files-video-images-photos-87882704.jpg', 
        duration : '11:54', 
        profile: 'https://media.istockphoto.com/id/1171091258/vector/yellow-lines-geometric-vector-logo-letter-c.jpg?s=612x612&w=0&k=20&c=4dDHKzfL45ZvQEysMQ4vr6Zlqg1PsM0reRG8TGVEs0g=',
        title : " Become Pro in Coding | Tips ",
        channelName: 'Coding World',
        views: '9.8M ',
        time : '1 year'
    },
]

const generateCard = (thumbnail, duration, profile, title, channelName, views, time) => {
    
    const card = document.createElement("div");
    card.classList.add('card');

    card.innerHTML = `<div class="thumbnail"><img src="${thumbnail}"alt="Thumbnail"><div class="duration">${duration}</div></div><div class="content"><div class="profile-pic"><img src="${profile}"alt="profile"></div><span class="title">${title}</span><span class="channel-name">${channelName}<span class="verified"><svg viewBox="0 0 24 24" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg></span></span><span class="views">${views} views . <span class="time">${time} ago</span></span></div>`

    return card;
}

cards.forEach((card) => {
    const finalCard = generateCard(card.thumbnail, card.duration, card.profile, card.title, card.channelName, card.views, card.time);
    cardContainer.appendChild(finalCard);
});



const generateSidebarItem = (profile, channelName) => {
    
    const item = document.createElement("li");

    item.innerHTML = `<a href="#"><span class="subscription-item-icon"><img src="${profile}" alt="image"></span><span class="subscription-item-title"> ${channelName} </span> </a>`

    return item;
}
cards.forEach((card) => {
    const item = generateSidebarItem(card.profile, card.channelName);
    sidebarSubscriptions.appendChild(item);
})

function upload(){
    
}
function search(){
    let searchQuery = document.getElementById("searchBtn").value;
    let searchUrl = "https://www.youtube.com/search?q=" +searchQuery;
    window.open(searchUrl,'_blank');
}