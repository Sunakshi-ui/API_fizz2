const express=require("express");
const router=express.Router();
//const randomWord = require('random-word');
// //import {generate,count} from 'random-words';
// const page=require("../controllers/auth-controller");
// const multer=require("multer");
// const {up,sho}=require("./Video");
// const storge= multer.diskStorage({
//        destination:(req,file,cp)=>{
//         cp(null,'router/upload')
//        },
//        filename:(req,file,cp)=>{
//         const suffix=Date.now();
//         cp(null,suffix+" -"+file.originalname)
//        }

//  })

//  const {Schema,model}=require("mongoose");
//  const stru=Schema({
//     photo:{
//         type:String,
//         require:true,
//     }
//  })


//  const mo=new model("photodat",stru);



  

//  const storge=multer.diskStorage({
//     destination:(req,file,cp)=>{
//         cp(null,'router/upload')
//     }
//     ,filename:(req,file,cp)=>{
//         const suffi=Date.now();
//         cp(null,suffi+" -"+file.orig)
//     }
//  })

//  //const st=multer.storagememoray();
// const st=multer.memoryStorage();
// const upload=multer({st});
//const express=require("express");
// const app=express();
// app.use(express.json());
//import {generate,count}  from require('random-words');
//const rand=require("random-words");
//const randomWords = require('random-words');

// Generate a single random word

//console.log(randomWords()); // Example: 'diverse'
// Generate multiple random words (you can specify how many words you want)

// router.route("/string").get(async(req,res)=>{   
    
//     const randomWord = await import('random-words');

//     // Generate a random word
//    const ps=randomWord.generate({exactly:20,join:" "});
//   //  const strings=generate({exactly:20,join:" "});
//     res.status(202).json({mess:ps})

// })
const OpenAIApi=require("openai");
// const open=require("openai")
//const s=new open({apiKey:" "})
// const s=await s.chat.completeions.create({
//  model:"gpt-4o-mini",
// messages:[{role:"user","content"}]
//})
//const Openai=require("openai");
//const openai=new Openai({apiKey:"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"});

router.route("/chat/:input").get(async(req,res)=>{
     try{
        const t=req.params.input;
        console.log("this is user",t);
       const openai=new OpenAIApi({apiKey:"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"});
       const resd=await openai.chat.completions.create({
        model:"gpt-4o-mini",
        messages:[{role:"user","content":t}]
      })
     const data=    resd.choices[0].message.content;
     console.log(data);
    res.status(202).json({mess:data,ss:"succesful"});

// const completion = await openai.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [
//         { role: "system", content: "You are a helpful assistant." },
//         {
//             role: "user",
//             content: "Write a haiku about recursion in programming.",
//         },
//     ],
//     store: true,
// });

// console.log(completion.choices[0].message);
// res.json({mess:"succws"})
     }
     catch(err){

        console.log(err, " this is from backend");
     }
})

 

// router.route("/home").get(page.home);
// router.route("/register").post(page.register);
// router.route("/videoshow").get(sho);

// router.route("/video").post(upload.single('photo'),up);
// router.route("/contect").get(page.contect);
// router.route("/login").post(page.login);
// router.route("/data").get(page.data);
// router.route("/delete/:id").delete(page.del);
// router.route("/up/:id").get(page.upd);
// // router.route("/update/:id").patch(page.realU);
// router.route("/upload").post(upload.single('photo'),async (req,res)=>{
 
//     try{
//       //  res.status(202).send("succeful uplod")
//         console.log(req.file)
//         console.log(req.file.buffer," this is from")
//         const base64=req.file?req.file.buffer.toString('base64'):null;
//         console.log(base64);
//         console.log(base64," this is from base64")
//         const r=await mo.create({photo:base64});
//         res.status(202).json({mess:"succesful",re:r})
//     }

//     catch(erro){
//         console.log(erro," this is from upload");
//     }







module.exports=router;