//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.functionOne();
  },
  functionOne: function () {
  }
};
$("document").ready(function () {
  app.init();
});

/* Here are the data binding for the content to showcase my little knowledge in Vue */
var banner = new Vue({
	el: '#banner',
	data: {
		image: 'assets/img/header.jpg',
		heading: 'CASINO NAME',
		catchphrase: 'Make Money with Best Casino Online'
	}
});

var navbar = new Vue({
	el: '#navbar',
	data: {
		links: ["home", 'all', "popular", 'cards', 'strategy', 'word', 'puzzles'  ]
	}
});

var topcasinos = new Vue({
  el: '#topcasinos',
  data: {
  	iconstar: 'assets/img/star-bult.jpg',
    topcasinos: [
      { name: 'Top Casino Name', background: '#FF8E04', image: 'assets/img/casino-pic.jpg', link: '#', file: '#' },
      { name: 'Top Casino Name', background: '#92A609', image: 'assets/img/casino-pic.jpg', link: '#', file: '#' },
      { name: 'Top Casino Name', background: '#BB0154', image: 'assets/img/casino-pic.jpg', link: '#', file: '#' },
      { name: 'Top Casino Name', background: '#0197B8', image: 'assets/img/casino-pic.jpg', link: '#', file: '#' }
    ]
  }
});

var reviews = new Vue({
  el: '#reviews',
  data: {
  	iconarrow: 'assets/img/bullet.png',
    reviews: [
      { label: 'Any Casino Poker Link', sidebarlink: '#' },
      { label: 'Any Casino Poker Link', sidebarlink: '#' },
      { label: 'Any Casino Poker Link', sidebarlink: '#' },
      { label: 'Any Casino Poker Link', sidebarlink: '#' },
      { label: 'Any Casino Poker Link', sidebarlink: '#' },
      { label: 'Any Casino Poker Link', sidebarlink: '#' },
      { label: 'Any Casino Poker Link', sidebarlink: '#' },
    ]
  }
});

var news = new Vue({
  el: '#news',
  data: {
  	iconarrow: 'assets/img/bullet.png',
    updates: [
      { label: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit.', sidebarlink: '#' },
      { label: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit.', sidebarlink: '#' },
      { label: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit.', sidebarlink: '#' },
      { label: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit.', sidebarlink: '#' },
      { label: 'Lorem ipsum dolor sit amet, cons ectetur adipiscing elit.', sidebarlink: '#' }
    ]
  }
});

var poker_reviews = new Vue({
  el: '#poker-reviews',
  data: {
  	iconarrow: 'assets/img/bullet.png',
    pokerreviews: [
      { label: 'Any Casino Poker Link', sidebarlink: '#' },
      { label: 'Any Casino Poker Link', sidebarlink: '#' },
      { label: 'Any Casino Poker Link', sidebarlink: '#' },
      { label: 'Any Casino Poker Link', sidebarlink: '#' },
      { label: 'Any Casino Poker Link', sidebarlink: '#' },
      { label: 'Any Casino Poker Link', sidebarlink: '#' },
      { label: 'Any Casino Poker Link', sidebarlink: '#' },
    ]
  }
});

var featonlinecasinos = new Vue({
  el: '#featonlinecasinos',
  data: {
  	iconarrow: 'assets/img/bullet.png',
    featonlinecasinos: [
      { image: 'assets/img/pic.jpg', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mauris at sem mattis elemetu Etiam erat nunc, vene natis quis ultrices vulpu tate, iaculis ac odio. Nul lam non laoreet sapien, Mobi adipiscing lacus non tempus port acl ligula tellus pulvinar neque, a sodales ligula nisl eget.', background: '#FF8E04', visit: '#', review: '#' },
      { image: 'assets/img/pic.jpg', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mauris at sem mattis elemetu Etiam erat nunc, vene natis quis ultrices vulpu tate, iaculis ac odio. Nul lam non laoreet sapien, Mobi adipiscing lacus non tempus port acl ligula tellus pulvinar neque, a sodales ligula nisl eget.', background: '#FF8E04', visit: '#', review: '#' },
      { image: 'assets/img/pic.jpg', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mauris at sem mattis elemetu Etiam erat nunc, vene natis quis ultrices vulpu tate, iaculis ac odio. Nul lam non laoreet sapien, Mobi adipiscing lacus non tempus port acl ligula tellus pulvinar neque, a sodales ligula nisl eget.', background: '#FF8E04', visit: '#', review: '#' }
    ]
  }
});

var other_videos = new Vue({
  el: '#other-videos',
  data: {
  	iconarrow: 'assets/img/bullet.png',
    othervideos: [
      { image: 'assets/img/pic.jpg', name: 'Casino Name', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in ma', link: '#' },
      { image: 'assets/img/pic.jpg', name: 'Casino Name', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in ma', link: '#' },
      { image: 'assets/img/pic.jpg', name: 'Casino Name', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in ma', link: '#' }
    ]
  }
});

var footernavbarlinks = new Vue({
	el: '#footernavbar',
	data: {
		footernavbarlinks: [
			{ label: 'Link', link: '#' },
			{ label: 'Link', link: '#' },
			{ label: 'Link', link: '#' },
			{ label: 'Link', link: '#' },
			{ label: 'Link', link: '#' },
			{ label: 'Link', link: '#' },
			{ label: 'Link', link: '#' }
		]
	}
});