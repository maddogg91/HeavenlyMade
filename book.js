var title="";

function findBook(x){
	const books= [{"title" : "Poems of Delight: To Meet Your Comfort", "image": "images/PodComfort.jpg",
	"url": "https://a.co/d/74VG5Xs",
	"desc": "Poetry has always been a way to reach readers right where they need to be reached. The art of writing poems has caused many to fall in love with their purpose in life and thrive. Poems of Delight To Meet Your Comfort is a collection of poems that were truly written from the heart of Author Sybil Young. Join her as she takes a journey through life, love and happiness and shares every moment with you through the beauty of poetry."},
	{"title" : "Poems of Delight: Ministering to your Soul", "image": "images/Pod.jpg",
	"url": "https://a.co/d/3pU5Fn5",
	"desc": " What comes from the heart, reaches the heart… Poetry has always been a way to reach readers right where they need to be reached. The art of writing poems have caused many to fall in love with their purpose in life and thrive. Poems of Delight Ministering to Your Soul is a collection of poems that were truly written from the heart of author Sybil Young. Join her as she takes a journey through life, love and happiness and shares every moment with you through the beauty of poetry."},
	{"title" : "Ministering Through Cliches Volume 1", "image": "images/mt1.jpg",
	"url": "https://a.co/d/8E5GtyF",
	"desc": " This is the 1st Book in Ministering Through Cliché's. I had so much fun finding a message using cliche's, inspired by God. I pray that God will visit you through this book, as it ministers to your spirit and that you will enjoy reading it just as much as I enjoyed writing it."},
	{"title" : "Ministering Through Cliches Volume 2", "image": "images/mtcv2.jpg",
	"url": "https://a.co/d/1tEJPMP",
	"desc": " This is the 2nd Book in Ministering Through Cliché's. I had so much fun finding a message using cliche's, inspired by God. I pray that God will visit you through this book, as it ministers to your spirit and that you will enjoy reading it just as much as I enjoyed writing it."},
	{"title" : "Look Again", "image": "images/LookAgain.jpg",
	"url": "https://a.co/d/e2W7zix",
	"desc" : "Many times, as we go through life, we walk right by people, places and things that can enhance our lives. Look Again is a book that will inspire you in all aspects of life to look again, and again if needed so that you will not miss information that can be most precious, and valuable to you.Look Again was birthed out of some major turns and changes in my life. I grew from the good and bad ones Both examples will cause you to look again. When the appointed time comes, you’ll make your decision on what you can see. Whatever the case may be don’t hesitate to Look Again."}]
	title= x;
	return books.find(isTitle);
}

function isTitle(book){
return book.title=== title;
}

module.exports = { findBook };