const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const { default: mongoose } = require("mongoose");

router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;

    const userdata=await User.create({
        username:username,
        password:password
    })

    res.json({userdata:userdata})

});

router.get('/courses',userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find().select('title description price imageLink');

    const filteredCourses = courses.map((course, index) => ({
        id: index + 1, // Generate incrementing ID
        title: course.title,
        description: course.description,
        price: course.price,
        imageLink: course.imageLink
    }));
    
    res.status(200).json({
        Course:filteredCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic

    const courseId=req.params.courseId.trim();

    const final = "5fa7a35c0bf7ca6c73194e69";
    const username = req.headers.username;
    

    
    const updateResult = await User.updateOne({ 
        username: username 
    }, {
            "$push": {
                purchasedCourses: courseId
            }
        })

        
        res.json({
            message:courseId
        })
    });

    
    
    


router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router