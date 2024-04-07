// same user can give infinite like 

import express from 'express'
import User from './database.js';
import cors from 'cors';

const app = express()
const port = 3000
app.use(cors());
app.use(express.json());
let org=[];  


app.post('/createPage',async (req, res) => {
  const nameOfOrg=req.body.nameOfOrg;
  // console.log(req.body);
  const email=req.body.email;
  const feed=[];
  const newUser=new User({
    nameOfOrg:nameOfOrg,
    email:email,
    feed:[]
  })
  await newUser.save();


  res.send('Hello World!')
})

app.post('/addFeed',async (req, res) => {
  const nameOfOrg=req.body.nameOfOrg;
  console.log(nameOfOrg)
  // console.log(req.body.feed);
  const feed=req.body.feed;
  const user=await User.findOne({nameOfOrg:nameOfOrg});
  console.log(feed)
  if(feed)
  user.feed.push(feed);

  await user.save();
  res.send(req.body)
});

app.put('/updateFeed', async (req, res) => {
  const id = req.body.id;
  const userid = req.body.userid;

  try {
    const user = await User.findOne({ "feed.id": id });
    if (!user) {
      return res.status(404).send("User not found");
    }

    const feedItem = user.feed.find(feed => feed.id === id);
    if (!feedItem) {
      return res.status(404).send("Feed item not found");
    }

    if(feedItem.likedby.includes(userid)){
      await User.findOneAndUpdate({ _id: user._id, "feed.id": id }, { $inc: { "feed.$.support": -1 }, $pull: { "feed.$.likedby": userid } });
      return res.send("Support decreased");
    }

    await User.findOneAndUpdate({ _id: user._id, "feed.id": id }, { $inc: { "feed.$.support": 1 }, $push: { "feed.$.likedby": userid } });
    res.send("Support increased");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

app.get('/getData',async (req, res) => {
  const data=await User.find();
  res.send(data);
});

app.get('/getData/:nameOfOrg',async (req, res) => {
  // console.log("it")
  const nameOfOrg=req.params.nameOfOrg;
  const data=await User.findOne({nameOfOrg:nameOfOrg});
  if (!data) {
    return res.status(404).send("User not found");
  }
  
  res.send(data.feed);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

