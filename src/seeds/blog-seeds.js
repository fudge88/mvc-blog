const Blog = require("../models/Blog");

const blogData = [
  {
    title: "Yorkshire Three Peaks",
    content:
      "The Yorkshire Three Peaks trail covers the peaks of Pen-y-ghent, Whernside and Ingleborough which form part of the Pennine Range. The Yorkshire Three Peaks Challenge is the most iconic walk in the Yorkshire Dales taking in the three highest mountains in the area. This walk starts in the market town of Horton in Ribblesdale, from the Golden Lion pub.Be prepared for the hike to take 14 hours due to steep climbs and the long distances between the peaks.",
    blogId:
      "https://www.muchbetteradventures.com/magazine/content/images/2019/11/22103353/iStock-1153641199.jpg",
    userId: 3,
  },
  {
    title: "Pen-y-Ghent, Plover Hill",
    content:
      "Pen-y-ghent or Penyghent is the lowest of Yorkshire's Three Peaks at 2,277 feet. This circular trail from Horton in Ribblesdale heads to Brackenbottom Farm before climbing steadily over Brackenbottom Scar to join up with the Pennine Way path. This is followed up to the summit of Pen-y-ghent before dropping back down and returning via Hunt Pot. The return leg is via the enclosed walled Horton Scar Lane, which offers panoramic views of the whole area.The Yorkshire Three Peaks Challenge is a demanding yet rewarding annual trekking challenge taking you to the summits of Pen-y-Ghent, Ingleborough and Whernside all in one circular route starting and ending in Horton-in-Ribblesdale.",
    blogId:
      "https://www.muchbetteradventures.com/magazine/content/images/2019/11/22103350/iStock-1064061082.jpg",
    userId: 2,
  },
  {
    title: "Dale Head Circular Route",
    content:
      "A visit to a beautiful waterfall, followed by a short stop in Settle for a beer! This route passes through some beautiful examples of the limestone formations that this region of the nation is renowned for. The climb through Smearset Scar is optional, although it offers some spectacular vistas. A stop in Settle for a beer and cake adds to the appeal of this stroll. This hike is best done after a period of heavy rain since the falls are considerably more spectacular.",
    blogId:
      "https://www.muchbetteradventures.com/magazine/content/images/2019/11/22103346/iStock-1067310772.jpg",
    userId: 1,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
